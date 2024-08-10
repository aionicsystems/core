// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Asset } from "./Asset.sol";

contract Brokerage is Ownable {
    event LoanEvent(uint256 indexed loanId, Loan loan);
    event AssetEvent(address indexed token, string name, string symbol, address dataFeedAddress);
 
    // Number of decimal precision used in ratios and rates
    uint8 precision;

    // Counter is used for UID of each loan
    uint256 counter;

    // Loan structure
    // A: Owner
    // B: Collateral Balance
    // C: Asset Data Feed Address
    // D: Liability Balance
    // E: Interest Rate (Fixed interest)
    // F: Time of last update
    
    struct Loan {
        address owner;
        uint256 collateral;
        address asset;
        uint256 liability;
        address dataFeed;
        uint256 rate;
        uint256 time;
    }

    // Ether held by the contract earned through interest and liquidations
    uint256 contractEther;

    // Ether data feed address
    address etherDataFeedAddress;
    AggregatorV3Interface internal etherDataFeed;
    
    // Loan mapped to LoanID
    mapping(uint256 => Loan) public loan;

    // Parameters are based on number of decimal precision
    // Where if precision is 4 then 11111 represents 1.1111 or 111.11%
    mapping(bytes32 => uint32) public params;

    // Assets that are approved for loan
    mapping(address => Asset) public assets;

    constructor (
        address owner,
        uint8 _precision,
        uint32 borrowingRatio,
        uint32 liquidationRatio,
        uint32 daoFee,
        uint32 liquidatorFee,
        uint32 collectorFee,
        address _etherDataFeedAddress
    ) Ownable(owner) {
        
        counter = 1;
        precision = _precision;

        params["borrowingRatio"] = borrowingRatio;
        params["liquidationRatio"] = liquidationRatio;
        params["daoFee"] = daoFee;
        params["liquidatorFee"] = liquidatorFee;
        params["collectorFee"] = collectorFee;

        etherDataFeedAddress = _etherDataFeedAddress;
        etherDataFeed = AggregatorV3Interface(etherDataFeedAddress);
    }

    function paramSetter(bytes32 param, uint32 value) public onlyOwner {
        params[param] = value;
    }

    function approveAsset(address assetDataFeedAddress, string memory name, string memory symbol, uint32 rate) public onlyOwner {
        Asset asset = new Asset(name, symbol, rate, address(this));
        assets[assetDataFeedAddress] = asset;
        emit AssetEvent(address(asset), name, symbol, assetDataFeedAddress);
    }

    function getChainlinkDataFeedLatestAnswer(AggregatorV3Interface dataFeed) public view returns (int) {
        // prettier-ignore
        (
            /* uint320 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint320 answeredInRound*/
        ) = dataFeed.latestRoundData();
        return answer;
    }

    function dataFeedPrice(AggregatorV3Interface dataFeed) public view returns (uint256) {
        int price = getChainlinkDataFeedLatestAnswer(dataFeed);
        require(price > 0, "price must be greater than zero");
        return uint256(price);
    }

    function assetToUsd(uint256 amount, AggregatorV3Interface dataFeed) public view returns (uint256) {
        return dataFeedPrice(dataFeed)*amount/dataFeed.decimals();
    }

    function usdToAsset(uint256 amount, AggregatorV3Interface dataFeed) public view returns (uint256) {
        return (amount * dataFeed.decimals()) / dataFeedPrice(dataFeed);
    }

    function collateralizationRatio(Loan memory _loan) public view returns(uint256) {
        AggregatorV3Interface assetDataFeed = AggregatorV3Interface(_loan.dataFeed);
        return (assetToUsd(_loan.collateral, etherDataFeed)*10^precision)/assetToUsd(_loan.liability, assetDataFeed);
    }

    function setEtherDataFeed(address _etherDataFeedAddress) public onlyOwner {
        etherDataFeedAddress = _etherDataFeedAddress;
        etherDataFeed = AggregatorV3Interface(_etherDataFeedAddress);
    }

    function accruedInterest(Loan memory _loan) public view returns (uint256) {
        // Calculate interest
        // Collateral * Interest Rate = Yearly Interest
        // (Yearly Interest / 31,536,000 Seconds in Year) * Number of Seconds since Update = Accrued Interest
        return (_loan.collateral * _loan.rate * (block.timestamp - _loan.time)) / (31536000 * 10^precision);
    }

    function withdrawalAmount(Loan memory _loan) public view returns (uint256) {
        AggregatorV3Interface assetDataFeed = AggregatorV3Interface(_loan.dataFeed);
        uint256 usdLiability = assetToUsd(_loan.liability, assetDataFeed);
        uint256 usdCollateralNew = (usdLiability * params["borrowingRatio"]) / 10^precision;
        return usdToAsset((assetToUsd(_loan.collateral, etherDataFeed) - usdCollateralNew), etherDataFeed);
    }
 
    // Create loan by depositing collateral and receiving
    // loaned assets with collateralization at Borrowing Rate
    function create(
        address assetDataFeedAddress
    ) payable public {
        require(msg.value > 0, "Amount ETH must be greater than zero");

        AggregatorV3Interface assetDataFeed = AggregatorV3Interface(assetDataFeedAddress);
        
        uint256 usdCollateral = assetToUsd(msg.value, etherDataFeed);
        uint256 usdLiability = (usdCollateral * 10^precision) / params["borrowingRatio"];
        uint256 liability = (usdLiability * assetDataFeed.decimals()) / dataFeedPrice(assetDataFeed);
        
        // Create loan in storage with loanId = counter
        Loan storage _loan = loan[counter];

        _loan.owner = msg.sender;
        _loan.collateral = msg.value;
        _loan.asset = assetDataFeedAddress;
        _loan.liability = liability;
        _loan.rate = assets[assetDataFeedAddress].getRate();
        _loan.time = block.timestamp;

        emit LoanEvent(counter, _loan);

        assets[assetDataFeedAddress].mint(msg.sender, liability);

        // Advance counter
        counter++;
    }

    // Deposit more collateral to avoid liquidation
    // Collateralization Ratio <= Borrowing Rate
    function deposit(uint256 _loanId) payable public {
        require(msg.value > 0, "Amount ETH must be greater than zero");
        
        // Get loan from storage
        Loan storage _loan = loan[_loanId];
        require(_loan.collateral > 0, "Loan must be active");
        
        uint256 interest = accruedInterest(_loan);
        _loan.collateral = _loan.collateral + msg.value - interest;
        require(collateralizationRatio(_loan) <= params["borrowingRatio"], "Collateralization Ratio after deposit must be less than Borrowing Ratio");
        
        // Collect interest into contract
        contractEther = contractEther + interest;
        _loan.time = block.timestamp;

        emit LoanEvent(_loanId, _loan);
    }

    // Withdraw collateral above the Borrowing Rate
    // Collateralization Ratio >= Borrowing Rate
    function withdraw(uint256 _loanId) public {
        // Get loan from storage
        Loan storage _loan = loan[_loanId];
        
        require(msg.sender == _loan.owner, "Only callable by loan owner");
        require(_loan.collateral > 0, "Loan must be active");
        
        uint256 interest = accruedInterest(_loan);
        _loan.collateral = _loan.collateral - interest;

        require(collateralizationRatio(_loan) > params["borrowingRatio"]);

        uint256 withdrawal = withdrawalAmount(_loan);
        
        // Update collateral balance
        _loan.collateral = _loan.collateral - withdrawal;

        // Pay msg sender ether
        payable(msg.sender).transfer(withdrawal);

        // Collect interest into contract
        contractEther = contractEther + interest;
        _loan.time = block.timestamp;

        emit LoanEvent(_loanId, _loan);
    }

    // Payback loan with borrowed assets
    function payback(uint256 _loanId, uint256 payment) public {
        require(payment > 0, "payment must be greater than zero");
    
        // Get loan from storage
        Loan storage _loan = loan[_loanId];
        require(_loan.owner == msg.sender);
        require(_loan.liability >= payment);
        require(assets[_loan.asset].balanceOf(msg.sender) >= payment, "caller address must have payment amount in balance");

        // Update Loan Liability
        _loan.liability = _loan.liability - payment;

        // Burn the payment
        assets[_loan.asset].burn(msg.sender, payment);

        // Collect interest
        uint256 interest = accruedInterest(_loan);
        _loan.collateral = _loan.collateral - interest;
        contractEther = contractEther + interest;
        _loan.time = block.timestamp;
        

        if (collateralizationRatio(_loan) > params["borrowingRatio"]) {
            uint256 withdrawal = withdrawalAmount(_loan);
        
            // Update collateral balance
            _loan.collateral = _loan.collateral - withdrawal;

            // Pay msg sender ether
            payable(msg.sender).transfer(withdrawal);
        }

        emit LoanEvent(_loanId, _loan);
    }

    // Liquidates collateral to buy back loaned assets off market
    function liquidate(uint256 _loanId, uint256 payment) public {
        require(payment > 0, "payment must be greater than zero");
        

        // Get loan from storage
        Loan storage _loan = loan[_loanId];
        require(_loan.owner == msg.sender);
        require(_loan.liability >= payment);
        require(assets[_loan.asset].balanceOf(msg.sender) >= payment, "caller address must have payment amount in balance");

        // Update Loan Liability
        _loan.liability = _loan.liability - payment;

        // Burn the payment
        assets[_loan.asset].burn(msg.sender, payment);

        // Collect interest
        uint256 interest = accruedInterest(_loan);

        AggregatorV3Interface assetDataFeed = AggregatorV3Interface(_loan.dataFeed);
        
        // Calculate amount of ether redeemed for liquidation payment
        uint256 redemption = usdToAsset(assetToUsd(payment, assetDataFeed), etherDataFeed);
        
        // Calculate total liquidator payment redemption plus fee
        uint256 liquidator = redemption + (redemption * params["liquidatorFee"]) / 10^precision;

        // Calculate Dao fee
        uint256 dao = (redemption * params["daoFee"]) / 10^precision;
        contractEther = contractEther + interest + dao;
        _loan.collateral = _loan.collateral - interest - liquidator - dao;
        _loan.time = block.timestamp;

        // Pay liquidator ether
        payable(msg.sender).transfer(liquidator);

        emit LoanEvent(_loanId, _loan);
    }

    // Collects interest in the form of Collateral (ETH)
    function collect(uint256 _loanId) public {
        // Get loan from storage
        Loan storage _loan = loan[_loanId];
        require(_loan.collateral > 0, "Loan must be active");

        // Collect interest
        uint256 interest = accruedInterest(_loan);
        uint256 collector = (interest * params["collectorFee"]) / 10^precision;
        contractEther = contractEther + interest - collector;

        // Pay collector ether
        payable(msg.sender).transfer(collector);

        _loan.collateral = _loan.collateral - interest;

        emit LoanEvent(_loanId, _loan);
    }

    function getLoan (uint256 _uid) view public returns (Loan memory) {
        return loan[_uid];
    }
}
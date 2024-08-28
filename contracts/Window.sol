// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Asset } from "./Asset.sol";
import { Loan } from "./Loan.sol";

contract Window is Ownable {
    event LoanEntity(
        address loanAddress, 
        address owner,
        uint256 collateralAmount,
        address assetAddress,
        uint256 liabilityAmount,
        address dataFeedAddress,
        uint32 borrowingRatio,
        uint32 liquidationRatio,
        uint32 interestRate,
        uint256 lastCollection
    );

    function loanEntityEvent(Loan memory _loan) public view {
        require(loans[msg.sender].getTime() > 0, "loan does not exist");
        emit LoanEntity(
            address(loan),
            loan.owner(),
            loan.collateral(),
            loan.asset(),
            loan.liability(),
            loan.dataFeed(),
            loan.borrowingRatio(),
            loan.liquidationRatio(),
            loan.rate(),
            loan.time()
        );
    }

    event AssetEntity(
        address indexed token, 
        string name, 
        string symbol, 
        address dataFeedAddress,
        uint32 rate,
        uint32 liquidationRatio
    );
 
    // Number of decimal precision used in ratios and rates
    uint8 precision;

    // Counter is used for UID of each loan
    uint256 counter;

    // Ether held by the contract earned through interest and liquidations
    uint256 contractEther;

    // Ether data feed address
    address public etherDataFeedAddress;
    AggregatorV3Interface internal etherDataFeed;
    
    // Loan mapped to Address
    mapping(address => Loan) public loans;

    // Parameters are based on number of decimal precision
    // Where if precision is 4 then 11111 represents 1.1111 or 111.11%
    mapping(bytes32 => uint32) public params;

    // Assets that are approved for loan
    mapping(address => Asset) public assets;

    constructor (
        address owner,
        uint8 _precision,
        uint32 borrowingRatio,
        uint32 daoFee,
        uint32 liquidatorFee,
        uint32 collectorFee,
        address _etherDataFeedAddress
    ) Ownable(owner) {
        
        counter = 1;
        precision = _precision;

        params["borrowingRatio"] = borrowingRatio;
        params["daoFee"] = daoFee;
        params["liquidatorFee"] = liquidatorFee;
        params["collectorFee"] = collectorFee;

        etherDataFeedAddress = _etherDataFeedAddress;
        etherDataFeed = AggregatorV3Interface(etherDataFeedAddress);
    }

    function setParam(bytes32 param, uint32 value) public onlyOwner {
        params[param] = value;
    }

    function getParam(bytes32 param) external returns (uint32) {
        return params[param];
    }

    function approveAsset(address assetDataFeedAddress, string memory name, string memory symbol, uint32 rate, uint32 liquidationRatio) public onlyOwner returns(address) {
        Asset asset = new Asset(name, symbol, rate, liquidationRatio, address(this), assetDataFeedAddress);
        assets[address(asset)] = asset;
        emit AssetEntity(address(asset), name, symbol, assetDataFeedAddress, rate, liquidationRatio);
        return address(asset);
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

    function withdrawalAmount(Loan memory _loan) public view returns (uint256) {
        AggregatorV3Interface assetDataFeed = AggregatorV3Interface(_loan.dataFeed);
        uint256 usdLiability = assetToUsd(_loan.liability, assetDataFeed);
        uint256 usdCollateralNew = (usdLiability * params["borrowingRatio"]) / 10^precision;
        return usdToAsset((assetToUsd(_loan.collateral, etherDataFeed) - usdCollateralNew), etherDataFeed);
    }
 
    // Issue loan by depositing collateral and receiving
    // loaned assets with collateralization at Borrowing Rate
    function issue(
        address assetAddress
    ) payable public returns (uint256) {
        require(msg.value > 0, "Amount ETH must be greater than zero");
        require(assets[assetAddress].owner() == address(this), "Asset must be owned by contract");

        AggregatorV3Interface assetDataFeed = AggregatorV3Interface(assets[assetAddress].getDataFeedAddress());
        
        uint256 usdCollateral = assetToUsd(msg.value, etherDataFeed);
        uint256 usdLiability = (usdCollateral * 10^precision) / params["borrowingRatio"];
        uint256 liability = (usdLiability * assetDataFeed.decimals()) / dataFeedPrice(assetDataFeed);
        
        // Each loan is a new contract with a new address exclusive to this loan and owned by borrower
        // User collateral for the issued loan is only ever stored in this contract with no other funds from
        // other loans or users.
        Loan loan = new Loan(
            msg.sender,                         // Loan owner
            address(this),                      // Window Address
            msg.value,                          // Collateral Amount
            assetAddress,                       // Asset Address
            liability,                          // Asset Amount
            assetDataFeedAddress,               // Asset Price Data Feed
            block.timestamp,                    // Time
            borrowingRatio,                     // Borrowing Ratio
            liquidationRatio,                   // Liquidation Ratio
            assets[assetAddress].getRate()      // Interest Rate
        );

        loans[address(loan)] = loan;
        emit LoanEntity(address(asset), name, symbol, assetDataFeedAddress, rate, liquidationRatio);
        
        loanEntityEvent(loan);

        assets[assetAddress].mint(msg.sender, liability);

        // Advance counter
        counter++;

        return liability;
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

        loanEntityEvent(_loan);
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

        loanEntityEvent(_loan);
    }

    function getLoan (uint256 _uid) view public returns (Loan memory) {
        return loan[_uid];
    }
}
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from '@openzeppelin/contracts/interfaces/IERC20.sol';
import { AggregatorV3Interface } from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

interface IERC20Burnable is IERC20 {
    function burnFrom(address account, uint256 value) public;
}

interface Window {
    function getParam(string) external returns (uint32);
}

contract Loan is Ownable {
    Window window;
    address public asset;
    address public assetDataFeedAddress;
    address public etherDataFeedAddress;
    uint256 public liability;
    uint32 public borrowingRatio;
    uint32 public liquidationRatio;
    uint32 public rate;
    uint256 public time;
    uint8 precision;

    constructor (
        address owner,
        address _window,
        uint256 _collateral,
        address _asset,
        uint256 _liability,
        uint32 _borrowingRatio,
        uint32 _liquidationRatio,
        uint32 _rate,
        uint256 _time,
        uint8 _precision
    ) Ownable(owner) {
        window = Window(window);
        asset = IERC20Burnable(_asset);
        liability = _liability;
        borrowingRatio = _borrowingRatio;
        liquidationRatio = _liquidationRatio;
        rate = _rate;
        time = _time;
        precision = _precision;
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

    function withdrawalAmount(Loan memory _loan) public view returns (uint256) {
        uint256 usdLiability = assetToUsd(_loan.liability, AggregatorV3Interface(asset.assetDataFeedAddress()));
        uint256 usdCollateralNew = (usdLiability * borrowingRatio) / 10^precision;
        return usdToAsset((assetToUsd(_loan.collateral, AggregatorV3Interface(etherDataFeedAddress)) - usdCollateralNew), AggregatorV3Interface(etherDataFeedAddress));
    }

    function collateralizationRatio() public view returns(uint256) {
        return (assetToUsd(address(this).balance, AggregatorV3Interface(etherDataFeedAddress))*10^precision)/assetToUsd(liability, AggregatorV3Interface(assetDataFeedAddress));
    }

    // Payback loan with borrowed assets
    // Payback can be called with zero payment and be just a withdrawal
    function payback(uint256 payment) public onlyOwner {
        require(this.owner() == msg.sender);
        require(liability >= payment);

        if (payment > 0) {
            // Burn the payment. Owner needs to approve the token first.
            // Will revert if Owner does not have sufficient funds.
            asset.burnFrom(msg.sender, payment);

            // Update Loan Liability
            liability = liability - payment;
        }
        
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

    // Collects interest in the form of Collateral (ETH)
    function collect() public {
        require(collateral > 0, "Loan must be active");

        // Calculate interest
        // Collateral * Interest Rate = Yearly Interest
        // (Yearly Interest / 31,536,000 Seconds in Year) * Number of Seconds since Update = Accrued Interest
        window.transfer(collateral * rate * (block.timestamp - time)) / (31536000 * 10^precision);
        time = block.timestamp;

        // Collect interest
        uint256 interest = (collateral * rate * (block.timestamp - time)) / (31536000 * 10^precision);
        uint256 collector = (interest * window.getParam("collectorFee")) / 10^precision;
        
        // Pay window interest - collector fee
        payable(address(window)).transfer(interest - collector);

        // Pay collector ether
        payable(msg.sender).transfer(collector);

        loanEntityEvent(_loan);
    }
}
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from '@openzeppelin/contracts/interfaces/IERC20.sol';
import { AggregatorV3Interface } from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import { Library } from "./Library.sol";

interface IERC20Burnable is IERC20 {
    function burnFrom(address account, uint256 value) external;
}

interface WindowInterface {
    function getParam(bytes32) external returns (uint32);
    function borrowingRatio() external returns (uint32);
    function collectorFee() external returns (uint32);
    function daoFee() external returns (uint32);
    function liquidatorFee() external returns (uint32);
    function precision() external returns (uint8);
    function etherDataFeedAddress() external returns (address);
}

interface AssetInterface {
    function liquidationRatio() external returns (uint32);
    function interestRate() external returns (uint32);
    function assetDataFeedAddress() external returns (address);
}

contract Loan is Ownable, Library {
    WindowInterface window;
    AssetInterface asset;
    uint256 public liabilityAmount;
    uint256 public lastCollection;
    uint32 public borrowingRatio;
    uint32 public liquidationRatio;
    uint32 public interestRate;
    uint32 public collectorFee;
    uint32 public daoFee;
    uint32 public liquidatorFee;
    uint8 public precision;
    address public assetDataFeedAddress;
    address public etherDataFeedAddress;

    constructor (
        address owner,
        address _window,
        address _asset,
        uint256 _liabilityAmount
    ) Ownable(owner) {
        window = WindowInterface(_window);
        asset = AssetInterface(_asset);
        liabilityAmount = _liabilityAmount;
        lastCollection = block.timestamp;
        borrowingRatio = window.borrowingRatio();
        liquidationRatio = asset.liquidationRatio();
        interestRate = asset.interestRate();
        collectorFee = window.collectorFee();
        daoFee = window.daoFee();
        liquidatorFee = window.liquidatorFee();
        precision = window.precision();
        assetDataFeedAddress = asset.assetDataFeedAddress();
        etherDataFeedAddress = window.etherDataFeedAddress();
    }

    function loanEvent() internal {
        emit LoanEntity(
            address(this),
            owner(),
            address(this).balance,
            address(asset),
            liabilityAmount,
            borrowingRatio,
            liquidationRatio,
            interestRate,
            lastCollection,
            collectorFee,
            liquidatorFee,
            daoFee,
            precision
        );
    }

    function dataFeedPrice(address dataFeedAddress) public view returns (uint256) {
        // prettier-ignore
        (
            /* uint320 roundID */,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint320 answeredInRound*/
        ) = AggregatorV3Interface(dataFeedAddress).latestRoundData();
        require(price > 0, "price must be greater than zero");
        return uint256(price);
    }

    function withdrawalAmount() public view returns (uint256) {
        // Collateral(USD) = Liability(USD) * BorrowingRatio
        // Collateral(USD) = Collateral(ETH) * Price(ETH)
        // Liability(USD) = Liability(Asset) * Price(Asset)
        // Collateral(ETH) = Liability(Asset) * Price(Asset) * BorrowingRatio / Price(ETH)
        uint256 collateralEnd = (liabilityAmount * dataFeedPrice(assetDataFeedAddress) * borrowingRatio * 10**AggregatorV3Interface(etherDataFeedAddress).decimals()) / (dataFeedPrice(etherDataFeedAddress)*10**AggregatorV3Interface(assetDataFeedAddress).decimals()*precision**4);
        return address(this).balance - collateralEnd;
    }

    // Precision is defined by 10^precision
    function collateralizationRatio() public view returns(uint256) {
        // CR = collateral(USD) / liability(USD)
        // CR = collateral(ETH) * Price(ETH) / (liability(Asset) * price(Asset))
        return ((address(this).balance * dataFeedPrice(etherDataFeedAddress) * 10**AggregatorV3Interface(assetDataFeedAddress).decimals() * 10**precision) / (liabilityAmount * dataFeedPrice(assetDataFeedAddress))) / 10**AggregatorV3Interface(etherDataFeedAddress).decimals();
    }

    // Payback loan with borrowed assets
    // Payback can be called with zero payment and be just a withdrawal
    function repay(uint256 payment) public onlyOwner {
        require(this.owner() == msg.sender);
        require(liabilityAmount >= payment);

        if (payment > 0) {
            // Burn the payment. Owner needs to approve the token first.
            // Will revert if Owner does not have sufficient funds and approval.
            IERC20Burnable(address(asset)).burnFrom(msg.sender, payment);

            // Update Loan Liability
            liabilityAmount = liabilityAmount - payment;
        }
        
        if (collateralizationRatio() > borrowingRatio) {
            // Pay msg sender ether
            payable(msg.sender).transfer(withdrawalAmount());
        }

        loanEvent();
    }

    // Liquidates collateral to buy back loaned assets off market
    function liquidate(uint256 payment) public {
        require(payment > 0, "payment must be greater than zero");
        require(payment <= liabilityAmount, "payment must less than or equal to loan liability");
        
        require(IERC20Burnable(address(asset)).balanceOf(msg.sender) >= payment, "caller address must have payment amount in balance");

        // Update Loan Liability
        liabilityAmount = liabilityAmount - payment;

        // Burn the payment
        IERC20Burnable(address(asset)).burnFrom(msg.sender, payment);
        
        // Calculate amount of ether redeemed for liquidation payment
        // Collateral(USD) = Liability(USD)
        // Collateral(ETH) = Liability(Asset) * Price(Asset) / Price(ETH)
        uint256 redemption = ((payment * dataFeedPrice(assetDataFeedAddress)) / (dataFeedPrice(etherDataFeedAddress)));
        
        // Calculate total liquidator payment redemption plus fee
        uint256 liquidator = redemption + (redemption * liquidatorFee) / 10**precision;
        payable(msg.sender).transfer(liquidator);

        // Calculate Dao fee
        uint256 dao = (redemption * daoFee) / 10**precision;
        payable(address(window)).transfer(dao);

        // After transaction collateralization ratio must be less than or equal to the liquidation ratio
        require(collateralizationRatio() <= liquidationRatio, "collateralization ratio must be less than or equal to liquidation ratio");

        loanEvent();
    }

    // Collects interest in the form of Collateral (ETH)
    function collect() public {
        require(address(this).balance > 0, "Loan must be active");

        // Calculate interest
        // Collateral * Interest Rate = Yearly Interest
        // (Yearly Interest / 31,536,000 Seconds in Year) * Number of Seconds since Update = Accrued Interest
        uint256 interest = (address(this).balance * interestRate * (block.timestamp - lastCollection)) / (31536000 * 10**precision);
        
        require(interest > 0, "Interest not greater than zero");

        
        uint256 collector = (interest * collectorFee) / 10**precision;
        require(precision > 0, "Precision must be greater than zero");
        require(interest > collector, "Interest must be greater than collector fee");
        
        // Pay window interest - collector fee
        payable(address(window)).transfer(interest - collector);
        
        // Pay collector ether
        payable(msg.sender).transfer(collector);
        
        loanEvent();
    }

    event Received(address, uint);
    receive() external payable {
        //loanEvent();
        emit Received(msg.sender, msg.value);
    }
}
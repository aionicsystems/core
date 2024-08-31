// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from '@openzeppelin/contracts/interfaces/IERC20.sol';
import { AggregatorV3Interface } from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

interface IERC20Burnable is IERC20 {
    function burnFrom(address account, uint256 value) external;
}

interface WindowInterface {
    function getParam(bytes32) external returns (uint32);
    function loanEntityEvent(
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
    ) external;
}

contract Loan is Ownable {
    WindowInterface window;
    address public asset;
    address public assetDataFeedAddress;
    address public etherDataFeedAddress;
    uint256 public liability;
    uint32 public borrowingRatio;
    uint32 public liquidationRatio;
    uint32 public interestRate;
    uint256 public lastCollection;
    uint8 precision;

    constructor (
        address owner,
        address _window,
        address _asset,
        uint256 _liability,
        uint32 _borrowingRatio,
        uint32 _liquidationRatio,
        uint32 _interestRate,
        address _assetDataFeedAddress,
        address _etherDataFeedAddress,
        uint256 _time,
        uint8 _precision
    ) Ownable(owner) {
        window = WindowInterface(_window);
        asset = _asset;
        liability = _liability;
        borrowingRatio = _borrowingRatio;
        liquidationRatio = _liquidationRatio;
        interestRate = _interestRate;
        assetDataFeedAddress = _assetDataFeedAddress;
        etherDataFeedAddress = _etherDataFeedAddress;
        lastCollection = _time;
        precision = _precision;

        loanEvent();
    }

    function loanEvent() private {
        window.loanEntityEvent(
            address(this),
            owner(),
            address(this).balance,
            asset,
            liability,
            assetDataFeedAddress,
            borrowingRatio,
            liquidationRatio,
            interestRate,
            lastCollection
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

    function assetToUsd(uint256 amount, address dataFeedAddress) public view returns (uint256) {
        return dataFeedPrice(dataFeedAddress)*amount/AggregatorV3Interface(dataFeedAddress).decimals();
    }

    function usdToAsset(uint256 amount, address dataFeedAddress) public view returns (uint256) {
        return (amount * AggregatorV3Interface(dataFeedAddress).decimals()) / dataFeedPrice(dataFeedAddress);
    }

    function withdrawalAmount() public view returns (uint256) {
        uint256 usdLiability = assetToUsd(liability, assetDataFeedAddress);
        uint256 usdCollateralNew = (usdLiability * borrowingRatio) / 10^precision;
        return usdToAsset((assetToUsd(address(this).balance, etherDataFeedAddress) - usdCollateralNew), etherDataFeedAddress);
    }

    function collateralizationRatio() public view returns(uint256) {
        return (assetToUsd(address(this).balance, etherDataFeedAddress)*10^precision)/assetToUsd(liability, assetDataFeedAddress);
    }

    // Payback loan with borrowed assets
    // Payback can be called with zero payment and be just a withdrawal
    function payback(uint256 payment) public onlyOwner {
        require(this.owner() == msg.sender);
        require(liability >= payment);

        if (payment > 0) {
            // Burn the payment. Owner needs to approve the token first.
            // Will revert if Owner does not have sufficient funds and approval.
            IERC20Burnable(asset).burnFrom(msg.sender, payment);

            // Update Loan Liability
            liability = liability - payment;
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
        
        require(liability >= payment);
        require(IERC20Burnable(asset).balanceOf(msg.sender) >= payment, "caller address must have payment amount in balance");

        // Update Loan Liability
        liability = liability - payment;

        // Burn the payment
        IERC20Burnable(asset).burnFrom(msg.sender, payment);
        
        // Calculate amount of ether redeemed for liquidation payment
        uint256 redemption = usdToAsset(assetToUsd(payment, assetDataFeedAddress), etherDataFeedAddress);
        
        // Calculate total liquidator payment redemption plus fee
        uint256 liquidator = redemption + (redemption * window.getParam("liquidatorFee")) / 10^precision;
        payable(msg.sender).transfer(liquidator);

        // Calculate Dao fee
        uint256 dao = (redemption * window.getParam("daoFee")) / 10^precision;
        payable(address(window)).transfer(dao);

        loanEvent();
    }

    // Collects interest in the form of Collateral (ETH)
    function collect() public {
        require(address(this).balance > 0, "Loan must be active");

        // Calculate interest
        // Collateral * Interest Rate = Yearly Interest
        // (Yearly Interest / 31,536,000 Seconds in Year) * Number of Seconds since Update = Accrued Interest
        uint256 interest = (address(this).balance * interestRate * (block.timestamp - lastCollection)) / (31536000 * 10^precision);
        uint256 collector = (interest * window.getParam("collectorFee")) / 10^precision;
        
        // Pay window interest - collector fee
        payable(address(window)).transfer(interest - collector);

        // Pay collector ether
        payable(msg.sender).transfer(collector);

        loanEvent();
    }

    event Received(address, uint);
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from '@openzeppelin/contracts/interfaces/IERC20.sol';

contract Loan is Ownable {
    uint256 public collateral;
    IERC20 public asset;
    uint256 public liability;
    address public dataFeed;
    uint32 public borrowingRatio;
    uint32 public liquidationRatio;
    uint32 public rate;
    uint256 public time;

    constructor (
        address owner,
        address window,
        uint256 _collateral,
        address _asset,
        uint256 _liability,
        address _dataFeed,
        uint32 _borrowingRatio,
        uint32 _liquidationRatio,
        uint32 _rate,
        uint256 _time
    ) Ownable(owner) {
        collateral = _collateral;
        asset = IERC20(_asset);
        liability = _liability;
        dataFeed = _dataFeed;
        borrowingRatio = _borrowingRatio;
        liquidationRatio = _liquidationRatio;
        rate = _rate;
        time = _time;
    }

    // Payback loan with borrowed assets
    // Payback can be called with zero payment and be just a withdrawal
    function payback(uint256 _loanId, uint256 payment) public {
        require(payment > 0, "payment must be greater than zero");
        require(this.owner() == msg.sender);
        require(liability >= payment);
        require(IERC20[asset].balanceOf(msg.sender) >= payment, "caller address must have payment amount in balance");

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

        loanEntityEvent(_loan);
    }
}
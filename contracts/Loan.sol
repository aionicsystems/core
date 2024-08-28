// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Loan is Ownable {
    uint256 collateral;
    address asset;
    uint256 liability;
    address dataFeed;
    uint32 borrowingRatio;
    uint32 liquidationRatio;
    uint32 rate;
    uint256 time;


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
        asset = _asset;
        liability = _liability;
        dataFeed = _dataFeed;
        borrowingRatio = _borrowingRatio;
        liquidationRatio = _liquidationRatio;
        rate = _rate;
        time = _time;
    }

    function getRate() public view returns (uint32) {
        return rate;
    }

    function getLiquidationRatio() public view returns (uint32) {
        return liquidationRatio;
    }

    function getDataFeed() public view returns(address) {
        return dataFeed;
    }

    // Payback loan with borrowed assets
    // Payback can be called with zero payment and be just a withdrawal
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
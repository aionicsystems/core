// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import "hardhat/console.sol";

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IWETH } from "./IWETH.sol"; // Interface for WETH

contract Loan is Ownable {
    event LoanEntity(
        address indexed loanAddress,
        address owner,
        address window,
        address asset,
        uint256 amount,
        uint256 collateral,
        uint32 interestRate,
        uint32 liquidationRatio,
        uint256 lastCollection,
        uint32 collectorFee,
        uint32 liquidatorFee,
        uint32 daoFee,
        uint8 precision
    );

    function loanEvent() private {
        emit LoanEntity(
            address(this),
            owner(),
            window,
            asset,
            amount,
            collateral,
            interestRate,
            liquidationRatio,
            lastCollection,
            collectorFee,
            liquidatorFee,
            daoFee,
            precision
        );
    }

    // Number of decimal precision used in ratios and rates
    uint8 public precision;

    // Interest Rate, Liquidation Ratio, Collector Fee, Liquidator Fee, DAO Fee
    uint32 public interestRate;
    uint32 public liquidationRatio;
    uint32 public collectorFee;
    uint32 public liquidatorFee;
    uint32 public daoFee;

    // Collateral amount in WETH
    uint256 public collateral;

    // Asset amount
    uint256 public amount;

    // Last collection timestamp
    uint256 public lastCollection;

    // Window contract address
    address public window;

    // Asset contract address
    address public asset;

    // WETH token address
    address public wethAddress;
    IWETH internal weth;

    constructor(
        address _owner,
        address _window,
        address _asset,
        uint256 _amount,
        uint256 _collateral,
        uint32 _interestRate,
        uint32 _liquidationRatio,
        uint32 _collectorFee,
        uint32 _liquidatorFee,
        uint32 _daoFee,
        uint8 _precision,
        address _wethAddress
    ) Ownable(_owner) {
        window = _window;
        asset = _asset;
        amount = _amount;
        collateral = _collateral;
        interestRate = _interestRate;
        liquidationRatio = _liquidationRatio;
        collectorFee = _collectorFee;
        liquidatorFee = _liquidatorFee;
        daoFee = _daoFee;
        precision = _precision;
        wethAddress = _wethAddress;
        weth = IWETH(_wethAddress);
        lastCollection = block.timestamp;

        loanEvent();
    }

    // Collects interest in the form of Collateral (WETH)
    function collect() public {
        require(weth.balanceOf(address(this)) > 0, "Loan must be active");

        // Calculate interest
        // Collateral * Interest Rate = Yearly Interest
        // (Yearly Interest / 31,536,000 Seconds in Year) * Number of Seconds since Update = Accrued Interest
        uint256 interest = (weth.balanceOf(address(this)) * interestRate * (block.timestamp - lastCollection)) / (31536000 * 10**precision);
        
        require(interest > 0, "Interest not greater than zero");

        uint256 collector = (interest * collectorFee) / 10**precision;
        require(precision > 0, "Precision must be greater than zero");
        require(interest > collector, "Interest must be greater than collector fee");
        
        // Pay window interest - collector fee
        weth.transfer(window, interest - collector);
        
        // Pay collector WETH
        weth.transfer(msg.sender, collector);

        // Update last collection time
        lastCollection = block.timestamp;
        
        loanEvent();
    }
}
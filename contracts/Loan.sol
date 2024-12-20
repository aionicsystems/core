// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import "hardhat/console.sol";

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IWETH } from "./IWETH.sol"; // Interface for WETH
import { Library, AggregatorInterface } from "./Library.sol";
import { Window } from "./Window.sol";
import { Asset } from "./Asset.sol";

contract Loan is Ownable, Library {

    function loanEvent() private {
        emit LoanEntity(
            address(this),
            owner(),
            collateralAmount,
            assetAddress,
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

    // Number of decimal precision used in ratios and rates
    uint8 public precision;

    // Interest Rate, Liquidation Ratio, Collector Fee, Liquidator Fee, DAO Fee
    uint32 public interestRate;
    uint32 public liquidationRatio;
    uint32 public collectorFee;
    uint32 public liquidatorFee;
    uint32 public daoFee;
    uint32 public borrowingRatio;

    // Collateral amount in WETH
    uint256 public collateralAmount;

    // Asset amount
    uint256 public liabilityAmount;

    // Last collection timestamp
    uint256 public lastCollection;

    // Window contract address
    address public window;

    // Asset contract address
    address public assetAddress;

    // WETH token address
    address public wethAddress;
    IWETH internal weth;

    constructor(
        address _owner,
        address payable _window,
        address _asset,
        uint256 _liabilityAmount,
        uint256 _collateralAmount
    ) Ownable(_owner) {
        window = _window;
        assetAddress = _asset;
        liabilityAmount = _liabilityAmount;
        collateralAmount = _collateralAmount;

        // Retrieve parameters from Window contract
        Window windowContract = Window(_window);
        precision = windowContract.precision();
        collectorFee = windowContract.collectorFee();
        liquidatorFee = windowContract.liquidatorFee();
        daoFee = windowContract.daoFee();
        borrowingRatio = windowContract.borrowingRatio();
        wethAddress = windowContract.wethAddress();
        weth = IWETH(wethAddress);

        // Retrieve parameters from Asset contract
        Asset assetContract = Asset(_asset);
        interestRate = assetContract.interestRate();
        liquidationRatio = assetContract.liquidationRatio();

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
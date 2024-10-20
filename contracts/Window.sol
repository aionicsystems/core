// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import "hardhat/console.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Asset } from "./Asset.sol";
import { Loan } from "./Loan.sol";
import { Library } from "./Library.sol";

interface AggregatorInterface is AggregatorV3Interface {
    function aggregator() external returns (address);
}

contract Window is Ownable, Library {
    event WindowEntity(
        address indexed windowAddress, 
        address owner,
        address etherDataFeedAddress,
        uint32 borrowingRatio,
        uint32 collectorFee,
        uint32 daoFee,
        uint32 liquidatorFee,
        uint8 precision
    );

    // Number of decimal precision used in ratios and rates
    uint8 public precision;

    // Borrowing Ratio, DAO Fee, Liquidator Fee, Collector Fee
    uint32 public borrowingRatio;
    uint32 public daoFee;
    uint32 public liquidatorFee;
    uint32 public collectorFee;

    // Ether held by the contract earned through interest and liquidations
    uint256 public contractEther;

    // Ether data feed address
    address public etherDataFeedAddress;
    AggregatorInterface internal etherDataFeed;
    
    // Loan mapped to Address
    mapping(address => Loan) public loans;

    // Assets that are approved for loan
    mapping(address => Asset) public assets;

    constructor (
        address owner,
        uint8 _precision,
        uint32 _borrowingRatio,
        uint32 _collectorFee,
        uint32 _daoFee,
        uint32 _liquidatorFee,
        address _etherDataFeedAddress
    ) Ownable(owner) {
        precision = _precision;
        borrowingRatio = _borrowingRatio;
        collectorFee = _collectorFee;
        daoFee = _daoFee;
        liquidatorFee = _liquidatorFee;
        
        etherDataFeedAddress = _etherDataFeedAddress;
        etherDataFeed = AggregatorInterface(etherDataFeedAddress);

        emit AssetEntity(
            address(0), 
            "Ether", 
            "ETH", 
            etherDataFeedAddress,
            AggregatorInterface(etherDataFeedAddress).aggregator(),
            0,
            0,
            AggregatorInterface(etherDataFeedAddress).decimals(),
            getChainlinkDataFeedLatestAnswer(etherDataFeed)
        );

        emit WindowEntity(
            address(this), 
            address(owner),
            etherDataFeedAddress,
            borrowingRatio,
            collectorFee,
            daoFee,
            liquidatorFee,
            precision
        );
    }

    function setBorrowingRatio(uint32 value) public onlyOwner {
        borrowingRatio = value;
    }

    function setCollectorFee(uint32 value) public onlyOwner {
        collectorFee = value;
    }

    function setDaoFee(uint32 value) public onlyOwner {
        daoFee = value;
    }

    function setLiquidatorFee(uint32 value) public onlyOwner {
        liquidatorFee = value;
    }

    function approveAsset(address assetDataFeedAddress, string memory name, string memory symbol, uint32 rate, uint32 liquidationRatio) public onlyOwner returns(address) {
        Asset asset = new Asset(name, symbol, rate, liquidationRatio, address(this), assetDataFeedAddress);
        assets[address(asset)] = asset;
        AggregatorInterface dataFeed = AggregatorInterface(assetDataFeedAddress);
        emit AssetEntity(address(asset), name, symbol, assetDataFeedAddress, dataFeed.aggregator(), rate, liquidationRatio, dataFeed.decimals(), getChainlinkDataFeedLatestAnswer(dataFeed));
        return address(asset);
    }

    function getChainlinkDataFeedLatestAnswer(AggregatorInterface dataFeed) public view returns (int) {
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

    function dataFeedPrice(AggregatorInterface dataFeed) public view returns (uint256) {
        int price = getChainlinkDataFeedLatestAnswer(dataFeed);
        require(price > 0, "price must be greater than zero");
        return uint256(price);
    }

    function setEtherDataFeed(address _etherDataFeedAddress) public onlyOwner {
        etherDataFeedAddress = _etherDataFeedAddress;
        etherDataFeed = AggregatorInterface(_etherDataFeedAddress);
    }
 
    // Issue loan by depositing collateral and receiving
    // loaned assets with collateralization at Borrowing Rate
    function issue(
        address assetAddress
    ) payable public returns (uint256) {
        require(msg.value > 0, "Amount ETH must be greater than zero");
        require(assets[assetAddress].owner() == address(this), "Asset must be owned by contract");

        AggregatorInterface assetDataFeed = AggregatorInterface(assets[assetAddress].assetDataFeedAddress());
        
        // Liability(USD) = Collateral(USD) / BorrowingRatio
        // Liability(USD) = Liability(Asset) * Price(Asset)
        // Collateral(USD) = Collateral(ETH) * Price(ETH)
        // Liability(Asset) * Price(Asset)  = Collateral(USD) / BorrowingRatio
        // Liability(Asset) = Collateral(USD) / (BorrowingRatio * Price(Asset))
        // Liability(Asset) = (Collateral(ETH) * Price(ETH)) / (BorrowingRatio * Price(Asset))
        uint256 liabilityAmount = ((msg.value * dataFeedPrice(etherDataFeed) * 10**precision * 10**assetDataFeed.decimals()) / (dataFeedPrice(assetDataFeed) * borrowingRatio)) / 10**etherDataFeed.decimals();
        
        // Each loan is a new contract with a new address exclusive to this loan and owned by borrower
        // User collateral for the issued loan is only ever stored in this contract with no other funds from
        // other loans or users.
        Loan loan = new Loan(
            msg.sender,                                     // Loan owner
            address(this),                                  // Window Address
            assetAddress,                                   // Asset Address
            liabilityAmount                                 // Asset Amount
        );
        
        // Transfer Ether to address of Loan Contract owned by Issuer
        payable(address(loan)).transfer(msg.value);

        loans[address(loan)] = loan;
        assets[assetAddress].mint(msg.sender, liabilityAmount);

        emit LoanEntity(
            address(loan), 
            msg.sender,
            address(loan).balance,
            assetAddress,
            liabilityAmount,
            borrowingRatio,
            loan.liquidationRatio(),
            loan.interestRate(),
            block.timestamp,
            collectorFee,
            liquidatorFee,
            daoFee,
            precision
        );
        
        return liabilityAmount;
    }

    event Received(address, uint);
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}
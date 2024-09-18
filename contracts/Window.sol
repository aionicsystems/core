// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Asset } from "./Asset.sol";
import { Loan } from "./Loan.sol";

interface AggregatorInterface is AggregatorV3Interface {
    function aggregator() external returns (address);
}

contract Window is Ownable {
    event LoanEntity(
        address indexed loanAddress, 
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
    ) public {
        require(loans[msg.sender].lastCollection() > 0, "loan does not exist");
        emit LoanEntity(
            loanAddress, 
            owner,
            collateralAmount,
            assetAddress,
            liabilityAmount,
            dataFeedAddress,
            borrowingRatio,
            liquidationRatio,
            interestRate,
            lastCollection
        );
    }

    event AssetEntity(
        address indexed token, 
        string name, 
        string symbol, 
        address dataFeedAddress,
        address aggregatorAddress,
        uint32 rate,
        uint32 liquidationRatio,
        uint8 decimals,
        int256 latestPrice 
    );
 
    // Number of decimal precision used in ratios and rates
    uint8 precision;

    // Ether held by the contract earned through interest and liquidations
    uint256 contractEther;

    // Ether data feed address
    address public etherDataFeedAddress;
    AggregatorInterface internal etherDataFeed;
    
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
        precision = _precision;

        params["borrowingRatio"] = borrowingRatio;
        params["daoFee"] = daoFee;
        params["liquidatorFee"] = liquidatorFee;
        params["collectorFee"] = collectorFee;

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
    }

    function setParam(bytes32 param, uint32 value) public onlyOwner {
        params[param] = value;
    }

    function getParam(bytes32 param) external view returns (uint32) {
        return params[param];
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
        uint256 liabilityAmount = (msg.value*dataFeedPrice(etherDataFeed)*10**precision*10**assetDataFeed.decimals()) / (dataFeedPrice(assetDataFeed)*params["borrowingRatio"]*10**etherDataFeed.decimals());
        
        // Each loan is a new contract with a new address exclusive to this loan and owned by borrower
        // User collateral for the issued loan is only ever stored in this contract with no other funds from
        // other loans or users.
        Loan loan = new Loan(
            msg.sender,                                     // Loan owner
            address(this),                                  // Window Address
            assetAddress,                                   // Asset Address
            liabilityAmount,                                // Asset Amount
            params["borrowingRatio"],                       // Borrowing Ratio
            assets[assetAddress].liquidationRatio(),        // Liquidation Ratio
            assets[assetAddress].interestRate(),            // Interest Rate
            assets[assetAddress].assetDataFeedAddress(),    // Asset Price Data Feed
            etherDataFeedAddress,                           // Ether Price Data Feed
            block.timestamp,                                // Time
            precision                                       // Precision
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
            loan.assetDataFeedAddress(),
            params["borrowingRatio"],
            loan.liquidationRatio(),
            loan.interestRate(),
            block.timestamp
        );
        
        return liabilityAmount;
    }
}
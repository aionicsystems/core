// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import "hardhat/console.sol";

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Library, AggregatorInterface } from "./Library.sol";

contract Registrar is Ownable, Library {
    event RegistrarEntity(
        address indexed registrarAddress, 
        address owner,
        address etherDataFeedAddress,
        uint32 borrowingRatio,
        uint32 collectorFee,
        uint32 daoFee,
        uint32 liquidatorFee,
        uint8 precision
    );

    event TokenEntity(
        address indexed tokenAddress,
        string name,
        string symbol,
        address dataFeedAddress,
        address aggregatorAddress,
        uint8 decimals,
        int256 latestPrice
    );

    // Number of decimal precision used in ratios and rates
    uint8 public precision;

    // Borrowing Ratio, DAO Fee, Liquidator Fee, Collector Fee
    uint32 public borrowingRatio;
    uint32 public daoFee;
    uint32 public liquidatorFee;
    uint32 public collectorFee;

    // Ether data feed address
    address public etherDataFeedAddress;
    AggregatorInterface internal etherDataFeed;

    // Tokens with Chainlink data feeds
    mapping(address => AggregatorInterface) public tokens;

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

        emit RegistrarEntity(
            address(this), 
            owner,
            etherDataFeedAddress,
            borrowingRatio,
            collectorFee,
            daoFee,
            liquidatorFee,
            precision
        );
    }

    function setRegistrarParameter(bytes32 parameter, uint32 value) public onlyOwner {
        if (parameter == "borrowingRatio") borrowingRatio = value;
        else if (parameter == "collectorFee") collectorFee = value;
        else if (parameter == "daoFee") daoFee = value;
        else if (parameter == "liquidatorFee") liquidatorFee = value;
        else revert("Invalid parameter");

        emit RegistrarEntity(
            address(this), 
            owner(),
            etherDataFeedAddress,
            borrowingRatio,
            collectorFee,
            daoFee,
            liquidatorFee,
            precision
        );
    }

    function approveToken(address tokenDataFeedAddress, string memory name, string memory symbol) public onlyOwner returns(address) {
        AggregatorInterface dataFeed = AggregatorInterface(tokenDataFeedAddress);
        tokens[tokenDataFeedAddress] = dataFeed;
        emit TokenEntity(
            tokenDataFeedAddress,
            name,
            symbol,
            tokenDataFeedAddress,
            dataFeed.aggregator(),
            dataFeed.decimals(),
            getChainlinkDataFeedLatestAnswer(dataFeed)
        );
        return tokenDataFeedAddress;
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
}
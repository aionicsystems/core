// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import "hardhat/console.sol";

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Library, AggregatorInterface } from "./Library.sol";

contract Registrar is Ownable, Library {
    event TokenEntity(
        address indexed tokenAddress,
        string name,
        string symbol,
        address dataFeedAddress,
        address aggregatorAddress,
        uint8 decimals,
        int256 latestPrice
    );

    event RegistrarEntity(
        address indexed registrarAddress,
        address owner
    );

    // Tokens with Chainlink data feeds
    mapping(address => AggregatorInterface) public tokens;

    constructor (
        address owner
    ) Ownable(owner) {
        emit RegistrarEntity(
            address(this), 
            owner
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
}
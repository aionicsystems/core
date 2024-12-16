// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;
import { AggregatorV3Interface } from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

interface AggregatorInterface is AggregatorV3Interface {
    function aggregator() external returns (address);
}

abstract contract Library {
    event AssetEntity(
        address indexed token, 
        string name, 
        string symbol, 
        address dataFeedAddress,
        address aggregatorAddress,
        uint32 interestRate,
        uint32 liquidationRatio,
        uint8 decimals,
        int256 latestPrice 
    );

    event LoanEntity(
        address indexed loanAddress, 
        address owner,
        uint256 collateralAmount,
        address assetAddress,
        uint256 liabilityAmount,
        uint32 borrowingRatio,
        uint32 liquidationRatio,
        uint32 interestRate,
        uint256 lastCollection,
        uint32 collectorFee,
        uint32 daoFee,
        uint32 liquidatorFee,
        uint8 precision
    );

    function getChainlinkDataFeedLatestAnswer(AggregatorV3Interface dataFeed) public view returns (int) {
        // prettier-ignore
        (,int answer,,,) = dataFeed.latestRoundData();
        return answer;
    }
}
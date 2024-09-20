// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

contract Library {
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
}
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;

contract Library {
    struct LoanEvent {
        address loanAddress; 
        address owner;
        uint256 collateralAmount;
        address assetAddress;
        uint256 liabilityAmount;
        address dataFeedAddress;
        uint32 borrowingRatio;
        uint32 liquidationRatio;
        uint32 interestRate;
        uint256 lastCollectio;
    }
}
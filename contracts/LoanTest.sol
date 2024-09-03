// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from '@openzeppelin/contracts/interfaces/IERC20.sol';
import { AggregatorV3Interface } from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract Loan is Ownable {
    address public window;
    address public asset;
    address public assetDataFeedAddress;
    address public etherDataFeedAddress;
    uint256 public liability;
    uint32 public borrowingRatio;
    uint32 public liquidationRatio;
    uint32 public interestRate;
    uint256 public lastCollection;
    uint8 public precision;

    constructor (
        address owner
    ) Ownable(owner) {
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MockAggregator {
    event AnswerUpdated(int256 indexed current, uint256 indexed roundId, uint256 updatedAt);
    event NewRound(uint256 indexed roundId, address indexed startedBy, uint256 startedAt);

    function emitAnswerUpdated(int256 current, uint256 roundId, uint256 updatedAt) public {
        emit AnswerUpdated(current, roundId, updatedAt);
    }

    function emitNewRound(int256 current, uint256 roundId, uint256 updatedAt) public {
        emit AnswerUpdated(current, roundId, updatedAt);
    }
}

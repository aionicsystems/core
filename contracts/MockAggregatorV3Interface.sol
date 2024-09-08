// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

interface MockAggregatorEvent {
    function emitAnswerUpdated(int256 current, uint256 roundId, uint256 updatedAt) external;
    function emitNewRound(int256 current, uint256 roundId, uint256 updatedAt) external;
}

contract MockAggregatorV3Interface is AggregatorV3Interface {
    MockAggregatorEvent mockAggregator;

    uint256 public constant override version = 0;

    uint8 public override decimals;
    int256 public latestAnswer;
    uint256 public latestTimestamp;
    uint256 public latestRound;
    
    mapping(uint256 => int256) public getAnswer;
    mapping(uint256 => uint256) public getTimestamp;
    mapping(uint256 => uint256) private getStartedAt;

    constructor(uint8 _decimals, int256 _initialAnswer, address _mockAggregator) {
        decimals = _decimals;
        mockAggregator = MockAggregatorEvent(_mockAggregator);
        updateAnswer(_initialAnswer);
    }

    function aggregator() public view returns (address) {
        return address(mockAggregator);
    }

    function updateAnswer(int256 _answer) public {
        latestAnswer = _answer;
        latestTimestamp = block.timestamp;
        latestRound++;
        getAnswer[latestRound] = _answer;
        getTimestamp[latestRound] = block.timestamp;
        getStartedAt[latestRound] = block.timestamp;
        mockAggregator.emitAnswerUpdated(_answer, latestRound, latestTimestamp);
    }

    function updateRoundData(uint80 _roundId, int256 _answer, uint256 _timestamp, uint256 _startedAt) public {
        latestRound = _roundId;
        latestAnswer = _answer;
        latestTimestamp = _timestamp;
        getAnswer[latestRound] = _answer;
        getTimestamp[latestRound] = _timestamp;
        getStartedAt[latestRound] = _startedAt;
    }

    function getRoundData(
        uint80 _roundId
    )
        external
        view
        override
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
    {
        return (_roundId, getAnswer[_roundId], getStartedAt[_roundId], getTimestamp[_roundId], _roundId);
    }

    function latestRoundData()
        external
        view
        override
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
    {
        return (
        uint80(latestRound),
        getAnswer[latestRound],
        getStartedAt[latestRound],
        getTimestamp[latestRound],
        uint80(latestRound)
        );
    }

    function description() external pure override returns (string memory) {
        return "MockV3Aggregator.sol";
    }
}
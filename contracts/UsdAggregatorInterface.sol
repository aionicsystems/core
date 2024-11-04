// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface AggregatorV3Interface {
    function decimals() external view returns (uint8);
    function description() external view returns (string memory);
    function version() external view returns (uint256);

    function getRoundData(uint80 _roundId) external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );

    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}

contract ConstantChainlinkFeed is AggregatorV3Interface {
    uint8 private constant DECIMALS = 8;
    int256 private constant ANSWER = 1 * 10**8; // Returning 1 with 8 decimals
    string private constant DESCRIPTION = "Chainlinkish Data Feed - Constant 1";
    uint256 private constant VERSION = 1;

    // Events to match Chainlink Aggregator events
    event AnswerUpdated(int256 indexed current, uint256 indexed roundId, uint256 updatedAt);
    event NewRound(uint256 indexed roundId, address indexed startedBy, uint256 startedAt);

    uint80 private latestRoundId;

    constructor() {
        latestRoundId = 1;
        emit NewRound(latestRoundId, msg.sender, block.timestamp);
        emit AnswerUpdated(ANSWER, latestRoundId, block.timestamp);
    }

    function decimals() external pure override returns (uint8) {
        return DECIMALS;
    }

    function description() external pure override returns (string memory) {
        return DESCRIPTION;
    }

    function version() external pure override returns (uint256) {
        return VERSION;
    }

    function getRoundData(uint80 _roundId) external view override returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    ) {
        require(_roundId == latestRoundId, "Round ID does not exist");
        roundId = _roundId;
        answer = ANSWER;
        startedAt = block.timestamp;
        updatedAt = block.timestamp;
        answeredInRound = _roundId;
    }

    function latestRoundData() external view override returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    ) {
        roundId = latestRoundId;
        answer = ANSWER;
        startedAt = block.timestamp;
        updatedAt = block.timestamp;
        answeredInRound = latestRoundId;
    }

    function updateAnswer() external {
        latestRoundId++;
        emit NewRound(latestRoundId, msg.sender, block.timestamp);
        emit AnswerUpdated(ANSWER, latestRoundId, block.timestamp);
    }

    function aggregator() external view returns (address) {
        return address(this);
    }
}
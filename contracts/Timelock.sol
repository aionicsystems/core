// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract AionicTimelock is
    TimelockController
{
    constructor(uint256 _mindelay, address[] memory _proposers, address[] memory _executors, address _admin) TimelockController(_mindelay, _proposers, _executors, _admin) {}
}
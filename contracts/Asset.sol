// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;

import { ERC20Burnable } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Asset is ERC20, ERC20Burnable, Ownable {
    uint32 rate;
    uint32 liquidationRatio;
    address dataFeedAddress;

    constructor (
        string memory name,
        string memory symbol,
        uint32 _rate,
        uint32 _liquidationRatio,
        address owner,
        address _dataFeedAddress
    ) ERC20 (name, symbol) Ownable(owner) {
        rate = _rate;
        liquidationRatio = _liquidationRatio;
        dataFeedAddress = _dataFeedAddress;
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) public onlyOwner {
        _burn(account, amount);
    }

    function setRate(uint32 _rate) public onlyOwner {
        rate = _rate;
    }

    function getRate() public view returns (uint32) {
        return rate;
    }

    function setLiquidationRatio(uint32 _liquidationRatio) public onlyOwner {
        liquidationRatio = _liquidationRatio;
    }

    function getLiquidationRatio() public view returns (uint32) {
        return liquidationRatio;
    }

    function setDataFeedAddress(address _dataFeedAddress) public onlyOwner {
        dataFeedAddress = _dataFeedAddress;
    }

    function getDataFeedAddress() public view returns(address) {
        return dataFeedAddress;
    }
}
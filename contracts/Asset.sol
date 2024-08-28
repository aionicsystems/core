// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;

import { ERC20Burnable } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Asset is ERC20, ERC20Burnable, Ownable {
    uint32 public rate;
    uint32 public liquidationRatio;
    address public assetDataFeedAddress;

    constructor (
        string memory name,
        string memory symbol,
        uint32 _rate,
        uint32 _liquidationRatio,
        address owner,
        address _assetDataFeedAddress
    ) ERC20 (name, symbol) Ownable(owner) {
        rate = _rate;
        liquidationRatio = _liquidationRatio;
        assetDataFeedAddress = _assetDataFeedAddress;
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }

    function setRate(uint32 _rate) public onlyOwner {
        rate = _rate;
    }

    function setLiquidationRatio(uint32 _liquidationRatio) public onlyOwner {
        liquidationRatio = _liquidationRatio;
    }

    function setDataFeedAddress(address _assetDataFeedAddress) public onlyOwner {
        assetDataFeedAddress = _assetDataFeedAddress;
    }
}
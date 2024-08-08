// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;

import { ERC20Burnable } from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Asset is ERC20, ERC20Burnable, Ownable {
    uint32 rate;

    constructor (
        string memory name,
        string memory symbol,
        uint32 _rate,
        address owner
    ) ERC20 (name, symbol) Ownable(owner) {
        rate = _rate;
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
}
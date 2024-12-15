// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import OpenZeppelin's IERC20 interface
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// Define the IWETH interface
interface IWETH is IERC20 {
    /**
     * @dev Deposit ETH and receive WETH (1:1 exchange rate).
     */
    function deposit() external payable;

    /**
     * @dev Withdraw WETH and receive ETH (1:1 exchange rate).
     * @param amount Amount of WETH to convert back to ETH.
     */
    function withdraw(uint256 amount) external;
}
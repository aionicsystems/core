import {
    Swap as SwapEvent,
    UniswapV2Pair,
  } from "../generated/UniswapV2Pair/UniswapV2Pair"
  import { ERC20 } from "../generated/UniswapV2Pair/ERC20"
  import { SwapEvent as SwapEntity, Token } from "../generated/schema"
  import { BigInt, BigDecimal, Address } from "@graphprotocol/graph-ts"
import { AssetEntity } from "../../generated/schema"
  
  // Helper function to get token decimals
  function fetchTokenDecimals(tokenAddress: Address): BigInt {
    let token = ERC20.bind(tokenAddress)
    let decimalsResult = token.try_decimals()
    return decimalsResult.reverted ? BigInt.fromI32(18) : BigInt.fromI32(decimalsResult.value)
  }
  
  // Helper function to get token symbol
  function fetchTokenSymbol(tokenAddress: Address): string {
    let token = ERC20.bind(tokenAddress)
    let symbolResult = token.try_symbol()
    return symbolResult.reverted ? "UNKNOWN" : symbolResult.value
  }
  
  // Convert BigInt to BigDecimal with decimals
  function toDecimal(value: BigInt, decimals: BigInt): BigDecimal {
    let precision = BigInt.fromI32(10).pow(decimals.toI32() as u8).toBigDecimal()
    return value.toBigDecimal().div(precision)
  }
  
  export function handleSwap(event: SwapEvent): void {
    // Load the pair contract to get token addresses
    let pairContract = UniswapV2Pair.bind(event.address)
    let token0Address = pairContract.asset0()
    let token1Address = pairContract.asset1()
    
    // Extract amounts from the event
    let amount0In = event.params.amount0In
    let amount1In = event.params.amount1In
    let amount0Out = event.params.amount0Out
    let amount1Out = event.params.amount1Out

    // Need to orient properly
    let asset0 = AssetEntity.load(token0Address.toHex())
    if (asset0 != null) {
        if (asset0.symbol == "WETH" || asset0.symbol == "ETH") {
        
        }
    }
  
    let asset1 = AssetEntity.load(token1Address.toHex())
    if (asset1 != null) {
      if (asset1.symbol == "WETH" || asset1.symbol == "ETH") {
        
      }
    }
  
    
  
    // Determine the swap direction and calculate the price
    let amount0Total = amount0In.gt(BigInt.zero())
      ? amount0In
      : amount0Out
    let amount1Total = amount1In.gt(BigInt.zero())
      ? amount1In
      : amount1Out
  
    // Normalize amounts using token decimals
    let amount0TotalDecimal = toDecimal(amount0Total, asset0.decimals)
    let amount1TotalDecimal = toDecimal(amount1Total, asset1.decimals)
  
    // Initialize price variable
    let price: BigDecimal
  
    if (amount0In.gt(BigInt.zero()) && amount1Out.gt(BigInt.zero())) {
      // Token0 swapped for Token1
      price = amount1Out.toBigDecimal()
        .div(BigInt.fromI32(10).pow(asset1.decimals.toI32() as u8).toBigDecimal())
        .div(
          amount0In.toBigDecimal().div(
            BigInt.fromI32(10).pow(asset0.decimals.toI32() as u8).toBigDecimal()
          )
        )
    } else if (amount1In.gt(BigInt.zero()) && amount0Out.gt(BigInt.zero())) {
      // Token1 swapped for Token0
      price = amount0Out.toBigDecimal()
        .div(BigInt.fromI32(10).pow(asset0.decimals.toI32() as u8).toBigDecimal())
        .div(
          amount1In.toBigDecimal().div(
            BigInt.fromI32(10).pow(asset1.decimals.toI32() as u8).toBigDecimal()
          )
        )
    } else {
      // Swap involves only one token, which shouldn't happen in a normal swap
      return
    }
  
    // Create and save the SwapEvent entity
    let swapEntity = new SwapEntity(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
    swapEntity.timestamp = event.block.timestamp
    swapEntity.pair = event.address
    swapEntity.sender = event.params.sender
    swapEntity.to = event.params.to
    swapEntity.amount0In = amount0In
    swapEntity.amount1In = amount1In
    swapEntity.amount0Out = amount0Out
    swapEntity.amount1Out = amount1Out
    swapEntity.price = price
    swapEntity.save()
  }
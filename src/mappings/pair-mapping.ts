import {
    PairEntity,
    PriceEntity,
    Swap as SwapEvent
} from '../types/schema'

import { AssetEntity } from "../../generated/schema"
import { UniswapV2Pair } from "../../generated/UniswapV2Pair/UniswapV2Pair"
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts"

export function handleSwap(event: SwapEvent): void {
    // Load the pair contract to get token addresses
    let pairContract = UniswapV2Pair.bind(event.address)
    let token0Address = pairContract.token0()
    let token1Address = pairContract.token1()
    
    // Extract amounts from the event
    let amount0In = event.params.amount0In
    let amount1In = event.params.amount1In
    let amount0Out = event.params.amount0Out
    let amount1Out = event.params.amount1Out

    let assetETH: AssetEntity | null = null
    let asset: AssetEntity | null = null

    let amountETHTotal = BigInt.fromI32(0)
    let amountAssetTotal = BigInt.fromI32(0)
    
    let asset0 = AssetEntity.load(token0Address.toHex())
    let asset1 = AssetEntity.load(token1Address.toHex())
    
    // Create a new PriceEntity
    let priceId = event.transaction.hash.toHex()
    let priceEntity = new PriceEntity(priceId)

    if (asset1 != null && asset0 != null) {
        if (asset1.symbol == "WETH" || asset1.symbol == "ETH") {
            assetETH = asset1
            asset = asset0
            // Determine the swap direction and calculate the price
            amountETHTotal = amount1In.gt(BigInt.zero())
              ? amount1In
              : amount1Out
            amountAssetTotal = amount0In.gt(BigInt.zero())
              ? amount0In
              : amount0Out
        }

        if (asset0.symbol == "WETH" || asset0.symbol == "ETH") {
            assetETH = asset0
            asset = asset1
            // Determine the swap direction and calculate the price
            amountETHTotal = amount0In.gt(BigInt.zero())
              ? amount0In
              : amount0Out
            amountAssetTotal = amount1In.gt(BigInt.zero())
              ? amount1In
              : amount1Out
        }
    }

    if (asset == null || assetETH == null) {
        // If we don't have both asset and assetETH, we can't proceed
        return
    }

    // Initialize price variable
    let ethAssetPrice: BigDecimal
    ethAssetPrice = (amountETHTotal.toBigDecimal()).div(amountAssetTotal.toBigDecimal())

    // Fetch the ETH/USD price from the AssetEntity for ETH
    let ethUSDPrice = assetETH.latestPrice
    if (ethUSDPrice == null) {
        return
    }

    // Calculate the USD/asset price
    let usdAssetPrice = ethAssetPrice.times(ethUSDPrice.toBigDecimal())
    console.log(`USD/Asset Price: ${usdAssetPrice.toString()}`)

   
    priceEntity.pair = event.address.toHex()
    priceEntity.asset = asset.id
    priceEntity.reserve0 = amount0In.plus(amount0Out)
    priceEntity.reserve1 = amount1In.plus(amount1Out)
    priceEntity.price = usdAssetPrice
    priceEntity.blockNumber = event.block.number
    priceEntity.blockTimestamp = event.block.timestamp
    priceEntity.transactionHash = event.transaction.hash

    priceEntity.save()
}
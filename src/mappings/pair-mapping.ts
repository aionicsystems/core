import {
    PairEntity,
    PriceEntity,
    AssetEntity
} from '../../generated/schema'

import { Swap as SwapEvent } from "../../generated/templates/Pair/Pair"
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts"

export function handleSwap(event: SwapEvent): void {
    let pair = PairEntity.load(event.address);
    if (!pair) {return}
    // Extract amounts from the event
    let amount0In = event.params.amount0In
    let amount1In = event.params.amount1In
    let amount0Out = event.params.amount0Out
    let amount1Out = event.params.amount1Out

    let assetETH: AssetEntity | null = null
    let asset: AssetEntity | null = null

    let amountETHTotal = BigInt.fromI32(0)
    let amountAssetTotal = BigInt.fromI32(0)
    
    let asset0 = AssetEntity.load(pair.asset0)
    let asset1 = AssetEntity.load(pair.asset1)
    
    let priceEntity = new PriceEntity(event.transaction.hash)

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

    // Calculate the USD/asset price
    let usdAssetPrice = ethAssetPrice.times(ethUSDPrice)
    console.log(`USD/Asset Price: ${usdAssetPrice.toString()}`)

    asset.latestMarketPrice = usdAssetPrice;
    asset.save();
   
    priceEntity.pair = event.address
    priceEntity.asset = asset.id
    priceEntity.price = usdAssetPrice
    priceEntity.blockNumber = event.block.number
    priceEntity.blockTimestamp = event.block.timestamp
    priceEntity.transactionHash = event.transaction.hash
    console.log(`PriceEntity: ${priceEntity.price.toString()}`)
    priceEntity.save()
}
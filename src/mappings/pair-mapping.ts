import {
    PairEntity,
    PriceEntity,
    AssetEntity,
    TokenEntity
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

    let assetETH: TokenEntity | null = null
    let asset: AssetEntity | null = null

    let amountETHTotal = BigInt.fromI32(0)
    let amountAssetTotal = BigInt.fromI32(0)
    
    let token0 = TokenEntity.load(pair.token0)
    let token1 = TokenEntity.load(pair.token1)
    
    let priceEntity = new PriceEntity(event.transaction.hash)

    if (token1 != null && token0 != null) {
        if (token1.symbol == "WETH" || token1.symbol == "ETH") {
            assetETH = token1
            asset = AssetEntity.load(token0.id)
            
            // Determine the swap direction and calculate the price
            amountETHTotal = amount1In.gt(BigInt.zero())
              ? amount1In
              : amount1Out
            amountAssetTotal = amount0In.gt(BigInt.zero())
              ? amount0In
              : amount0Out
        }

        if (token0.symbol == "WETH" || token0.symbol == "ETH") {
            assetETH = token0
            asset = AssetEntity.load(token1.id)
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
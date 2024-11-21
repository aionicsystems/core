import {
  AnswerUpdated as AnswerUpdatedEvent,
} from "../../generated/templates/Aggregator/AggregatorInterface";
import { AggregatorEntity, AssetEntity, DataPointEntity } from "../../generated/schema";
import { convertPriceToDecimal } from "./util";

export function handleAnswerUpdated(event: AnswerUpdatedEvent): void {
  let aggregator = AggregatorEntity.load(event.address)
  if (aggregator != null) {

    // Create a new PriceDataPoint
    let dataPoint = new DataPointEntity(event.transaction.hash); // id is txHash
    dataPoint.asset = aggregator.asset; // String
    dataPoint.price = convertPriceToDecimal(event.params.current, aggregator.decimals); // BigDecimal
    dataPoint.roundId = event.params.roundId; // BigInt
    dataPoint.blockNumber = event.block.number;
    dataPoint.blockTimestamp = event.params.updatedAt; // BigInt

    let asset = AssetEntity.load(aggregator.asset)
    if (asset != null) {
      asset.latestPrice = dataPoint.price;
      asset.save();
    }

    dataPoint.save();
  }
}

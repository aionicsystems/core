import { Address, dataSource } from "@graphprotocol/graph-ts";
import {
  AnswerUpdated as AnswerUpdatedEvent,
} from "../../generated/templates/Aggregator/AggregatorInterface";
import { AggregatorEntity, AssetEntity, DataPointEntity } from "../../generated/schema";

const ID = "id";

export function handleAnswerUpdated(event: AnswerUpdatedEvent): void {
  let context = dataSource.context();
  let addressString = context.getString(ID);
  let address = Address.fromString(addressString);

  let aggregator = AggregatorEntity.load(address)
  if (aggregator != null) {

    // Create a new PriceDataPoint
    let dataPointId = event.transaction.hash; // txHash as bytes
    let dataPoint = new DataPointEntity(dataPointId); // id is txHash
    dataPoint.asset = aggregator.asset; // String
    dataPoint.price = event.params.current.toBigDecimal().div(aggregator.decimals); // BigDecimal
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

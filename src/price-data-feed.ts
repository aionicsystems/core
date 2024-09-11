import { Address, dataSource } from "@graphprotocol/graph-ts";
import {
  AnswerUpdated as AnswerUpdatedEvent,
} from "../generated/templates/DataFeed/AggregatorInterface";
import { AggregatorEntity, AssetEntity, DataPointEntity } from "../generated/schema";

const ID = "id";

export function handleAnswerUpdated(event: AnswerUpdatedEvent): void {
  let context = dataSource.context();
  let addressString = context.getString(ID);
  let address = Address.fromString(addressString);

  // Create a new PriceDataPoint
  let dataPointId = event.transaction.hash; // txHash as bytes
  let dataPoint = new DataPointEntity(dataPointId); // id is txHash
  dataPoint.feed = address; // address of this feed
  dataPoint.price = event.params.current; // BigInt
  dataPoint.roundId = event.params.roundId; // BigInt
  dataPoint.blockNumber = event.block.number;
  dataPoint.blockTimestamp = event.params.updatedAt; // BigInt
  dataPoint.save();

  let aggregator = AggregatorEntity.load(address)
  if (aggregator != null) {
    aggregator.latestPrice = dataPoint.price;
    aggregator.save();
  }
}

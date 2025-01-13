import { log, DataSourceContext } from "@graphprotocol/graph-ts";

{
  TokenEntity as TokenEntityEvent
} from "../../generated/Registrar/Registrar"

import {
  AggregatorEntity,
  AssetEntity,
  LoanEntity,
  OwnerEntity,
  OwnershipTransferred,
  WindowEntity,
  TokenEntity
} from "../../generated/schema"

import { Aggregator as AggregatorTemplate, Loan as LoanTemplate } from "../../generated/templates";

import { convertPriceToDecimal } from "./util";

const ID = "id";

export function handleTokenEntity(event: TokenEntityEvent): void {
  let asset = new AssetEntity(event.params.token)
  
  log.debug('The Asset Address is: {} ', [event.params.token.toHexString()]);

  asset.name = event.params.name
  asset.symbol = event.params.symbol
  asset.rate = event.params.rate
  asset.liquidationRatio = event.params.liquidationRatio

  asset.blockTimestamp = event.block.timestamp
  asset.transactionHash = event.transaction.hash
  asset.latestMarketPrice = asset.latestPrice;
  asset.save()

  // Create the new Price Data Feed Template
  let context = new DataSourceContext();
  context.setString(ID, event.params.aggregatorAddress.toHexString());
  AggregatorTemplate.createWithContext(event.params.aggregatorAddress, context);

  let aggregator = new AggregatorEntity(event.params.aggregatorAddress);
  aggregator.asset = event.params.token;
  aggregator.decimals = event.params.decimals;
  aggregator.save();
}

import { PairCreated } from '../../generated/Factory/Factory'
import { Pair as PairTemplate } from '../../generated/templates'
import { PairEntity } from '../../generated/schema'
import { BigInt } from '@graphprotocol/graph-ts'
import { DataSourceContext } from "@graphprotocol/graph-ts";

const ID = "id";

export function handleNewPair(event: PairCreated): void {
  let pair = new PairEntity(event.params.pair.toHexString())
  
  // This needs to be updated after local testnet
  pair.asset0 = event.params.token0
  pair.asset1 = event.params.token1
  pair.reserve0 = new BigInt(0);
  pair.reserve1 = new BigInt(0);
  
  // create the tracked contract based on the template
  PairTemplate.create(event.params.pair)

  // Create the new Price Data Feed Template
  let context = new DataSourceContext();
  context.setString(ID, event.params.pair.toHexString());
  PairTemplate.createWithContext(event.params.pair, context);

  pair.save()
}

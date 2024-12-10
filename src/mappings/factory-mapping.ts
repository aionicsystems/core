import { PairCreated } from '../../generated/Factory/Factory'
import { Pair as PairTemplate } from '../../generated/templates'
import { PairEntity, TokenEntity } from '../../generated/schema'
import { BigInt, DataSourceContext } from "@graphprotocol/graph-ts";
import { ERC20 } from '../../generated/Factory/ERC20'

const ID = "id";

export function handleNewPair(event: PairCreated): void {
  let pair = new PairEntity(event.params.pair)
  
  // This needs to be updated after local testnet
  pair.asset = event.params.token0
  pair.reserve0 = new BigInt(0);
  pair.reserve1 = new BigInt(0);

  // Load or create TokenEntity for token0
  let token0 = TokenEntity.load(event.params.token0)
  if (token0 == null) {
    token0 = new TokenEntity(event.params.token0)
    let token0Contract = ERC20.bind(event.params.token0)
    token0.name = token0Contract.name()
    token0.symbol = token0Contract.symbol()
    token0.decimals = token0Contract.decimals()
    token0.totalSupply = token0Contract.totalSupply()
    token0.blockNumber = event.block.number
    token0.blockTimestamp = event.block.timestamp
    token0.transactionHash = event.transaction.hash
    token0.save()
  }

  // Load or create TokenEntity for token1
  let token1 = TokenEntity.load(event.params.token1)
  if (token1 == null) {
    token1 = new TokenEntity(event.params.token1)
    let token1Contract = ERC20.bind(event.params.token1)
    token1.name = token1Contract.name()
    token1.symbol = token1Contract.symbol()
    token1.decimals = token1Contract.decimals()
    token1.totalSupply = token1Contract.totalSupply()
    token1.blockNumber = event.block.number
    token1.blockTimestamp = event.block.timestamp
    token1.transactionHash = event.transaction.hash
    token1.save()
  }

  pair.token0 = token0.id
  pair.token1 = token1.id
  
  // create the tracked contract based on the template
  PairTemplate.create(event.params.pair)

  // Create the new Price Data Feed Template
  let context = new DataSourceContext();
  context.setString(ID, event.params.pair.toHexString());
  PairTemplate.createWithContext(event.params.pair, context);

  pair.save()
}

import { PairCreated } from '../types/Factory/Factory'
import { PairEntity } from '../types/schema'
import { Pair as PairTemplate } from '../types/templates'
import { AssetEntity } from '../../generated/schema'

export function handleNewPair(event: PairCreated): void {
  let pair = new PairEntity(event.params.pair.toHexString())
  
  // This needs to be updated after local testnet
  pair.token0 = asset0.id
  pair.token1 = asset1.id
  pair.reserve0 = event.params.reserve0
  pair.reserve1 = event.params.reserve1
  
  // create the tracked contract based on the template
  PairTemplate.create(event.params.pair)

  pair.save()
}

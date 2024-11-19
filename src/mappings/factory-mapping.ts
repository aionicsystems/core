import { PairCreated } from '../types/Factory/Factory'
import { Pair as PairTemplate } from '../types/templates'
import { PairEntity } from '../../generated/schema'

export function handleNewPair(event: PairCreated): void {
  let pair = new PairEntity(event.params.pair.toHexString())
  
  // This needs to be updated after local testnet
  pair.asset0 = event.params.asset0.id
  pair.asset1 = event.params.asset1.id
  pair.reserve0 = event.params.reserve0
  pair.reserve1 = event.params.reserve1
  
  // create the tracked contract based on the template
  PairTemplate.create(event.params.pair)

  pair.save()
}

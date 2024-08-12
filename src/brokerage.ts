import {
  AssetEntity as AssetEntityEvent,
  LoanEntity as LoanEntityEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Brokerage/Brokerage"
import {
  AssetEntity,
  LoanEntity,
  OwnershipTransferred
} from "../generated/schema"

import { ipfs, json, JSONValue, log } from '@graphprotocol/graph-ts'

export function handleAssetEntity(event: AssetEntityEvent): void {
  let entity = new AssetEntity(event.params.token.toString())
  
  log.debug('The Asset Address is: {} ', [event.params.token.toString()]);

  entity.token = event.params.token
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.dataFeedAddress = event.params.dataFeedAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLoanEntity(event: LoanEntityEvent): void {
  let entity = LoanEntity.load(event.params.id.toString());

  if (entity == null) {
    entity = new LoanEntity(
      event.params.id.toString()
    )
  }

  log.debug('The LoanID is: {} ', [event.params.id.toString()]);

  entity.Brokerage_id = event.params.id
  entity.owner = event.params.owner
  entity.collateral = event.params.collateral
  entity.asset = event.params.asset
  entity.liability = event.params.liability
  entity.dataFeed = event.params.dataFeed
  entity.rate = event.params.rate
  entity.time = event.params.time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

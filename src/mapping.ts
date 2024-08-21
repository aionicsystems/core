import {
  AssetEntity as AssetEntityEvent,
  LoanEntity as LoanEntityEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Brokerage/Brokerage"
import {
  AssetEntity,
  LoanEntity,
  OwnerEntity,
  OwnershipTransferred
} from "../generated/schema"

import { ipfs, json, JSONValue, log } from '@graphprotocol/graph-ts'

export function handleAssetEntity(event: AssetEntityEvent): void {
  let asset = new AssetEntity(event.params.token)
  
  log.debug('The Asset Address is: {} ', [event.params.token.toString()]);

  asset.name = event.params.name
  asset.symbol = event.params.symbol
  asset.dataFeedAddress = event.params.dataFeedAddress
  asset.rate = event.params.rate
  asset.liquidationRatio = event.params.liquidationRatio

  asset.blockNumber = event.block.number
  asset.blockTimestamp = event.block.timestamp
  asset.transactionHash = event.transaction.hash
  

  asset.save()
}

export function handleLoanEntity(event: LoanEntityEvent): void {
  let loan = LoanEntity.load(event.params.id.toString());
  if (loan == null) {
    loan = new LoanEntity(event.params.id.toString())
  }

  let owner = OwnerEntity.load(event.params.owner); 
  if (owner == null) {
    owner = new OwnerEntity(event.params.owner)
  }
  
  log.debug('The LoanID is: {} ', [event.params.id.toString()]);

  loan.owner = event.params.owner
  loan.collateral = event.params.collateral
  
  loan.asset = event.params.asset
  loan.liability = event.params.liability
  loan.dataFeed = event.params.dataFeed
  loan.rate = event.params.rate
  loan.time = event.params.time
  
  loan.blockNumber = event.block.number
  loan.blockTimestamp = event.block.timestamp
  loan.transactionHash = event.transaction.hash

  loan.save()
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

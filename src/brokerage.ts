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

export function handleAssetEntity(event: AssetEntityEvent): void {
  let entity = new AssetEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
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
  let entity = new LoanEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
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

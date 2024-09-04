import {
  AssetEntity as AssetEntityEvent,
  LoanEntity as LoanEntityEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Window/Window"
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
  let loan = LoanEntity.load(event.params.loanAddress);
  if (loan == null) {
    loan = new LoanEntity(event.params.loanAddress)
  }

  let owner = OwnerEntity.load(event.params.owner); 
  if (owner == null) {
    owner = new OwnerEntity(event.params.owner)
  }
  
  log.debug('The LoanID is: {} ', [event.params.loanAddress.toString()]);

  loan.owner = event.params.owner
  loan.asset = event.params.assetAddress
  loan.collateralAmount = event.params.collateralAmount
  loan.liabilityAmount = event.params.liabilityAmount
  loan.dataFeedAddress = event.params.dataFeedAddress
  loan.interestRate = event.params.interestRate
  loan.borrowingRatio = event.params.borrowingRatio
  loan.liquidationRatio = event.params.liquidationRatio
  loan.lastCollection = event.params.lastCollection
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

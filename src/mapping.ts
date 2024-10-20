import { log, DataSourceContext } from "@graphprotocol/graph-ts";
import {
  AssetEntity as AssetEntityEvent,
  LoanEntity as LoanEntityEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  WindowEntity as WindowEntityEvent
} from "../generated/Window/Window"
import {
  AggregatorEntity,
  AssetEntity,
  LoanEntity,
  OwnerEntity,
  OwnershipTransferred,
  WindowEntity
} from "../generated/schema"
import { Aggregator as AggregatorTemplate, Loan as LoanTemplate } from "../generated/templates";

const ID = "id";

export function handleAssetEntity(event: AssetEntityEvent): void {
  let asset = new AssetEntity(event.params.token)
  
  log.debug('The Asset Address is: {} ', [event.params.token.toHexString()]);

  asset.name = event.params.name
  asset.symbol = event.params.symbol
  asset.dataFeedAddress = event.params.dataFeedAddress
  asset.aggregator = event.params.aggregatorAddress
  asset.rate = event.params.rate
  asset.liquidationRatio = event.params.liquidationRatio

  asset.blockNumber = event.block.number
  asset.blockTimestamp = event.block.timestamp
  asset.transactionHash = event.transaction.hash
  asset.latestPrice = event.params.latestPrice
  
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

export function handleLoanEntity(event: LoanEntityEvent): void {
  let loan = LoanEntity.load(event.params.loanAddress);
  if (loan == null) {
    let context = new DataSourceContext();
    context.setString(ID, event.params.loanAddress.toHexString());
    LoanTemplate.createWithContext(event.params.loanAddress, context);
    loan = new LoanEntity(event.params.loanAddress)
  }

  let owner = OwnerEntity.load(event.params.owner); 
  if (owner == null) {
    owner = new OwnerEntity(event.params.owner)
    owner.save()
  }
  
  log.debug('The LoanID is: {} ', [event.params.loanAddress.toHexString()]);

  loan.owner = event.params.owner
  loan.collateralAmount = event.params.collateralAmount
  loan.asset = event.params.assetAddress
  loan.liabilityAmount = event.params.liabilityAmount
  loan.borrowingRatio = event.params.borrowingRatio
  loan.liquidationRatio = event.params.liquidationRatio
  loan.interestRate = event.params.interestRate
  loan.lastCollection = event.params.lastCollection
  loan.blockNumber = event.block.number
  loan.blockTimestamp = event.block.timestamp
  loan.transactionHash = event.transaction.hash
  loan.collectorFee = event.params.collectorFee
  loan.daoFee = event.params.daoFee
  loan.liquidatorFee = event.params.liquidatorFee
  loan.precision = event.params.precision

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

export function handleWindowEntity(event: WindowEntityEvent): void {
  let window = WindowEntity.load(event.params.windowAddress);
  if (window == null) {
    window = new WindowEntity(event.params.windowAddress)
  }
  
  log.debug('The Window Address is: {} ', [event.params.windowAddress.toHexString()]);

  window.owner = event.params.owner
  window.etherDataFeedAddress = event.params.etherDataFeedAddress
  window.borrowingRatio = event.params.borrowingRatio
  window.collectorFee = event.params.collectorFee
  window.daoFee = event.params.daoFee
  window.liquidatorFee = event.params.liquidatorFee
  window.precision = event.params.precision

  window.save()
}
import { log } from "@graphprotocol/graph-ts";
import {
  LoanEntity as LoanEntityEvent,
} from "../generated/templates/Loan/Loan"
import {
  LoanEntity,
} from "../generated/schema"


export function handleLoanEntity(event: LoanEntityEvent): void {
  let loan = LoanEntity.load(event.params.loanAddress);
  if (loan == null) {
    loan = new LoanEntity(event.params.loanAddress)
  }
  
  log.debug('The LoanID is: {} ', [event.params.loanAddress.toString()]);

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
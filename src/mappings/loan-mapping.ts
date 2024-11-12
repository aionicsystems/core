import { log } from "@graphprotocol/graph-ts";
import {
  LoanEntity as LoanEntityEvent,
} from "../../generated/templates/Loan/Loan"
import {
  LoanEntity,
} from "../../generated/schema"


export function handleLoanEntity(event: LoanEntityEvent): void {
  let loan = LoanEntity.load(event.params.loanAddress);
  if (loan == null) {
    loan = new LoanEntity(event.params.loanAddress)
  }
  
  log.debug('The LoanID is: {} ', [event.params.loanAddress.toString()]);

  loan.collateralAmount = event.params.collateralAmount
  loan.liabilityAmount = event.params.liabilityAmount
  loan.lastCollection = event.params.lastCollection

  loan.save()
}
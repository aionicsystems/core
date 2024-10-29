import { LoanType } from '../types/LoanTypes';
import { AssetType } from '../types/AssetTypes';
import { WindowType } from '../types/WindowTypes';

import { liquidationCheck, maxLiquidationAmount, liquidationReward, liquidationPayment, interest, collectorReward, timestamp } from './calculations'; // Adjust the import paths as needed

export const transformLoans = (loans: LoanType[], collateral: AssetType, window: WindowType): LoanType[] => {
  return loans.map((loan) => {
    const loanDataItem = { ...loan };
    if (collateral && window) {
      if (liquidationCheck(loan, collateral, window)) {
        loanDataItem.liquidationAmount = maxLiquidationAmount(loan, collateral);
        loanDataItem.liquidatorReward = liquidationReward(liquidationPayment(loanDataItem.liquidationAmount, loan, collateral), loan)
      }
      loanDataItem.interest = interest(timestamp, loan, window);
      loanDataItem.collectorReward = collectorReward(loan)
    }
    return loanDataItem;
  });
};
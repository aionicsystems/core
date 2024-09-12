export const loanInterestRate = (rate: number): number => {
  return rate * (Math.pow(10, -4) * 100);
};

export const loanLiquidationRatioRate = (liquidationRatio: number): number => {
  return liquidationRatio * (Math.pow(10, -4) * 100);
};

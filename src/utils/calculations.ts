export const loanInterestRate = (rate: number) => {
  return `${(rate * (Math.pow(10, -4) * 100)).toFixed(2)}%`;
};
export const loanLiquidationRatioRate = (liquidationRatio: number) => {
  return `${(liquidationRatio * (Math.pow(10, -4) * 100)).toFixed(2)}%`;
};

export const loanLiability = (amount: number) => {
  return (amount * Math.pow(10, -18)).toFixed(6);
};

export const loanCollateral = (amount: number) => {
  return (amount * Math.pow(10, -18)).toFixed(6);
};

export const loanCollateralUSD = (
  collateralAmount?: number,
  latestPrice?: number,
  decimals?: number,
) => {
  return (collateralAmount * latestPrice) / Math.pow(10, decimals || 0);
};

export const selectedLoanCollateralUSD = (
  collateralAmount?: number,
  latestPrice?: number,
  decimals?: number,
) => {
  return (collateralAmount * latestPrice) / (Math.pow(10, decimals || 0) * Math.pow(10, 18));
};

export const loanLiabilityUSD = (
  liabilityAmount?: number,
  latestPrice?: number,
  decimals?: number,
) => {
  return (liabilityAmount * latestPrice) / Math.pow(10, decimals || 0);
};

export const selectedLoanLiabilityUSD = (
  liabilityAmount?: number,
  latestPrice?: number,
  decimals?: number,
) => {
  return (liabilityAmount * latestPrice) / (Math.pow(10, decimals || 0) * Math.pow(10, 18));
};

export const estimatedLoanLiability = (
  collateralAmount?: number,
  latestCollateralPrice?: number,
  collateralDecimals?: number,
  latestLiabilityPrice?: number,
  liabilityDecimals?: number,
  borrowingRatio?: number,
  precision?: number,
) => {
  return ((collateralAmount * latestCollateralPrice) * Math.pow(10, liabilityDecimals) * Math.pow(10, precision)) / (Math.pow(10, collateralDecimals || 0) * Math.pow(10, 18) * latestLiabilityPrice * borrowingRatio);
};

export const loanCRatio = (collUSD: number, liabUSD: number) => {
  return `${((collUSD / liabUSD) * 100).toFixed(2)}%`;
};

export const selectedLoanCRatio = (
  collateralAmount?: number,
  latestPriceETH?: number,
  decimals?: number,
  liabilityAmount?: number,
  latestPrice?: number,
  decimalsETH?: number,
) => {
  return `${(
    ((collateralAmount * latestPriceETH * decimals) /
      (liabilityAmount * latestPrice * decimalsETH)) *
    100
  ).toFixed(2)}%`;
};

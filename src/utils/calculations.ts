import { AssetType } from "../types/AssetTypes";
import { LoanType } from "../types/LoanTypes";
import { WindowType } from "../types/WindowTypes";

export const displayInterestRate = (rate: BigInt) => {
  return `${(Number(rate) * 100 * Math.pow(10, -4)).toFixed(2)}%`;
};
export const displayRatio = (ratio?: BigInt) => {
  return `${(Number(ratio) * 100 * (Math.pow(10, -4))).toFixed(0)}%`;
};

export const displayCoin = (
  amount: BigInt,
  decimals: number
) => {
  return (Number(amount) / Math.pow(10, 18)).toFixed(decimals);
};


export const displayCoinUSD = (
  amount?: BigInt,
  latestPrice?: BigInt,
  decimals?: BigInt,
) => {
  return (Number(amount) / Math.pow(10, 18)) * (Number(latestPrice) / Math.pow(10, Number(decimals)));
};

export const estimatedLiability = (
  collateralAmount?: string,
  latestCollateralPrice?: BigInt,
  latestLiabilityPrice?: BigInt,
  borrowingRatio?: BigInt,
  precision?: BigInt,
) => {
  return Number(collateralAmount) * (Number(latestCollateralPrice) / Number(latestLiabilityPrice)) * (Number(borrowingRatio) / Math.pow(10, Number(precision)));
};

export const collateralizationRatioPercent = (
  collateralAmount?: BigInt,
  latestPriceETH?: BigInt,
  decimalsETH?: BigInt,
  liabilityAmount?: BigInt,
  latestPriceAsset?: BigInt,
  decimalsAsset?: BigInt,
) => {
  return `${((100 * Number(collateralAmount) * (Number(latestPriceETH) / Number(decimalsETH))) / (Number(liabilityAmount) * (Number(latestPriceAsset) / Number(decimalsAsset)))).toFixed(0)}%`;
};

export const collateralizationRatioPercentAfter = (
  payment: number,
  collateralAmount: BigInt,
  latestPriceETH: BigInt,
  decimalsETH: BigInt,
  liabilityAmount: BigInt,
  latestPriceAsset: BigInt,
  decimalsAsset: BigInt,
  borrowingRatio: BigInt,
  precision: BigInt,
) => {
  const debtUsdAfter = ((Number(liabilityAmount) / Math.pow(10,18) - payment) * Number(latestPriceAsset)) / Math.pow(10, Number(decimalsAsset));
  const collateral = (Number(collateralAmount) * (Number(latestPriceETH)) / Math.pow(10, Number(decimalsETH)+18));

  if ((Number(borrowingRatio) / Math.pow(10, Number(precision))) > (collateral / debtUsdAfter)) {
    return `${(100 * collateral / (debtUsdAfter)).toFixed(0)}%`;
  }
  return `${(100 * Number(borrowingRatio) / Math.pow(10, Number(precision))).toFixed(0)}%`;
};

export const collateralizationRatio = (
  collateralAmount?: BigInt,
  latestPriceETH?: BigInt,
  decimalsETH?: BigInt,
  liabilityAmount?: BigInt,
  latestPriceAsset?: BigInt,
  decimalsAsset?: BigInt,
  precision?: BigInt,
) => {
  return (Math.pow(10, Number(precision)) * Number(collateralAmount) * (Number(latestPriceETH) / Number(decimalsETH))) / (Number(liabilityAmount) * (Number(latestPriceAsset) / Number(decimalsAsset)));
};

export const liquidationCheck = (
  loan: LoanType,
  collateral: AssetType,
  window: WindowType
) => {
  return Number(loan.liquidationRatio) > collateralizationRatio(loan.collateralAmount, collateral.latestPrice, collateral.aggregator.decimals, loan.liabilityAmount, loan.asset.latestPrice, loan.asset.aggregator.decimals, window.precision);
};

export const interest = (
  loan: LoanType,
  window: WindowType
): number => {
  const SECONDS_IN_YEAR = 31536000;
  return (Number(loan.collateralAmount) * Number(loan.interestRate) * (timestamp - Number(loan.lastCollection))) / (SECONDS_IN_YEAR * Math.pow(10, Number(window.precision)));
};

export const collectorReward = (
  loan: LoanType
): number => {
  return (Number(loan.interestRate) * Number(loan.collectorFee)) / Math.pow(10, Number(loan.precision));
};

const currentDate = new Date(); 
export const timestamp = (currentDate.getTime() / 1000);

export const displayNumber = (
  amount: number,
  decimals: number
) => {
  return (amount / Math.pow(10, 18)).toFixed(decimals);
};

export const maxLiquidationAmount = (
  loan: LoanType,
  collateral: AssetType
): number => {
  // Target collateralization ratio (liquidation ratio)
  const targetCR = Number(loan.liquidationRatio) / Math.pow(10, Number(loan.precision));
  const debtUsd = (Number(loan.liabilityAmount) * Number(loan.asset.latestPrice)) / Math.pow(10, Number(loan.asset.aggregator.decimals));
  const collateralUsd = (Number(loan.collateralAmount) * Number(collateral.latestPrice)) / Math.pow(10, Number(collateral.aggregator.decimals));
  const maxLiquidationUsd = (debtUsd * targetCR - collateralUsd) / (targetCR - 1 - Number(loan.daoFee) / Math.pow(10, Number(loan.precision)) - Number(loan.liquidatorFee) / Math.pow(10, Number(loan.precision)));
  const maxLiquidation = maxLiquidationUsd / Number(loan.asset.latestPrice) * Math.pow(10, Number(loan.asset.aggregator.decimals));
  return Math.max(0, maxLiquidation); // Ensure the result is not negative
};

export const liquidationPayment = (
  payment: number,
  loan: LoanType,
  collateral: AssetType
): number => {
  // Calculate the redemption amount
  const redemption = (payment * Number(loan.asset.latestPrice) * Math.pow(10, Number(collateral.aggregator.decimals))) / (Number(collateral.latestPrice) * Math.pow(10, Number(loan.asset.aggregator.decimals)))

  // Calculate the liquidator payment
  const liquidator = redemption + (redemption * Number(loan.liquidatorFee)) / Math.pow(10, Number(loan.precision));

  return liquidator;
};

export const liquidationReward = (
  collateralAmount: number,
  loan: LoanType,
): number => {
  return (collateralAmount * Number(loan.liquidatorFee)) / Math.pow(10, Number(loan.precision));
};

export const paymentRedemption = (
  payment: number,
  collateral: BigInt,
  liability: BigInt,
  assetPrice: BigInt,
  etherPrice: BigInt,
  decimalsAsset: BigInt,
  decimalsEther: BigInt,
  borrowingRatio: BigInt,
  precision: BigInt
): number => {

  const liability_end = Number(liability) / Math.pow(10, 18) - payment;
  const debtUsd = (Number(liability_end) * Number(assetPrice)) / Math.pow(10, Number(decimalsAsset));
  
  // Calculate the liquidator payment
  const end_collateral = (debtUsd * Number(borrowingRatio) * Math.pow(10, Number(decimalsEther))) / (Number(etherPrice) * Math.pow(10, Number(precision)));
  console.log(end_collateral);
  if (Number(collateral) / Math.pow(10,18) > end_collateral) {
    return Number(collateral) / Math.pow(10,18) - end_collateral;
  }

  return 0;
};
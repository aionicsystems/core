import { BigInt } from "@graphprotocol/graph-ts"

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
  assetLatestPrice?: BigInt,
  assetDecimals?: BigInt,
) => {
  return `${((100 * Number(collateralAmount) * (Number(latestPriceETH) / Number(decimalsETH))) / (Number(liabilityAmount) * (Number(assetLatestPrice) / Number(assetDecimals)))).toFixed(0)}%`;
};

export const collateralizationRatio = (
  collateralAmount?: BigInt,
  latestPriceETH?: BigInt,
  decimalsETH?: BigInt,
  liabilityAmount?: BigInt,
  assetLatestPrice?: BigInt,
  assetDecimals?: BigInt,
  precision?: BigInt,
) => {
  return (Math.pow(10, Number(precision)) * Number(collateralAmount) * (Number(latestPriceETH) / Number(decimalsETH))) / (Number(liabilityAmount) * (Number(assetLatestPrice) / Number(assetDecimals)));
};

export const liquidationCheck = (
  liquidationRatio?: BigInt,
  collateralAmount?: BigInt,
  latestPriceETH?: BigInt,
  decimalsETH?: BigInt,
  liabilityAmount?: BigInt,
  assetLatestPrice?: BigInt,
  assetDecimals?: BigInt,
  precision?: BigInt,
) => {
  return Number(liquidationRatio) > collateralizationRatio(collateralAmount, latestPriceETH, decimalsETH, liabilityAmount, assetLatestPrice, assetDecimals, precision);
};

export const interest = (
  collateralBalance: BigInt,
  interestRate: BigInt,
  lastCollection: BigInt,
  currentTimestamp: number,
  precision: BigInt
): number => {
  const SECONDS_IN_YEAR = 31536000;
  return (Number(collateralBalance) * Number(interestRate) * (currentTimestamp - Number(lastCollection))) / (SECONDS_IN_YEAR * Math.pow(10, Number(precision)));
};

export const collectorReward = (
  interest: number,
  collectorFee: BigInt,
  precision: BigInt
): number => {
  return (interest * Number(collectorFee)) / Math.pow(10, Number(precision));
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
  collateralAmount: BigInt,
  latestPriceETH: BigInt,
  decimalsETH: BigInt,
  liabilityAmount: BigInt,
  assetLatestPrice: BigInt,
  assetDecimals: BigInt,
  liquidationRatio: BigInt,
  precision: BigInt,
  daoFee: BigInt,
  liquidatorFee: BigInt,
): number => {
  // Target collateralization ratio (liquidation ratio)
  const targetCR = Number(liquidationRatio) / Math.pow(10, Number(precision));
  console.log(`LiquidationRatio: ${targetCR}`);

  const debtUsd = (Number(liabilityAmount) * Number(assetLatestPrice)) / Number(assetDecimals);
  console.log(`Debt: ${debtUsd}`);

  const collateralUsd = (Number(collateralAmount) * Number(latestPriceETH)) / Number(decimalsETH);
  console.log(`Collateral: ${collateralUsd}`);

  const collateralizationRatio = collateralUsd / debtUsd;
  console.log(`Collateralization Ratio: ${collateralizationRatio}`);

  const numerator = debtUsd * targetCR - collateralUsd;
  console.log(`Numerator: ${numerator}`);

  const denominator = 1 - Number(daoFee) / Math.pow(10, Number(precision)) - Number(liquidatorFee) / Math.pow(10, Number(precision));
  console.log(`Denominator: ${denominator}`);

  console.log(`Precision: ${precision}`);
  console.log(`Dao Fee: ${daoFee}`);
  console.log(`Liquidator Fee: ${liquidatorFee}`);

  const maxLiquidation = (debtUsd * targetCR - collateralUsd) / (1 - Number(daoFee) / Math.pow(10, Number(precision)) - Number(liquidatorFee) / Math.pow(10, Number(precision)));
  console.log(`Max Liquidation: ${maxLiquidation}`);
  
  return Math.max(0, maxLiquidation); // Ensure the result is not negative
};

export const liquidationPayment = (
  payment: number,
  assetPrice: BigInt,
  etherPrice: BigInt,
  assetDecimals: BigInt,
  etherDecimals: BigInt,
  liquidatorFee: BigInt,
  precision: BigInt
): number => {
  // Calculate the redemption amount
  const redemption = (payment * Number(assetPrice) * Math.pow(10, Number(etherDecimals))) / (Number(etherPrice) * Math.pow(10, Number(assetDecimals)));

  // Calculate the liquidator payment
  const liquidator = redemption + (redemption * Number(liquidatorFee)) / Math.pow(10, Number(precision));

  return liquidator;
};

export const liquidationReward = (
  collateralAmount: number,
  liquidatorFee: BigInt,
  precision: BigInt
): number => {
  return (collateralAmount * Number(liquidatorFee)) / Math.pow(10, Number(precision));
};
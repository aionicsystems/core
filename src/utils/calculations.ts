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
  liquidationRatio?: BigInt,
  collateralAmount?: BigInt,
  latestPriceETH?: BigInt,
  decimalsETH?: BigInt,
  liabilityAmount?: BigInt,
  latestPriceAsset?: BigInt,
  decimalsAsset?: BigInt,
  precision?: BigInt,
) => {
  return Number(liquidationRatio) > collateralizationRatio(collateralAmount, latestPriceETH, decimalsETH, liabilityAmount, latestPriceAsset, decimalsAsset, precision);
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
  latestPriceAsset: BigInt,
  decimalsAsset: BigInt,
  liquidationRatio: BigInt,
  precision: BigInt,
  daoFee: BigInt,
  liquidatorFee: BigInt,
): number => {
  // Target collateralization ratio (liquidation ratio)
  const targetCR = Number(liquidationRatio) / Math.pow(10, Number(precision));
  const debtUsd = (Number(liabilityAmount) * Number(latestPriceAsset)) / Math.pow(10, Number(decimalsAsset));
  const collateralUsd = (Number(collateralAmount) * Number(latestPriceETH)) / Math.pow(10, Number(decimalsETH));
  const maxLiquidationUsd = (debtUsd * targetCR - collateralUsd) / (targetCR - 1 - Number(daoFee) / Math.pow(10, Number(precision)) - Number(liquidatorFee) / Math.pow(10, Number(precision)));
  const maxLiquidation = maxLiquidationUsd / Number(latestPriceAsset) * Math.pow(10, Number(decimalsAsset));
  return Math.max(0, maxLiquidation); // Ensure the result is not negative
};

export const liquidationPayment = (
  payment: number,
  assetPrice: BigInt,
  etherPrice: BigInt,
  decimalsAsset: BigInt,
  etherDecimals: BigInt,
  liquidatorFee: BigInt,
  precision: BigInt
): number => {
  // Calculate the redemption amount
  const redemption = (payment * Number(assetPrice) * Math.pow(10, Number(etherDecimals))) / (Number(etherPrice) * Math.pow(10, Number(decimalsAsset)));

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
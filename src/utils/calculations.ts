import { BigInt } from "@graphprotocol/graph-ts"
import numeral from "numeral";

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

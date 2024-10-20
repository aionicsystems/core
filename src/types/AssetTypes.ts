export type AssetType = {
  id: string;
  dataFeedAddress: string;
  symbol: string;
  name: string;
  rate: BigInt;
  latestPrice: BigInt;
  liquidationRatio: BigInt;
  aggregator: {
    decimals: BigInt;
  };
};

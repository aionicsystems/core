export type AssetType = {
  id: string;
  dataFeedAddress: string;
  symbol: string;
  name: string;
  rate: number;
  latestPrice: number;
  liquidationRatio: string;
  aggregator: {
    decimals: number;
  };
};

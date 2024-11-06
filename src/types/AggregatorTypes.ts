export type AggregatorType = {
    id: string;
    decimals: BigInt;
    prices: Price[];
  };

  type Price = {
    blockTimestamp: number;
    price: number;
  }
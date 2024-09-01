import { AssetType } from "./AssetTypes.ts";

export type LoanType = {
  id: string;
  asset: AssetType;
  liabilityAmount: number;
  collateralAmount: number;
  liquidationRatio: number;
  borrowingRatio: number;
  interestRate: number;
};

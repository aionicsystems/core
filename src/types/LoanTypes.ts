import { AssetType } from "./AssetTypes.ts";

export type LoanType = {
  id: number;
  asset: AssetType;
  liability: number;
  collateral: number;
  rate: number;
};

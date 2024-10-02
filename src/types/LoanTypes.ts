import { BigInt } from "@graphprotocol/graph-ts";
import { AssetType } from "./AssetTypes.ts";

export type LoanType = {
  id: string;
  asset: AssetType;
  liabilityAmount: BigInt;
  collateralAmount: BigInt;
  liquidationRatio: BigInt;
  borrowingRatio: BigInt;
  interestRate: BigInt;
};

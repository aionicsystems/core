import { AssetType } from "./AssetTypes.ts";
import { OwnerType } from "./OwnerTypes.ts";

export type LoanType = {
  id: string;
  owner: OwnerType;
  asset: AssetType;
  liabilityAmount: BigInt;
  collateralAmount: BigInt;
  liquidationRatio: BigInt;
  borrowingRatio: BigInt;
  interestRate: BigInt;
  lastCollection: BigInt;
  interest: number;
  collectorFee: BigInt;
  daoFee: BigInt;
  liquidatorFee: BigInt;
  collectorReward: number;
  liquidationAmount: number;
  liquidatorReward: number;
};

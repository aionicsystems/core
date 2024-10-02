import { FC, useState, useEffect } from "react";
import { AssetType } from "../../types/AssetTypes.ts";
import { WindowType } from "../../types/WindowTypes.ts";
import styles from "./IssueAssetInfo.module.css";
import {
  displayInterestRate,
  displayRatio,
  estimatedLiability
} from "../../utils/calculations.ts";
import { useQuery } from "@tanstack/react-query";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";
import { REQUEST_WINDOW_ENTITIES } from "../../repository/requestKeys.ts";
import { client, windowEntities } from "../../repository/requests.ts";
import { Loader } from "../Loader/Loader.tsx";

export type IssueAssetInfoProps = {
  issue: AssetType;
  collateralAmount: string;
};

export const IssueAssetInfo: FC<IssueAssetInfoProps> = ({ issue, collateralAmount }) => {
  
  const { state } = useGlobalState();
  const [error, setError] = useState<boolean>(false);
  const [liabilityUsd, setLiabilityUsd] = useState<string>("0")
  
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const result = await client.query({
          query: windowEntities,
        });
        return result.data;
      } catch (error) {
        setError(true);
        throw error;
      }
    },
    queryKey: [REQUEST_WINDOW_ENTITIES],
  });

  let window: WindowType = data?.windowEntities[0] ?? [];
  let collateral: AssetType = data?.assetEntity ?? [];

  useEffect(() => {
    setLiabilityUsd(
      estimatedLiability(collateralAmount, collateral.latestPrice, issue.latestPrice, window.borrowingRatio, window.precision).toFixed(2)
    )
    console.log(liabilityUsd)
  }, [state, issue, window, collateralAmount]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.issueInfoWrapper}>
      <p className={styles.issueInfoTitle}>Asset</p>
      <div className={styles.issueInfoValue}>{liabilityUsd} {issue.symbol}</div>
      <div className={styles.issueInfoValue}>Borrowing Ratio {displayRatio(window.borrowingRatio)}</div>
      <div className={styles.issueInfoValue}>
        Liquidation Ratio{" "}
        {displayRatio(issue.liquidationRatio)}
      </div>
      <div className={styles.issueInfoValue}>
        Annual Interest Rate {displayInterestRate(issue.rate)}
      </div>
    </div>
  );
};

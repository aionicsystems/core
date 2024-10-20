import { SortableTableDataType } from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";
import {
  collateralizationRatioPercent,
  displayCoin,
  displayNumber,
  displayRatio,
} from "../../utils/calculations.ts";
import { AssetType } from "../../types/AssetTypes.ts";


export type SortableTableBodyItemProps<T> = {
  dataItem: SortableTableDataType<T>;
  dataKey: string;
  mutateValue?: (v: string | BigInt | T, join?: string) => string | BigInt;
  destructure?: (o: T) => T[keyof T];
  collateral?: AssetType;
};

export const SortableTableBodyItem = <T,>({
  dataItem,
  dataKey,
  collateral,
}: SortableTableBodyItemProps<T>) => {


  const value = (key: string) => {
    switch (key) {
      case "id":
        return `${String(dataItem.id).substring(0, 8)}...`
      case "asset.symbol":
        return dataItem.asset?.symbol;
      case "liabilityAmount":
        return `${displayCoin(dataItem["liabilityAmount"],6)} ${dataItem.asset?.symbol}`;
      case "collateralAmount":
        return `${displayCoin(dataItem["collateralAmount"],6)} ${collateral?.symbol}`;
      case "cRatio":
        return collateralizationRatioPercent(
          dataItem["collateralAmount"],
          collateral?.latestPrice,
          collateral?.aggregator?.decimals,
          dataItem["liabilityAmount"],
          dataItem.asset?.latestPrice,
          dataItem.asset?.aggregator?.decimals,
        );
      case "liquidationRatio":
        return `${displayRatio(dataItem["liquidationRatio"])}`;
      case "interestRate":
        return `${displayRatio(dataItem["interestRate"])}`;
      case "interest":
        return `${displayNumber(dataItem["interest"], 6)} ${collateral?.symbol}`;
      case "collectorAward":
        return `${displayNumber(dataItem["collectorReward"], 6)} ${collateral?.symbol}`;
      case "liquidationAmount":
        return `${displayCoin(dataItem["liquidationAmount"], 6)} ${dataItem.asset?.symbol}`;
      case "liquidatorReward":
        return `${displayNumber(dataItem["liquidatorReward"], 6)} ${collateral?.symbol}`;
      default:
        return "";
    }
  };

  return (
    <td className={styles.sortableTableTBodyItem}>
      <div className={styles.sortableTableTBodyItemInner}>
        {dataKey ? value(dataKey) : ""}
      </div>
    </td>
  );
};

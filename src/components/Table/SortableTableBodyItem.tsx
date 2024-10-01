import { SortableTableDataType } from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";
import {
  collateralizationRatio,
  displayCoin,
  displayRatio,
} from "../../utils/calculations.ts";
import { AssetType } from "../../types/AssetTypes.ts";
import { BigInt } from "@graphprotocol/graph-ts";


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
      case "liabilityAmount":
        return `${displayCoin(dataItem["liabilityAmount"])} ${dataItem.asset?.symbol}`;
      case "collateralAmount":
        return `${displayCoin(dataItem["collateralAmount"])} ${collateral?.symbol}`;
      case "cRatio":
        return collateralizationRatio(
          dataItem["collateralAmount"],
          collateral?.latestPrice,
          collateral?.aggregator?.decimals,
          dataItem["liabilityAmount"],
          dataItem.asset?.latestPrice,
          dataItem.asset?.aggregator?.decimals,
        );
      case "liquidationRatio":
        return `${displayRatio(dataItem["liquidationRatio"])}`;
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

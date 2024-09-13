import { SortableTableDataType } from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";
import {
  loanCollateralUSD,
  loanCRatio,
  loanLiabilityUSD,
} from "../../utils/calculations.ts";

export type SortableTableBodyItemProps<T> = {
  dataItem: SortableTableDataType<T>;
  dataKey: string;
  mutateValue?: (v: string | number) => string | number;
  destructure?: (o: T) => T[keyof T];
};

export const SortableTableBodyItem = <T,>({
  dataItem,
  dataKey,
  mutateValue,
  destructure,
}: SortableTableBodyItemProps<T>) => {
  const calcCRatio = (
    collateralAmount?: number,
    latestPrice?: number,
    decimals?: number,
    liabilityAmount?: number,
  ) => {
    const collateralUSD = loanCollateralUSD(
      collateralAmount,
      latestPrice,
      decimals,
    );
    const liabilityUSD = loanLiabilityUSD(
      liabilityAmount,
      latestPrice,
      decimals,
    );

    return loanCRatio(collateralUSD, liabilityUSD);
  };

  return (
    <td className={styles.sortableTableTBodyItem}>
      <div className={styles.sortableTableTBodyItemInner}>
        {mutateValue
          ? mutateValue(dataItem[dataKey])
          : destructure
            ? destructure(dataItem)
            : dataKey === "cRatio"
              ? calcCRatio(
                  dataItem["collateralAmount"],
                  dataItem.asset?.latestPrice,
                  dataItem.asset?.aggregator.decimals,
                  dataItem["liabilityAmount"],
                )
              : dataItem[dataKey]}
      </div>
    </td>
  );
};

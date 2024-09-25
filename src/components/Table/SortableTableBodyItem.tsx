import { SortableTableDataType } from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";
import {
  loanCollateralUSD,
  loanCRatio,
  loanLiabilityUSD,
} from "../../utils/calculations.ts";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";

export type SortableTableBodyItemProps<T> = {
  dataItem: SortableTableDataType<T>;
  dataKey: string;
  mutateValue?: (v: string | number | T, join?: string) => string | number;
  destructure?: (o: T) => T[keyof T];
  assetSymbol?: string;
};

export const SortableTableBodyItem = <T,>({
  dataItem,
  dataKey,
  mutateValue,
  destructure,
  assetSymbol,
}: SortableTableBodyItemProps<T>) => {
  const {
    state: { Price },
  } = useGlobalState();

  const calcCRatio = (
    collateralAmount?: number,
    latestPrice?: number,
    latestPriceETH?: number,
    decimals?: number,
    decimalsETH?: number,
    liabilityAmount?: number,
  ) => {
    const collateralUSD = loanCollateralUSD(
      collateralAmount,
      latestPriceETH,
      decimalsETH,
    );
    const liabilityUSD = loanLiabilityUSD(
      liabilityAmount,
      latestPrice,
      decimals,
    );

    return loanCRatio(collateralUSD, liabilityUSD);
  };

  const takeMutableValueJoin = (key: string) => {
    switch (key) {
      case "liabilityAmount":
        return dataItem?.asset?.symbol;
      case "collateralAmount":
        return assetSymbol;
      default:
        return "";
    }
  };

  return (
    <td className={styles.sortableTableTBodyItem}>
      <div className={styles.sortableTableTBodyItemInner}>
        {mutateValue
          ? mutateValue(dataItem[dataKey], takeMutableValueJoin(dataKey))
          : destructure
            ? destructure(dataItem)
            : dataKey === "cRatio"
              ? calcCRatio(
                  dataItem["collateralAmount"],
                  dataItem.asset?.latestPrice,
                  Number(Price?.get("collateralPrice")),
                  dataItem.asset?.aggregator.decimals,
                  Number(Price?.get("collateralDecimals")),
                  dataItem["liabilityAmount"],
                )
              : dataItem[dataKey]}
      </div>
    </td>
  );
};

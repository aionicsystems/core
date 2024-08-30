import { SortableTableDataType } from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";

export type SortableTableBodyItemProps<T> = {
  dataItem: SortableTableDataType<T>;
  dataKey: string;
};

export const SortableTableBodyItem = <T,>({
  dataItem,
  dataKey,
}: SortableTableBodyItemProps<T>) => {
  return (
    <td className={styles.sortableTableTBodyItem}>
      <div className={styles.sortableTableTBodyItemInner}>
        {dataKey === "assetName" ? dataItem["asset"].name : dataItem[dataKey]}
      </div>
    </td>
  );
};

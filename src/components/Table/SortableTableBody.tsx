import {
  SortableTableDataType,
  SortableTableHeadType,
} from "../../types/TableTypes.ts";
import { SortableTableBodyItem } from "./SortableTableBodyItem.tsx";
import styles from "./SortableTable.module.css";
import { useMemo } from "react";

export type SortableTableBodyProps<T> = {
  tableData: SortableTableDataType<T>[];
  titles: SortableTableHeadType[];
  sortOrder?: "asc" | "desc" | null;
  sortBy?: string;
  isError: boolean;
  selectLoan?: (itemID: string) => void;
};

export const SortableTableBody = <T,>({
  tableData,
  titles,
  sortBy,
  sortOrder,
  isError,
  selectLoan,
}: SortableTableBodyProps<T>) => {
  const sortedData = useMemo(() => {
    return tableData.slice().sort((a, b) => {
      if (!sortBy || sortOrder === null) return 0;

      const aValue = a[sortBy] as string | number;
      const bValue = b[sortBy] as string | number;

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }, [sortBy, sortOrder, tableData]);

  return (
    <tbody className={styles.sortableTableTBody}>
      {sortedData.length > 0 || !isError ? (
        sortedData.map((dataItem) => (
          <tr
            onClick={() => (selectLoan ? selectLoan(dataItem.id) : null)}
            key={dataItem.id}
          >
            {titles.map((title) => (
              <SortableTableBodyItem
                key={title.key}
                dataItem={dataItem}
                dataKey={title.key}
              />
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={titles.length} className={styles.sortableTableTBodyItem}>
            <div className={styles.sortableTableTBodyItemInner}>No data.</div>
          </td>
        </tr>
      )}
    </tbody>
  );
};

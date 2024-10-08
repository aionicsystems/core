import {
  SortableTableDataType,
  SortableTableHeadType,
} from "../../types/TableTypes.ts";
import { SortableTableBodyItem } from "./SortableTableBodyItem.tsx";
import styles from "./SortableTable.module.css";
import { Fragment, useMemo } from "react";
import { AssetType } from "../../types/AssetTypes.ts";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";

export type SortableTableBodyProps<T> = {
  tableData: SortableTableDataType<T>[];
  titles: SortableTableHeadType<T>[];
  sortOrder?: "asc" | "desc" | null;
  sortBy?: keyof T;
  isError: boolean;
  collateral?: AssetType;
};

export const SortableTableBody = <T,>({
  tableData,
  titles,
  sortBy,
  sortOrder,
  isError,
  collateral,
}: SortableTableBodyProps<T>) => {
  const { state, setState } = useGlobalState();
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
      {sortedData.length > 0 && !isError ? (
        sortedData.map((dataItem, index) => {
          return (
          <Fragment key={dataItem.id}>
            <tr
              onClick={() => (setState ? setState({...state, loanId: dataItem.id}) : null)}
              className={`${state.loanId === dataItem.id ? styles.selectedRow : ""}`}
            >
              {titles.map((title) => (
                <SortableTableBodyItem
                  key={title.key}
                  mutateValue={title.mutateValue}
                  destructure={title.destructure}
                  dataItem={dataItem}
                  dataKey={title.key}
                  collateral={collateral}
                />
              ))}
            </tr>
            {sortedData.length !== index + 1 && (
              <tr className={styles.separatorRow}>
                <td colSpan={titles.length}></td>
              </tr>
            )}
          </Fragment>
        )})
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

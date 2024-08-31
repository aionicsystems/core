import {
  SortableTableConfigType,
  SortableTableDataType,
  SortableTableHeadType,
} from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";
import { SortableTableHead } from "./SortableTableHead.tsx";
import { SortableTableBody } from "./SortableTableBody.tsx";
import { DefaultError, QueryObserverResult } from "@tanstack/react-query";

export type SortableTableProps<T> = {
  titles: SortableTableHeadType[];
  isError: boolean;
  tableData: SortableTableDataType<T>[];
  setTableConfig: ({
    sort_by,
    sort_order,
    filters,
    page_number,
  }: SortableTableConfigType) => void;
  tableConfig: SortableTableConfigType;
  callRefetch: () => Promise<QueryObserverResult<unknown, DefaultError>>;
};

export const SortableTable = <T,>({
  titles,
  tableData,
  setTableConfig,
  tableConfig,
  isError,
  callRefetch,
}: SortableTableProps<T>) => {
  const handleSort = async (columnKey: string) => {
    const { sort_order } = tableConfig;
    const newSortOrder =
      sort_order === "asc" || sort_order === null ? "desc" : "asc";

    const updatedConfig: SortableTableConfigType = {
      ...tableConfig,
      sort_order: newSortOrder,
      sort_by: columnKey,
    };

    setTableConfig({ ...updatedConfig });
    await callRefetch();
  };

  return (
    <div className={styles.sortableTableWrapper}>
      <table className={styles.sortableTable}>
        <SortableTableHead
          onSort={handleSort}
          titles={titles}
          tableConfig={tableConfig}
        />
        <SortableTableBody<T>
          sortOrder={tableConfig.sort_order}
          sortBy={tableConfig.sort_by}
          tableData={tableData}
          titles={titles}
          isError={isError}
        />
      </table>
    </div>
  );
};

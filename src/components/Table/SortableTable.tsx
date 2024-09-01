import {
  SortableTableConfigType,
  SortableTableDataType,
  SortableTableHeadType,
} from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";
import { SortableTableHead } from "./SortableTableHead.tsx";
import { SortableTableBody } from "./SortableTableBody.tsx";
import { DefaultError, QueryObserverResult } from "@tanstack/react-query";
import React, { useCallback, useEffect, useRef, useState } from "react";

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
  selectLoan?: (itemID: string) => void;
  selectedID?: string;
};

export const SortableTable = <T,>({
  titles,
  tableData,
  setTableConfig,
  tableConfig,
  isError,
  callRefetch,
  selectLoan,
  selectedID,
}: SortableTableProps<T>) => {
  const tableWrapper = useRef<HTMLDivElement | null>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);
  const [startHeight, setStartHeight] = useState<number>(0);
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

  const startResizing = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
    setStartY(e.clientY);
    if ("offsetHeight" in tableWrapper.current) {
      setStartHeight(tableWrapper.current.offsetHeight);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isResizing || tableWrapper.current) {
        const newHeight = startHeight + (e.clientY - startY);
        if ("style" in tableWrapper.current) {
          tableWrapper.current.style.height = `${newHeight}px`;
        }
      }
    },
    [isResizing, startY, startHeight],
  );

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", stopResizing);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopResizing);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing, handleMouseMove, stopResizing]);

  useEffect(() => {
    if ("scrollHeight" in tableWrapper.current) {
      const maxAvailableScreenHeight = screen.height * 0.56;
      const newMaxHeight =
        tableWrapper.current.scrollHeight > maxAvailableScreenHeight
          ? maxAvailableScreenHeight.toFixed(0)
          : tableWrapper.current.scrollHeight;
      tableWrapper.current.style.maxHeight = `${newMaxHeight}px`;
    }
  }, []);

  return (
    <>
      <div ref={tableWrapper} className={styles.sortableTableWrapper}>
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
            selectLoan={selectLoan}
            selectedID={selectedID}
          />
        </table>
      </div>
      <div
        onMouseDown={(e) => startResizing(e)}
        className={styles.sortableTableResize}
      />
    </>
  );
};

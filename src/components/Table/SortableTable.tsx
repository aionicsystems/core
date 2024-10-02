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
import { AssetType } from "../../types/AssetTypes.ts";

export type SortableTableProps<T> = {
  titles: SortableTableHeadType<T>[];
  isError: boolean;
  tableData: SortableTableDataType<T>[];
  setTableConfig: ({
    sort_by,
    sort_order,
    filters,
    page_number,
  }: SortableTableConfigType<T>) => void;
  tableConfig: SortableTableConfigType<T>;
  callRefetch: () => Promise<QueryObserverResult<unknown, DefaultError>>;
  selectLoan?: (itemID: string) => void;
  selectedID?: string;
  collateral?: AssetType;
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
  collateral,
}: SortableTableProps<T>) => {
  const tableWrapper = useRef<HTMLDivElement | null>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);
  const [startHeight, setStartHeight] = useState<number>(0);
  const handleSort = async (columnKey: keyof T) => {
    const { sort_order } = tableConfig;
    const newSortOrder =
      sort_order === "asc" || sort_order === null ? "desc" : "asc";

    const updatedConfig: SortableTableConfigType<T> = {
      ...tableConfig,
      sort_order: newSortOrder,
      sort_by: columnKey,
    };

    setTableConfig({ ...updatedConfig });
    await callRefetch();
  };

  const startResizing = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    ) => {
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      setIsResizing(true);
      setStartY(clientY);
      if (
        tableWrapper.current !== null &&
        "offsetHeight" in tableWrapper.current
      ) {
        setStartHeight(tableWrapper.current.offsetHeight);
      }
      document.body.classList.add("no-select");
    },
    [],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (isResizing || tableWrapper.current) {
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
        const newHeight = startHeight + (clientY - startY);
        if (tableWrapper.current !== null && "style" in tableWrapper.current) {
          tableWrapper.current.style.height = `${newHeight}px`;
        }
      }
    },
    [isResizing, startY, startHeight],
  );

  const stopResizing = useCallback(() => {
    setIsResizing(false);
    document.body.classList.remove("no-select");
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", stopResizing);
      document.addEventListener("touchmove", handleMouseMove);
      document.addEventListener("touchend", stopResizing);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopResizing);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", stopResizing);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopResizing);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", stopResizing);
    };
  }, [isResizing, handleMouseMove, stopResizing]);

  useEffect(() => {
    if (
      tableWrapper.current !== null &&
      "scrollHeight" in tableWrapper.current
    ) {
      const maxAvailableScreenHeight = screen.height * 0.7;
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
            collateral={collateral}
          />
        </table>
      </div>
      <div
        onMouseDown={(e) => startResizing(e)}
        onTouchStart={(e) => startResizing(e)}
        className={styles.sortableTableResize}
      />
    </>
  );
};

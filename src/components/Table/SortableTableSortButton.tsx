import { FC } from "react";
import styles from "./SortableTable.module.css";
import { sort } from "../../static/images.ts";

export type SortableTableSortButtonProps = {
  sortBy?: string;
  sortOrder?: "asc" | "desc" | null;
  titleKey: string;
  onSort: (key: string) => void;
};

export const SortableTableSortButton: FC<SortableTableSortButtonProps> = ({
  sortOrder,
  sortBy,
  titleKey,
  onSort,
}) => {
  return (
    <button
      onClick={() => onSort(titleKey)}
      className={styles.sortableTableSortButton}
    >
      <img
        style={{
          opacity: sortBy === titleKey && sortOrder === "desc" ? "0" : "",
        }}
        loading="lazy"
        src={sort as string}
        alt="sort asc"
      />
      <img
        style={{
          opacity: sortBy === titleKey && sortOrder === "asc" ? "0" : "",
        }}
        loading="lazy"
        src={sort as string}
        alt="sort desc"
      />
    </button>
  );
};

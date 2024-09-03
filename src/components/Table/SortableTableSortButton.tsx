import styles from "./SortableTable.module.css";
import { sort } from "../../static/images.ts";

export type SortableTableSortButtonProps<T> = {
  sortBy?: keyof T;
  sortOrder?: "asc" | "desc" | null;
  titleKey: string;
  onSort: (key: keyof T) => void;
};

export const SortableTableSortButton = <T,>({
  sortOrder,
  sortBy,
  titleKey,
  onSort,
}: SortableTableSortButtonProps<T>) => {
  return (
    <button
      onClick={() => onSort(titleKey as keyof T)}
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

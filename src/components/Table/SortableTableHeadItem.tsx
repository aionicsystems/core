import {
  SortableTableConfigType,
  SortableTableHeadType,
} from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";
import { SortableTableSortButton } from "./SortableTableSortButton.tsx";

export type SortableTableHeadItemProps<T> = {
  title: SortableTableHeadType<T>;
  tableConfig: SortableTableConfigType<T>;
  onSort: (key: keyof T) => void;
};

export const SortableTableHeadItem = <T,>({
  tableConfig,
  title,
  onSort,
}: SortableTableHeadItemProps<T>) => {
  return (
    <th className={styles.sortableTableTHeadItem}>
      <div className={styles.sortableTableTHeadItemInner}>
        {title.title}
        {title.sortable && (
          <SortableTableSortButton
            onSort={onSort}
            sortBy={tableConfig.sort_by}
            sortOrder={tableConfig.sort_order}
            titleKey={title.key}
          />
        )}
      </div>
    </th>
  );
};

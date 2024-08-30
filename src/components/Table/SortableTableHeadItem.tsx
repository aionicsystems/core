import { FC } from "react";
import {
  SortableTableConfigType,
  SortableTableHeadType,
} from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";
import { SortableTableSortButton } from "./SortableTableSortButton.tsx";

export type SortableTableHeadItemProps = {
  title: SortableTableHeadType;
  tableConfig: SortableTableConfigType;
  onSort: (key: string) => void;
};

export const SortableTableHeadItem: FC<SortableTableHeadItemProps> = ({
  tableConfig,
  title,
  onSort,
}) => {
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

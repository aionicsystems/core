import {
  SortableTableConfigType,
  SortableTableHeadType,
} from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";
import { SortableTableHeadItem } from "./SortableTableHeadItem.tsx";

export type SortableTableHeadProps<T> = {
  titles: SortableTableHeadType<T>[];
  tableConfig: SortableTableConfigType<T>;
  onSort: (key: keyof T) => void;
};

export const SortableTableHead = <T,>({
  tableConfig,
  titles,
  onSort,
}: SortableTableHeadProps<T>) => {
  return (
    <thead className={styles.sortableTableTHead}>
      <tr>
        {titles.map((title) => {
          return (
            <SortableTableHeadItem
              key={title.key}
              onSort={onSort}
              tableConfig={tableConfig}
              title={title}
            />
          );
        })}
      </tr>
      <tr className={styles.separatorRow}>
        <th colSpan={titles.length}></th>
      </tr>
    </thead>
  );
};

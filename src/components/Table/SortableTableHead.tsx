import { FC } from "react";
import {
  SortableTableConfigType,
  SortableTableHeadType,
} from "../../types/TableTypes.ts";
import styles from "./SortableTable.module.css";
import { SortableTableHeadItem } from "./SortableTableHeadItem.tsx";

export type SortableTableHeadProps = {
  titles: SortableTableHeadType[];
  tableConfig: SortableTableConfigType;
  onSort: (key: string) => void;
};

export const SortableTableHead: FC<SortableTableHeadProps> = ({
  tableConfig,
  titles,
  onSort,
}) => {
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
    </thead>
  );
};

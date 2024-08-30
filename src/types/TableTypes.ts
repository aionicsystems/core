export type SortableTableHeadType = {
  title: string;
  sortable?: boolean;
  key: string;
};

export type SortableTableConfigType = {
  sort_by?: string;
  sort_order?: "asc" | "desc" | null;
  filters?: Record<string, string>;
  page_number?: number;
};

export type SortableTableDataType<T> = {
  [K in keyof T]: T[K];
};

export type SortableTableMetaType = {
  current_page: number;
  last_page: number;
  per_page: number;
  from: number;
  to: number;
  total: number;
};

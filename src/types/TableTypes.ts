import { BigInt } from "@graphprotocol/graph-ts";
import { AssetType } from "./AssetTypes";

export type SortableTableHeadType<T> = {
  title: string;
  sortable?: boolean;
  key: string;
  mutateValue?: (v: string | BigInt | T, join?: string) => string | BigInt;
  destructure?: (o: T) => T[keyof T];
};

export type SortableTableConfigType<T> = {
  sort_by?: keyof T;
  sort_order?: "asc" | "desc" | null;
  filters?: Record<string, string>;
  page_number?: number;
};

export type SortableTableDataType<T> = {
  [K in keyof T]: T[K];
} & { 
  id: string; 
  asset?: AssetType;
};

export type SortableTableMetaType = {
  current_page: number;
  last_page: number;
  per_page: number;
  from: number;
  to: number;
  total: number;
};

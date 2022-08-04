export interface TableHeaderItem {
  label: string;
  value: string | number;
  children?: Array<TableHeaderItem> | [];
  [key: string]: any;
}

export type TableHeader = Array<TableHeaderItem>;

export type TableData = Array<{
  [key: string]: any;
}>;

export interface TableObj {
  tableHeader: TableHeader;
  tableData: TableData;
}

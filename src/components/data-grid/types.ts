export type { DataGridProps, CellProps, Column, Row };

type DataGridProps = Readonly<{
  columns: Column[];
  rows: Row[];
}>;

type CellProps = Readonly<{
  column: Column;
  row: Row;
}>;

type Column = Readonly<{
  field: string;
  label?: string;
  cell: React.ComponentType<CellProps>;
  width?: number;
}>;

type Row = Readonly<{
  id: number | string;
  [K: string]: any;
}>;

import type { DataGridProps } from "./types";
import styles from "./styles.module.css";
import clsx from "clsx";

export function DataGrid(props: DataGridProps) {
  return (
    <table className={styles["data-grid"]}>
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th
              key={column.field}
              className={clsx(styles["cell"])}
              style={{ width: column.width }}
            >
              {column.label ?? ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <tr key={row.id}>
            {props.columns.map((column) => (
              <td key={column.field} className={clsx(styles["cell"])}>
                <column.cell column={column} row={row} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

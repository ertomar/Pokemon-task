import "./rowData.css";

export function RowData({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) {
  return (
    <div className="row-data-wrapper">
      <span className="text-gray-400">{label}</span>
      <span>{value}</span>
    </div>
  );
}

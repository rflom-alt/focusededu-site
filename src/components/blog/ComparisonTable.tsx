export type Comparison = {
  title: string;
  columns: string[]; // header cells; first column is the row-label column
  rows: string[][]; // each row: [rowLabel, ...cells] aligned to columns
};

/** "At a glance" comparison table rendered inside an article. Responsive (scrolls on mobile). */
export function ComparisonTable({ data }: { data: Comparison }) {
  return (
    <div className="my-12">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">At a glance</p>
      {data.title && (
        <h3 className="mt-2 text-xl font-semibold text-navy-950">{data.title}</h3>
      )}
      <div className="mt-4 overflow-x-auto rounded-2xl border border-cloud">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-mist">
              {data.columns.map((c, i) => (
                <th
                  key={i}
                  className={`p-3 text-left font-semibold text-navy-950 ${i === 0 ? "" : "border-l border-cloud"}`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, ri) => (
              <tr key={ri} className="border-t border-cloud align-top">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`p-3 leading-relaxed ${ci === 0 ? "font-medium text-navy-900" : "border-l border-cloud text-slate-ink"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

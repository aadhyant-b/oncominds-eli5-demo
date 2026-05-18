export function Badge({ variant = "neutral", children }) {
  const styles = {
    mock: "bg-amber-50 text-amber-800 ring-amber-200/80",
    neutral: "bg-slate-100 text-slate-600 ring-slate-200/80",
    reviewed: "bg-teal-50 text-teal-800 ring-teal-200/80",
    needs: "bg-orange-50 text-orange-800 ring-orange-200/80",
    patient: "bg-blue-50 text-blue-800 ring-blue-200/80",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[variant] ?? styles.neutral}`}
    >
      {children}
    </span>
  );
}

export default function Header() {
  return (
    <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-600 text-white font-bold text-sm shadow-sm">
            OM
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-900 tracking-tight">
              OncoMinds ELI5
            </h1>
            <p className="text-sm text-slate-500">
              Patient-friendly summaries from reviewed oncology insights
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="mock">Mock Data</Badge>
          <Badge variant="neutral">Demo Environment</Badge>
        </div>
      </div>
    </header>
  );
}

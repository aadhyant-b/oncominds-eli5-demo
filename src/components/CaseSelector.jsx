import { mockCases } from "../data/mockCases";

const cancerColors = {
  Breast: "from-pink-500/10 to-rose-500/10 border-pink-200/60",
  Lung: "from-slate-500/10 to-blue-500/10 border-slate-200/60",
  Colon: "from-teal-500/10 to-emerald-500/10 border-teal-200/60",
};

export default function CaseSelector({ selectedId, onSelect }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/40 p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Select a demo oncology case
          </h2>
          <p className="mt-1 text-sm text-slate-500 max-w-xl">
            All cases use fictional patients and synthetic records. No real PHI
            or live APIs.
          </p>
        </div>
        <span className="inline-flex self-start rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-200/80">
          Mock Data
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {mockCases.map((c) => {
          const selected = c.id === selectedId;
          const gradient = cancerColors[c.cancerType] ?? cancerColors.Breast;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onSelect(c.id)}
              className={`group text-left rounded-xl border p-4 transition-all duration-200 bg-gradient-to-br ${gradient} ${
                selected
                  ? "ring-2 ring-blue-500 border-blue-300 shadow-md"
                  : "hover:border-slate-300 hover:shadow-sm border-slate-200/80"
              }`}
            >
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {c.cancerType} cancer
              </span>
              <p className="mt-1 font-semibold text-slate-900 text-sm leading-snug">
                {c.title}
              </p>
              <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                {c.patientOverview.diagnosis}
              </p>
              <p className="mt-3 text-xs text-slate-500">
                {c.uploadedFiles.length} files · {c.aiModels.length} AI models
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

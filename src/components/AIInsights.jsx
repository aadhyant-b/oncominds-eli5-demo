import { Badge } from "./Header";

const confidenceStyles = {
  High: "bg-teal-100 text-teal-800",
  "Medium-High": "bg-teal-50 text-teal-700",
  Medium: "bg-blue-50 text-blue-700",
  "Low-Medium": "bg-amber-50 text-amber-800",
};

const modelAccent = ["border-l-blue-500", "border-l-teal-500", "border-l-indigo-500"];

export default function AIInsights({ caseData }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/40 overflow-hidden">
      <div className="border-b border-slate-100 bg-slate-50/80 px-5 sm:px-6 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h2 className="text-base font-semibold text-slate-900">
            AI-generated doctor-facing insights
          </h2>
          <Badge variant="mock">Mock Data</Badge>
        </div>
        <p className="text-sm text-slate-500">
          Three independent models analyzed uploaded files. For clinician review
          only — not patient directives.
        </p>
      </div>

      <div className="p-5 sm:p-6 grid gap-4 lg:grid-cols-1">
        {caseData.aiModels.map((model, index) => (
          <article
            key={model.id}
            className={`rounded-xl border border-slate-100 bg-white border-l-4 ${modelAccent[index % modelAccent.length]} p-4 sm:p-5 shadow-sm`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
              <div>
                <h3 className="font-semibold text-slate-900">{model.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {model.version} · Doctor portal output
                </p>
              </div>
              <span
                className={`self-start inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  confidenceStyles[model.confidence] ?? confidenceStyles.Medium
                }`}
              >
                Confidence: {model.confidence}
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">{model.summary}</p>

            <ul className="mt-4 space-y-1.5">
              {model.keyPoints.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-slate-600">
                  <span className="text-blue-500 shrink-0">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="px-5 sm:px-6 pb-5 text-xs text-slate-500 border-t border-slate-100 pt-4 mx-5 sm:mx-6 mb-0">
        AI outputs may contain errors or outdated assumptions. Clinical decisions
        require licensed provider judgment and direct patient evaluation.
      </p>
    </section>
  );
}

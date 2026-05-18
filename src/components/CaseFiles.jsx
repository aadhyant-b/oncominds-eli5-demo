import { Badge } from "./Header";

const typeIcons = {
  Pathology: "🔬",
  Imaging: "🩻",
  Genomic: "🧬",
  "Clinical Notes": "📋",
  Surgery: "🏥",
  Labs: "🧪",
  PFT: "🫁",
};

export default function CaseFiles({ caseData }) {
  const { patientOverview, uploadedFiles, extractedFacts } = caseData;

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/40 overflow-hidden">
      <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50/80 to-teal-50/50 px-5 sm:px-6 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h2 className="text-base font-semibold text-slate-900">
            Uploaded case files
          </h2>
          <Badge variant="mock">Mock Data</Badge>
        </div>
        <p className="text-sm text-slate-500">
          Patient-submitted documents used for AI analysis in this demo.
        </p>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <OverviewItem label="Demo patient" value={patientOverview.displayName} />
          <OverviewItem label="Age / sex" value={`${patientOverview.age} · ${patientOverview.sex}`} />
          <OverviewItem label="Stage (clinical)" value={patientOverview.stage} />
          <OverviewItem label="Last updated" value={patientOverview.lastUpdated} />
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-3">Files on record</h3>
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-100">
            {uploadedFiles.map((file) => (
              <li
                key={file.name}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 py-3 hover:bg-slate-50/80 transition-colors"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span className="text-lg shrink-0" aria-hidden>
                    {typeIcons[file.type] ?? "📄"}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium text-sm text-slate-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {file.type} · {file.pages} pages · uploaded {file.uploadedAt}
                    </p>
                  </div>
                </div>
                <span className="self-start sm:self-center shrink-0 rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
                  Extracted
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-2">
            Extracted case facts
          </h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {extractedFacts.map((fact) => (
              <li
                key={fact}
                className="flex gap-2 text-sm text-slate-600 rounded-lg bg-slate-50 px-3 py-2 border border-slate-100"
              >
                <span className="text-teal-600 shrink-0">•</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-slate-500 border-t border-slate-100 pt-4">
          Care team (demo): {patientOverview.careTeam}
        </p>
      </div>
    </section>
  );
}

function OverviewItem({ label, value }) {
  return (
    <div className="rounded-lg bg-slate-50 border border-slate-100 px-3 py-2.5">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-sm font-medium text-slate-900 mt-0.5">{value}</p>
    </div>
  );
}

import { Badge } from "./Header";

const sections = [
  { key: "yourCaseInSimpleWords", title: "Your case in simple words" },
  { key: "whatReportsSeemToShow", title: "What the reports seem to show" },
  { key: "whatAiToolsNoticed", title: "What the AI tools noticed" },
  { key: "whatDoctorAgreedWith", title: "What your doctor agreed with" },
  { key: "whatIsStillUncertain", title: "What is still uncertain" },
  {
    key: "possibleNextSteps",
    title: "Possible next steps to discuss with your doctor",
  },
];

export default function PatientSummary({ summary, caseTitle }) {
  if (!summary) return null;

  return (
    <section className="rounded-2xl border-2 border-teal-200/80 bg-white shadow-lg shadow-teal-900/5 overflow-hidden animate-fade-in">
      <div className="border-b border-teal-100 bg-gradient-to-r from-teal-600 to-blue-600 px-5 sm:px-6 py-5 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h2 className="text-lg font-semibold">ELI5 patient summary</h2>
          <Badge variant="patient">Patient Friendly</Badge>
          <Badge variant="mock">Mock Data</Badge>
        </div>
        <p className="text-sm text-teal-50/90">{caseTitle}</p>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {sections.map(({ key, title }) => (
          <SummarySection key={key} title={title} body={summary[key]} />
        ))}

        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <span className="h-6 w-1 rounded-full bg-teal-500" aria-hidden />
            Medical words explained
          </h3>
          <dl className="grid gap-3 sm:grid-cols-2">
            {summary.medicalWordsExplained.map(({ term, meaning }) => (
              <div
                key={term}
                className="rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2.5"
              >
                <dt className="text-sm font-medium text-teal-800">{term}</dt>
                <dd className="text-sm text-slate-600 mt-0.5">{meaning}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <span className="h-6 w-1 rounded-full bg-blue-500" aria-hidden />
            Questions to ask your doctor
          </h3>
          <ul className="space-y-2">
            {summary.questionsToAsk.map((q) => (
              <li
                key={q}
                className="flex gap-3 text-sm text-slate-700 rounded-lg border border-blue-100 bg-blue-50/40 px-3 py-2.5"
              >
                <span className="font-semibold text-blue-600 shrink-0">?</span>
                {q}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4">
          <h3 className="text-sm font-semibold text-amber-900 mb-2">Disclaimer</h3>
          <p className="text-sm text-amber-900/90 leading-relaxed">
            {summary.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

function SummarySection({ title, body }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
        <span className="h-6 w-1 rounded-full bg-blue-500" aria-hidden />
        {title}
      </h3>
      <p className="text-sm text-slate-700 leading-relaxed">{body}</p>
    </div>
  );
}

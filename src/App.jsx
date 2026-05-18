import { useState, useCallback } from "react";
import Header from "./components/Header";
import CaseSelector from "./components/CaseSelector";
import CaseFiles from "./components/CaseFiles";
import AIInsights from "./components/AIInsights";
import DoctorReview from "./components/DoctorReview";
import PatientSummary from "./components/PatientSummary";
import { getCaseById, mockCases } from "./data/mockCases";

const STEPS = [
  { id: 1, label: "Select case" },
  { id: 2, label: "Case files" },
  { id: 3, label: "AI insights" },
  { id: 4, label: "Doctor review" },
  { id: 5, label: "ELI5 summary" },
];

export default function App() {
  const [selectedId, setSelectedId] = useState(mockCases[0].id);
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [generating, setGenerating] = useState(false);

  const caseData = getCaseById(selectedId);

  const handleSelectCase = (id) => {
    setSelectedId(id);
    setSummaryVisible(false);
    setGenerating(false);
  };

  const handleGenerate = useCallback(() => {
    setSummaryVisible(false);
    setGenerating(true);
    window.setTimeout(() => {
      setGenerating(false);
      setSummaryVisible(true);
      window.setTimeout(() => {
        document.getElementById("eli5-summary")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }, 1400);
  }, []);

  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Case not found.
      </div>
    );
  }

  const activeStep = summaryVisible ? 5 : 4;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Hero />

        <StepIndicator activeStep={activeStep} />

        <CaseSelector selectedId={selectedId} onSelect={handleSelectCase} />

        {caseData && (
          <div className="space-y-8 animate-fade-in">
            <CaseFiles caseData={caseData} />
            <AIInsights caseData={caseData} />
            <DoctorReview caseData={caseData} />

            <GeneratePanel
              generating={generating}
              summaryVisible={summaryVisible}
              onGenerate={handleGenerate}
              reviewStatus={caseData.reviewStatus}
            />

            {generating && (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4 animate-pulse-soft">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <p className="font-medium text-slate-900">Generating patient-friendly summary…</p>
                <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                  Combining uploaded files, AI doctor insights, clinician review, and
                  stated uncertainties (demo — no live API).
                </p>
              </div>
            )}

            {summaryVisible && !generating && (
              <div id="eli5-summary">
                <PatientSummary
                  summary={caseData.eli5Summary}
                  caseTitle={caseData.title}
                />
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-200/80 bg-white/60 mt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-slate-500">
          OncoMinds ELI5 Demo · Fictional data only · Not for clinical use · © 2026 Demo
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        Oncology insights, explained for patients
      </h2>
      <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
        Walk through how multiple AI models analyze uploaded case files, how
        oncologists review and annotate those insights, and how a plain-language
        summary can help patients prepare for conversations with their care team.
      </p>
    </div>
  );
}

function StepIndicator({ activeStep }) {
  return (
    <nav aria-label="Progress" className="overflow-x-auto">
      <ol className="flex items-center justify-between min-w-[32rem] gap-2 px-1">
        {STEPS.map((step) => {
          const done = step.id < activeStep;
          const current = step.id === activeStep;
          return (
            <li key={step.id} className="flex-1 flex items-center gap-2">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                  done
                    ? "bg-teal-600 text-white"
                    : current
                      ? "bg-blue-600 text-white ring-4 ring-blue-100"
                      : "bg-slate-100 text-slate-500"
                }`}
              >
                {done ? "✓" : step.id}
              </span>
              <span
                className={`text-xs sm:text-sm font-medium hidden sm:inline ${
                  current ? "text-slate-900" : "text-slate-500"
                }`}
              >
                {step.label}
              </span>
              {step.id < STEPS.length && (
                <span className="hidden md:block flex-1 h-px bg-slate-200 mx-1" aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function GeneratePanel({ generating, summaryVisible, onGenerate, reviewStatus }) {
  return (
    <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50 to-teal-50 p-6 sm:p-8 text-center shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">
        Ready for a patient-friendly view?
      </h3>
      <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
        This demo synthesizes mock case files, AI clinician summaries, and doctor
        review into an ELI5 summary. It does not provide medical advice or
        treatment recommendations.
      </p>
      {reviewStatus === "needs_review" && (
        <p className="mt-3 text-xs text-orange-700 bg-orange-50 inline-block rounded-lg px-3 py-1.5 border border-orange-100">
          Note: This case&apos;s doctor review is still in progress in the demo — the
          summary reflects partial review status.
        </p>
      )}
      <button
        type="button"
        onClick={onGenerate}
        disabled={generating}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:from-blue-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
      >
        {generating ? (
          "Generating…"
        ) : summaryVisible ? (
          "Regenerate ELI5 Summary"
        ) : (
          "Generate ELI5 Summary"
        )}
      </button>
    </div>
  );
}

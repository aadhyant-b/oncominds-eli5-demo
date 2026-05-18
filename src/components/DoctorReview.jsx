import { Badge } from "./Header";

const concurrenceStyles = {
  agree: { badge: "reviewed", label: "Doctor Reviewed" },
  partial: { badge: "reviewed", label: "Doctor Reviewed" },
  pending: { badge: "needs", label: "Needs Review" },
};

export default function DoctorReview({ caseData }) {
  const review = caseData.doctorReview;
  const status = concurrenceStyles[review.concurrence] ?? concurrenceStyles.pending;

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/40 overflow-hidden">
      <div className="border-b border-slate-100 bg-gradient-to-r from-teal-50/80 to-blue-50/50 px-5 sm:px-6 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h2 className="text-base font-semibold text-slate-900">
            Doctor review & concurrence
          </h2>
          <Badge variant={status.badge}>{status.label}</Badge>
          <Badge variant="mock">Mock Data</Badge>
        </div>
        <p className="text-sm text-slate-500">
          Licensed clinician notes on AI outputs — the source of truth for the
          patient summary.
        </p>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
          <div>
            <p className="text-sm font-medium text-slate-900">{review.reviewer}</p>
            <p className="text-xs text-slate-500">Reviewed {review.reviewedAt}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Concurrence:</span>
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-medium text-teal-800 ring-1 ring-teal-200">
              {review.concurrenceLabel}
            </span>
          </div>
        </div>

        <ReviewBlock title="Clinical notes" items={review.notes} icon="📝" />
        <div className="grid gap-4 md:grid-cols-2">
          <ReviewBlock
            title="Agreed with AI on"
            items={review.agreedWith}
            icon="✓"
            variant="agree"
          />
          <ReviewBlock
            title="Disagreed or cautioned"
            items={review.disagreedWith}
            icon="!"
            variant="caution"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ListCard title="Stated uncertainties" items={caseData.uncertainties} tone="amber" />
          <ListCard
            title="Recommended next discussion points"
            items={caseData.nextDiscussionPoints}
            tone="blue"
          />
        </div>
      </div>
    </section>
  );
}

function ReviewBlock({ title, items, icon, variant }) {
  const border =
    variant === "agree"
      ? "border-teal-100"
      : variant === "caution"
        ? "border-orange-100"
        : "border-slate-100";
  const bullet =
    variant === "agree"
      ? "text-teal-600"
      : variant === "caution"
        ? "text-orange-500"
        : "text-slate-400";

  return (
    <div className={`rounded-xl border ${border} p-4`}>
      <h3 className="text-sm font-medium text-slate-800 mb-3 flex items-center gap-2">
        <span aria-hidden>{icon}</span>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-slate-600">
            <span className={`shrink-0 ${bullet}`}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ListCard({ title, items, tone }) {
  const bg =
    tone === "amber"
      ? "bg-amber-50/50 border-amber-100"
      : "bg-blue-50/50 border-blue-100";
  return (
    <div className={`rounded-xl border p-4 ${bg}`}>
      <h3 className="text-sm font-medium text-slate-800 mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-slate-600 flex gap-2">
            <span className="text-slate-400 shrink-0">–</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

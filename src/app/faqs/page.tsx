import { PageHero } from "@/components/PageHero";

export default function FaqsPage() {
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our services."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-4 text-sm text-slate-200">
        <details className="border border-slate-800 rounded-lg p-3">
          <summary className="font-semibold cursor-pointer">
            Which regions do you serve?
          </summary>
          <p className="mt-2 text-slate-300">
            We primarily serve East Africa but can support other regions by
            arrangement.
          </p>
        </details>
        <details className="border border-slate-800 rounded-lg p-3">
          <summary className="font-semibold cursor-pointer">
            How quickly can you provide an interpreter?
          </summary>
          <p className="mt-2 text-slate-300">
            We recommend booking 24–48 hours in advance, but we do accept urgent
            same-day requests when possible.
          </p>
        </details>
      </div>
    </div>
  );
}



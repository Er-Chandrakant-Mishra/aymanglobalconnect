import { PageHero } from "@/components/PageHero";

export default function PricingPage() {
  return (
    <div>
      <PageHero
        title="Pricing"
        subtitle="Transparent pricing and custom quotes for your needs."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-6 text-sm text-slate-200">
        <p>
          Pricing depends on the service, language, duration, and coverage
          required. Contact us for a custom quote. Example starting points:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Interpreter – hourly or per-session rates.</li>
          <li>Call center – monthly packages with included call minutes.</li>
          <li>Truck dispatching – per-load or monthly dispatch packages.</li>
        </ul>
      </div>
    </div>
  );
}



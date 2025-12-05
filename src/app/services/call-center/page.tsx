import { PageHero } from "@/components/PageHero";
import Link from "next/link";

export default function CallCenterPage() {
  return (
    <div>
      <PageHero
        title="Call Center Services"
        subtitle="Inbound and outbound call handling with multilingual agents."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-8 text-sm text-slate-200">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p>
            We operate a flexible call center service to handle your inbound and
            outbound calls. Our agents can support customer service, sales
            follow-ups, appointment reminders, and more.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">What We Offer</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Inbound customer support</li>
            <li>Outbound follow-up and sales calls</li>
            <li>24/7 or business-hours coverage</li>
            <li>Multilingual agents for key languages</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Pricing / Request Quote</h2>
          <p>
            We can work with monthly packages (for example, a set number of
            calls per month) or per-minute billing. Contact us with your
            expected call volume and languages so we can create a proposal.
          </p>
          <Link
            href="/contact#quote"
            className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Request a Quote
          </Link>
          <p className="text-xs text-slate-400 mt-2">
            Need quick help? Reach us on{" "}
            <a
              href="https://wa.me/2547XXXXXXXX?text=Hello%20Ayman%20Global%20Connect%20-%20Call%20Center%20services"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}



import { PageHero } from "@/components/PageHero";
import Link from "next/link";

export default function InterpreterPage() {
  return (
    <div>
      <PageHero
        title="Interpreter Services"
        subtitle="Professional interpreters for your meetings, calls, and events."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-8 text-sm text-slate-200">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p>
            We provide interpreters for in-person, phone, and video
            appointments. Our team covers multiple languages and is trained for
            business, legal, and medical contexts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Key Features</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>In-person, phone, and video interpreting</li>
            <li>Multilingual experts including English, Swahili, Arabic, and more</li>
            <li>Short-notice and scheduled bookings</li>
            <li>Support for meetings, conferences, and calls</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Languages Offered</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>English ↔ Swahili</li>
            <li>English ↔ Arabic</li>
            <li>English ↔ Somali</li>
            <li>Other languages on request</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">How to Book</h2>
          <p>
            Share your <strong>date/time, language, in-person or remote,
            location, duration, and contact details.</strong>
          </p>
          <p>
            Use the Request a Quote button below or contact us via WhatsApp for
            urgent needs.
          </p>
          <Link
            href="/contact#quote"
            className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Request a Quote
          </Link>
          <p className="text-xs text-slate-400 mt-2">
            Or contact us directly via{" "}
            <a
              href="https://wa.me/2547XXXXXXXX?text=Hello%20Ayman%20Global%20Connect%20-%20Interpreter%20services"
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



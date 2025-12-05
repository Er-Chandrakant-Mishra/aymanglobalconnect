import { PageHero } from "@/components/PageHero";
import Link from "next/link";

export default function TruckDispatchingPage() {
  return (
    <div>
      <PageHero
        title="Truck Dispatching Services"
        subtitle="Reliable dispatch process and coverage for your trucks and loads."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-8 text-sm text-slate-200">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Dispatch Process</h2>
          <p>
            We coordinate between shippers and drivers to make sure every load
            is planned, dispatched, and monitored from pickup to delivery. Our
            dispatchers communicate clearly and keep you updated.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Coverage Areas</h2>
          <p className="text-slate-300">
            Example coverage (you can adjust this list later):
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Nairobi and major cities in Kenya</li>
            <li>Key cross-border routes in East Africa</li>
            <li>Other routes by agreement</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Driver / Company Sign-Up</h2>
          <p>
            Drivers and transport companies can register below. We will review
            your details and contact you for next steps.
          </p>
          <Link
            href="/contact#dispatch-signup"
            className="inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Sign Up for Dispatching
          </Link>
          <p className="text-xs text-slate-400 mt-2">
            You can also send your details and documents via{" "}
            <a
              href="https://wa.me/2547XXXXXXXX?text=Hello%20Ayman%20Global%20Connect%20-%20Dispatching%20signup"
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



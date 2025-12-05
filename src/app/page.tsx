import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 px-6 py-10 md:px-10 md:py-14 text-white shadow-xl">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
              Ayman Global Connect
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Interpreter • Call Center • Truck Dispatching
            </h1>
            <p className="text-sm md:text-base text-blue-50/90">
              Fast, multilingual support and reliable dispatching for
              international clients and East African businesses that operate
              every day.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-md hover:bg-yellow-300 hover:-translate-y-0.5 transition"
              >
                Book Now
              </Link>
              <Link
                href="/contact#quote"
                className="rounded-full border border-white/70 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:-translate-y-0.5 transition"
              >
                Request a Quote
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-[11px] text-blue-50/80 mt-3">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                24/7 support
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                Multilingual experts
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                Reliable dispatching
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-sky-300/20 blur-2xl" />
            <div className="relative rounded-2xl bg-white text-slate-900 p-5 shadow-lg space-y-3">
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                Why Ayman Global Connect?
              </p>
              <p className="text-xs text-slate-600">
                Built for international clients who need clear communication and
                dependable logistics every single day.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>• 24/7 interpreter & call center availability</li>
                <li>• Dedicated dispatchers for your key routes</li>
                <li>• Transparent, international-friendly pricing</li>
                <li>• East Africa expertise with global mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xl font-semibold text-slate-50">
            Our Core Services
          </h2>
          <p className="hidden md:block text-xs text-slate-400">
            Designed for daily business use – from customer calls to cross-border loads.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Interpreter Services"
            description="On-demand interpreters for phone, video, and in-person meetings."
            href="/services/interpreter"
            icon="🌐"
          />
          <ServiceCard
            title="Call Center Services"
            description="Inbound and outbound call handling with multilingual agents."
            href="/services/call-center"
            icon="📞"
          />
          <ServiceCard
            title="Truck Dispatching"
            description="Reliable dispatching for trucks across your key routes."
            href="/services/truck-dispatching"
            icon="🚚"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-50">Why Choose Us</h2>
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 hover:border-blue-500/60 hover:-translate-y-1 hover:shadow-lg transition">
            <h3 className="font-semibold mb-1 text-slate-50">Fast Response</h3>
            <p className="text-slate-300">
              We respond quickly so your business never waits for support.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 hover:border-blue-500/60 hover:-translate-y-1 hover:shadow-lg transition">
            <h3 className="font-semibold mb-1 text-slate-50">24/7 Support</h3>
            <p className="text-slate-300">
              Around-the-clock availability for urgent interpreting and calls.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-4 hover:border-blue-500/60 hover:-translate-y-1 hover:shadow-lg transition">
            <h3 className="font-semibold mb-1 text-slate-50">
              Transparent Pricing
            </h3>
            <p className="text-slate-300">
              Clear packages and quotes with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-50">How It Works</h2>
        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-300">
          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="font-semibold mb-1">1. Request</h3>
            <p>Submit your details via contact form, WhatsApp, or call.</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="font-semibold mb-1">2. Confirm</h3>
            <p>We confirm requirements, schedule, and pricing with you.</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="font-semibold mb-1">3. Service Delivered</h3>
            <p>Our team delivers your interpreter, call handling, or dispatching.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-50">
          What Our Clients Say
        </h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
          <figure className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
            <blockquote className="mb-2">
              “Professional interpreters and quick response. They made our
              cross-border meetings much easier.”
            </blockquote>
            <figcaption className="text-slate-400 text-xs">
              — Client from Nairobi
            </figcaption>
          </figure>
          <figure className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
            <blockquote className="mb-2">
              “Reliable dispatching and clear communication with drivers. We
              highly recommend them.”
            </blockquote>
            <figcaption className="text-slate-400 text-xs">
              — Logistics Company
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-2xl border border-blue-600 bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-center space-y-3 shadow-lg">
        <h2 className="text-xl font-semibold">Ready to get started?</h2>
        <p className="text-sm text-blue-50/90">
          Tell us what you need and we&apos;ll respond quickly with options and
          pricing.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-yellow-300 shadow-md hover:-translate-y-0.5 transition"
          >
            Contact / Book Now
          </Link>
          <Link
            href="/contact#quote"
            className="rounded-full border border-white/80 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 hover:-translate-y-0.5 transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}


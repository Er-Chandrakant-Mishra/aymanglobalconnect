import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact / Book Now"
        subtitle="Tell us what you need and we will respond with options and pricing."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        <section className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
          <ContactForm />
          <div className="space-y-3 text-sm text-slate-300">
            <h2 className="text-lg font-semibold">Contact Details</h2>
            <p>
              Email:{" "}
              <a
                href="mailto:info@aymanglobalconnect.com"
                className="text-blue-400"
              >
                info@aymanglobalconnect.com
              </a>
            </p>
            <p>WhatsApp: Use the floating button at the bottom-right.</p>
          </div>
        </section>

        <section id="quote" className="space-y-3">
          <h2 className="text-lg font-semibold">Request a Detailed Quote</h2>
          <p className="text-sm text-slate-300">
            Use the same form above and include details such as language,
            duration, number of agents, or routes needed.
          </p>
        </section>

        <section id="dispatch-signup" className="space-y-3">
          <h2 className="text-lg font-semibold">Driver / Company Sign-Up</h2>
          <p className="text-sm text-slate-300">
            Drivers and transport companies can send their details through the
            form above and mention &quot;Dispatch signup&quot; in the message.
            In the future this section can be replaced with a dedicated signup
            form.
          </p>
        </section>
      </div>
    </div>
  );
}



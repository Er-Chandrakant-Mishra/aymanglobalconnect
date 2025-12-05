import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Connecting people, customers, and cargo with clear communication and reliable dispatching."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-6 text-sm text-slate-200">
        <p>
          Ayman Global Connect is a service company focused on interpreter
          services, call center support, and truck dispatching. We help
          businesses communicate across languages and move goods across regions
          with confidence.
        </p>
        <p>
          Based in East Africa, we understand local markets and cross-border
          challenges. Our team includes multilingual interpreters, trained call
          agents, and experienced dispatch coordinators dedicated to keeping your
          operations running smoothly.
        </p>
      </div>
    </div>
  );
}



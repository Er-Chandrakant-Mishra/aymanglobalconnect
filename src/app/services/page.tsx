import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Interpreter services, call center solutions, and truck dispatching."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Interpreter Services"
            description="Languages for phone, video, and in-person meetings."
            href="/services/interpreter"
            icon="🌐"
          />
          <ServiceCard
            title="Call Center Services"
            description="Inbound and outbound customer support."
            href="/services/call-center"
            icon="📞"
          />
          <ServiceCard
            title="Truck Dispatching"
            description="Dispatch coordination across your routes."
            href="/services/truck-dispatching"
            icon="🚚"
          />
        </div>
      </div>
    </div>
  );
}



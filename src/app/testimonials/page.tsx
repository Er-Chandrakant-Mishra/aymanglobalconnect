import { PageHero } from "@/components/PageHero";

export default function TestimonialsPage() {
  return (
    <div>
      <PageHero
        title="Testimonials"
        subtitle="What our clients say about working with Ayman Global Connect."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-6 text-sm text-slate-200">
        <p>
          Here are a few sample testimonials. You can replace these with real
          client feedback later.
        </p>
      </div>
    </div>
  );
}



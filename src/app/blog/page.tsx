import { PageHero } from "@/components/PageHero";
import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <div>
      <PageHero
        title="Blog"
        subtitle="Insights and updates from Ayman Global Connect."
      />
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-6 text-sm text-slate-200">
        <p>
          This is the blog index page. You can add future posts through the
          admin panel or by asking your developer to create new entries. For
          now, here are example topics you might publish:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>How interpreter services help cross-border business in East Africa</li>
          <li>Best practices for setting up a 24/7 call center for your company</li>
          <li>What to know before working with a truck dispatching partner</li>
        </ul>
        <p className="text-xs text-slate-400">
          When you are ready, each article will get its own page under{" "}
          <code>/blog/your-article-slug</code>.
        </p>
      </div>
    </div>
  );
}



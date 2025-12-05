import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export function ServiceCard({ title, description, href, icon }: Props) {
  return (
    <div className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-blue-500 hover:-translate-y-1 transition">
      <div className="text-2xl mb-3 text-blue-400">{icon}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-slate-400 mb-4">{description}</p>
      <Link
        href={href}
        className="text-sm font-medium text-blue-400 group-hover:text-blue-300"
      >
        Learn more →
      </Link>
    </div>
  );
}



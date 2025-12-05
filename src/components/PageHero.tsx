interface Props {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: Props) {
  return (
    <section className="bg-slate-900 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        {subtitle && <p className="text-sm text-slate-300">{subtitle}</p>}
      </div>
    </section>
  );
}



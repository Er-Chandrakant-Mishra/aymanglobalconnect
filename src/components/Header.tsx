"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform duration-150 hover:-translate-y-0.5"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center shadow-sm">
            <span className="text-xs font-bold text-white">AG</span>
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-semibold text-slate-900 group-hover:text-blue-700">
              Ayman Global
            </span>
            <span className="block text-[11px] text-slate-500">
              Interpreter • Call • Dispatch
            </span>
          </div>
        </Link>

        <button
          className="md:hidden text-slate-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav
          className={`${
            open ? "block" : "hidden"
          } md:block absolute md:static left-0 right-0 top-full md:top-auto bg-white md:bg-transparent border-b border-slate-200 md:border-none`}
        >
          <ul className="flex flex-col md:flex-row gap-4 px-4 py-3 md:p-0 text-sm items-center">
            <li>
              <Link
                href="/about"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-blue-500 hover:-translate-y-0.5 transition"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}



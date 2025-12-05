import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-4 text-sm">
        <div className="space-y-2">
          <h3 className="font-semibold text-slate-50 text-base">
            Ayman Global Connect
          </h3>
          <p className="text-slate-400 text-xs">
            Daily support for international clients with interpreter, call
            center, and truck dispatching services.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-slate-400">
            <li>
              <Link href="/services" className="hover:text-blue-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-blue-400">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-blue-400">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-blue-400">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-slate-400">
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-blue-400">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-slate-400 text-xs">
            Email:{" "}
            <a
              href="mailto:info@aymanglobalconnect.com"
              className="text-blue-400 hover:underline"
            >
              info@aymanglobalconnect.com
            </a>
          </p>
          <div className="text-slate-400 text-xs space-y-1">
            <p className="font-semibold text-slate-300">Follow us</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="hover:text-blue-400"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-400" aria-label="X">
                X
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 text-center text-xs text-slate-500 py-3">
        © {new Date().getFullYear()} Ayman Global Connect. All rights reserved.
      </div>
    </footer>
  );
}



import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AuthProvider } from "@/components/AuthProvider";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aymanglobalconnect.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: "Ayman Global Connect — Interpreter · Call Center · Truck Dispatching",
  description:
    "Ayman Global Connect offers interpreter services, 24/7 call center solutions, and reliable truck dispatching.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Ayman Global Connect — Interpreter · Call Center · Truck Dispatching",
    description:
      "Interpreter services, 24/7 call center, and truck dispatching for East Africa and beyond.",
    url: siteUrl,
    siteName: "Ayman Global Connect",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ayman Global Connect",
    url: siteUrl,
    description:
      "Interpreter services, 24/7 call center, and truck dispatching for East Africa and beyond.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "East Africa",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@aymanglobalconnect.com",
    },
    service: [
      { "@type": "Service", name: "Interpreter Services" },
      { "@type": "Service", name: "Call Center Services" },
      { "@type": "Service", name: "Truck Dispatching Services" },
    ],
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </AuthProvider>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

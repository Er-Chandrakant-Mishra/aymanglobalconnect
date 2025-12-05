import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aymanglobalconnect.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/interpreter",
    "/services/call-center",
    "/services/truck-dispatching",
    "/pricing",
    "/testimonials",
    "/faqs",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}



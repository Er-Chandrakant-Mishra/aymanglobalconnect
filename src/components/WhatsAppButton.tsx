"use client";

const number =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2547XXXXXXXX";
const message =
  "Hello Ayman Global Connect - I need help with Interpreter / Call Center / Truck Dispatching services.";

export function WhatsAppButton() {
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-white shadow-lg hover:bg-green-400"
    >
      WhatsApp
    </a>
  );
}



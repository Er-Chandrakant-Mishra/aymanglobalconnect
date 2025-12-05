"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-1 text-slate-200">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            name="fullName"
            required
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />
        </div>
        <div>
          <label className="block mb-1 text-slate-200">Company</label>
          <input
            name="company"
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-1 text-slate-200">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />
        </div>
        <div>
          <label className="block mb-1 text-slate-200">
            Phone / WhatsApp<span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            required
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 text-slate-200">
          Service Interested<span className="text-red-500">*</span>
        </label>
        <select
          name="service"
          required
          className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        >
          <option value="">Select a service</option>
          <option value="Interpreter">Interpreter</option>
          <option value="Call Center">Call Center</option>
          <option value="Truck Dispatch">Truck Dispatch</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-1 text-slate-200">Language</label>
          <input
            name="language"
            placeholder="e.g. English ↔ Swahili"
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />
        </div>
        <div>
          <label className="block mb-1 text-slate-200">
            Estimated Duration / Package
          </label>
          <input
            name="duration"
            placeholder="e.g. 2 hours, 50 calls/month"
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-1 text-slate-200">
            # of Agents / Drivers
          </label>
          <input
            name="agentsCount"
            placeholder="e.g. 3 agents, 5 trucks"
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />
        </div>
        <div>
          <label className="block mb-1 text-slate-200">
            Route / Coverage Area
          </label>
          <input
            name="routeCoverage"
            placeholder="e.g. Nairobi – Mombasa"
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 text-slate-200">Preferred Date/Time</label>
        <input
          type="datetime-local"
          name="preferredDateTime"
          className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />
      </div>

      <div>
        <label className="block mb-1 text-slate-200">Message / Job details</label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-300">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to the{" "}
          <a href="/privacy-policy" className="text-blue-400 underline">
            Privacy Policy
          </a>
          .
        </span>
      </div>

      <div>
        <label className="block mb-1 text-slate-200 text-sm">
          Attachments (optional, up to 3 files)
        </label>
        <input
          type="file"
          name="attachments"
          multiple
          className="w-full text-xs text-slate-300 file:mr-3 file:rounded-md file:border-0 file:bg-slate-800 file:px-3 file:py-1.5 file:text-xs file:text-slate-100 hover:file:bg-slate-700"
        />
      </div>

      {/* Hidden tracking and signup type fields for future analytics / driver signups */}
      <input type="hidden" name="signupType" value="general" />
      <input type="hidden" name="utm_source" />
      <input type="hidden" name="utm_medium" />
      <input type="hidden" name="utm_campaign" />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "done" && (
        <p className="text-xs text-green-400">
          Thank you. We received your message.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-400">
          Something went wrong. Please try again or contact us via WhatsApp.
        </p>
      )}
    </form>
  );
}



"use client";

import { useState } from "react";
import { cities, services } from "@/lib/siteConfig";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Capture the form reference BEFORE any await, currentTarget becomes
    // null after the event finishes dispatching, which happens as soon as
    // this function hits its first await.
    const form = e.currentTarget;

    setState("loading");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      city: formData.get("city") as string,
      service: formData.get("service") as string,
      isEmergency: formData.get("isEmergency") === "yes",
      description: formData.get("description") as string,
      website: formData.get("website") as string, // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800">
          Request received.
        </h3>
        <p className="text-green-700 mt-1">
          We'll be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-800 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-800 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-1">
          Email (optional)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-slate-800 mb-1">
          City You Need Service In
        </label>
        <select
          id="city"
          name="city"
          required
          defaultValue=""
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="" disabled>
            Select your city
          </option>
          {cities.map((city) => (
            <option key={city.slug} value={city.slug}>
              {city.displayName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-800 mb-1">
          What Do You Need Help With?
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-slate-800 mb-1">
          Is this an emergency?
        </legend>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-slate-900">
            <input type="radio" name="isEmergency" value="yes" required />
            Yes
          </label>
          <label className="flex items-center gap-2 text-slate-900">
            <input type="radio" name="isEmergency" value="no" />
            No
          </label>
        </div>
      </fieldset>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-slate-800 mb-1">
          Brief Description (optional)
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1"
        />
        <label htmlFor="consent" className="text-sm text-slate-700">
          I agree to be contacted by phone, text, or email regarding my
          request, and I've read the{" "}
          <a href="/privacy-policy" target="_blank" className="text-blue-700 underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>

      {state === "error" && (
        <p className="text-red-600 text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-lg bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-3.5 text-base transition-colors"
      >
        {state === "loading" ? "Sending..." : "Get My Free Quote"}
      </button>

      <p className="text-xs text-slate-600 text-center">
        Your information goes straight to our team. No spam, no sharing with
        other companies.
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import { cities, services } from "@/lib/siteConfig";

type SubmitState = "idle" | "success";

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to send an email once Resend is set up.
    setState("success");
    e.currentTarget.reset();
  }

  if (state === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800">
          Request received.
        </h3>
        <p className="text-green-700 mt-1">
          A local plumber will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Email (optional)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
          City You Need Service In
        </label>
        <select
          id="city"
          name="city"
          required
          defaultValue=""
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
          What Do You Need Help With?
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
        <legend className="block text-sm font-medium text-slate-700 mb-1">
          Is this an emergency?
        </legend>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="isEmergency" value="yes" required />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="isEmergency" value="no" />
            No
          </label>
        </div>
      </fieldset>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
          Brief Description (optional)
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 transition-colors"
      >
        Get My Free Quote
      </button>

      <p className="text-xs text-slate-500 text-center">
        Your information is only used to connect you with a local plumber. No
        spam, no sharing your info with multiple companies.
      </p>
    </form>
  );
}

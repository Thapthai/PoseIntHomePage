"use client";

import { useState } from "react";

const inputBase =
  "w-full text-sm px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-body placeholder:text-body/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300";

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <form
      action="#"
      method="post"
      className="glass-card rounded-3xl shadow-[0_8px_40px_rgba(15,39,68,0.08)] p-6 sm:p-8 h-full card-glow"
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 className="text-xl font-bold text-heading mb-1">Send us a message</h3>
      <p className="text-sm text-body/70 mb-6">We&apos;ll get back to you within 24 hours.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(["name", "email"] as const).map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            className={`${inputBase} ${focused === field ? "scale-[1.01]" : ""}`}
            placeholder={field === "name" ? "Your Name" : "Your Email"}
            required
            onFocus={() => setFocused(field)}
            onBlur={() => setFocused(null)}
          />
        ))}

        <input
          type="text"
          name="subject"
          className={`md:col-span-2 ${inputBase} ${focused === "subject" ? "scale-[1.01]" : ""}`}
          placeholder="Subject"
          required
          onFocus={() => setFocused("subject")}
          onBlur={() => setFocused(null)}
        />

        <textarea
          name="message"
          rows={4}
          className={`md:col-span-2 ${inputBase} resize-none ${focused === "message" ? "scale-[1.01]" : ""}`}
          placeholder="Message"
          required
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />

        <div className="md:col-span-2 text-center pt-2">
          <button
            type="submit"
            className="group relative inline-flex items-center gap-2 text-white font-medium px-10 py-3 rounded-full btn-shimmer shadow-[0_4px_20px_rgba(255,74,23,0.4)] hover:shadow-[0_6px_28px_rgba(255,74,23,0.55)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Send Message</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}

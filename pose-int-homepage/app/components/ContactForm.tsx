"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "../lib/i18n/LanguageProvider";

const CONTACT_EMAIL = "posehealthcare@gmail.com";

const inputBase =
  "w-full text-sm px-4 py-3 bg-white/80 border border-slate-200 rounded-xl text-body placeholder:text-body/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300";

export default function ContactForm() {
  const { locale, t } = useLanguage();
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body =
      locale === "th"
        ? `ชื่อ: ${name}\nอีเมล: ${email}\n\n${message}`
        : `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const gmail = new URL("https://mail.google.com/mail/");
    gmail.searchParams.set("view", "cm");
    gmail.searchParams.set("fs", "1");
    gmail.searchParams.set("to", CONTACT_EMAIL);
    gmail.searchParams.set("su", subject);
    gmail.searchParams.set("body", body);

    window.open(gmail.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      className="glass-card rounded-3xl shadow-[0_8px_40px_rgba(15,39,68,0.08)] p-6 sm:p-8 h-full card-glow"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold text-heading mb-1">{t.contact.formTitle}</h3>
      <p className="text-sm text-body/70 mb-6">{t.contact.formSubtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          className={`${inputBase} ${focused === "name" ? "scale-[1.01]" : ""}`}
          placeholder={t.contact.name}
          required
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
        />
        <input
          type="email"
          name="email"
          className={`${inputBase} ${focused === "email" ? "scale-[1.01]" : ""}`}
          placeholder={t.contact.email}
          required
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
        />

        <input
          type="text"
          name="subject"
          className={`md:col-span-2 ${inputBase} ${focused === "subject" ? "scale-[1.01]" : ""}`}
          placeholder={t.contact.subject}
          required
          onFocus={() => setFocused("subject")}
          onBlur={() => setFocused(null)}
        />

        <textarea
          name="message"
          rows={4}
          className={`md:col-span-2 ${inputBase} resize-none ${focused === "message" ? "scale-[1.01]" : ""}`}
          placeholder={t.contact.message}
          required
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />

        <div className="md:col-span-2 text-center pt-2">
          <button
            type="submit"
            className="group relative inline-flex items-center gap-2 text-white font-medium px-10 py-3 rounded-full btn-shimmer shadow-[0_4px_20px_rgba(255,74,23,0.4)] hover:shadow-[0_6px_28px_rgba(255,74,23,0.55)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>{t.contact.send}</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}

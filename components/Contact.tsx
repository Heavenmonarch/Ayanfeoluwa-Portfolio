"use client";

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import Marquee from "./Marquee";
import { profile } from "@/data/portfolio";

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
    </svg>
  );
}

function LinkedinMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9.5H7v11.1H3.4V9.5Zm5.8 0h3.5V11h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v5.9h-3.6v-5.2c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.3H9.2V9.5Z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", request: "" });
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project request from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Ayanfe,\n\nName: ${form.name}\nEmail: ${form.email}\n\nRequest:\n${form.request}`,
    );
    setSubmitted(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="bg-black pb-12 pt-[5.5rem] text-center text-white"
    >
      <h2 className="text-[clamp(2rem,4.6vw,3.6rem)] font-extrabold tracking-[-0.02em] text-cream">
        Send Your Request
      </h2>
      <p className="mt-[1.6rem] text-[clamp(1.4rem,2.8vw,2.2rem)] font-bold">
        Bring the whole system to life
      </p>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-12 inline-flex items-center gap-3 border-b border-cream pb-2 text-sm text-cream transition-transform hover:translate-x-1"
      >
        Reach out to me
        <Send size={18} strokeWidth={1.5} />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          className="fixed inset-0 z-[60] overflow-y-auto bg-black/80 p-pad text-left backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="mx-auto mt-[clamp(2rem,12vh,8rem)] w-full max-w-[680px] border border-white/20 bg-[#151515] p-6 text-white md:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.12em] text-cream">Project brief</p>
                <h3 id="contact-modal-title" className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-none">
                  Tell me what you want to build.
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close contact form"
                className="text-xs text-white/60 transition-colors hover:text-white"
              >
                Close
              </button>
            </div>

            {submitted ? (
              <div className="mt-12 border-t border-white/20 pt-8">
                <p className="text-[0.65rem] uppercase tracking-[0.12em] text-cream">Request sent</p>
                <p className="mt-4 max-w-[440px] text-[clamp(1.6rem,4vw,2.8rem)] font-extrabold leading-none">
                  Thanks. Your request is on its way.
                </p>
                <p className="mt-5 max-w-[420px] text-sm leading-[1.7] text-white/60">
                  Your email app should now be open with the message addressed to {profile.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", request: "" });
                  }}
                  className="mt-8 border-b border-cream pb-2 text-sm text-cream"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-12 grid gap-8">
                <input
                  type="text"
                  required
                  placeholder="your name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  aria-label="Your name"
                  className="border-b border-white/20 bg-transparent px-0 pb-3 text-xl text-white outline-none placeholder:text-[#555] focus:border-cream"
                />
                <input
                  type="email"
                  required
                  placeholder="your email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  aria-label="Your email"
                  className="border-b border-white/20 bg-transparent px-0 pb-3 text-xl text-white outline-none placeholder:text-[#555] focus:border-cream"
                />
                <textarea
                  required
                  placeholder="tell me what you want to build"
                  value={form.request}
                  onChange={(e) => updateField("request", e.target.value)}
                  aria-label="Your project request"
                  rows={5}
                  className="resize-y border-b border-white/20 bg-transparent px-0 pb-3 text-xl text-white outline-none placeholder:text-[#555] focus:border-cream"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 justify-self-start text-sm text-cream"
                >
                  Send request
                  <Send size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Marquee text="Lets Work Together" variant="dark" dot />

      <nav className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-5 text-[0.72rem]">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex items-center gap-2 transition-colors hover:text-cream">
          <GithubMark /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center gap-2 transition-colors hover:text-cream">
          <LinkedinMark /> LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="inline-flex items-center gap-2 transition-colors hover:text-cream">
          <Mail size={16} strokeWidth={1.5} /> Email
        </a>
        <a href={`tel:${profile.phone}`} aria-label="Phone" className="inline-flex items-center gap-2 transition-colors hover:text-cream">
          <Phone size={16} strokeWidth={1.5} /> {profile.phone}
        </a>
      </nav>
    </section>
  );
}
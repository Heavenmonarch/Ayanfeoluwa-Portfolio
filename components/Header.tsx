"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#showcase" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-pad pt-[1.6rem]">
        <a href="#top" className="text-[0.95rem] font-extrabold tracking-[-0.01em]">
          {profile.name.toUpperCase()}.
        </a>
        <nav className="hidden items-center gap-8 text-xs md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-opacity hover:opacity-50">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="group flex size-10 cursor-pointer flex-col items-end justify-center gap-1.5 md:hidden"
        >
          <span className="h-px w-7 bg-ink transition-transform group-hover:-translate-x-1" />
          <span className="h-px w-5 bg-ink transition-transform group-hover:-translate-x-1" />
        </button>
      </header>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col justify-center bg-[#0b0b0b] p-pad text-cream"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-pad top-8 cursor-pointer text-sm underline underline-offset-[3px]"
          >
            Close
          </button>
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[clamp(2.5rem,9vw,6rem)] font-extrabold tracking-[-0.02em] transition-opacity hover:opacity-60"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
import { useState } from "react";
import { nav } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-mist">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <path
              d="M17 2 30 9.5v15L17 32 4 24.5v-15L17 2Z"
              stroke="#0F62FE"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="17" cy="17" r="5.5" stroke="#31FF98" strokeWidth="2" fill="none" />
          </svg>
          <span className="font-display text-sm font-bold tracking-tight text-navy sm:text-base">
            AADISH GEARS &amp; TRANSMISSIONS PVT LTD
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-action ${
                i === 0 ? "text-action" : "text-slate"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden shrink-0 rounded-full bg-action px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-action-hover lg:inline-block"
        >
          Send Us An Enquiry
        </a>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-rounded">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-mist bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate hover:text-action"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-action px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Send Us An Enquiry
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

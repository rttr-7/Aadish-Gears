import { useState } from "react";
import { TABS } from "../../data/aboutContent";

const styles = `
  .about-tab{background:none;border:none;padding:0 0 .9rem;border-bottom:2px solid transparent;font:inherit;font-size:.8rem;font-weight:700;color:#434e58;cursor:pointer;}
  .about-tab.active{color:#0f62fe;border-color:#0f62fe;}
  .about-dots{display:flex;align-items:center;gap:.45rem;margin-top:1.2rem;}
  .about-dots span{display:inline-block;width:8px;height:8px;border-radius:50%;background:rgba(67,78,88,.2);}
  .about-dots span.active{width:1.2rem;height:8px;border-radius:999px;background:#0f62fe;}
`;

export default function WhyWeSucceedSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = TABS[activeTab];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <style>{styles}</style>

      <h2 className="mb-8 font-display text-3xl font-bold text-navy sm:text-4xl">Why We Succeed</h2>
      <div className="flex w-full items-center justify-between gap-4 overflow-x-auto border-b border-slate/15 pb-2">
        {TABS.map((t, i) => (
          <button
            key={t.label}
            className={"about-tab flex-1 whitespace-nowrap text-center" + (i === activeTab ? " active" : "")}
            onClick={() => setActiveTab(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(150deg,#1d2433,#3a4354)]">
          {activeTab === 0 ? (
            <img
              src="/Aadish-Gears/images/ManufacturingExcellance.png"
              alt="Manufacturing Excellence"
              className="h-full w-full object-cover object-center"
              style={{ borderRadius: 0 }}
            />
          ) : (
            <svg width="70%" height="70%" viewBox="0 0 200 160" fill="none">
              <rect x="20" y="30" width="120" height="90" rx="4" stroke="#6FE3C7" strokeWidth="2" />
              <rect x="34" y="44" width="45" height="34" rx="2" stroke="#fff" strokeWidth="1.6" />
              <circle cx="115" cy="95" r="14" stroke="#fff" strokeWidth="1.6" />
              <path d="M140 60h40M140 80h30M150 100h30" stroke="#6FE3C7" strokeWidth="1.6" />
            </svg>
          )}
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-navy">{tab.heading}</h3>
          <ul className="mt-6 space-y-2 pl-5 text-sm text-navy">
            {tab.bullets.map((b) => <li key={b} className="list-disc">{b}</li>)}
          </ul>
          {tab.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-sm leading-relaxed text-slate">{p}</p>
          ))}
          <a href="#" className="mt-6 inline-flex rounded-full border border-navy/25 bg-transparent px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white">
            {tab.cta}
          </a>
          <div className="about-dots mt-6">
            {TABS.map((_, i) => <span key={i} className={i === activeTab ? "active" : ""} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

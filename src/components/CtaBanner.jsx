import { panelGrid } from "../data/aboutContent";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy" style={panelGrid}>
      <div className="page-container flex flex-col items-start justify-between gap-6 py-20 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] font-mono text-mint">
            Get in touch with us
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Have a drawing or a rough sketch?
          </h2>
          <p className="mt-4 text-sm text-sky/90 sm:text-base">
            Send us your requirement and our team will get back with a quote.
          </p>
        </div>

        <a
          href="#contact"
          onClick={() => window.sessionStorage.setItem("navigation-scroll", "top")}
          className="shrink-0 rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
        >
          Send An Enquiry
        </a>
      </div>
    </section>
  );
}

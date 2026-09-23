import { panelGrid } from "../../data/aboutContent";

export default function PositioningSection() {
  return (
    <section className="relative overflow-hidden bg-navy text-white" style={panelGrid}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint">OUR POSITIONING</p>
        <h2 className="mt-4 max-w-none font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
          A one-stop solution for transmission products, known for quantitative and qualitative supply, on schedule.
        </h2>
        <p className="mt-5 max-w-[1100px] text-base text-sky/90">
          We&apos;ve specialized in designing and manufacturing special-purpose gear boxes — non-standard products by design. As a policy, we don&apos;t chase regular market products or compete in the open market; that&apos;s what lets us hold a consistent quality standard on everything we do make.
        </p>
        <a href="#products" className="mt-8 inline-flex rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover">
          View All Our Products
        </a>
      </div>
    </section>
  );
}

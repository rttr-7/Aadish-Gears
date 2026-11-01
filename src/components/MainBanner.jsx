import { panelGrid } from "../data/aboutContent";

export default function MainBanner({
  id,
  subHeader,
  header,
  description,
  children
}) {
  return (
    <section id={id} className="relative overflow-hidden bg-navy font-body" style={panelGrid}>
      <div className="page-container pb-20 pt-12 lg:py-[150px]">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] font-mono text-mint">
          {subHeader}
        </p>
        <h1 className="w-full max-w-7xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[60px]">
          {header}
        </h1>
        <p className="mt-6 text-base text-white">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}

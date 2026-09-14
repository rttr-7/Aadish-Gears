const fadedLogos = [];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(15,98,254,0.12), transparent 55%), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "auto, 44px 44px, 44px 44px",
      }}
    >
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-mint">
            Precision transmission products manufacturing
          </p>
          <h1 className="w-full max-w-7xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[68px]">
  Customized Gears, Gearboxes and Sprockets, engineered to desired spec
</h1>
          <p className="mt-6 max-w-md text-base text-sky/90">
            We design &amp; manufacture precision transmission products in
            bulk for OEM&rsquo;s across the globe
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              View Our Products
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get A Quote
            </a>
          </div>
        </div>

        <div
          className="relative hidden lg:block"
          aria-hidden="true"
        >
          <div className="absolute right-0 top-0 flex flex-col items-end gap-6 opacity-40">
            {fadedLogos.map((logo) => (
              <span
                key={logo}
                className="font-display text-lg font-bold tracking-wide text-white"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { STORY } from "../../data/aboutContent";

// Maps the existing keys in aboutContent to Material Symbols names
const iconMap = {
  tool: "handyman",
  clock: "build_circle",
  factory: "precision_manufacturing",
  trend: "local_shipping",
};

export default function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Our Story</h2>

      <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {STORY.map((item) => (
          <li
            key={item.year}
            className="lg:border-l lg:border-mist lg:px-7 lg:py-12 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
          >
            <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-[#434E58]">
              {item.year}
            </span>

            <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-sky text-[#0B2750]">
              <span className="material-symbols-rounded text-[22px] leading-none" aria-hidden="true">
                {iconMap[item.icon] || "handyman"}
              </span>
            </div>

            <h3 className="mt-6 font-display text-[15px] font-semibold leading-snug text-navy">
              {item.title}
            </h3>
            <p className="mt-4 text-[13px] leading-[1.35] text-slate">{item.text}</p>
          </li>
        ))}
      </ol>

      <a
        href="/Aadish-Gears/products"
        className="mt-8 inline-block rounded-md border border-action px-4 py-2.5 text-sm font-semibold text-action transition-colors hover:bg-action hover:text-white"
      >
        View Our Work
      </a>
    </section>
  );
}
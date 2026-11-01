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
    <section className="page-container py-20">
      <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Our Story</h2>

      <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {STORY.map((item, index) => (
          <li
            key={item.year}
            className={`pt-6 lg:px-10 ${
              index !== 0 ? "lg:border-l lg:border-mist" : ""
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] font-mono text-black">
              {item.year}
            </span>

            <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-b from-[#FFFFFF] to-[#C9DDF3]">
              <span className="material-symbols-rounded text-black" aria-hidden="true">
                {iconMap[item.icon] || "handyman"}
              </span>
            </div>

            <h3 className="mt-4 font-display text-lg font-semibold text-navy">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate">
              {item.text}
            </p>
          </li>
        ))}
      </ol>

      <a
        href="#gallery"
        onClick={() => window.sessionStorage.setItem("navigation-scroll", "top")}
        className="mt-8 inline-block rounded-full border-2 border-action px-6 py-3 text-sm font-semibold text-action transition-colors hover:bg-action hover:text-white"
      >
        View Our Work
      </a>
    </section>
  );
}
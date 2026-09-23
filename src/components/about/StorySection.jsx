import { STORY } from "../../data/aboutContent";

const iconMap = {
  tool: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  clock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  factory: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 21V9l8-6 8 6v12" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  trend: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 6h7v7" />
    </svg>
  ),
};

export default function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
        Our Story
      </h2>

      <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {STORY.map((item, index) => (
          <li key={item.year} className={`pt-6 lg:px-10 ${index !== 0 ? "lg:border-l lg:border-mist" : ""}`}>
            <span className="text-xs font-semibold tracking-[0.14em] text-black">{item.year}</span>
            <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky">
              <span className="material-symbols-rounded text-black" aria-hidden="true">
                {iconMap[item.icon] || iconMap.tool}
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-navy">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

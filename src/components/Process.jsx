import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
        Our Process
      </h2>

      <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {processSteps.map((item, index) => (
          <li
            key={item.step}
            className={`pt-6 lg:px-10 ${
              index !== 0 ? "lg:border-l lg:border-mist" : ""
            }`}
          >
            <span className="text-xs font-semibold tracking-[0.14em] text-black">
              STEP {item.step}
            </span>

            <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky">
              <span
                className="material-symbols-rounded text-black"
                aria-hidden="true"
              >
                {item.icon}
              </span>
            </div>

            <h3 className="mt-4 font-display text-lg font-semibold text-navy">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
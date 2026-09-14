import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
        Our Process
      </h2>

      <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item) => (
          <li key={item.step} className="border-t-2 border-mist pt-6">
            <span
              className="text-xs font-semibold tracking-[0.14em]"
              style={{ color: "#0EA968" }}
            >
              STEP {item.step}
            </span>
            <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-sky text-action">
              <span className="material-symbols-rounded" aria-hidden="true">
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

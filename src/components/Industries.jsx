import { industries } from "../data/content";

export default function Industries() {
  return (
    <section
      className="relative overflow-hidden bg-navy py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Industries We Serve
        </h2>

        <div className="mt-10 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((item) => {
            const isSky = item.tone === "sky";
            return (
              <div
                key={item.title}
                className={`relative flex flex-col justify-between rounded-2xl p-5 ${
                  item.size === "tall" ? "row-span-2" : ""
                } ${isSky ? "bg-sky" : "bg-white"}`}
              >
                <div>
                  <h3 className="font-display text-sm font-semibold text-navy sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate sm:text-sm">
                    {item.description}
                  </p>
                </div>
                {item.icon && (
                  <span
                    className="material-symbols-rounded mt-4 self-end text-action/50"
                    style={{ fontSize: "28px" }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <a
          href="#gallery"
          className="mt-10 inline-block rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          See Our Work
        </a>
      </div>
    </section>
  );
}

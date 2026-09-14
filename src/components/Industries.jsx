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
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-rows-[140px_140px_140px_140px]">
          {industries.map((item) => {
            const isSky = item.tone === "sky";

            return (
              <div
                key={item.title}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl p-5
                  ${isSky ? "bg-sky" : "bg-white"}

                  ${
                    item.title === "Automation"
                      ? "lg:col-start-1 lg:row-start-1 lg:row-span-2"
                      : ""
                  }

                  ${
                    item.title === "Automated Car Parking"
                      ? "lg:col-start-2 lg:row-start-1"
                      : ""
                  }

                  ${
                    item.title === "Chemical Processing"
                      ? "lg:col-start-3 lg:row-start-1"
                      : ""
                  }

                  ${
                    item.title === "Purification Systems"
                      ? "lg:col-start-4 lg:row-start-1"
                      : ""
                  }

                  ${
                    item.title === "Valve Actuators"
                      ? "lg:col-start-1 lg:row-start-3"
                      : ""
                  }

                  ${
                    item.title === "Electrical Isolators / Disconnectors"
                      ? "lg:col-start-2 lg:row-start-2 lg:row-span-2"
                      : ""
                  }

                  ${
                    item.title === "Circuit Breaker Systems"
                      ? "lg:col-start-3 lg:row-start-2 lg:row-span-2"
                      : ""
                  }

                  ${
                    item.title === "Electric Vehicles"
                      ? "lg:col-start-4 lg:row-start-2 lg:row-span-2"
                      : ""
                  }

                  ${
                    item.title === "Diesel Engines"
                      ? "lg:col-start-1 lg:row-start-4"
                      : ""
                  }

                  ${
                    item.title === "Compressors"
                      ? "lg:col-start-2 lg:row-start-4 lg:col-span-2"
                      : ""
                  }

                  ${
                    item.title === "Machine Tools"
                      ? "lg:col-start-4 lg:row-start-4"
                      : ""
                  }
                `}
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
                    className="material-symbols-rounded absolute bottom-2 right-2 text-navy/5"
                    style={{ fontSize: "110px" }}
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
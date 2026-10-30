import { VENDORS } from "../../data/aboutContent";

export default function VendorEcosystemSection() {
  return (
    <section className="bg-pale py-20">
      <div className="page-container">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
          Our Vendor Ecosystem
        </h2>

        <p className="mt-4 max-w-4xl text-sm leading-5 text-slate sm:text-base">
          Finishing processes we don&apos;t run in-house are handled by a small set of trusted, ISO-certified vendors.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5 xl:mt-10">
          {VENDORS.map((v) => (
            <div
              key={v.title}
              className="flex min-h-0 flex-col justify-start rounded-[22px] border border-sky bg-sky p-5 shadow-[0_6px_18px_rgba(11,39,80,0.04)] sm:min-h-[260px] sm:p-6"
            >
              <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-white text-black">
                <span className="material-symbols-rounded" aria-hidden="true">
                  {v.title === "Gear Grinding" && "tune"}
                  {v.title === "Allied Machining Facilities" && "precision_manufacturing"}
                  {v.title === "Heat Treatment" && "thermostat"}
                  {v.title === "Surface Treatment" && "sync_alt"}
                </span>
              </div>
              <h3 className="font-display text-[1.15rem] font-semibold leading-tight text-navy sm:text-[1.4rem]">
                {v.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-5 text-navy/90">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

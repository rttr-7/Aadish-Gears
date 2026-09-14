import { whyUs, indianClients, internationalClients } from "../data/content";

function ClientColumn({ heading, clients, twoColumns = false }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black">
        {heading}
      </p>

      <ul
        className={`mt-10 grid items-center ${
          twoColumns
            ? "grid-cols-2 gap-x-12 gap-y-8"
            : "grid-cols-1 gap-y-8"
        }`}
      >
        {clients.map((logo) => (
          <li key={logo} className="flex h-12 items-center">
            <img
              src={logo}
              className="max-h-14 max-w-[160px] object-contain"
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhyUsClients() {
  return (
    <section
      id="why-us"
      className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        {/* Why Us */}
        <div>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Why Us
          </h2>

          <ul className="mt-10 flex flex-col gap-8">
            {whyUs.map((item) => (
              <li key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-black">
                  <span
                    className="material-symbols-rounded text-[20px]"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-base font-semibold text-navy">
                    {item.title}
                  </h3>

                  <p className="mt-1 whitespace-pre-line text-left text-sm leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#why-us"
            className="ml-4 mt-10 inline-block rounded-full border border-action px-6 py-3 text-sm font-semibold text-action transition-colors hover:bg-action hover:text-white"
          >
            Learn More About Us
          </a>
        </div>

        {/* Our Clients */}
        <div>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Our Clients
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-16">
            <ClientColumn
              heading="Indian Customers"
              clients={indianClients}
              twoColumns
            />

            <ClientColumn
              heading="International Customers"
              clients={internationalClients}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
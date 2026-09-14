import { whyUs, indianClients, internationalClients } from "../data/content";

function ClientColumn({ heading, clients }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate">
        {heading}
      </p>
      <ul className="mt-4 flex flex-col gap-4">
        {clients.map((name) => (
          <li
            key={name}
            className="font-display text-sm font-bold text-navy/80"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhyUsClients() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Why Us
          </h2>

          <ul className="mt-10 flex flex-col gap-8">
            {whyUs.map((item) => (
              <li key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky text-action">
                  <span className="material-symbols-rounded text-[20px]" aria-hidden="true">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#why-us"
            className="mt-10 inline-block rounded-full border border-action px-6 py-3 text-sm font-semibold text-action transition-colors hover:bg-action hover:text-white"
          >
            Learn More About Us
          </a>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Our Clients
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-10">
            <ClientColumn heading="Indian Customers" clients={indianClients} />
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

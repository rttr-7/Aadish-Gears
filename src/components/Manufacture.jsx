import { products } from "../data/content";

export default function Manufacture() {
  return (
    <section id="products" className="page-container pb-20">
      <div className="rounded-3xl bg-sky/60 p-5 sm:p-8 lg:p-12">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
          What We Manufacture
        </h2>
        <p className="mt-3 text-sm text-slate sm:text-base">
          Five product families, designed and machined in-house from a single custom gearbox to bulk production runs.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:mt-10 xl:grid-cols-5">
          {products.map((product) => (
            <a
              key={product.title}
              href={product.href}
              className="group flex flex-col rounded-2xl border border-transparent bg-white p-6 shadow-[0_1px_2px_rgba(11,39,80,0.06)] transition duration-200 hover:-translate-y-1 hover:border-action/30 hover:shadow-[0_12px_28px_rgba(11,39,80,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-sky text-black transition-colors group-hover:bg-action group-hover:text-white">
                <span className="material-symbols-rounded" aria-hidden="true">
                  {product.icon}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-navy transition-colors group-hover:text-action">
                {product.title}
              </h3>
              <p className="mt-2 text-sm leading-5 text-slate">
                {product.description}
              </p>
              <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-action opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                View details
                <span className="material-symbols-rounded text-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">arrow_forward</span>
              </span>
            </a>
          ))}
        </div>

        <a
          href="#products"
          className="mt-10 inline-block rounded-full border-2 border-action px-6 py-3 text-sm font-semibold text-action transition-colors hover:bg-action hover:text-white"
        >
          View All Products
        </a>
      </div>
    </section>
  );
}

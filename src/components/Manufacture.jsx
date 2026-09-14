import { products } from "../data/content";

export default function Manufacture() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <div className="rounded-3xl bg-sky/60 p-8 sm:p-12">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
          What We Manufacture
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate sm:text-base">
          Five product families, designed and machined in-house from a
          single custom gearbox to bulk production runs.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(11,39,80,0.06)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-action">
                <span className="material-symbols-rounded text-[20px]" aria-hidden="true">
                  {product.icon}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-navy">
                {product.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#products"
          className="mt-10 inline-block rounded-full border border-action px-6 py-3 text-sm font-semibold text-action transition-colors hover:bg-action hover:text-white"
        >
          View All Products
        </a>
      </div>
    </section>
  );
}

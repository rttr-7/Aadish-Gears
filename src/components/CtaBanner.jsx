export default function CtaBanner() {
  return (
    <section id="contact" className="bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 lg:flex-row lg:items-end lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint">
            Get in touch with us
          </p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-bold text-white sm:text-4xl">
            Have a drawing or a rough sketch?
          </h2>
          <p className="mt-4 max-w-md text-sm text-sky/90 sm:text-base">
            Send us your requirement and our team will get back with a quote.
          </p>
        </div>

        <a
          href="mailto:aadishgears@yahoo.co.in"
          className="shrink-0 rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
        >
          Send An Enquiry
        </a>
      </div>
    </section>
  );
}

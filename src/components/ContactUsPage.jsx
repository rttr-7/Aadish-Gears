import React from 'react';

export default function ContactUsPage() {
  const productImages = [
    { id: 1, src: "/Aadish-Gears/images/Gallery/AGTPL%20765%20KVA%20ES%20GEARBOX.png", alt: "AGTPL 765 KVA ES Gearbox" },
    { id: 2, src: "/Aadish-Gears/images/Gallery/EV%20GEARBOX.png", alt: "EV Gearbox" },
    { id: 3, src: "/Aadish-Gears/images/Gallery/AGTPL%20765%20KVA%20MS%20GEARBOX.png", alt: "AGTPL 765 KVA MS Gearbox" },
    { id: 4, src: "/Aadish-Gears/images/Gallery/Gears.JPG", alt: "Precision Gears" },
    { id: 5, src: "/Aadish-Gears/images/Gallery/HELICAL%20GEARS.png", alt: "Helical Gears" },
    { id: 6, src: "/Aadish-Gears/images/Gallery/ISO%200.5%20H.P%20GEARBOX.png", alt: "ISO 0.5 H.P Gearbox" },
    { id: 7, src: "/Aadish-Gears/images/Gallery/INLINE%20HELICAL%20GEARBOX.png", alt: "Inline Helical Gearbox" },
    { id: 8, src: "/Aadish-Gears/images/Gallery/ISO%201.0%20H.P%20GEARBOX.png", alt: "ISO 1.0 H.P Gearbox" },
    { id: 9, src: "/Aadish-Gears/images/Gallery/NIKTISH%20ASM%20GEARBOX.png", alt: "Niktish Assembly Gearbox" },
  ];

  return (
    <div className="bg-white text-navy font-sans">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-navy">
        <div className="relative flex min-h-[220px] flex-col justify-end lg:min-h-[260px]">
          {/* Background photo */}
          <div className="absolute inset-0 z-0">
            <img
              src="/Aadish-Gears/images/Gear.png"
              alt="Gears background"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Solid Dark Navy Bottom Banner */}
          <div className="relative z-10 w-full border-t border-white/10 bg-navy/95 shadow-2xl">
            {/* Grid pattern overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "44px 44px, 44px 44px",
              }}
            />

            {/* Content Container */}
            <div className="relative mx-auto max-w-7xl px-6 py-4 lg:px-10 lg:py-5">
              <div className="w-full max-w-3xl text-left">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-mint">
                  Get in touch with us
                </p>
                <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Are you ready with your enquiry?
                </h1>
                <p className="mt-1 text-xs text-sky/90 sm:text-sm">
                  Send us your requirement below and our team will get back with a quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* Main Form & Contact Details Section */}
      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:items-start">
          
          {/* Left Column: Compact Form & Product Grid */}
          <div>
            <h2 className="mb-1 font-display text-2xl font-bold text-navy sm:text-3xl">
              Send us your requirement
            </h2>
            <p className="mb-5 text-xs text-slate-500">
              <span className="font-semibold text-navy">*</span> indicates a required field
            </p>

            {/* Compact Form */}
            <form className="grid gap-x-3 gap-y-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-xs font-semibold text-navy">
                <span className="mb-1 block">Full Name *</span>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </label>

              <label className="block text-xs font-semibold text-navy">
                <span className="mb-1 block">Company Name</span>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </label>

              <label className="block text-xs font-semibold text-navy">
                <span className="mb-1 block">Email Address *</span>
                <input
                  type="email"
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </label>

              <label className="block text-xs font-semibold text-navy">
                <span className="mb-1 block">Phone Number *</span>
                <input
                  type="tel"
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </label>

              <label className="block text-xs font-semibold text-navy sm:col-span-2">
                <span className="mb-1 block">Country *</span>
                <select className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                  <option>India</option>
                </select>
              </label>

              <label className="block text-xs font-semibold text-navy sm:col-span-2">
                <span className="mb-1 block">Your Requirement *</span>
                <textarea
                  rows={3}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  placeholder="Tell us what you need — product type, specs or drawing reference, and quantity."
                />
              </label>

              <div className="mt-1 sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Send Enquiry
                </button>
              </div>
            </form>

            {/* Product Image Grid (3x3 matching target design) */}
            <div className="mx-auto mt-8 grid w-full max-w-[380px] grid-cols-3 gap-2">
              {productImages.map((product) => (
                <div key={product.id} className="flex aspect-[1.1] items-center justify-center bg-white p-1">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Details Sidebar */}
          <aside className="space-y-6 pt-1 md:pt-14 md:pl-4">
            {/* Call Us */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-rounded text-xl text-navy mt-0.5">call</span>
              <div>
                <h3 className="font-display text-base font-bold text-navy">Call Us</h3>
                <p className="mt-0.5 text-xs text-slate-600 font-medium">+91 92256 43290</p>
                <p className="text-xs text-slate-600 font-medium">+91 74990 50575</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-rounded text-xl text-navy mt-0.5">mail</span>
              <div>
                <h3 className="font-display text-base font-bold text-navy">Email Us</h3>
                <p className="mt-0.5 text-xs text-slate-600 font-medium">aadishgears@yahoo.co.in</p>
                <p className="text-xs text-slate-600 font-medium">sales@aadishgears.com</p>
              </div>
            </div>

            {/* Courier & Logistics */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-rounded text-xl text-navy mt-0.5">local_shipping</span>
              <div>
                <h3 className="font-display text-base font-bold text-navy">Courier &amp; Logistics</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                  Both Trackon Couriers and DTDC operate offices right in Narhe (411041), so sample and material dispatch to and from our facility is straightforward.
                </p>
              </div>
            </div>

            {/* Factory & Office */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-rounded text-xl text-navy mt-0.5">location_on</span>
              <div>
                <h3 className="font-display text-base font-bold text-navy">Factory &amp; Office</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                  Sr. No. 23/3/1, Milkat No. 28/2, Shed No 2 Wadekar Industrial Estate, Near Siddhi Chowk, Narhe, Pune 411041, MH, India
                </p>
              </div>
            </div>

            {/* Map of the shop */}
            <div className="mt-5">
              <p className="mb-1.5 text-xs font-semibold text-navy">Aadish Gears &amp; Transmission Pvt. Ltd.</p>
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <iframe
                  title="Aadish Gears Shop Location"
                  src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s18.4380258,73.8256733!6i17"
                  className="h-[220px] w-full border-0 sm:h-[210px]"
                  loading="eager"
                  allowFullScreen=""
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=18.4380258%2C73.8256733"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-xs font-semibold text-action underline underline-offset-2 hover:text-action-hover"
              >
                Open in Google Maps
              </a>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
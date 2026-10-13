import { useState } from "react";

const electricalIsolatorProducts = [
  {
    title: "AGTPL 765 KVA E/S Gearbox",
    image: "/Aadish-Gears/images/Gallery/AGTPL%20765%20KVA%20ES%20GEARBOX.png",
    bullets: [
      "Motor details: 1.0 HP foot mounting, 1400 RPM",
      "Aadish Gears designed",
      "Combination gears type",
      "Reduction Ratio: 1:843",
      "SG iron housing with hardened gears",
    ],
    application: "Electrical Disconnectors (Isolators) 765 KvA and above",
  },
  {
    title: "AGTPL 765 KVA M/S Gearbox",
    image: "/Aadish-Gears/images/Gallery/AGTPL%20765%20KVA%20MS%20GEARBOX.png",
    bullets: [
      "Motor details: 1.0 HP foot mounting, 1400 RPM",
      "Aadish Gears designed",
      "Combination gears type",
      "Reduction ratio: 1:1247.50",
      "SG iron housing, hardened gears",
    ],
    application: "Electrical isolators 765 kVA and above",
  },
  {
    title: "ISO 0.5 HP Gearbox",
    image: "/Aadish-Gears/images/Gallery/ISO%200.5%20H.P%20GEARBOX.png",
    bullets: [
      "Motor details: 0.5 HP foot mounting, 1400 RPM",
      "Customer designed",
      "Combination gears type",
      "Reduction ratio: 1:676",
    ],
    application: "Electrical isolators 230 kVA and above",
  },
  {
    title: "ISO 1.0 HP Gearbox",
    image: "/Aadish-Gears/images/Gallery/ISO%201.0%20H.P%20GEARBOX.png",
    bullets: [
      "Motor details: 1.0 HP foot mounting, 1400 RPM",
      "Customer designed",
      "Combination gears type",
      "Reduction ratio: 1:728",
    ],
    application: "Electrical isolators 230 kVA and above",
  },
];

const helicalGearboxProducts = [
  {
    title: "NK 600 Helical Gearbox",
    image: "/Aadish-Gears/images/Gallery/NK%20600%20HELICAL%20GEARBOX.png",
    bullets: [
      "With Dual Output Shaft",
      "Can be operated both by Motor as well as Manually",
      "Can be used as a Speed Reducer as well as Speed increaser Gear Box",
      "Aadish Gears Designed",
      "Reduction Ratio: 1:56.15",
    ],
    applications: ["Air Purifying Systems", "Industrial Applications", "EV", "Electricity Generation"],
  },
  {
    title: "NK 180 Helical Gearbox",
    image: "/Aadish-Gears/images/Gallery/NK%20180%20HELICAL%20GEARBOX.png",
    bullets: [
      "Single Output Shaft",
      "Can be operated both by Motor as well as Manually",
      "Can be used as a Speed Reducer as well as Speed increaser Gear Box",
      "Aadish Gears Designed",
      "Reduction Ratio: 1:56.15",
    ],
    applications: ["Air Purifying Systems", "Industrial Applications", "EV", "Electricity Generation"],
  },
  {
    title: "Inline Helical Gearbox",
    image: "/Aadish-Gears/images/Gallery/INLINE%20HELICAL%20GEARBOX.png",
    bullets: [
      "Aadish Gears Designed",
      "Reduction Ratio: 1:68.66",
      "Type of Gearbox: Helical Gears",
    ],
    applications: ["All Industries", "Any"],
  },
];

const gearboxes = [
  {
    label: "Electrical Isolator",
  },
  {
    label: "Helical Gear Boxes",
  },
  {
    label: "EV Gear Boxes",
    title: "EV Gearbox",
    image: "/Aadish-Gears/images/Gallery/EV%20GEARBOX.png",
    bullets: [
      "Aadish Gears Designed",
      "Type of Gear Box: Helical suitable for high RPM Motor (6000 RPM)",
      "Reduction Ratio: 1:8.063",
      "Pay Load 500 Kg. Tested for 20 Degree Gradient",
    ],
    applications: ["Electric Transport Vehicle (Three Wheeler)"],
  },
  {
    label: "Worm Gear Boxes",
    title: "Worm Gearbox",
    image: "/Aadish-Gears/images/Gallery/WORM%20GEARBOX.png",
    bullets: [
      "Motor Details: Suitable for 0.5 HP Motor",
      "Aadish Gears Designed",
      "Type of Gear Box: Worm/Worm Wheel",
      "Reduction Ratio: 1:40",
    ],
    applications: ["All Industries"],
  },
  {
    label: "Quarter Turn Gear Boxes",
    title: "Quarter Turn Gearbox",
    image: "/Aadish-Gears/images/Gallery/QUARTER%20TURN%20GEARBOX.png",
    bullets: [
      "Heavy Duty",
      "CI Casting Housing",
      "Copper Alloy Gear with Hardened Shaft",
      "Reduction Ratio: 1:36",
    ],
    applications: ["Electrical Actuators", "Other Industrial Applications"],
  },
];

const gearTypes = [
  {
    label: "Spur Gears",
    title: "Spur Gears",
    image: "/Aadish-Gears/images/Gallery/SPUR%20GEAR.png",
    bullets: [
      "The Spur Gears can be manufactured from 0.8 Module to 6 Module with a minimum outside diameter of 8 mm to 400 mm",
      "We can also design Gears as per the customer’s requirement",
      "Cluster Gears also include our product range",

      "All type of Spur Gears",
      "Maximum OD 350 mm, Minimum OD 20mm",
      "0.8 Module to 6 Module",
    ],
    showCatalog: true,
  },
  {
    label: "Helical Gears",
    title: "Helical Gears",
    image: "/Aadish-Gears/images/Gallery/HELICAL%20GEARS.png",
    bullets: [
      "All type of Helical Gears",
      "Maximum OD 350 mm, Minimum OD 20mm",
      "0.8 Module to 6 Module",
    ],
    description: [
      "Similar to Spur Gears, Helical Gears can also be manufactured from 0.8 Module to 6 Module with any Helix Angle. Helical Gears confirming to any class can be manufactured. Helical Gears can also be designed to match the Customer’s requirements.",
    ],
  },
  {
    label: "Worm Gears",
    title: "Worm Gears",
    image: "/Aadish-Gears/images/Gallery/Worm%20Gears%20&%20Worm%20Shafts.JPG",
    bullets: [
      "All type of Worm Gears",
      "Maximum OD 350 mm, Minimum OD 20mm",
      "0.8 Module to 5.0 Module",
    ],
    description: [
      "Worm Gears are manufactured to the required specifications with required accuracy. Worm Gears can be manufactured from 0.8 Module to 6 Module with a maximum diameter of 350 mm. Worm Gears can be manufactured from all type of materials viz. Cast Iron, SG Iron, Alloy Steel, Aluminum Bronze, Phosphor Bronze, etc. Worm And Worm Gear Pairs can also be designed & manufactured.",
    ],
  },
  {
    label: "Internal Gears",
    title: "Internal Gears",
    image: "/Aadish-Gears/images/Gallery/Worm%20Gears%20&%20Worm%20Shafts.JPG",
    bullets: [],
    description: [
      "We can manufacture Internal Gear having minimum ID of 30 mm. The internal gears can be manufactured from 0.5 module capacity to 3 Module Capacity. Internal Gears having smaller ID,s can also be manufactured by way of Broaching.",
    ],
  },
];

const promises = [
  ["precision_manufacturing", "High-volume Manufacturing"],
  ["mail", "Fast Response"],
  ["local_shipping", "On-Time Delivery"],
  ["verified", "Certified Quality"],
  ["currency_rupee", "Competitive Pricing"],
  ["task_alt", "Zero-Defect Production"],
];

function Tabs({ items, selected, onSelect, label, scrollTargetId }) {
  const desktopColumns = items.length === 4 ? "lg:grid-cols-4 xl:grid-cols-4" : "lg:grid-cols-3 xl:grid-cols-5";

  return (
    <div className={`mt-5 grid grid-cols-2 border-b border-slate/20 sm:grid-cols-3 ${desktopColumns}`} role="tablist" aria-label={label}>
      {items.map((item, index) => (
        <button
          key={item.label}
          type="button"
          role="tab"
          aria-selected={index === selected}
          onClick={() => {
            onSelect(index);
            if (scrollTargetId) {
              requestAnimationFrame(() => {
                document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth", block: "center" });
              });
            }
          }}
          className={`border-b-2 px-3 py-3 text-sm font-bold transition-colors xl:whitespace-nowrap ${
            index === selected ? "border-action text-action" : "border-transparent text-slate hover:text-action"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function ProductFeature({ title, image, alt, description, details, imageMaxWidth = "max-w-[500px]" }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-9 lg:px-10">
      <div className="mx-auto w-full lg:w-[90%]">
        <h2 className="font-display text-2xl font-bold text-navy">{title}</h2>
        <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-stretch">
          <div className="flex justify-center md:h-full">
            <img src={image} alt={alt} className={`block h-auto w-full ${imageMaxWidth} object-contain md:h-full`} />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
            {description && <p className="mt-4 text-sm leading-relaxed text-slate">{description}</p>}
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate">
              {details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  const [gearboxIndex, setGearboxIndex] = useState(0);
  const [isolatorProductIndex, setIsolatorProductIndex] = useState(0);
  const [helicalProductIndex, setHelicalProductIndex] = useState(0);
  const [gearIndex, setGearIndex] = useState(0);
  const gearbox = gearboxes[gearboxIndex];
  const isolatorProduct = electricalIsolatorProducts[isolatorProductIndex];
  const helicalProduct = helicalGearboxProducts[helicalProductIndex];
  const gear = gearTypes[gearIndex];

  return (
    <main id="products" className="bg-white text-navy">
      <section className="bg-navy text-white">
        <div
          className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        >
          <div className="mx-auto w-full lg:w-[90%]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint">Our Expertise</p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Powering Performance Through Precision</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sky/90 sm:text-base">
              Explore our range of precision-engineered products designed for reliability, consistency and long-term performance.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14" aria-labelledby="gearbox-title">
        <div className="mx-auto w-full lg:w-[90%]">
          <h2 id="gearbox-title" className="font-display text-2xl font-bold">Customized Gears Boxes</h2>
          <p className="mt-2 text-sm text-slate">Five product families, designed and machined in-house from a single custom gearbox to bulk production runs.</p>
          <Tabs items={gearboxes} selected={gearboxIndex} onSelect={setGearboxIndex} label="Gearbox types" scrollTargetId="gearbox-panel" />
          {gearboxIndex === 0 ? (
            <div>
              <div id="gearbox-panel" className="mt-7 grid gap-8 md:grid-cols-2 md:items-stretch">
                <div className="flex h-full items-center justify-center bg-white p-6">
                  <img src={isolatorProduct.image} alt={isolatorProduct.title} className="aspect-[16/9] w-full max-w-[500px] rounded-[6px] object-contain" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{isolatorProduct.title}</h3>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-black">
                    {isolatorProduct.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <div className="mt-5 flex flex-col items-start gap-2 text-sm font-medium text-black">
                    <span>Application:</span>
                    <span className="inline-flex max-w-full items-center rounded-full border border-action/40 bg-sky/30 px-3 py-1.5 text-xs font-semibold text-action">
                      {isolatorProduct.application}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-5 bg-white py-2" aria-label="Electrical Isolator products">
                <button
                  type="button"
                  aria-label="Previous Electrical Isolator product"
                  onClick={() => setIsolatorProductIndex((isolatorProductIndex - 1 + electricalIsolatorProducts.length) % electricalIsolatorProducts.length)}
                  className="grid size-8 place-items-center rounded-full border border-action bg-transparent text-base text-action transition-colors hover:bg-action hover:text-white"
                >
                  <span aria-hidden="true">&#8249;</span>
                </button>
                <div className="flex items-center gap-2" role="group" aria-label="Choose Electrical Isolator product">
                  {electricalIsolatorProducts.map((product, index) => (
                    <button
                      key={product.title}
                      type="button"
                      aria-label={`Show ${product.title}`}
                      aria-current={index === isolatorProductIndex ? "true" : undefined}
                      onClick={() => setIsolatorProductIndex(index)}
                      className={`size-2.5 rounded-full transition-colors ${index === isolatorProductIndex ? "bg-[#0d1b3e]" : "bg-[#ccc] hover:bg-[#aaa]"}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Next Electrical Isolator product"
                  onClick={() => setIsolatorProductIndex((isolatorProductIndex + 1) % electricalIsolatorProducts.length)}
                  className="grid size-8 place-items-center rounded-full border border-action bg-transparent text-base text-action transition-colors hover:bg-action hover:text-white"
                >
                  <span aria-hidden="true">&#8250;</span>
                </button>
              </div>
            </div>
          ) : gearboxIndex === 1 ? (
            <div>
              <div id="gearbox-panel" className="mt-7 grid gap-8 md:grid-cols-2 md:items-stretch">
                <div className="flex h-full items-center justify-center bg-white p-6">
                  <img src={helicalProduct.image} alt={helicalProduct.title} className="aspect-[16/9] w-full max-w-[500px] rounded-[6px] object-contain" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{helicalProduct.title}</h3>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-black">
                    {helicalProduct.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <div className="mt-5 flex flex-col items-start gap-2 text-sm font-medium text-black">
                    <span>Application:</span>
                    <div className="flex flex-wrap gap-2">
                      {helicalProduct.applications.map((application) => (
                        <span key={application} className="inline-flex max-w-full items-center rounded-full border border-action/40 bg-sky/30 px-3 py-1.5 text-xs font-semibold text-action">
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-5 bg-white py-2" aria-label="Helical Gearbox products">
                <button
                  type="button"
                  aria-label="Previous Helical Gearbox product"
                  onClick={() => setHelicalProductIndex((helicalProductIndex - 1 + helicalGearboxProducts.length) % helicalGearboxProducts.length)}
                  className="grid size-8 place-items-center rounded-full border border-action bg-transparent text-base text-action transition-colors hover:bg-action hover:text-white"
                >
                  <span aria-hidden="true">&#8249;</span>
                </button>
                <div className="flex items-center gap-2" role="group" aria-label="Choose Helical Gearbox product">
                  {helicalGearboxProducts.map((product, index) => (
                    <button
                      key={product.title}
                      type="button"
                      aria-label={`Show ${product.title}`}
                      aria-current={index === helicalProductIndex ? "true" : undefined}
                      onClick={() => setHelicalProductIndex(index)}
                      className={`size-2.5 rounded-full transition-colors ${index === helicalProductIndex ? "bg-[#0d1b3e]" : "bg-[#ccc] hover:bg-[#aaa]"}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Next Helical Gearbox product"
                  onClick={() => setHelicalProductIndex((helicalProductIndex + 1) % helicalGearboxProducts.length)}
                  className="grid size-8 place-items-center rounded-full border border-action bg-transparent text-base text-action transition-colors hover:bg-action hover:text-white"
                >
                  <span aria-hidden="true">&#8250;</span>
                </button>
              </div>
            </div>
          ) : (
            <div id="gearbox-panel" className="mt-7 grid gap-8 md:grid-cols-2 md:items-stretch">
              <div className="flex h-full items-center justify-center bg-white p-6">
                <img
                  src={gearbox.image}
                  alt={gearbox.title}
                  className={`w-full ${gearboxIndex === 2 ? "max-w-[450px]" : "max-w-[500px]"} rounded-[6px] bg-white object-contain ${gearboxIndex === 3 ? "aspect-square" : "aspect-[16/9]"}`}
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">{gearbox.title}</h3>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-black">
                  {gearbox.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="mt-5 flex flex-col items-start gap-2 text-sm font-medium text-black">
                  <span>Application:</span>
                  <div className="flex flex-wrap gap-2">
                    {gearbox.applications.map((application) => (
                      <span key={application} className="inline-flex max-w-full items-center rounded-full border border-action/40 bg-sky/30 px-3 py-1.5 text-xs font-semibold text-action">
                        {application}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#f3f8fe]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="mx-auto w-full lg:w-[90%]">
            <h2 className="font-display text-2xl font-bold">Our Promise</h2>
            <p className="mt-2 text-sm text-slate">Finishing processes we don’t run in-house are handled by a small set of trusted, ISO-certified vendors.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {promises.map(([icon, label]) => (
                <div key={label} className="flex min-h-16 items-center justify-start gap-3 rounded-xl bg-[#d6e7f9] px-4 py-3 text-sm font-semibold text-navy">
                  <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-white text-action" aria-hidden="true">
                    <span className="material-symbols-rounded translate-x-0.5 translate-y-1 text-[20px] leading-none">{icon}</span>
                  </span>
                  <span className="min-w-0 text-left">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h2 className="font-display text-xl font-bold">Why Trust Our Manufacturing</h2>
              <p className="mt-2 text-sm text-slate">Our advanced machinery and precision instruments enable us to deliver consistent quality, accuracy and reliability across every product.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#machinery-list-from-products" className="rounded-md border border-action px-4 py-2 text-xs font-semibold text-action transition-colors hover:bg-action hover:text-white">View Our Machine List</a>
                <a href="#about-us" className="rounded-md border border-action px-4 py-2 text-xs font-semibold text-action transition-colors hover:bg-action hover:text-white">View Our Instrument List</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14" aria-labelledby="gears-title">
        <div className="mx-auto w-full lg:w-[90%]">
          <h2 id="gears-title" className="font-display text-2xl font-bold">Gears</h2>
          <p className="mt-2 text-sm text-slate">Five product families, designed and machined in-house from a single custom gearbox to bulk production runs.</p>
          <Tabs items={gearTypes} selected={gearIndex} onSelect={setGearIndex} label="Gear types" scrollTargetId="gears-panel" />
          <div id="gears-panel" className="mt-7 grid gap-8 md:grid-cols-2 md:items-stretch">
            <img src={gear.image} alt={gear.title} className="mx-auto block aspect-square h-full w-full max-w-[400px] object-contain object-top md:aspect-auto" />
            <div>
              <h3 className="font-display text-lg font-bold">{gear.title}</h3>
              {gear.description?.length > 1 && (
                <ul className="mt-4 list-disc space-y-0 pl-5 text-sm leading-relaxed text-slate">
                  {gear.description.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
              {gear.bullets.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate">
                  {gear.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
              {gear.description?.length === 1 && <p className="mt-4 text-sm leading-relaxed text-slate">{gear.description[0]}</p>}
              {gear.showCatalog && <a href="#gallery" className="mt-6 inline-flex rounded-md border border-action px-4 py-2 text-xs font-semibold text-action transition-colors hover:bg-action hover:text-white">View Catalog</a>}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div
          className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-14"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        >
          <div className="mx-auto w-full lg:w-[90%]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint">Our Positioning</p>
            <h2 className="mt-3 max-w-5xl font-display text-2xl font-bold leading-tight sm:text-3xl">
              From concept to finished product, we bring precision, quality and reliability to every transmission solution.
            </h2>
            <a href="#about-us" className="mt-5 inline-flex rounded-md bg-action px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-action-hover">Learn More About Us</a>
          </div>
        </div>
      </section>

      <ProductFeature
        title="Worm Shafts"
        image="/Aadish-Gears/images/Gallery/WORM%20SHAFTS.jpg"
        alt="Precision worm shafts"
        description="The Worm / Worm Shafts can also be manufactured from a range of 1 Module to 6 Module with a maximum whorling length of 300 mm. The Worm / Worm shaft can be manufactured from material like SG Iron, Alloy Steel, SS ( Stainless Steel ) etc. Worm Shafts of multiple starts from two to 12 can also be manufactured."
        details={[
          "All types of worm shafts from 0.8 module to 4.0 module",
          "Minimum length 25mm to maximum length 500mm",
          "Hardened & Ground Worm Shafts",
        ]}
      />
      <ProductFeature
        title="Sprockets"
        image="/Aadish-Gears/images/Gallery/Sprockets.JPG"
        alt="Precision sprockets"
        imageMaxWidth="max-w-[400px]"
        description="Our Company is specialized for Sprockets. We manufacture sprockets from 3/8” Pitch to 1” Pitch. We manufacture Simplex, Duplex, Triplex & Disc type Sprockets also. Sprockets with Taper Locking bush are also manufactured. We manufacture sprockets confirming to international standards and our sprockets are noise less and friction less. We have a fully developed range of Standard Sprockets confirming to British Standards. Sprockets confirming to other standards can also be manufactured by us."
        details={[
          "All Type of sprockets",
          "Maximum OD 350 mm, Minimum OD 20mm",
          "3/8” Pitch to 1” Pitch",
          "Friction less sprockets",
        ]}
      />
      <ProductFeature
        title="Splines"
        image="/Aadish-Gears/images/Gallery/SPLINE%20SHAFTS.jpg"
        alt="Precision spline shafts"
        imageMaxWidth="max-w-[400px]"
        details={[
          "All type of Spline Shafts",
          "Maximum shaft Length 600 mm",
          "Minimum shaft Length: 50 mm",
          "Maximum Spline Length: 300 mm",
          "Minimum spline Length: 10 mm",
        ]}
      />

      <section className="bg-navy text-white">
        <div
          className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-14"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        >
          <div className="mx-auto flex w-full flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:w-[90%]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint">Get in touch with us</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Have a drawing or a rough sketch?</h2>
              <p className="mt-2 text-sm text-sky/90">Send us your requirement and our team will get back with a quote.</p>
            </div>
            <a href="#contact" className="shrink-0 rounded-md bg-action px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover">Send An Enquiry</a>
          </div>
        </div>
      </section>
    </main>
  );
}
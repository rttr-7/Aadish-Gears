import { useEffect, useRef, useState } from "react";
import {
  electricalIsolatorProducts,
  gearboxes,
  gearTypes,
  helicalGearboxProducts,
  promises,
} from "../data/productsPage";
import { INSPECTION_INSTRUMENTS } from "../data/aboutContent";

function Tabs({ items, selected, onSelect, label, scrollTargetId }) {
  const desktopColumns = items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5";

  return (
    <div className={`mt-5 flex min-w-0 gap-5 overflow-x-auto border-b border-slate/20 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 sm:overflow-visible ${desktopColumns}`} role="tablist" aria-label={label}>
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
          className={`shrink-0 whitespace-nowrap border-b-2 px-2 py-3 text-xs font-bold transition-colors sm:shrink sm:whitespace-normal sm:px-3 sm:text-sm xl:whitespace-nowrap ${
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
      <div>
        <h2 id={`feature-${title.toLowerCase()}`} className="scroll-mt-24 font-display text-2xl font-bold text-navy">{title}</h2>
        <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-stretch">
          <div className="flex justify-center md:h-full">
            <img loading="lazy" decoding="async" src={image} alt={alt} className={`block h-auto w-full ${imageMaxWidth} object-contain md:h-full`} />
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

function InventoryDialog({ onClose, category, title, items, columns, entryLabel, maxWidth, minTableWidth }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="inventory-title"
      className={`m-auto max-h-[calc(100%-2rem)] w-[calc(100%-2rem)] ${maxWidth} overflow-hidden rounded-3xl border-0 bg-white p-0 text-navy shadow-2xl`}
      style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(255, 255, 255, 0.95)" }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
        <div className="flex items-start justify-between gap-4 px-6 pb-5 pt-6 sm:px-8 sm:pt-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-action">{category}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h2 id="inventory-title" className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
              <span className="rounded-lg bg-[#edf4ff] px-3 py-1 text-sm font-semibold text-action">{items.length} entries</span>
            </div>
          </div>
          <button
            type="button"
            aria-label={`Close ${title}`}
            className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#f3f6fa] text-3xl leading-none text-navy transition-colors hover:bg-[#e5edf7]"
            onClick={() => dialogRef.current?.close()}
          >
            ×
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto px-6 pb-6 sm:px-8">
          <table className={`w-full ${minTableWidth} table-fixed border-collapse text-left text-sm`}>
            <colgroup>
              {columns.map((column) => <col key={column.heading} className={column.width} />)}
            </colgroup>
            <thead className="sticky top-0 z-10 bg-[#edf4fc] text-xs uppercase text-navy">
              <tr>
                {columns.map((column) => (
                  <th key={column.heading} className="border border-[#d3e1f0] px-3 py-3 font-bold">{column.heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-[#f5f8fc]">
                  {columns.map((column) => (
                    <td key={column.heading} className="border border-[#d3e1f0] px-3 py-2.5">{column.value(item, index)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-[#d3e1f0] px-6 py-4 sm:px-8">
          <p className="text-sm text-slate">Showing all {items.length} {entryLabel} entries</p>
          <button
            type="button"
            className="rounded-lg bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

function ProductCarousel({ products, selected, onSelect, label }) {
  const product = products[selected];
  const applications = product.applications ?? [product.application];

  return (
    <div>
      <div id="gearbox-panel" className="mt-7 grid gap-8 md:grid-cols-2 md:items-stretch">
        <div className="flex h-full items-center justify-center bg-white p-6">
          <img loading="lazy" decoding="async" src={product.image} alt={product.title} className="aspect-[16/9] w-full max-w-[500px] rounded-[6px] object-contain" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold">{product.title}</h3>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-black">
            {product.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <div className="mt-5 flex flex-col items-start gap-2 text-sm font-medium text-black">
            <span>Application:</span>
            <div className="flex flex-wrap gap-2">
              {applications.map((application) => (
                <span key={application} className="inline-flex max-w-full items-center rounded-full border border-action/40 bg-sky/30 px-3 py-1.5 text-xs font-semibold text-action">
                  {application}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-5 bg-white py-2" aria-label={`${label} products`}>
        <button
          type="button"
          aria-label={`Previous ${label} product`}
          onClick={() => onSelect((selected - 1 + products.length) % products.length)}
          className="grid size-8 place-items-center rounded-full border border-action bg-transparent text-base text-action transition-colors hover:bg-action hover:text-white"
        >
          <span aria-hidden="true">&#8249;</span>
        </button>
        <div className="flex items-center gap-2" role="group" aria-label={`Choose ${label} product`}>
          {products.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title}`}
              aria-current={index === selected ? "true" : undefined}
              onClick={() => onSelect(index)}
              className={`size-2.5 rounded-full transition-colors ${index === selected ? "bg-[#0d1b3e]" : "bg-[#ccc] hover:bg-[#aaa]"}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label={`Next ${label} product`}
          onClick={() => onSelect((selected + 1) % products.length)}
          className="grid size-8 place-items-center rounded-full border border-action bg-transparent text-base text-action transition-colors hover:bg-action hover:text-white"
        >
          <span aria-hidden="true">&#8250;</span>
        </button>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [gearboxIndex, setGearboxIndex] = useState(0);
  const [isolatorProductIndex, setIsolatorProductIndex] = useState(0);
  const [helicalProductIndex, setHelicalProductIndex] = useState(0);
  const [gearIndex, setGearIndex] = useState(0);
  const [showInspectionDialog, setShowInspectionDialog] = useState(false);
  useEffect(() => {
    const applyTarget = () => {
      let target;
      try {
        target = JSON.parse(window.sessionStorage.getItem("products-target"));
        window.sessionStorage.removeItem("products-target");
      } catch {
        return;
      }
      if (!target) return;

      if (target.group === "feature") {
        // handled by scroll below
      } else if (target.group === "gear") {
        setGearIndex(target.index);
      } else {
        setGearboxIndex(target.index);
        if (target.product !== undefined) {
          (target.index === 0 ? setIsolatorProductIndex : setHelicalProductIndex)(target.product);
        }
      }
      setTimeout(() => {
        document
          .getElementById(
            target.group === "feature" ? `feature-${target.id}` : target.group === "gear" ? "gears-title" : "gearbox-title",
          )
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    };

    applyTarget();
    window.addEventListener("products-target", applyTarget);
    return () => window.removeEventListener("products-target", applyTarget);
  }, []);
  const gearbox = gearboxes[gearboxIndex];
  const gear = gearTypes[gearIndex];
  const inspectionColumns = [
    { heading: "Sr No", width: "w-14", value: (_, index) => String(index + 1).padStart(2, "0") },
    { heading: "Type Of Instrument", width: "w-[54%]", value: (instrument) => instrument.type },
    { heading: "No", width: "w-[16%]", value: (instrument) => instrument.quantity },
    { heading: "Make", value: (instrument) => instrument.make },
  ];

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
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint">Our Expertise</p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Powering Performance Through Precision</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sky/90 sm:text-base">
              Explore our range of precision-engineered products designed for reliability, consistency and long-term performance.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14" aria-labelledby="gearbox-title">
        <div>
          <h2 id="gearbox-title" className="font-display text-2xl font-bold">Customized Gears Boxes</h2>
          <p className="mt-2 text-sm text-slate">Five product families, designed and machined in-house from a single custom gearbox to bulk production runs.</p>
          <Tabs items={gearboxes} selected={gearboxIndex} onSelect={setGearboxIndex} label="Gearbox types" scrollTargetId="gearbox-panel" />
          {gearboxIndex < 2 ? (
            <ProductCarousel
              products={gearboxIndex === 0 ? electricalIsolatorProducts : helicalGearboxProducts}
              selected={gearboxIndex === 0 ? isolatorProductIndex : helicalProductIndex}
              onSelect={gearboxIndex === 0 ? setIsolatorProductIndex : setHelicalProductIndex}
              label={gearbox.label}
            />
          ) : (
            <div id="gearbox-panel" className="mt-7 grid gap-8 md:grid-cols-2 md:items-stretch">
              <div className="flex h-full items-center justify-center bg-white p-6">
                <img loading="lazy" decoding="async"
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
          <div>
            <h2 className="font-display text-2xl font-bold">Our Promise</h2>
            <p className="mt-2 text-sm text-slate">Finishing processes we don’t run in-house are handled by a small set of trusted, ISO-certified vendors.</p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {promises.map(([icon, label]) => (
                <div key={label} className="flex min-h-16 items-center justify-start gap-3 rounded-xl bg-[#d6e7f9] px-4 py-3 text-sm font-semibold text-navy">
                  <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-white text-action" aria-hidden="true">
                    <span className="material-symbols-rounded text-[20px] leading-none">{icon}</span>
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
                <button type="button" onClick={() => setShowInspectionDialog(true)} className="rounded-md border border-action px-4 py-2 text-xs font-semibold text-action transition-colors hover:bg-action hover:text-white">View Our Instrument List</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14" aria-labelledby="gears-title">
        <div>
          <h2 id="gears-title" className="font-display text-2xl font-bold">Gears</h2>
          <p className="mt-2 text-sm text-slate">Five product families, designed and machined in-house from a single custom gearbox to bulk production runs.</p>
          <Tabs items={gearTypes} selected={gearIndex} onSelect={setGearIndex} label="Gear types" scrollTargetId="gears-panel" />
          <div id="gears-panel" className="mt-7 grid gap-8 md:grid-cols-2 md:items-stretch">
            <img loading="lazy" decoding="async" src={gear.image} alt={gear.title} className="mx-auto block aspect-square h-full w-full max-w-[400px] object-contain object-top md:aspect-auto" />
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
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint">Get in touch with us</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Have a drawing or a rough sketch?</h2>
              <p className="mt-2 text-sm text-sky/90">Send us your requirement and our team will get back with a quote.</p>
            </div>
            <a href="#contact" className="shrink-0 rounded-md bg-action px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover">Send An Enquiry</a>
          </div>
        </div>
      </section>
      {showInspectionDialog && (
        <InventoryDialog
          onClose={() => setShowInspectionDialog(false)}
          category="Quality Inspection"
          title="Inspection Instruments List"
          items={INSPECTION_INSTRUMENTS}
          columns={inspectionColumns}
          entryLabel="inspection instrument"
          maxWidth="max-w-[900px]"
          minTableWidth="min-w-[700px]"
        />
      )}
    </main>
  );
}
import { useEffect, useRef, useState } from "react";
import {
  electricalIsolatorProducts,
  gearboxes,
  gearTypes,
  helicalGearboxProducts,
  promises,
} from "../data/productsPage";
import { INSPECTION_INSTRUMENTS, MACHINERY, panelGrid } from "../data/aboutContent";
import MainBanner from "./MainBanner";
import CtaBanner from "./CtaBanner";

function Tabs({ items, selected, onSelect, label, scrollTargetId }) {
  const desktopColumns = items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5";

  return (
    <div className={`mt-14 flex min-w-0 gap-3 overflow-x-auto shadow-[inset_0_-1px_0_var(--color-line)] sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible md:grid-cols-3 lg:gap-5 ${desktopColumns}`} role="tablist" aria-label={label}>
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
          className={`shrink-0 whitespace-nowrap pb-[0.9rem] text-base transition-colors sm:shrink sm:whitespace-normal ${
            index === selected ? "font-bold text-action shadow-[inset_0_-2px_0_var(--color-action)]" : "font-medium text-slate hover:text-action"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function ProductFeature({ id, spacing = "py-10", title, image, alt, description, details, imageMaxWidth = "max-w-[500px]" }) {
  return (
    <section id={id} className={`page-container scroll-mt-20 ${spacing}`}>
      <div>
        <h2 id={`feature-${title.toLowerCase()}`} className="scroll-mt-24 font-display text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
        <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-stretch">
          <div className="flex justify-center md:h-full">
            <img loading="lazy" decoding="async" src={image} alt={alt} className={`block h-auto w-full ${imageMaxWidth} object-contain md:h-full`} />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
            {description && <p className="mt-4 text-sm leading-5 text-slate">{description}</p>}
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-5 text-slate">
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
      className={`m-auto max-h-[calc(100%-2rem)] w-[calc(100%-2rem)] ${maxWidth} overflow-hidden rounded-3xl border-0 bg-white p-0 text-navy shadow-2xl backdrop:bg-[rgba(4,18,38,0.78)] backdrop:backdrop-blur-[5px]`}
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
              <span className="rounded-lg bg-pale-strong px-3 py-1 text-sm font-semibold text-action">{items.length} entries</span>
            </div>
          </div>
          <button
            type="button"
            aria-label={`Close ${title}`}
            className="grid size-11 shrink-0 place-items-center rounded-lg bg-pale text-3xl leading-none text-navy transition-colors hover:bg-pale-strong"
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
            <thead className="sticky top-0 z-10 bg-pale-strong text-xs uppercase text-navy">
              <tr>
                {columns.map((column) => (
                  <th key={column.heading} className="border border-line px-3 py-3 font-bold">{column.heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-pale">
                  {columns.map((column) => (
                    <td key={column.heading} className="border border-line px-3 py-2.5">{column.value(item, index)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-line px-6 py-4 sm:px-8">
          <p className="text-sm text-slate">Showing all {items.length} {entryLabel} entries</p>
          <button
            type="button"
            className="rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
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
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-5 text-slate">
            {product.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <div className="mt-5 flex flex-col items-start gap-2 text-sm font-medium text-slate">
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
      <div className="mt-6 flex items-center justify-center gap-5 bg-white pt-2" aria-label={`${label} products`}>
        <button
          type="button"
          aria-label={`Previous ${label} product`}
          onClick={() => onSelect((selected - 1 + products.length) % products.length)}
          className="grid size-8 place-items-center rounded-full border border-action bg-transparent text-base text-action transition-colors hover:bg-action hover:text-white"
        >
          <span aria-hidden="true">&#8249;</span>
        </button>
        <div className="flex items-center gap-[0.45rem]" role="group" aria-label={`Choose ${label} product`}>
          {products.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title}`}
              aria-current={index === selected ? "true" : undefined}
              onClick={() => onSelect(index)}
              className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-action ${
                index === selected ? "w-[1.2rem] bg-action" : "w-2 bg-slate/20"
              }`}
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
  const [showMachineryDialog, setShowMachineryDialog] = useState(false);
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
  const machineryColumns = [
    { heading: "No", width: "w-16", value: (_, index) => index + 1 },
    { heading: "Name of machine", width: "w-[24%]", value: (machine) => machine.name },
    { heading: "Make", width: "w-[12%]", value: (machine) => machine.make },
    { heading: "No off", width: "w-[8%]", value: (machine) => machine.quantity },
    { heading: "Machine details and specifications", value: (machine) => machine.details },
  ];
  const inspectionColumns = [
    { heading: "Sr No", width: "w-14", value: (_, index) => String(index + 1).padStart(2, "0") },
    { heading: "Type Of Instrument", width: "w-[54%]", value: (instrument) => instrument.type },
    { heading: "No", width: "w-[16%]", value: (instrument) => instrument.quantity },
    { heading: "Make", value: (instrument) => instrument.make },
  ];

  return (
    <main id="products" className="bg-white text-navy">
      <MainBanner
        subHeader="Our Expertise"
        header="Powering Performance Through Precision"
        description="Explore our range of precision-engineered products designed for reliability, consistency and long-term performance."
      />

      <section id="products-gearboxes" className="page-container scroll-mt-20 py-20" aria-labelledby="gearbox-title">
        <div>
          <h2 id="gearbox-title" className="font-display text-3xl font-bold sm:text-4xl">Customized Gears Boxes</h2>
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
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-5 text-slate">
                  {gearbox.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="mt-5 flex flex-col items-start gap-2 text-sm font-medium text-slate">
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

      <section className="bg-pale">
        <div className="page-container py-20">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Our Promise</h2>
            <p className="mt-2 text-sm text-slate">Finishing processes we don’t run in-house are handled by a small set of trusted, ISO-certified vendors.</p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {promises.map(([icon, label]) => (
                <div key={label} className="flex min-h-16 items-center justify-start gap-3 rounded-xl bg-sky px-4 py-3 text-sm font-semibold text-navy">
                  <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white text-black" aria-hidden="true">
                    <span className="material-symbols-rounded leading-none">{icon}</span>
                  </span>
                  <span className="min-w-0 text-left">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Why Trust Our Manufacturing</h2>
              <p className="mt-2 text-sm text-slate">Our advanced machinery and precision instruments enable us to deliver consistent quality, accuracy and reliability across every product.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" onClick={() => setShowMachineryDialog(true)} className="rounded-full border-2 border-action px-6 py-3 text-sm font-semibold text-action transition-colors hover:bg-action hover:text-white">View Our Machine List</button>
                <button type="button" onClick={() => setShowInspectionDialog(true)} className="rounded-full border-2 border-action px-6 py-3 text-sm font-semibold text-action transition-colors hover:bg-action hover:text-white">View Our Instrument List</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products-gears" className="page-container scroll-mt-20 py-20" aria-labelledby="gears-title">
        <div>
          <h2 id="gears-title" className="font-display text-3xl font-bold sm:text-4xl">Gears</h2>
          <p className="mt-2 text-sm text-slate">Five product families, designed and machined in-house from a single custom gearbox to bulk production runs.</p>
          <Tabs items={gearTypes} selected={gearIndex} onSelect={setGearIndex} label="Gear types" scrollTargetId="gears-panel" />
          <div id="gears-panel" className="mt-7 grid gap-8 md:grid-cols-2 md:items-stretch">
            <img loading="lazy" decoding="async" src={gear.image} alt={gear.title} className="mx-auto block aspect-square h-full w-full max-w-[400px] object-contain object-top md:aspect-auto" />
            <div>
              <h3 className="font-display text-lg font-bold">{gear.title}</h3>
              {gear.description?.length > 1 && (
                <ul className="mt-4 list-disc space-y-0 pl-5 text-sm leading-5 text-slate">
                  {gear.description.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
              {gear.bullets.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-5 text-slate">
                  {gear.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
              {gear.description?.length === 1 && <p className="mt-4 text-sm leading-5 text-slate">{gear.description[0]}</p>}
              {gear.showCatalog && <a href="#gallery" className="mt-6 inline-flex rounded-full border-2 border-action px-6 py-3 text-sm font-semibold text-action transition-colors hover:bg-action hover:text-white">View Catalog</a>}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white" style={panelGrid}>
        <div className="page-container py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] font-mono text-mint">Our Positioning</p>
            <h2 className="mt-3 max-w-5xl font-display text-3xl font-bold sm:text-4xl">
              From concept to finished product, we bring precision, quality and reliability to every transmission solution.
            </h2>
            <a href="#about-us" className="mt-5 inline-flex rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover">Learn More About Us</a>
          </div>
        </div>
      </section>

      <ProductFeature
        id="products-worm-shafts"
        spacing="pb-10 pt-20"
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
        id="products-sprockets"
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
        id="products-splines"
        spacing="pb-20 pt-10"
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

      <CtaBanner />
      {showMachineryDialog && (
        <InventoryDialog
          onClose={() => setShowMachineryDialog(false)}
          category="Manufacturing Excellence"
          title="Machinery List"
          items={MACHINERY}
          columns={machineryColumns}
          entryLabel="machinery"
          maxWidth="max-w-[1450px]"
          minTableWidth="min-w-[900px]"
        />
      )}
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
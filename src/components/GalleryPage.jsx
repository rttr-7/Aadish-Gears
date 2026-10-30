import { useEffect, useRef, useState } from "react";
import MainBanner from "./MainBanner";

const products = [
  { name: "AGTPL 765 KVA ES Gearbox", image: "AGTPL%20765%20KVA%20ES%20GEARBOX.png" },
  { name: "EV Gearbox", image: "EV%20GEARBOX.png" },
  { name: "AGTPL 765 KVA MS Gearbox", image: "AGTPL%20765%20KVA%20MS%20GEARBOX.png" },
  { name: "Precision Gears", image: "Gears.JPG" },
  { name: "Helical Gears", image: "HELICAL%20GEARS.png" },
  { name: "ISO 0.5 H.P Gearbox", image: "ISO%200.5%20H.P%20GEARBOX.png" },
  { name: "Inline Helical Gearbox", image: "INLINE%20HELICAL%20GEARBOX.png" },
  { name: "ISO 1.0 H.P Gearbox", image: "ISO%201.0%20H.P%20GEARBOX.png" },
  { name: "Niktish Assembly Gearbox", image: "NIKTISH%20ASM%20GEARBOX.png" },
  { name: "Spur Gear", image: "SPUR%20GEAR.png" },
  { name: "Sprockets", image: "Sprockets.JPG" },
  { name: "NK 600 Helical Gearbox", image: "NK%20600%20HELICAL%20GEARBOX.png" },
  { name: "Quarter Turn Gearbox", image: "QUARTER%20TURN%20GEARBOX.png" },
  { name: "Spline Shafts", image: "SPLINE%20SHAFTS.jpg" },
  { name: "Worm Gearbox", image: "WORM%20GEARBOX.png" },
  { name: "NK 180 Helical Gearbox", image: "NK%20180%20HELICAL%20GEARBOX.png" },
  { name: "Worm Shafts", image: "WORM%20SHAFTS.jpg" },
  { name: "Worm Gears & Worm Shafts", image: "Worm%20Gears%20&%20Worm%20Shafts.JPG" },
];

const productionMachines = [
  ["4 Axis VMC Machine", "1)%204%20AXIS%20VMC%20MACHINE.png"],
  ["VMV Machine", "2)%20VMV%20MACHINE.jpeg"],
  ["VMC Drill Tap Centre", "3)%20VMC%20DRILL%20TAP%20CENTRE.png"],
  ["CNC Turning Machine", "4)%20CNC%20TURNING%20MACHINE%201.jpeg"],
  ["Gear Hobbing Machine", "5)%20GEAR%20HOBBING%20MACHINE.jpeg"],
  ["Gear Shaping Machine", "6)%20GEAR%20SHAPING%20MACHINE.png"],
  ["Milling Machine", "7)%20MILLING%20MACHINE.png"],
  ["Broaching Machine", "8)%20BROACHING%20MACHINE.jpeg"],
  ["Polygon Lathe Machine", "9)%20POLYGON%20LATHE%20MACHINE.png"],
  ["Keyway Machine", "10)%20KEYWAY%20MACHINE.png"],
  ["Tapping Machine", "11)%20TAPPING%20MACHINE.png"],
  ["Automatic Bandsaw Machine", "12)%20AUTOMATIC%20BANDSAW%20MACHINE.png"],
  ["Bandsaw Machine", "13)%20BANDSAW%20MACHINE.jpeg"],
  ["Vertical Slotting Machine", "14)%20VERTICAL%20SLOTTING%20MACHINE.jpeg"],
  ["Radial Drilling Machine", "15)%20RADIAL%20DRILLING%20MACHINE.jpeg"],
  ["Pillar Drill Machine", "16)%20PILLAR%20DRILL%20MACHINE.jpeg"],
].map(([name, image]) => ({ name, image: `/Aadish-Gears/images/Gallery2/${image}` }));

const machineryCategories = [
  {
    label: "Production Machines",
    title: "Production Machines",
    description: "Our production equipment supports precision machining across a wide range of gear and transmission components.",
    items: productionMachines,
  },
  {
    label: "Assembly Machines",
    title: "Assembly Machines",
    featuredIndex: 0,
    description: "Dedicated assembly equipment supports consistent gearbox builds and repeatable production quality.",
    items: [
      { name: "Semi-automatic Gearbox Assembly Line", image: "/Aadish-Gears/images/Assembly%20infra.png" },
      { name: "Hydraulic Press", image: "/Aadish-Gears/images/Assembly%20Machinery/1.%20HYDRAULIC%20PRESS.png" },
    ],
  },
  {
    label: "Inspection Machines",
    title: "Inspection Machines",
    featuredIndex: 15,
    description: "Inspection instruments and dedicated checking machines help verify dimensions and gear quality.",
    items: [
      ["Worm Gear CD Machine", "1)%20WORM%20GEAR%20CD%20MACHINE.png"],
      ["PCD Runout Checking Machine", "2)%20PCD%20RUNOUT%20CHECKING%20MACHINE.png"],
      ["Hardness Tester", "3)%20HARDNESS%20TESTER.png"],
    ].map(([name, image]) => ({ name, image: `/Aadish-Gears/images/Inspection%20Machinery/${image}` })),
  },
];

function GalleryTile({ name, image, aspect = "aspect-square", fit = "cover", onOpen }) {
  const isAutomaticBandsaw = name === "Automatic Bandsaw Machine";
  const clickable = Boolean(image && onOpen);
  const Root = clickable ? "button" : "figure";
  const Caption = clickable ? "span" : "figcaption";

  return (
    <Root
      {...(clickable && { type: "button", onClick: onOpen, "aria-label": `View ${name} full screen` })}
      className={`group relative block w-full overflow-hidden border border-line bg-white text-left ${
        clickable ? "cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action" : ""
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className={`${aspect} block w-full bg-white object-${fit} transition-transform duration-300 group-hover:scale-[1.03]`}
        />
      ) : (
        <div className={`${aspect} flex items-center justify-center bg-pale text-xs text-slate`} aria-hidden="true">
          Image coming soon
        </div>
      )}
      <Caption className={`flex h-12 items-center justify-center bg-navy/90 px-2 py-1 text-center text-xs font-semibold leading-tight text-white transition-colors group-hover:bg-action ${
        isAutomaticBandsaw ? "whitespace-nowrap px-1 text-[10px] sm:text-xs" : ""
      }`}>
        {name}
      </Caption>
    </Root>
  );
}

// Full-screen image viewer, styled like the machinery/instrument list dialogs
function ImageLightbox({ category, items, index, onIndexChange, onClose }) {
  const dialogRef = useRef(null);
  const item = items[index];
  const hasMultiple = items.length > 1;
  const step = (direction) => onIndexChange((index + direction + items.length) % items.length);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="lightbox-title"
      className="m-auto max-h-[calc(100%-2rem)] w-[calc(100%-2rem)] max-w-6xl overflow-hidden rounded-3xl border-0 bg-white p-0 text-navy shadow-2xl backdrop:bg-[rgba(4,18,38,0.78)] backdrop:backdrop-blur-[5px]"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
      onKeyDown={(event) => {
        if (!hasMultiple) return;
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
      }}
    >
      <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
        <div className="flex items-start justify-between gap-4 px-6 pb-5 pt-6 sm:px-8 sm:pt-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-action">{category}</p>
            <h2 id="lightbox-title" className="mt-2 font-display text-2xl font-bold sm:text-3xl">{item.name}</h2>
          </div>
          <button
            type="button"
            aria-label="Close image"
            className="grid size-11 shrink-0 place-items-center rounded-lg bg-pale text-3xl leading-none text-navy transition-colors hover:bg-pale-strong"
            onClick={() => dialogRef.current?.close()}
          >
            ×
          </button>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-6 sm:px-8">
          <img
            src={item.image}
            alt={item.name}
            className="block max-h-[calc(100dvh-15rem)] w-auto max-w-full rounded-xl border border-line bg-pale object-contain"
          />
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-line px-6 py-4 sm:px-8">
          <p className="text-sm text-slate">Image {index + 1} of {items.length}</p>
          <div className="flex items-center gap-3">
            {hasMultiple && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  className="grid size-11 place-items-center rounded-lg bg-pale text-navy transition-colors hover:bg-pale-strong"
                  onClick={() => step(-1)}
                >
                  <span className="material-symbols-rounded" aria-hidden="true">arrow_back</span>
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  className="grid size-11 place-items-center rounded-lg bg-pale text-navy transition-colors hover:bg-pale-strong"
                  onClick={() => step(1)}
                >
                  <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                </button>
              </>
            )}
            <button
              type="button"
              className="rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
              onClick={() => dialogRef.current?.close()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const category = machineryCategories[activeCategory];
  const [lightbox, setLightbox] = useState(null);

  const productImages = products.map((product) => ({ name: product.name, image: `/Aadish-Gears/images/Gallery/${product.image}` }));
  const machineImages = category.items.filter((item) => item.image);

  return (
    <main id="gallery" className="bg-white text-navy">
      <MainBanner
        subHeader="Where the magic happens"
        header="Explore our products and manufacturing infrastructure"
        description="Explore our range of products and take a closer look at the manufacturing infrastructure behind our work."
      />

      <section className="page-container pb-10 pt-20" aria-labelledby="gallery-products-title">
        <h2 id="gallery-products-title" className="font-display text-3xl font-bold sm:text-4xl">Products</h2>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {Array.from({ length: 18 }, (_, index) => {
            const product = products[index];

            return (
              <div key={product.name}>
                <GalleryTile
                  name={product.name}
                  image={productImages[index].image}
                  onOpen={() => setLightbox({ category: "Products", items: productImages, index })}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="page-container pb-20 pt-10" aria-labelledby="gallery-machinery-title">
        <h2 id="gallery-machinery-title" className="font-display text-3xl font-bold sm:text-4xl">Machinery</h2>
        <div className="mt-5 flex gap-6 overflow-x-auto shadow-[inset_0_-1px_0_var(--color-line)]" role="tablist" aria-label="Machinery categories">
          {machineryCategories.map((item, index) => (
            <button
              key={item.label}
              id={`machinery-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={index === activeCategory}
              aria-controls="machinery-panel"
              onClick={() => setActiveCategory(index)}
              className={`shrink-0 px-3 py-3 text-sm font-semibold transition-colors ${
                index === activeCategory ? "text-action shadow-[inset_0_-2px_0_var(--color-action)]" : "text-slate hover:text-action"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          id="machinery-panel"
          role="tabpanel"
          aria-labelledby={`machinery-tab-${activeCategory}`}
          className="mt-7"
        >
          <div className="mb-6">
            <h3 className="font-display text-xl font-bold">{category.title}</h3>
            <p className="mt-2 text-sm leading-5 text-slate">{category.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {category.items.map((item, index) => {
              return (
                <GalleryTile
                  key={`${activeCategory}-${index}`}
                  name={item.name}
                  image={item.image}
                  aspect="aspect-[4/3]"
                  onOpen={() => setLightbox({ category: category.title, items: machineImages, index: machineImages.indexOf(item) })}
                />
              );
            })}
          </div>
        </div>
      </section>

      {lightbox && (
        <ImageLightbox
          {...lightbox}
          onIndexChange={(index) => setLightbox((current) => ({ ...current, index }))}
          onClose={() => setLightbox(null)}
        />
      )}
    </main>
  );
}
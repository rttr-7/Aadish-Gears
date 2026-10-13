import { useState } from "react";

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
    items: [{ name: "Semi-automatic Gearbox Assembly Line", image: "/Aadish-Gears/images/Assembly%20infra.png" }],
  },
  {
    label: "Inspection Machines",
    title: "Inspection Machines",
    featuredIndex: 15,
    description: "Inspection instruments and dedicated checking machines help verify dimensions and gear quality.",
    items: [{ name: "PCD Runout Checking Machine", image: "/Aadish-Gears/images/Quality%20Inspec.png" }],
  },
];

function GalleryTile({ name, image, aspect = "aspect-square", fit = "cover" }) {
  const isAutomaticBandsaw = name === "Automatic Bandsaw Machine";

  return (
    <figure className="group relative overflow-hidden border border-[#d7e1ed] bg-white">
      {image ? (
        <img
          src={image}
          alt={name}
          className={`${aspect} block w-full bg-white object-${fit} transition-transform duration-300 group-hover:scale-[1.03]`}
        />
      ) : (
        <div className={`${aspect} flex items-center justify-center bg-[#f5f8fc] text-xs text-slate`} aria-hidden="true">
          Image coming soon
        </div>
      )}
      <figcaption className={`flex h-12 items-center justify-center bg-navy/90 px-2 py-1 text-center text-xs font-semibold leading-tight text-white transition-colors group-hover:bg-action ${
        isAutomaticBandsaw ? "whitespace-nowrap px-1 text-[10px] sm:text-xs" : ""
      }`}>
        {name}
      </figcaption>
    </figure>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const category = machineryCategories[activeCategory];

  return (
    <main id="gallery" className="bg-white text-navy">
      <section className="bg-navy text-white">
        <div
          className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mint">Where the magic happens</p>
          <h1 className="mt-4 max-w-none font-display text-3xl font-bold leading-tight sm:text-4xl lg:whitespace-nowrap lg:text-4xl">
            Explore our products and manufacturing infrastructure
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-sky/90 sm:text-base">
            Explore our range of products and take a closer look at the manufacturing infrastructure behind our work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-10 lg:py-16" aria-labelledby="gallery-products-title">
        <h2 id="gallery-products-title" className="font-display text-2xl font-bold sm:text-3xl">Products</h2>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {Array.from({ length: 18 }, (_, index) => {
            const product = products[index];
            const finalRowPosition = index === 16 ? "lg:col-start-2" : index === 17 ? "lg:col-start-3" : "";

            return <div key={product.name} className={finalRowPosition}><GalleryTile name={product.name} image={`/Aadish-Gears/images/Gallery/${product.image}`} /></div>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-10 lg:pb-20" aria-labelledby="gallery-machinery-title">
        <h2 id="gallery-machinery-title" className="font-display text-2xl font-bold sm:text-3xl">Machinery</h2>
        <div className="mt-5 flex gap-6 overflow-x-auto border-b border-slate/20" role="tablist" aria-label="Machinery categories">
          {machineryCategories.map((item, index) => (
            <button
              key={item.label}
              id={`machinery-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={index === activeCategory}
              aria-controls="machinery-panel"
              onClick={() => setActiveCategory(index)}
              className={`shrink-0 border-b-2 px-3 py-3 text-sm font-semibold transition-colors ${
                index === activeCategory ? "border-action text-action" : "border-transparent text-slate hover:text-action"
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
            <p className="mt-2 text-sm leading-relaxed text-slate">{category.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {Array.from({ length: 16 }, (_, index) => {
              const item = category.items[index];
              const title = item?.name ?? `Machine ${String(index + 1).padStart(2, "0")}`;

              return <GalleryTile key={`${activeCategory}-${index}`} name={title} image={item?.image} aspect="aspect-[4/3]" />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
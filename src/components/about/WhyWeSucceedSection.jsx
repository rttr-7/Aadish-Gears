import { useEffect, useRef, useState } from "react";
import { INSPECTION_INSTRUMENTS, MACHINERY, TABS } from "../../data/aboutContent";

const styles = `
  .about-tab{background:none;border:none;padding:0 0 .9rem;border-bottom:2px solid transparent;font:inherit;font-size:.8rem;font-weight:700;color:#434e58;cursor:pointer;}
  .about-tab.active{color:#0f62fe;border-color:#0f62fe;}
  .about-dots{display:flex;align-items:center;justify-content:center;gap:.45rem;margin-top:1rem;}
  .about-dots button{display:inline-block;width:8px;height:8px;padding:0;border:0;border-radius:50%;background:rgba(67,78,88,.2);cursor:pointer;}
  .about-dots button.active{width:1.2rem;height:8px;border-radius:999px;background:#0f62fe;}
  .about-dots button:focus-visible{outline:2px solid #0f62fe;outline-offset:3px;}
  .machinery-dialog::backdrop{background:rgba(4,18,38,.78);backdrop-filter:blur(5px);}
`;

const TAB_IMAGES = [
  {
    src: "/Aadish-Gears/images/ManufacturingExcellance.png",
    alt: "Manufacturing equipment for precision gear production",
  },
  {
    src: "/Aadish-Gears/images/Assembly%20infra.png",
    alt: "Semi-automatic gearbox assembly line",
  },
  {
    src: "/Aadish-Gears/images/Quality%20Inspec.png",
    alt: "PCD runout checking machine used for quality inspection",
  },
  {
    src: "/Aadish-Gears/images/Infrasturcture%20people.png",
    alt: "Precision gears and components",
  },
  {
    src: "/Aadish-Gears/images/Future.png",
    alt: "A young plant growing, representing future growth",
  },
];

function InventoryDialog({ onClose, category, title, items, columns, entryLabel, maxWidth, minTableWidth }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="inventory-title"
      className={`machinery-dialog m-auto max-h-[calc(100%-2rem)] w-[calc(100%-2rem)] ${maxWidth} overflow-hidden rounded-3xl border-0 bg-white p-0 text-navy shadow-2xl`}
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

export default function WhyWeSucceedSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeInventory, setActiveInventory] = useState(null);
  const tab = TABS[activeTab];
  const tabImage = TAB_IMAGES[activeTab];
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
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <style>{styles}</style>

      <h2 className="mb-8 font-display text-3xl font-bold text-navy sm:text-4xl">Why We Succeed</h2>
      <div className="grid w-full grid-cols-2 gap-x-4 border-b border-slate/15 pb-2 sm:grid-cols-3 lg:grid-cols-5">
        {TABS.map((t, i) => (
          <button
            key={t.label}
            type="button"
            className={"about-tab min-w-0 whitespace-normal text-center" + (i === activeTab ? " active" : "")}
            aria-pressed={i === activeTab}
            onClick={() => setActiveTab(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="overflow-hidden border border-slate/25 bg-white">
            <img src={tabImage.src} alt={tabImage.alt} className="block h-auto w-full" />
          </div>
          <div className="about-dots" role="group" aria-label="Choose a Why We Succeed section">
            {TABS.map((item, index) => (
              <button
                key={item.label}
                type="button"
                className={index === activeTab ? "active" : ""}
                aria-label={`Show ${item.label}`}
                aria-current={index === activeTab ? "page" : undefined}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-navy">{tab.heading}</h3>
          {tab.bullets?.length > 0 && (
            <ul className="mt-6 space-y-2 pl-5 text-sm text-navy">
              {tab.bullets.map((b) => <li key={b} className="list-disc">{b}</li>)}
            </ul>
          )}
          {tab.bulletGroups?.map((group) => (
            <div key={group.heading} className="mt-6">
              <h4 className="font-semibold text-navy">{group.heading}</h4>
              <ul className="mt-2 space-y-2 pl-5 text-sm text-navy">
                {group.items.map((item) => <li key={item} className="list-disc">{item}</li>)}
              </ul>
            </div>
          ))}
          {tab.paragraphs?.map((p, i) => (
            <p key={i} className="mt-4 text-sm leading-relaxed text-slate">{p}</p>
          ))}
          {tab.cta && (activeTab === 0 || activeTab === 2 ? (
            <button
              type="button"
              className="mt-6 inline-flex rounded-full border border-navy/25 bg-transparent px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              onClick={() => setActiveInventory(activeTab === 0 ? "machinery" : "inspection")}
            >
              {tab.cta}
            </button>
          ) : (
            <a href="#" className="mt-6 inline-flex rounded-full border border-navy/25 bg-transparent px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white">
              {tab.cta}
            </a>
          ))}
        </div>
      </div>
      {activeInventory === "machinery" && (
        <InventoryDialog
          onClose={() => setActiveInventory(null)}
          category="Manufacturing Excellence"
          title="Machinery List"
          items={MACHINERY}
          columns={machineryColumns}
          entryLabel="machinery"
          maxWidth="max-w-[1450px]"
          minTableWidth="min-w-[900px]"
        />
      )}
      {activeInventory === "inspection" && (
        <InventoryDialog
          onClose={() => setActiveInventory(null)}
          category="Quality Inspection"
          title="Inspection Instruments List"
          items={INSPECTION_INSTRUMENTS}
          columns={inspectionColumns}
          entryLabel="inspection instrument"
          maxWidth="max-w-[900px]"
          minTableWidth="min-w-[700px]"
        />
      )}
    </section>
  );
}

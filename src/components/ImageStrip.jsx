const tiles = [
  { icon: "settings", label: "Gear components" },
  { icon: "precision_manufacturing", label: "Assembled gearbox" },
  { icon: "all_inclusive", label: "Sprockets & chains" },
];

export default function ImageStrip() {
  return (
    <section id="gallery" className="grid grid-cols-1 sm:grid-cols-3" aria-label="Product photography">
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className="relative flex h-64 items-center justify-center overflow-hidden bg-navy sm:h-80"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(15,98,254,0.35), transparent 60%), radial-gradient(circle at 70% 70%, rgba(49,255,152,0.15), transparent 55%)",
            }}
          />
          <span
            className="material-symbols-rounded relative text-white/70"
            style={{ fontSize: "72px" }}
            aria-hidden="true"
          >
            {tile.icon}
          </span>
          <span className="sr-only">{tile.label}</span>
        </div>
      ))}
    </section>
  );
}

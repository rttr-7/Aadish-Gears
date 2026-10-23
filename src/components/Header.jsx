import { useEffect, useState } from "react";
import { nav } from "../data/content";
import {
  electricalIsolatorProducts,
  gearboxes,
  gearTypes,
  helicalGearboxProducts,
} from "../data/productsPage";

const productMenu = [
  {
    heading: "Customized Gear Boxes",
    group: "gearbox",
    items: gearboxes.map((gearbox, index) => ({
      label: gearbox.label,
      index,
      products: index === 0 ? electricalIsolatorProducts : index === 1 ? helicalGearboxProducts : [],
    })),
  },
  {
    heading: "Gears",
    group: "gear",
    items: gearTypes.map((gear, index) => ({ label: gear.label, index, products: [] })),
  },
  {
    heading: "Shafts & Sprockets",
    group: "feature",
    items: ["Worm Shafts", "Sprockets", "Splines"].map((label, index) => ({
      label,
      index,
      id: label.toLowerCase(),
      products: [],
    })),
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleNavigation = (event, href) => {
    window.sessionStorage.setItem("navigation-scroll", "top");
    if (window.location.hash !== href) return;

    event.preventDefault();
    window.sessionStorage.removeItem("navigation-scroll");
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const [productsOpen, setProductsOpen] = useState(false);
  const [hoveredHeading, setHoveredHeading] = useState(null);
  const [hoveredSub, setHoveredSub] = useState(null);

  const goToProduct = (event, target) => {
    event.preventDefault();
    setProductsOpen(false);
    setHoveredSub(null);
    window.sessionStorage.setItem("products-target", JSON.stringify(target));
    if (window.location.hash !== "#products") {
      window.sessionStorage.setItem("navigation-scroll", "top");
      window.location.hash = "#products";
    } else {
      window.dispatchEvent(new Event("products-target"));
    }
  };

  useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash || "#home";
      setActive(hash);
    };

    updateActive();
    window.addEventListener("hashchange", updateActive);

    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-mist">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-6 lg:px-10">
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src="/Aadish-Gears/AadishGearsLogo.png" alt="" width="40" height="40" className="shrink-0" />
          <span className="min-w-0 font-display text-xs font-bold leading-tight tracking-tight text-navy sm:text-base">
            AADISH GEARS &amp; TRANSMISSIONS PVT LTD
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const link = (
              <a
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                className={`text-sm font-medium transition-colors ${
                  active === item.href ? "text-action" : "text-slate hover:text-action"
                }`}
              >
                {item.label}
              </a>
            );
            if (item.href !== "#products") return <span key={item.label}>{link}</span>;

            return (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => {
                  setProductsOpen(false);
                  setHoveredHeading(null);
                  setHoveredSub(null);
                }}
                onFocus={() => setProductsOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setProductsOpen(false);
                }}
              >
                {link}
                {productsOpen && (() => {
                  const section = hoveredHeading !== null ? productMenu[hoveredHeading] : null;
                  const entry = section && hoveredSub !== null ? section.items[hoveredSub] : null;
                  const itemClass = (active) =>
                    `flex items-center justify-between px-4 py-2 text-sm font-medium transition-colors hover:bg-sky/30 hover:text-action ${
                      active ? "bg-sky/30 text-action" : "text-navy"
                    }`;
                  const chevron = <span className="material-symbols-rounded text-[18px] leading-none">chevron_right</span>;

                  return (
                    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                      <div className="flex rounded-lg border border-mist bg-white shadow-lg">
                        <div className="w-56 py-3">
                          {productMenu.map((item, headingIndex) => (
                            <a
                              key={item.heading}
                              href="#products"
                              onMouseEnter={() => {
                                setHoveredHeading(headingIndex);
                                setHoveredSub(null);
                              }}
                              onClick={(event) => goToProduct(event, { group: item.group, index: 0, id: item.items[0].id })}
                              className={itemClass(headingIndex === hoveredHeading)}
                            >
                              {item.heading}
                              {chevron}
                            </a>
                          ))}
                        </div>
                        {section && (
                        <div className="w-56 border-l border-mist py-3">
                          {section.items.map((item) => (
                            <a
                              key={item.label}
                              href="#products"
                              onMouseEnter={() => setHoveredSub(item.products.length ? item.index : null)}
                              onClick={(event) => goToProduct(event, { group: section.group, index: item.index, id: item.id })}
                              className={itemClass(hoveredSub === item.index)}
                            >
                              {item.label}
                              {item.products.length > 0 && chevron}
                            </a>
                          ))}
                        </div>
                        )}
                        {entry && (
                          <div className="w-72 border-l border-mist py-3">
                            {entry.products.map((product, productIndex) => (
                              <a
                                key={product.title}
                                href="#products"
                                onClick={(event) => goToProduct(event, { group: section.group, index: entry.index, product: productIndex })}
                                className="block px-4 py-2 text-sm text-slate transition-colors hover:bg-sky/30 hover:text-action"
                              >
                                {product.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            );
          })}
        </nav>

        <a
          href="#contact"
          onClick={(event) => handleNavigation(event, "#contact")}
          className="hidden shrink-0 rounded-full bg-action px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-action-hover lg:inline-block"
        >
          Send Us An Enquiry
        </a>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-rounded">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-mist bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  setOpen(false);
                  handleNavigation(event, item.href);
                }}
                className={`text-sm font-medium ${
                  active === item.href ? "text-action" : "text-slate hover:text-action"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(event) => {
                setOpen(false);
                handleNavigation(event, "#contact");
              }}
              className="mt-2 rounded-full bg-action px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Send Us An Enquiry
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

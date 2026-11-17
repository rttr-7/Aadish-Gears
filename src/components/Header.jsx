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
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileProductGroup, setMobileProductGroup] = useState(null);
  const [mobileProductItem, setMobileProductItem] = useState(null);

  const goToProduct = (event, target) => {
    event.preventDefault();
    setProductsOpen(false);
    setHoveredSub(null);
    setOpen(false);
    setMobileProductsOpen(false);
    setMobileProductGroup(null);
    setMobileProductItem(null);
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
      <div className="page-container flex items-center justify-between gap-3 py-4 sm:gap-6">
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src="/Aadish-Gears/AadishGearsLogo.png" alt="" width="48" height="48" className="shrink-0" />
          <span className="min-w-0 font-display text-xs font-bold leading-tight tracking-tight text-navy sm:text-base">
            AADISH GEARS &amp; TRANSMISSIONS PVT LTD
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:-my-4 lg:flex lg:self-stretch">
          {nav.map((item) => {
            const link = (
              <a
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                className={`text-sm transition-colors ${
                  active === item.href ? "font-bold text-action" : "font-medium text-slate hover:text-action"
                }`}
              >
                {item.label}
              </a>
            );
            if (item.href !== "#products") return <span key={item.label}>{link}</span>;

            return (
              <div
                key={item.label}
                className="relative flex items-center self-stretch"
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
                <span>{link}</span>
                {productsOpen && (() => {
                  const section = hoveredHeading !== null ? productMenu[hoveredHeading] : null;
                  const entry = section && hoveredSub !== null ? section.items[hoveredSub] : null;
                  const itemClass = (active) =>
                    `flex items-center justify-between px-4 py-2 text-sm font-medium transition-colors hover:bg-sky/30 hover:text-action ${
                      active ? "bg-sky/30 text-action" : "text-navy"
                    }`;
                  const chevron = <span className="material-symbols-rounded text-[18px] leading-none">chevron_right</span>;

                  return (
                    // Anchored by the main column's centre (half of w-56), so extra columns grow to the right
                    <div className="absolute left-1/2 top-full z-50 -translate-x-28 pt-px">
                      <div className="flex items-stretch overflow-hidden rounded-b-lg border border-t-0 border-mist bg-white shadow-lg">
                        <div className="w-56 shrink-0 py-3">
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
                          <div className="w-56 shrink-0 border-l border-mist py-3">
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
                          <div className="w-72 shrink-0 border-l border-mist py-3">
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
          className="hidden shrink-0 rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover lg:inline-block"
        >
          Send An Enquiry
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
          <nav className="flex max-h-[calc(100dvh-5rem)] flex-col gap-4 overflow-y-auto">
            {nav.map((item) => {
              if (item.href === "#products") {
                return (
                  <div key={item.label}>
                    <div className="flex items-center justify-between gap-4">
                      <a
                        href={item.href}
                        onClick={(event) => {
                          setOpen(false);
                          handleNavigation(event, item.href);
                        }}
                        className={`text-sm ${
                          active === item.href ? "font-bold text-action" : "font-medium text-slate hover:text-action"
                        }`}
                      >
                        {item.label}
                      </a>
                      <button
                        type="button"
                        aria-expanded={mobileProductsOpen}
                        aria-controls="mobile-product-categories"
                        aria-label="Browse product categories"
                        onClick={() => setMobileProductsOpen((isOpen) => !isOpen)}
                        className="grid size-9 place-items-center rounded-md text-navy hover:bg-sky/30"
                      >
                        <span className="material-symbols-rounded" aria-hidden="true">
                          {mobileProductsOpen ? "expand_less" : "expand_more"}
                        </span>
                      </button>
                    </div>
                    {mobileProductsOpen && (
                      <div id="mobile-product-categories" className="mt-3 space-y-2">
                        {productMenu.map((section, sectionIndex) => {
                          const groupId = `mobile-product-group-${sectionIndex}`;

                          return (
                            <section key={section.heading} className="overflow-hidden rounded-lg border border-mist">
                              <h3>
                                <button
                                  type="button"
                                  aria-expanded={mobileProductGroup === sectionIndex}
                                  aria-controls={groupId}
                                  onClick={() => {
                                    setMobileProductGroup((current) => current === sectionIndex ? null : sectionIndex);
                                    setMobileProductItem(null);
                                  }}
                                  className="flex w-full items-center justify-between gap-3 bg-pale px-3 py-3 text-left text-sm font-semibold text-navy"
                                >
                                  {section.heading}
                                  <span className="material-symbols-rounded text-lg" aria-hidden="true">
                                    {mobileProductGroup === sectionIndex ? "expand_less" : "expand_more"}
                                  </span>
                                </button>
                              </h3>
                              {mobileProductGroup === sectionIndex && (
                                <div id={groupId} className="space-y-2 px-3 py-2">
                                  {section.items.map((productItem) => {
                                    const productKey = `${sectionIndex}-${productItem.index}`;
                                    const modelsId = `mobile-product-models-${productKey}`;
                                    const productLink = (
                                      <a
                                        href="#products"
                                        onClick={(event) =>
                                          goToProduct(event, {
                                            group: section.group,
                                            index: productItem.index,
                                            id: productItem.id,
                                          })
                                        }
                                        className="block py-2 text-sm font-medium text-navy hover:text-action"
                                      >
                                        {productItem.label}
                                      </a>
                                    );

                                    return (
                                      <div key={productItem.label} className="border-b border-mist last:border-0">
                                        {productItem.products.length > 0 ? (
                                          <>
                                            <div className="flex items-center justify-between gap-2">
                                              {productLink}
                                              <button
                                                type="button"
                                                aria-expanded={mobileProductItem === productKey}
                                                aria-controls={modelsId}
                                                aria-label={`Browse ${productItem.label} models`}
                                                onClick={() =>
                                                  setMobileProductItem((current) => current === productKey ? null : productKey)
                                                }
                                                className="grid size-9 shrink-0 place-items-center rounded-md text-navy hover:bg-sky/30"
                                              >
                                                <span className="material-symbols-rounded" aria-hidden="true">
                                                  {mobileProductItem === productKey ? "expand_less" : "expand_more"}
                                                </span>
                                              </button>
                                            </div>
                                            {mobileProductItem === productKey && (
                                              <div id={modelsId} className="mb-2 ml-3 border-l border-sky pl-3">
                                                {productItem.products.map((product, productIndex) => (
                                                  <a
                                                    key={product.title}
                                                    href="#products"
                                                    onClick={(event) =>
                                                      goToProduct(event, {
                                                        group: section.group,
                                                        index: productItem.index,
                                                        product: productIndex,
                                                      })
                                                    }
                                                    className="block py-2 text-sm text-slate hover:text-action"
                                                  >
                                                    {product.title}
                                                  </a>
                                                ))}
                                              </div>
                                            )}
                                          </>
                                        ) : productLink}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </section>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => {
                    setOpen(false);
                    handleNavigation(event, item.href);
                  }}
                  className={`text-sm ${
                    active === item.href ? "font-bold text-action" : "font-medium text-slate hover:text-action"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(event) => {
                setOpen(false);
                handleNavigation(event, "#contact");
              }}
              className="mt-2 rounded-full bg-action px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Send An Enquiry
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

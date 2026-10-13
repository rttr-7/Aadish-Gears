import { useEffect, useState } from "react";
import AboutUs from "./components/AboutUs";
import ContactUsPage from "./components/ContactUsPage";
import GalleryPage from "./components/GalleryPage";
import ProductsPage from "./components/ProductsPage";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Manufacture from "./components/Manufacture";
import ImageStrip from "./components/ImageStrip";
import Industries from "./components/Industries";
import WhyUsClients from "./components/WhyUsClients";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function App() {
  const [routeHash, setRouteHash] = useState(() =>
    typeof window === "undefined" ? "#home" : window.location.hash || "#home"
  );
  const [page, setPage] = useState(() => {
    if (typeof window === "undefined") return "home";

    const hash = window.location.hash;
    if (hash === "#about-us" || hash === "#why-we-succeed" || hash === "#machinery-list" || hash === "#machinery-list-from-products") return "about";
    if (hash === "#products") return "products";
    if (hash === "#gallery") return "gallery";
    if (hash === "#contact") return "contact";
    return "home";
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      setRouteHash(hash || "#home");
      if (hash === "#about-us" || hash === "#why-we-succeed" || hash === "#machinery-list" || hash === "#machinery-list-from-products") {
        setPage("about");
        return;
      }
      if (hash === "#products") {
        setPage("products");
        return;
      }
      if (hash === "#gallery") {
        setPage("gallery");
        return;
      }
      if (hash === "#contact") {
        setPage("contact");
        return;
      }
      setPage("home");
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const scrollMode = window.sessionStorage.getItem("navigation-scroll");
    if (!scrollMode) return;
    window.sessionStorage.removeItem("navigation-scroll");

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [page, routeHash]);

  useEffect(() => {
    if (page !== "products" && page !== "contact") return;
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [page]);

  useEffect(() => {
    if (page !== "about" || !["#why-we-succeed", "#machinery-list", "#machinery-list-from-products"].includes(window.location.hash)) return;
    document.getElementById("why-we-succeed")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  if (page === "about") {
    return (
      <div className="font-body text-navy">
        <Header />
        <AboutUs />
        <Footer />
      </div>
    );
  }

  if (page === "contact") {
    return (
      <div className="font-body text-navy">
        <Header />
        <ContactUsPage />
        <Footer />
      </div>
    );
  }

  if (page === "gallery") {
    return (
      <div className="font-body text-navy">
        <Header />
        <GalleryPage />
        <Footer />
      </div>
    );
  }

  if (page === "products") {
    return (
      <div className="font-body text-navy">
        <Header />
        <ProductsPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-body text-navy">
      <Header />
      <main>
        <Hero />
        <Process />
        <Manufacture />
        <ImageStrip />
        <Industries />
        <WhyUsClients />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

import { useEffect, useState } from "react";
import AboutUs from "./components/AboutUs";
import ContactUsPage from "./components/ContactUsPage";
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
  const [page, setPage] = useState(() => {
    if (typeof window === "undefined") return "home";

    const hash = window.location.hash;
    if (hash === "#about-us") return "about";
    if (hash === "#contact") return "contact";
    return "home";
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#about-us") {
        setPage("about");
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

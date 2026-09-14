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

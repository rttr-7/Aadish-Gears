import MainBanner from './MainBanner'

export default function Hero() {
  return (
    <MainBanner
      id="home"
      subHeader={"Precision transmission products manufacturing"}
      header={"Customized Gears, Gearboxes and Sprockets, engineered to desired spec"}
      description={"We design & manufacture precision transmission products in bulk for OEMs across the globe"}
    >
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#products"
          className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          View Our Products
        </a>
        <a
          href="#contact"
          className="rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
        >
          Get A Quote
        </a>
      </div>
    </MainBanner>
  );
}

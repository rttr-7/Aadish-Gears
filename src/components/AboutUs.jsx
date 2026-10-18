import StorySection from "./about/StorySection";
import PositioningSection from "./about/PositioningSection";
import TeamSection from "./about/TeamSection";
import WhyWeSucceedSection from "./about/WhyWeSucceedSection";
import VendorEcosystemSection from "./about/VendorEcosystemSection";
import { panelGrid } from "../data/aboutContent";

export default function AboutUs() {
  return (
    <div className="bg-white text-navy">
      <section id="about-us" className="relative overflow-hidden bg-navy text-white" style={panelGrid}>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-mint">ABOUT US</p>
          <h1 className="w-full max-w-7xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[60px]">
            Built on precision, run like a family for over two decades
          </h1>
          <p className="mt-6 w-full text-base text-sky/90">
            What began as a small proprietorship in 2002 is today a full-fledged precision transmission manufacturer, still guided by the same hands-on, one-stop approach it started with.
          </p>
        </div>
      </section>

      <img
        src="/Aadish-Gears/images/Gearsabtus.png"
        alt="Aadish Gears' precision gears, gearbox, and sprockets"
        className="block h-auto w-full"
      />

      <StorySection />
      <PositioningSection />
      <TeamSection />
      <WhyWeSucceedSection />
      <VendorEcosystemSection />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-action">OUR VISION</p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-[32px]">
              Continuous development, upgradation and training. A one-stop solution for every customer&apos;s needs, with customer satisfaction as the goal and long-term relationships as the foundation.
            </h2>
          </div>
          <div className="flex h-[280px] items-center justify-center overflow-hidden">
            <img
              src="/Aadish-Gears/images/Vision.png"
              alt="A hand placing a wooden block on a balanced stack, representing continuous development and growth"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-navy text-white" style={panelGrid}>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 lg:flex-row lg:items-center lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint">Get in touch with us</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">Have a drawing or a rough sketch?</h2>
            <p className="mt-4 text-sm text-sky/90 sm:text-base">Send us your requirement and our team will get back with a quote.</p>
          </div>
          <a href="mailto:aadishgears@yahoo.co.in" className="shrink-0 rounded-full bg-action px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-action-hover">
            Send An Enquiry
          </a>
        </div>
      </section>
    </div>
  );
}

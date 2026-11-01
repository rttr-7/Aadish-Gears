import StorySection from "./about/StorySection";
import PositioningSection from "./about/PositioningSection";
import TeamSection from "./about/TeamSection";
import WhyWeSucceedSection from "./about/WhyWeSucceedSection";
import VendorEcosystemSection from "./about/VendorEcosystemSection";
import MainBanner from "./MainBanner";
import CtaBanner from "./CtaBanner";

export default function AboutUs() {
  return (
    <div className="bg-white text-navy">
      <MainBanner
        id="about-us"
        subHeader="ABOUT US"
        header="Built on precision, run like a family for over two decades"
        description="What began as a small proprietorship in 2002 is today a full-fledged precision transmission manufacturer, still guided by the same hands-on, one-stop approach it started with."
      />

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

      <section className="page-container py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] font-mono text-action">OUR VISION</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
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

      <CtaBanner />
    </div>
  );
}

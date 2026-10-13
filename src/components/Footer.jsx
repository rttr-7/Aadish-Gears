import { footerLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-sky/90">
      <div className="mx-auto max-w-none px-6 pb-5 pt-8 lg:px-12 lg:pb-6 lg:pt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1.2fr] lg:gap-x-5">
          <div>
            <p className="font-display text-base font-bold text-white lg:whitespace-nowrap">
              Aadish Gears &amp; Transmissions Pvt. Ltd.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              Sr. No. 23/3/1, Milkat No. 28/2, Shed No 2, Wadekar Industrial
              Estate, Near Siddhi Chowk, Narhe, Pune 411041, MH, India
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white">
              Quick Links
            </p>
            <ul className="mt-4 flex flex-col gap-1.5 text-sm text-white/90 lg:mt-5 lg:gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      window.sessionStorage.setItem("navigation-scroll", "top");
                      if (window.location.hash === link.href) {
                        event.preventDefault();
                        window.sessionStorage.removeItem("navigation-scroll");
                        requestAnimationFrame(() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        });
                      }
                    }}
                    className="hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white">
              Get In Touch
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-sm text-white/90 lg:mt-5 lg:gap-2">
              <p className="text-white">Mr. Atul Tanksale</p>
              <a href="tel:+919225643920" className="hover:text-white">
                +91 9225643920 / 7499050575
              </a>
              <a href="mailto:aadishgears@yahoo.co.in" className="hover:text-white">
                aadishgears@yahoo.co.in
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-white">
              Find Us
            </p>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <iframe
                title="Aadish Gears Shop Location"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s18.4380258,73.8256733!6i17"
                className="h-[220px] w-full border-0 sm:h-[180px]"
                loading="eager"
                allowFullScreen=""
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=18.4380258%2C73.8256733"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-xs font-semibold text-white/90 underline underline-offset-2 hover:text-white"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-sky/60 lg:mt-8">
          © 2026 Aadish Gears &amp; Transmissions Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

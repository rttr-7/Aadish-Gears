import { footerLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-sky/90">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-base font-bold text-white">
              Aadish Gears &amp; Transmissions Pvt. Ltd.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Sr. No. 23/3/1, Milkat No. 28/2, Shed No 2, Wadekar Industrial
              Estate, Near Siddhi Chowk, Narhe, Pune 411041, MH, India
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
              Quick Links
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
              Get In Touch
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <p className="text-white">Mr. Atul Tanksale</p>
              <a href="tel:+919225643920" className="hover:text-white">
                +91 9225643920 / 7499050575
              </a>
              <a href="mailto:aadishgears@yahoo.co.in" className="hover:text-white">
                aadishgears@yahoo.co.in
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 border-t border-white/10 pt-6 text-xs text-sky/60">
          © 2026 Aadish Gears &amp; Transmissions Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

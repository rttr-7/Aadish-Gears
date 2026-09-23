import { TEAM_LEFT, TEAM_RIGHT } from "../../data/aboutContent";

const styles = `
  .about-org{background:#fff;border-radius:1rem;padding:1.5rem 1.1rem;overflow-x:auto;}
  .about-org-tree{display:flex;justify-content:center;gap:3rem;min-width:640px;}
  .about-org-col{display:flex;flex-direction:column;align-items:center;}
  .about-node{min-width:150px;padding:.75rem .9rem;border-radius:.8rem;border:1px solid rgba(67,78,88,.18);text-align:center;background:#fff;}
  .about-node b{display:block;font-size:.8rem;font-weight:700;color:#0b2750;margin-bottom:.2rem;}
  .about-node span{display:block;color:#434e58;font-size:.7rem;line-height:1.4;}
  .about-node.director{background:#efe9fe;border-color:#d9d0ff;}
  .about-node.lead{background:#eafaf3;border-color:#cfeee2;}
  .about-connector{width:1.5px;height:1.25rem;background:rgba(67,78,88,.2);}
  .about-row{display:flex;flex-wrap:wrap;justify-content:center;gap:.75rem;margin-top:1.2rem;}
`;

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <style>{styles}</style>

      <div className="rounded-[20px] bg-[linear-gradient(160deg,#edf4ff,#f4f8fe)] p-8 shadow-[0_12px_30px_rgba(11,39,80,0.04)] lg:p-10">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Our Team</h2>
        <p className="mt-3 max-w-xl text-base text-slate">Our strength lies in a committed team that grows together and stands by one another.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ul className="space-y-3">
            {TEAM_LEFT.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm font-semibold text-navy">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#0B2750]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {TEAM_RIGHT.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm font-semibold text-navy">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#0B2750]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-org mt-10">
          <div className="about-org-tree">
            <div className="about-org-col">
              <div className="about-node director"><b>Director</b><span>Atul Tanksale</span></div>
              <div className="about-connector" />
              <div className="about-row">
                <div className="about-node lead"><b>Production In-charge</b><span>Dinesh Pandharkar</span></div>
                <div className="about-node lead"><b>Design &amp; Development</b><span>Snehal Bongagle</span></div>
              </div>
              <div className="about-row" style={{ marginTop: 22 }}>
                <div className="about-node"><b>Machine Shop</b><span>Rohit Limbore, Kapil Khairnar</span></div>
                <div className="about-node"><b>Gear Shop</b><span>Anita Renuse, Gajanan Kale</span></div>
                <div className="about-node"><b>Assembly Shop</b><span>Anita Renuse</span></div>
                <div className="about-node"><b>Quality</b><span>Jagdish Abhange</span></div>
                <div className="about-node"><b>Accounts &amp; HR</b><span>Gauri Gajkeshwar</span></div>
              </div>
            </div>

            <div className="about-org-col">
              <div className="about-node director"><b>Director</b><span>Rupali Chivate</span></div>
              <div className="about-connector" />
              <div className="about-row">
                <div className="about-node"><b>Administration &amp; Mgmt Rep</b><span></span></div>
                <div className="about-node"><b>Stores &amp; Consumables</b><span>Gauri Gajkeshwar</span></div>
              </div>
              <div className="about-row" style={{ marginTop: 22 }}>
                <div className="about-node"><b>Logistics</b><span>Anita Renuse</span></div>
                <div className="about-node"><b>Purchase</b><span></span></div>
                <div className="about-node"><b>Sales &amp; Marketing</b><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

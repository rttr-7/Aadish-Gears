import { TEAM_LEFT, TEAM_RIGHT } from "../../data/aboutContent";
import orgChart from "../../assets/org-chart.png";

export default function TeamSection() {
  return (
    <section className="page-container pb-10 pt-20">
      <div className="rounded-[20px] bg-linear-160 from-pale-strong to-pale p-8 shadow-[0_12px_30px_rgba(11,39,80,0.04)] lg:p-10">
        <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Our Team</h2>
        <p className="mt-3 text-base text-slate">Our strength lies in a committed team that grows together and stands by one another.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ul className="space-y-3">
            {TEAM_LEFT.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm font-semibold text-navy">
                <span className="mt-2 h-2 w-2 rounded-full bg-navy" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {TEAM_RIGHT.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm font-semibold text-navy">
                <span className="mt-2 h-2 w-2 rounded-full bg-navy" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 overflow-x-auto">
          <img
            src={orgChart}
            alt="Aadish Gears organisation chart: Director Atul Tanksale leads the Production In-charge (Dinesh Pandharkar), Design & Development (Snehal Bongagle), Quality and Accounts & HR; Production oversees the Machine, Gear and Assembly shops and Quality; Director Rupali Chivate leads Administration & Mgmt Rep and Stores & Consumables; Logistics, Purchase and Sales & Marketing complete the team."
            loading="lazy"
            decoding="async"
            className="block h-auto w-full min-w-[900px]"
          />
        </div>
      </div>
    </section>
  );
}

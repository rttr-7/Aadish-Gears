import { TEAM_LEFT, TEAM_RIGHT } from "../../data/aboutContent";

const departments = [
  { title: "Machine Shop", people: ["Rohit Limbore", "Kapil Khairnar"], x: 25, width: 118 },
  { title: "Gear Shop", people: ["Anita Renuse", "Gajanan Kale"], x: 158, width: 99 },
  { title: "Assembly Shop", people: ["Anita Renuse"], x: 271, width: 128 },
  { title: "Quality", people: ["Jagdish Abhange"], x: 413, width: 118 },
  { title: "Accounts & HR", people: ["Gauri Gajkeshwar"], x: 546, width: 123 },
  { title: "Logistics", people: ["Anita Renuse"], x: 683, width: 99 },
  { title: "Purchase", people: [], x: 796, width: 88 },
  { title: "Sales & Marketing", people: [], x: 898, width: 142 },
];

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
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

        <div className="mt-10 overflow-x-auto rounded-xl bg-white p-4 sm:p-6" aria-label="Aadish Gears organization chart">
          <svg
            viewBox="0 0 1230 434"
            role="img"
            aria-labelledby="team-chart-title team-chart-description"
            className="block h-auto min-w-[1100px] w-full"
          >
            <title id="team-chart-title">Aadish Gears team structure</title>
            <desc id="team-chart-description">
              Director Atul Tanksale leads Production In-charge Dinesh Pandharkar, Design and Development by Snehal Bongale, and Accounts and HR. Production oversees the Machine Shop, Gear Shop, Assembly Shop, and Quality. Director Rupali Chivate leads Administration and Management Representative and Stores and Consumables. The chart also includes Logistics, Purchase, and Sales and Marketing.
            </desc>
            <defs>
              <marker id="team-chart-arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
                <path d="M0 0L7 3.5L0 7Z" fill="#252525" />
              </marker>
            </defs>

            <g fill="none" stroke="#252525" strokeWidth="1.5">
              <path d="M278 77V112M162 112H368" />
              <path d="M162 112V151" markerEnd="url(#team-chart-arrow)" />
              <path d="M368 112V151" markerEnd="url(#team-chart-arrow)" />
              <path d="M327 49H598V339" markerEnd="url(#team-chart-arrow)" />
              <path d="M834 77V96M834 96H1118" />
              <path d="M834 96V115" markerEnd="url(#team-chart-arrow)" />
              <path d="M1118 96V115" markerEnd="url(#team-chart-arrow)" />
              <path d="M163 204V279M81 279H440" />
              <path d="M472 279H969" />
              {departments.map((department, index) => {
                const center = department.x + department.width / 2;
                const productionReport = index < 4;
                const secondaryReport = index >= 3;
                return (
                  <g key={department.title}>
                    {productionReport && <path d={`M${index === 0 ? 81 : index === 1 ? 208 : index === 2 ? 335 : 440} 279V339`} markerEnd="url(#team-chart-arrow)" />}
                    {secondaryReport && <path d={`M${center} 279V339`} markerEnd="url(#team-chart-arrow)" />}
                  </g>
                );
              })}
            </g>

            <g>
              <rect x="227" y="26" width="100" height="51" rx="9" fill="#efeefe" stroke="#4036b2" />
              <text x="277" y="49" textAnchor="middle" fill="#343080" fontSize="13" fontWeight="700">Director</text>
              <text x="277" y="64" textAnchor="middle" fill="#343080" fontSize="11">Atul Tanksale</text>

              <rect x="782" y="26" width="105" height="51" rx="9" fill="#efeefe" stroke="#4036b2" />
              <text x="834" y="49" textAnchor="middle" fill="#343080" fontSize="13" fontWeight="700">Director</text>
              <text x="834" y="64" textAnchor="middle" fill="#343080" fontSize="11">Rupali Chivate</text>

              <rect x="81" y="151" width="165" height="53" rx="8" fill="#e4f6f1" stroke="#08745b" />
              <text x="163" y="174" textAnchor="middle" fill="#075747" fontSize="13" fontWeight="700">Production In-charge</text>
              <text x="163" y="190" textAnchor="middle" fill="#075747" fontSize="11">Dinesh Pandharkar</text>

              <rect x="282" y="151" width="172" height="53" rx="8" fill="#e4f6f1" stroke="#08745b" />
              <text x="368" y="174" textAnchor="middle" fill="#075747" fontSize="13" fontWeight="700">Design &amp; Development</text>
              <text x="368" y="190" textAnchor="middle" fill="#075747" fontSize="11">Snehal Bongale</text>

              <rect x="782" y="115" width="201" height="53" rx="8" fill="#f5f3ee" stroke="#55534f" />
              <text x="882" y="138" textAnchor="middle" fill="#44423f" fontSize="13" fontWeight="700">Administration &amp; Mgmt Rep</text>

              <rect x="1020" y="115" width="171" height="53" rx="8" fill="#f5f3ee" stroke="#55534f" />
              <text x="1105" y="138" textAnchor="middle" fill="#44423f" fontSize="13" fontWeight="700">Stores &amp; Consumables</text>
              <text x="1105" y="154" textAnchor="middle" fill="#44423f" fontSize="11">Gauri Gajkeshwar</text>
            </g>

            {departments.map((department, index) => {
              const center = department.x + department.width / 2;
              return (
                <g key={department.title}>
                  <rect x={department.x} y="339" width={department.width} height="70" rx="8" fill="#f5f3ee" stroke="#55534f" />
                  <text x={center} y="359" textAnchor="middle" fill="#44423f" fontSize="12" fontWeight="700">{department.title}</text>
                  {department.people.map((person, personIndex) => (
                    <text key={person} x={center} y={376 + personIndex * 16} textAnchor="middle" fill="#44423f" fontSize="10">{person}</text>
                  ))}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

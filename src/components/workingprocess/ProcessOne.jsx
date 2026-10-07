"use client";
import Link from 'next/link';

const steps = [
  {
    num: "01",
    phase: "INCEPTION & DOMICILE",
    title: "Entity Structuring Architecture",
    desc: "Objective evaluation of international corporate domicile selection across Delaware (US), Singapore (SG), London (UK), or India with clean cap-table governance and founder vesting schedules.",
    icon: "fa-solid fa-compass-drafting",
  },
  {
    num: "02",
    phase: "BANKING & REGULATORY",
    title: "Commercial Banking & Tax Rails",
    desc: "Operational integration of dedicated commercial banking rails (Mercury, Brex, DBS, Barclays), cross-border tax registrations (EIN/VAT/GST), and arm's-length transfer pricing protocols.",
    icon: "fa-solid fa-building-columns",
  },
  {
    num: "03",
    phase: "CAPITAL & COMMERCIAL",
    title: "SAFE Financing & Enterprise MSAs",
    desc: "Deployment of standardized YC Post-Money SAFEs, 500 Global KISS notes, and enterprise B2B SaaS master services agreements with calibrated 99.9% uptime SLAs and statutory DPAs.",
    icon: "fa-solid fa-shield-halved",
  },
  {
    num: "04",
    phase: "GOVERNANCE & SCALE",
    title: "Global ESOP Pools & Exit Readiness",
    desc: "Cross-border equity incentive plan (ESOP) administration across multi-jurisdictional teams, proprietary IP assignment covenants, and structured virtual data-room audit trails.",
    icon: "fa-solid fa-chart-line",
  },
];

function ProcessOne() {
  return (
    <section className="tmp-working-process-area tmp-section-gap" style={{ background: '#ffffff' }}>
      <style>{`
        .lawrj-process-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 36px 24px;
          height: 100%;
          position: relative;
          transition: all 0.3s ease;
        }
        .lawrj-process-card:hover {
          border-color: #D4AF37;
          box-shadow: 0 16px 36px rgba(11, 27, 61, 0.08);
          transform: translateY(-4px);
        }
        .lawrj-process-step-num {
          font-size: 38px;
          font-weight: 900;
          font-family: Georgia, serif;
          color: rgba(212, 175, 55, 0.4);
          line-height: 1;
          margin-bottom: 12px;
        }
        .lawrj-process-card:hover .lawrj-process-step-num {
          color: #D4AF37;
        }
        .lawrj-process-phase {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #A9801A;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center">
              <div className="section-sub-title center-title">
                <span>VENTURE LIFECYCLE ARCHITECTURE</span>
              </div>
              <h2 className="title" data-aos="fade-up">
                Institutional Venture Roadmap: Inception to Scale
              </h2>
              <p style={{ maxWidth: 640, margin: '0 auto', color: '#64748B', fontSize: 16 }}>
                A systematic, predictable legal architecture roadmap deployed across international technology corridors.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2">
          {steps.map((item, idx) => (
            <div key={idx} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="lawrj-process-card">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="lawrj-process-step-num">{item.num}</div>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(11, 27, 61, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0B1B3D', fontSize: '18px' }}>
                    <i className={item.icon}></i>
                  </div>
                </div>
                <span className="lawrj-process-phase">{item.phase}</span>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0B1B3D', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.7', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessOne;

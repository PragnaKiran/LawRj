"use client";
import Link from 'next/link';

const pillars = [
  {
    id: "inception",
    pillarId: "PIL-01",
    badge: "PILLAR 01",
    title: "Global Corporate Structuring & Holding Architecture",
    subtitle: "Multi-Jurisdiction Holding & Subsidiary Formations",
    desc: "Objective corporate architecture tailored to founder residency and international capital requirements. We engineer holding and operating entities across Singapore, UAE (ADGM/DIFC), United Kingdom, United States (Delaware C-Corp), Netherlands, and Cayman Islands.",
    iconClass: "fa-solid fa-earth-americas",
    highlights: [
      "Multi-entity holding and operating structure design",
      "Singapore Pte Ltd, ADGM, DIFC, UK Ltd & Delaware setups",
      "Intellectual Property (IP) assignment, transfer & licensing",
      "Cross-border governance charters & banking integrations"
    ],
    tags: ["Singapore Pte Ltd", "UAE (ADGM/DIFC)", "Delaware C-Corp", "UK Ltd", "IP Assignment"],
    delay: 100,
  },
  {
    id: "financing",
    pillarId: "PIL-02",
    badge: "PILLAR 02",
    title: "Venture Capital Financing & Cap-Table Governance",
    subtitle: "YC Post-Money SAFEs, KISS Notes & Priced Rounds",
    desc: "Protect founder control and eliminate cap-table dilution traps. We structure Y-Combinator Post-Money SAFEs (with Valuation Caps and Discounts), 500 Global KISS notes, convertible bridge debt, and institutional priced Seed & Series A rounds.",
    iconClass: "fa-solid fa-chart-pie",
    highlights: [
      "YC Post-Money SAFEs: Valuation Cap and Discount terms",
      "500 Global KISS: Convertible equity & debt instruments",
      "Priced Equity Rounds: Shareholders' Agreements (SHA/SSA)",
      "Founder Equity Protection: 4-year vesting, 1-year cliff, acceleration"
    ],
    tags: ["YC Post-Money SAFE", "500 Global KISS", "Priced Series A (SHA/SSA)", "Founder Vesting (4-Yr/1-Yr Cliff)"],
    delay: 200,
  },
  {
    id: "contracts",
    pillarId: "PIL-03",
    badge: "PILLAR 03",
    title: "Enterprise B2B SaaS Contracts & Global Privacy",
    subtitle: "Sales-Enabling MSAs, 99.9% SLAs & DPDP / GDPR",
    desc: "Production-grade commercial contracting suites designed to navigate Fortune 500 procurement smoothly. We draft sales-enabling Master Services Agreements (MSAs), Service Level Agreements (SLAs), and global Data Processing Addenda (DPAs).",
    iconClass: "fa-solid fa-file-shield",
    highlights: [
      "Sales-enabling Master Services Agreements (MSAs)",
      "Service Level Agreements (SLAs) with 99.9% uptime guarantees",
      "Data Processing Addenda (DPAs) compliant with DPDP Act 2023",
      "European GDPR & California CCPA statutory compliance frameworks"
    ],
    tags: ["Enterprise MSAs", "99.9% Uptime SLAs", "DPDP Act 2023 Addenda", "GDPR & CCPA DPAs"],
    delay: 300,
  },
  {
    id: "india-bridge",
    pillarId: "PIL-04",
    badge: "PILLAR 04",
    title: "Cross-Border Market Expansion & Inbound Tech Hubs",
    subtitle: "India Engineering GCC Hubs & FEMA Inbound FDI",
    desc: "The bilateral corridor bridging global technology companies and the Indian ecosystem. We structure engineering Global Capability Centers (GCCs), navigate RBI/FEMA inbound FDI compliance, and assist Indian technology scale-ups expanding into Western markets.",
    iconClass: "fa-solid fa-bridge-water",
    highlights: [
      "India Tech Engineering Global Capability Center (GCC) incorporation",
      "Inbound FDI compliance, RBI reporting (FC-GPR) & FEMA routing",
      "Domestic Indian tech scale-up outbound holding flips",
      "Transfer pricing documentation & intercompany service agreements"
    ],
    tags: ["India Tech GCC Hubs", "Inbound FDI (FEMA)", "Outbound Flips", "Transfer Pricing"],
    delay: 400,
  },
];

function ServiceOne() {
  return (
    <div>
      <style>{`
        .lawrj-service-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 34px 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .lawrj-service-card:hover {
          border-color: #D4AF37;
          box-shadow: 0 20px 45px rgba(11, 27, 61, 0.09);
          transform: translateY(-5px);
        }
        .lawrj-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: linear-gradient(135deg, #F3C644 0%, #D4AF37 50%, #E5A93C 100%);
          transition: height 0.3s ease;
        }
        .lawrj-service-card:hover::before {
          height: 100%;
        }
        .lawrj-stage-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #A9801A;
          background: rgba(212, 175, 55, 0.12);
          padding: 4px 10px;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: 16px;
        }
        .lawrj-service-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          background: #0B1B3D;
          color: #F3C644;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        .lawrj-service-card:hover .lawrj-service-icon-box {
          background: linear-gradient(135deg, #F3C644 0%, #D4AF37 100%);
          color: #071126;
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
        }
        .lawrj-service-title {
          font-size: 21px;
          font-weight: 700;
          color: #0B1B3D;
          margin-bottom: 6px;
          font-family: Georgia, serif;
          line-height: 1.3;
        }
        .lawrj-service-sub {
          font-size: 13px;
          font-weight: 600;
          color: #A9801A;
          margin-bottom: 14px;
          display: block;
        }
        .lawrj-service-desc {
          color: #64748B;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 18px;
        }
        .lawrj-service-highlights {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          flex-grow: 1;
        }
        .lawrj-service-highlights li {
          font-size: 13px;
          color: #334155;
          margin-bottom: 8px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.5;
        }
        .lawrj-service-highlights li i {
          color: #D4AF37;
          font-size: 12px;
          margin-top: 4px;
          flex-shrink: 0;
        }
        .lawrj-tag-container {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }
        .lawrj-micro-tag {
          font-size: 11px;
          background: #F1F5F9;
          color: #475569;
          padding: 3px 8px;
          border-radius: 4px;
          font-weight: 500;
        }
        .lawrj-service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #0B1B3D;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .lawrj-service-link:hover {
          color: #A9801A;
          gap: 12px;
        }
      `}</style>

      <section className="tmp-services-area tmp-section-gap" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head text-center">
                <div className="section-sub-title center-title">
                  <span>CORE PRACTICE TAXONOMY</span>
                </div>
                <h2 className="title" data-aos="fade-up" data-aos-delay="100">
                  Institutional Venture Infrastructure Across Four Strategic Pillars
                </h2>
                <p style={{ maxWidth: 700, margin: '0 auto 10px', color: '#64748B', fontSize: 16 }}>
                  Specialized venture legal engineering designed for cross-border founders, institutional investors, and enterprise tech scale-ups.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-2">
            {pillars.map((item) => (
              <div key={item.id} className="col-lg-6" data-aos="fade-up" data-aos-delay={item.delay}>
                <div className="lawrj-service-card">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="lawrj-stage-badge">{item.badge}</span>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#94A3B8' }}>{item.pillarId}</span>
                  </div>

                  <div className="lawrj-service-icon-box">
                    <i className={item.iconClass}></i>
                  </div>
                  
                  <h3 className="lawrj-service-title">{item.title}</h3>
                  <span className="lawrj-service-sub">{item.subtitle}</span>
                  <p className="lawrj-service-desc">{item.desc}</p>

                  <ul className="lawrj-service-highlights">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="lawrj-tag-container">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="lawrj-micro-tag">{tag}</span>
                    ))}
                  </div>

                  <Link href={`/ServiceDetails?service=${item.id}&pillar=${item.pillarId}`} className="lawrj-service-link">
                    Explore Practice Details <i className="fa-solid fa-arrow-right" style={{ color: '#D4AF37' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="p-4 rounded-4 text-center" style={{ background: 'linear-gradient(135deg, #0B1B3D 0%, #162E66 100%)', color: '#fff', border: '1px solid rgba(212,175,55,0.3)' }}>
                <h4 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '8px' }}>
                  Structuring an Institutional Round or International Tech Hub?
                </h4>
                <p style={{ color: '#cbd5e1', maxWidth: '640px', margin: '0 auto 18px', fontSize: '15px' }}>
                  Connect directly with our Cross-Border Legal Advisory Desk. We engineer compliant multi-entity holding structures, YC SAFEs, and bilateral engineering GCCs.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/Contact" className="tmp-btn btn-primary">
                    Schedule Founder Strategy Call
                  </Link>
                  <a href="https://wa.me/919327000022?text=Hello%20LawRJ%20Team%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing." className="tmp-btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', marginRight: '6px' }}></i>
                    Confidential WhatsApp Line
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceOne;

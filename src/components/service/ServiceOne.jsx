"use client";
import Link from 'next/link';

const services = [
  {
    id: "inception",
    stage: "STAGE 01",
    title: "Inception & Incorporation",
    subtitle: "US, UK, SG, AU & CA Entity Setup",
    desc: "Delaware C-Corps, UK Private Limited, Singapore Pte Ltd, and Australian Pty Ltd formation. Founder vesting agreements, IP assignments, 83(b) tax elections, and clean cap-table architecture.",
    iconClass: "fa-solid fa-seedling",
    tags: ["Delaware C-Corp", "UK Ltd", "Singapore Pte Ltd", "Founder Vesting"],
    delay: 100,
  },
  {
    id: "financing",
    stage: "STAGE 02",
    title: "Seed & Venture Capital Rounds",
    subtitle: "SAFE, KISS & Priced Equity",
    desc: "Y-Combinator standard Post-Money SAFEs, 500 Global KISS notes, convertible promissory instruments, investor side letters, cap table waterfall modelling, and Series Seed / Series A documentation.",
    iconClass: "fa-solid fa-chart-pie",
    tags: ["YC SAFE Notes", "KISS Agreements", "Priced Series A", "Cap Tables"],
    delay: 200,
  },
  {
    id: "contracts",
    stage: "STAGE 03",
    title: "Enterprise Commercial Contracts",
    subtitle: "B2B SaaS & Tech Architecture",
    desc: "Production-ready Master Services Agreements (MSA), Data Processing Addendums (DPA) aligned with GDPR, CCPA & Singapore PDPA, Service Level Agreements (SLA), and enterprise procurement contracts.",
    iconClass: "fa-solid fa-file-shield",
    tags: ["SaaS MSA", "GDPR / CCPA DPA", "Enterprise SLAs", "API Licensing"],
    delay: 300,
  },
  {
    id: "banking",
    stage: "STAGE 04",
    title: "Cross-Border Structuring & Banking",
    subtitle: "Local Business Setup & Accounts",
    desc: "Establishment of corporate bank accounts in the US (Mercury, Brex), UK, Singapore (DBS), and Australia. Intercompany transfer pricing agreements, subsidiary setup, and cross-border currency compliance.",
    iconClass: "fa-solid fa-building-columns",
    tags: ["US / UK Bank Accounts", "Intercompany Agreements", "Transfer Pricing", "Holding Co Flip"],
    delay: 400,
  },
  {
    id: "esop",
    stage: "STAGE 05",
    title: "Global Talent & IP Strategy",
    subtitle: "Cross-Border ESOPs & Proprietary IP",
    desc: "International stock option plans (ESOP / RSUs), contractor-to-employee risk shielding, overseas direct investment (ODI) clearances, and ironclad proprietary technology assignments.",
    iconClass: "fa-solid fa-users-gear",
    tags: ["International ESOP", "Patent & IP Assignment", "EOR Compliance", "Trade Secrets"],
    delay: 500,
  },
  {
    id: "preipo",
    stage: "STAGE 06",
    title: "M&A, Governance & Pre-IPO",
    subtitle: "Strategic Liquidity & Exits",
    desc: "Data-room sanitization, investor due-diligence audit defense, secondary share transactions, strategic acquihire advisory, Board of Directors governance charters, and dual-listing readiness.",
    iconClass: "fa-solid fa-trophy",
    tags: ["Data Room Sanitization", "M&A Term Sheets", "Secondary Exits", "Board Governance"],
    delay: 600,
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
          padding: 32px 28px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .lawrj-service-card:hover {
          border-color: #D4AF37;
          box-shadow: 0 16px 40px rgba(11, 27, 61, 0.08);
          transform: translateY(-5px);
        }
        .lawrj-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: var(--color-gold-gradient);
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
          background: var(--color-gold-gradient);
          color: #071126;
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
        }
        .lawrj-service-title {
          font-size: 20px;
          font-weight: 700;
          color: #0B1B3D;
          margin-bottom: 6px;
          font-family: Georgia, serif;
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
          margin-bottom: 20px;
          flex-grow: 1;
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
                  <span>VENTURE LIFECYCLE</span>
                </div>
                <h2 className="title" data-aos="fade-up" data-aos-delay="100">
                  Comprehensive Legal Architecture: Idea to IPO
                </h2>
                <p style={{ maxWidth: 650, margin: '0 auto 10px', color: '#64748B', fontSize: 16 }}>
                  From early founder equity and SAFE rounds to cross-border local bank accounts, international customer contracts, and institutional exit governance.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-2">
            {services.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={item.delay}>
                <div className="lawrj-service-card">
                  <div>
                    <span className="lawrj-stage-badge">{item.stage}</span>
                    <div className="lawrj-service-icon-box">
                      <i className={item.iconClass}></i>
                    </div>
                  </div>
                  
                  <h3 className="lawrj-service-title">{item.title}</h3>
                  <span className="lawrj-service-sub">{item.subtitle}</span>
                  <p className="lawrj-service-desc">{item.desc}</p>
                  
                  <div className="lawrj-tag-container">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="lawrj-micro-tag">{tag}</span>
                    ))}
                  </div>

                  <Link href={`/ServiceDetails?service=${item.id}`} className="lawrj-service-link">
                    Explore Stage Details <i className="fa-solid fa-arrow-right" style={{ color: '#D4AF37' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="p-4 rounded-4 text-center" style={{ background: 'linear-gradient(135deg, #0B1B3D 0%, #162E66 100%)', color: '#fff', border: '1px solid rgba(212,175,55,0.3)' }}>
                <h4 style={{ color: '#ffffff', fontWeight: '700', marginBottom: '8px' }}>
                  Planning an Overseas Holding Company Flip or Round Raise?
                </h4>
                <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 18px', fontSize: '15px' }}>
                  Speak directly with our cross-border venture leads. We set up compliant Delaware, Singapore, or UK holding structures with verified local commercial banking.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/Contact" className="tmp-btn btn-primary">
                    Book Founder Briefing
                  </Link>
                  <a href="https://wa.me/919327000022" className="tmp-btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', marginRight: '6px' }}></i>
                    WhatsApp Fast Track
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

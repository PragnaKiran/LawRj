"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const blueprints = [
  {
    title: "US Delaware Flip & YC SAFE Financing",
    category: "Venture Financing",
    jurisdiction: "United States (Delaware)",
    instrument: "YC Post-Money SAFE (Cap / Discount)",
    overview: "Multi-entity flip structuring foreign operational entities into a Delaware parent corporation. Integration of standardized YC Post-Money SAFEs with explicit valuation caps, discount rights, and pro-rata investor side-letters.",
    flag: "🇺🇸",
  },
  {
    title: "Tripartite Singapore & UK HoldCo Architecture",
    category: "Corporate Structuring",
    jurisdiction: "Singapore & United Kingdom",
    instrument: "VIMA Model & ACRA HoldCo",
    overview: "Bilateral holding company framework separating international intellectual property holdings from regional operational entities. Leverages double-taxation avoidance agreements (DTAA) and standardized Singapore VIMA investment documentation.",
    flag: "🇸🇬",
  },
  {
    title: "Institutional Series A Equity Governance",
    category: "Cap-Table Governance",
    jurisdiction: "Global Venture Syndicates",
    instrument: "Priced Equity (SHA / SSA)",
    overview: "Formalization of institutional Shareholders' Agreements (SHA) and Share Subscription Agreements (SSA) including 1x non-participating liquidation preference, drag-along rights, and structured 4-year founder vesting with a 1-year cliff.",
    flag: "🌐",
  },
  {
    title: "Inbound India Engineering GCC Hub Structure",
    category: "Bilateral Bridge",
    jurisdiction: "India Technology Corridor",
    instrument: "FEMA FDI (Automatic Route) & FC-GPR",
    overview: "Wholly-owned Indian subsidiary (Pvt Ltd) setup under 100% automatic FDI clearance. Structured intercompany service agreements (transfer pricing arm's-length), proprietary IP assignment covenants, and regulatory RBI reporting compliance.",
    flag: "🇮🇳",
  },
  {
    title: "Enterprise B2B SaaS Contracting & Privacy",
    category: "Commercial Contracts",
    jurisdiction: "Global SaaS Markets",
    instrument: "Enterprise MSAs & Statutory DPAs",
    overview: "Procurement-ready enterprise Master Services Agreements with calibrated 99.9% uptime SLAs and multi-jurisdictional Data Processing Addenda aligned with India DPDP Act 2023, European GDPR, and California CCPA frameworks.",
    flag: "🇪🇺",
  },
];

function TestimonialsOne() {
  return (
    <section className="tmp-testimonials-area tmp-section-gap" style={{ background: '#F8FAFC' }}>
      <style>{`
        .lawrj-blueprint-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 32px 26px;
          box-shadow: 0 4px 20px rgba(11, 27, 61, 0.05);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
        }
        .lawrj-blueprint-card:hover {
          border-color: #D4AF37;
          box-shadow: 0 16px 40px rgba(11, 27, 61, 0.08);
          transform: translateY(-4px);
        }
        .lawrj-blueprint-overview {
          color: #475569;
          font-size: 14.5px;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .lawrj-blueprint-title {
          font-size: 18px;
          font-weight: 700;
          color: #0B1B3D;
          margin-bottom: 6px;
          font-family: Georgia, serif;
        }
        .lawrj-blueprint-category {
          font-size: 11.5px;
          color: #A9801A;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          margin-bottom: 12px;
          display: block;
        }
        .lawrj-instrument-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(11, 27, 61, 0.05);
          color: #0B1B3D;
          font-size: 11.5px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid rgba(11, 27, 61, 0.1);
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center">
              <div className="section-sub-title center-title">
                <span>STRUCTURAL BLUEPRINTS</span>
              </div>
              <h2 className="title" data-aos="fade-up">
                Cross-Border Transaction Archetypes
              </h2>
              <p style={{ maxWidth: 640, margin: '0 auto', color: '#64748B', fontSize: 16 }}>
                Objective transaction structures and regulatory frameworks standardly deployed across international technology corridors.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={24}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              style={{ paddingBottom: '48px' }}
            >
              {blueprints.map((b, idx) => (
                <SwiperSlide key={idx}>
                  <div className="lawrj-blueprint-card">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span style={{ fontSize: '28px' }}>{b.flag}</span>
                        <div className="lawrj-instrument-badge">
                          <i className="fa-solid fa-file-contract" style={{ color: '#D4AF37' }}></i> {b.instrument}
                        </div>
                      </div>
                      <span className="lawrj-blueprint-category">{b.category}</span>
                      <h3 className="lawrj-blueprint-title">{b.title}</h3>
                      <p className="lawrj-blueprint-overview">
                        {b.overview}
                      </p>
                    </div>

                    <div className="pt-3" style={{ borderTop: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>
                        <i className="fa-solid fa-location-dot me-1" style={{ color: '#D4AF37' }}></i> {b.jurisdiction}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsOne;
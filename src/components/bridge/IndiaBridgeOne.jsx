"use client";
import React from 'react';
import Link from 'next/link';

const bridgeFeatures = [
  {
    icon: "fa-solid fa-building-user",
    title: "GCC & Tech Hub Setup in India",
    desc: "We incorporate wholly-owned Indian subsidiaries, Global Capability Centers (GCCs), or liaison branches for US, UK & Canadian tech firms scaling engineering and AI talent."
  },
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "FDI, RBI & Inward Remittance",
    desc: "End-to-end guidance on Foreign Direct Investment (FDI) reporting (FC-GPR, FLA return), RBI exchange control compliance, and cross-border bank routing."
  },
  {
    icon: "fa-solid fa-users-viewfinder",
    title: "Engineering Team & IP Assignment",
    desc: "Ironclad proprietary IP assignment agreements, non-disclosure contracts, ESOP extensions, and compliant direct payroll / EOR structures for Indian tech talent."
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Data Localization & Indian Compliance",
    desc: "Ensuring Western SaaS and fintech platforms comply with India's Digital Personal Data Protection Act (DPDPA), CERT-In cybersecurity directives, and tax GST/TDS frameworks."
  }
];

function IndiaBridgeOne() {
  return (
    <section className="tmp-section-gap" style={{
      background: 'linear-gradient(135deg, #071126 0%, #0B1B3D 70%, #08142c 100%)',
      position: 'relative',
      overflow: 'hidden',
      color: '#ffffff'
    }}>
      <style>{`
        .lawrj-bridge-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 16px;
          padding: 30px 24px;
          height: 100%;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .lawrj-bridge-card:hover {
          border-color: #D4AF37;
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
        }
        .lawrj-bridge-pill {
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: #F3C644;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
      `}</style>

      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "radial-gradient(circle at 15% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 40%), radial-gradient(circle at 85% 70%, rgba(16, 185, 129, 0.06) 0%, transparent 40%)",
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="lawrj-bridge-pill mb-3">
              <i className="fa-solid fa-bridge"></i> TWO-WAY VENTURE BRIDGE
            </div>
            <h2 style={{ fontSize: '38px', fontWeight: '800', color: '#ffffff', fontFamily: 'Georgia, serif', lineHeight: '1.25' }}>
              Connecting Western Startups to the Indian Tech Market
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.8', marginTop: '18px' }}>
              India is the world's fastest-growing digital economy and the premier hub for global technology talent. Yet navigating Indian company law, RBI inward remittances, FDI guidelines, and tax withholding creates immense friction for Western founders.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.8' }}>
              <strong style={{ color: '#F3C644' }}>LawRJ acts as your on-ground strategic legal bridge.</strong> We assist Silicon Valley, London, and international ventures to seamlessly establish their Global Capability Centers (GCCs), hire top engineering teams with ironclad US-standard IP assignments, and capture Indian enterprise market share.
            </p>

            <div className="d-flex align-items-center gap-3 mt-4 pt-2 flex-wrap">
              <Link href="/Contact" className="tmp-btn btn-primary">
                Inquire India Entry / GCC Setup
              </Link>
              <a href="https://wa.me/919327000022" target="_blank" rel="noopener noreferrer" className="tmp-btn btn-secondary">
                <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', marginRight: '6px' }}></i>
                Talk with India Practice Lead
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
              {bridgeFeatures.map((feat, idx) => (
                <div key={idx} className="col-sm-6">
                  <div className="lawrj-bridge-card">
                    <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F3C644', fontSize: '20px', marginBottom: '16px' }}>
                      <i className={feat.icon}></i>
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                      {feat.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndiaBridgeOne;

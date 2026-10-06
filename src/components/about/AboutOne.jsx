"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutOne = ({ id }) => {
  return (
    <div id={id}>
      <style>{`
        .lawrj-about-wrapper {
          padding: 100px 0;
          background: #ffffff;
        }
        .lawrj-about-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #A9801A;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .lawrj-about-title {
          font-size: 42px;
          font-weight: 800;
          color: #0B1B3D;
          line-height: 1.25;
          margin-bottom: 24px;
          font-family: Georgia, serif;
        }
        .lawrj-about-lead {
          font-size: 18px;
          font-weight: 500;
          color: #334155;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .lawrj-about-body {
          color: #64748B;
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .lawrj-media-stack {
          position: relative;
        }
        .lawrj-primary-media {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(11, 27, 61, 0.15);
          position: relative;
        }
        .lawrj-floating-media-badge {
          position: absolute;
          bottom: -25px;
          right: -20px;
          background: #0B1B3D;
          border: 2px solid #D4AF37;
          border-radius: 16px;
          padding: 22px 26px;
          color: #ffffff;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .lawrj-disclaimer-box {
          background: rgba(11, 27, 61, 0.03);
          border-left: 4px solid #D4AF37;
          border-radius: 0 10px 10px 0;
          padding: 18px 22px;
          margin-top: 30px;
        }
        @media(max-width: 991px) {
          .lawrj-floating-media-badge {
            position: static;
            margin-top: 20px;
          }
        }
      `}</style>

      <section className="lawrj-about-wrapper">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Visual & Human Representation */}
            <div className="col-lg-6">
              <div className="lawrj-media-stack">
                <div className="lawrj-primary-media">
                  <Image
                    src="/assets/images/about/about-large.jpg"
                    width={700}
                    height={520}
                    alt="LawRJ International Startup Counsel & Cross-Border Advisory"
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(7, 17, 38, 0.75) 100%)' }}></div>
                  <div style={{ position: 'absolute', bottom: '20px', left: '24px', color: '#fff' }}>
                    <span className="badge" style={{ background: 'rgba(212, 175, 55, 0.25)', border: '1px solid #D4AF37', color: '#F3C644', marginBottom: '6px', padding: '5px 12px' }}>
                      FOUNDER & COUNSEL COLLABORATION
                    </span>
                    <h5 style={{ color: '#ffffff', margin: 0, fontSize: '18px', fontWeight: '700' }}>
                      Cross-Border Venture Structuring
                    </h5>
                  </div>
                </div>

                <div className="lawrj-floating-media-badge">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F3C644', fontSize: '22px' }}>
                    <i className="fa-solid fa-scale-balanced"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#F3C644', fontFamily: 'Georgia, serif', lineHeight: 1 }}>
                      100+ Deals
                    </div>
                    <span style={{ fontSize: '12px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      US, UK, SG, AU & CA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Content */}
            <div className="col-lg-6">
              <div className="lawrj-about-badge">
                <i className="fa-solid fa-scale-balanced" style={{ color: '#D4AF37' }}></i>
                OBJECTIVE VENTURE ARCHITECTURE
              </div>
              <h2 className="lawrj-about-title">
                Jurisdiction-Agnostic Advisory & The Bilateral Tech Bridge
              </h2>
              <p className="lawrj-about-lead">
                Rather than forcing every startup into Delaware confirmation bias, we systematically evaluate founder tax residency, investor domiciles, and commercial footprints.
              </p>
              <p className="lawrj-about-body">
                Founded by <strong>Advocate Viral Vyas</strong>, LawRJ delivers institutional legal engineering across <strong>Singapore, UAE (ADGM/DIFC), United Kingdom, United States, Netherlands, and India</strong>. We eliminate cross-border friction by aligning corporate governance, YC Post-Money SAFEs, commercial SaaS contracts, and bilateral engineering hubs.
              </p>

              {/* Bilateral Inbound / Outbound Tech Bridge Cards */}
              <div className="row g-3 mt-2">
                <div className="col-12">
                  <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '18px', flexShrink: 0 }}>
                      <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    </div>
                    <div>
                      <h6 style={{ margin: 0, fontSize: '14.5px', color: '#0B1B3D', fontWeight: '700' }}>
                        Inbound to India: Engineering GCCs & FEMA Inflow
                      </h6>
                      <span style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.5', display: 'block', marginTop: '2px' }}>
                        We assist US, UK, European and Singapore tech ventures establishing wholly-owned engineering Global Capability Centers (GCCs) in India, ensuring RBI FEMA compliance, transfer pricing documentation, and inward capital structuring.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '18px', flexShrink: 0 }}>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                    <div>
                      <h6 style={{ margin: 0, fontSize: '14.5px', color: '#0B1B3D', fontWeight: '700' }}>
                        Outbound to World: Cap-Table Flips & Global Funding
                      </h6>
                      <span style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.5', display: 'block', marginTop: '2px' }}>
                        We structure cross-border holding company flips, international IP consolidations, and YC Post-Money SAFE financings across Delaware, Singapore, and London for high-growth tech scale-ups.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statutory Advocates Act Disclaimer */}
              <div className="lawrj-disclaimer-box">
                <h6 style={{ fontSize: '12.5px', fontWeight: '700', color: '#0B1B3D', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Statutory Regulatory Notice (Advocates Act, 1961 Compliance)
                </h6>
                <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                  LawRJ operates as a strategic commercial venture architecture consultancy and cross-border corporate advisory practice. The materials on this website are provided for general informational purposes only and do not constitute formal legal solicitation, advertisement, or an attorney-client relationship. Visitors requiring formal litigation representation before the High Court of Gujarat or Indian district courts must engage through direct individual vakalatnama in compliance with Bar Council regulations.
                </p>
              </div>

              <div className="d-flex align-items-center gap-3 mt-4 pt-2 flex-wrap">
                <Link href="/Contact" className="tmp-btn btn-primary">
                  Schedule Strategy Call
                </Link>
                <a 
                  href="https://wa.me/919327000022?text=Hello%20Adv.%20Vyas%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing%20with%20LawRJ." 
                  className="tmp-btn btn-secondary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', marginRight: '6px' }}></i>
                  Confidential WhatsApp Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutOne;
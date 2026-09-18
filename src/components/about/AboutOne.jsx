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
                <i className="fa-solid fa-earth-americas" style={{ color: '#D4AF37' }}></i>
                INTERNATIONAL VENTURE ARCHITECTURE
              </div>
              <h2 className="lawrj-about-title">
                Building Global Legal Infrastructure for High-Growth Startups
              </h2>
              <p className="lawrj-about-lead">
                Scaling from zero to a venture-backed enterprise requires seamless corporate alignment across top capital ecosystems.
              </p>
              <p className="lawrj-about-body">
                Founded to eliminate cross-border friction for visionary entrepreneurs, <strong>LawRJ</strong> engineers complete international governance, Delaware flips, Singapore holding structures, YC SAFE financings, corporate banking integrations, and intellectual property consolidations.
              </p>
              <p className="lawrj-about-body">
                Unlike fragmented local law firms that understand only their domestic rules, we orchestrate unified regulatory strategy across the <strong>United States, United Kingdom, Canada, Australia, and Singapore</strong>—backed by active local corporate presence and established banking relationships.
              </p>

              {/* Hub Cards / Why Choose Us */}
              <div className="row g-3 mt-2">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '18px' }}>
                      <i className="fa-solid fa-rocket"></i>
                    </div>
                    <div>
                      <h6 style={{ margin: 0, fontSize: '15px', color: '#0B1B3D', fontWeight: '700' }}>Idea to IPO</h6>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>Full-Lifecycle Strategy</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '18px' }}>
                      <i className="fa-solid fa-building-columns"></i>
                    </div>
                    <div>
                      <h6 style={{ margin: 0, fontSize: '15px', color: '#0B1B3D', fontWeight: '700' }}>Local Entity Presence</h6>
                      <span style={{ fontSize: '12px', color: '#64748B' }}>Direct Banking in 5 Hubs</span>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3" style={{ background: 'linear-gradient(135deg, rgba(11,27,61,0.04) 0%, rgba(212,175,55,0.06) 100%)', border: '1px solid rgba(212, 175, 55, 0.25)' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(11, 27, 61, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0B1B3D', fontSize: '18px', flexShrink: 0 }}>
                      <i className="fa-solid fa-bridge-water"></i>
                    </div>
                    <div>
                      <h6 style={{ margin: 0, fontSize: '14.5px', color: '#0B1B3D', fontWeight: '700' }}>
                        Western Startup to Indian Market Bridge
                      </h6>
                      <span style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5', display: 'block', marginTop: '2px' }}>
                        We serve as a strategic legal bridge helping US, UK & global tech startups enter India for market expansion, GCC tech hubs, local regulatory compliance, and seamless cross-border operations.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Transparency */}
              <div className="lawrj-disclaimer-box">
                <h6 style={{ fontSize: '13px', fontWeight: '700', color: '#0B1B3D', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Global Advisory Compliance & Regulatory Integrity
                </h6>
                <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                  LawRJ operates as an international corporate consulting, regulatory advisory, and cross-border commercial documentation practice. We provide corporate structuring, venture transactions, and business governance. In accordance with the Advocates Act (India) and international legal practice regulations, we do not operate as a domestic litigation law firm or court advocates.
                </p>
              </div>

              <div className="mt-4 pt-2">
                <Link href="/Contact" className="tmp-btn btn-primary">
                  Book Confidential Briefing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutOne;
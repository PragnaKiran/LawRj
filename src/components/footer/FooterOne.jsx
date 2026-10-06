"use client";
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <div>
      <footer className="footer-area footer-style-one-wrapper bg-color-footer tmp-section-gap" style={{ background: '#071126', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
        <div className="container">
          {/* Newsletter / Founder Briefing - Compact Horizontal Redesign */}
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-area subscribe-style-1 mb-4" style={{
                background: 'linear-gradient(135deg, #0B1B3D 0%, #162E66 100%)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '14px',
                padding: '24px 32px'
              }}>
                <div className="row align-items-center g-3">
                  <div className="col-lg-6">
                    <h5 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '800', fontFamily: 'Georgia, serif', margin: 0 }}>
                      Global Startup Legal & Regulatory Briefings
                    </h5>
                    <p style={{ color: '#cbd5e1', fontSize: '12.5px', margin: '4px 0 0 0', lineHeight: '1.4' }}>
                      Delaware corporate updates, YC SAFE best practices, cross-border tax treaties & venture compliance.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <form action="#" className="d-flex align-items-center gap-2 flex-wrap flex-sm-nowrap">
                      <input
                        type="email"
                        placeholder="Enter your work email address"
                        required
                        style={{
                          background: 'rgba(255,255,255,0.08)',
                          color: '#fff',
                          border: '1px solid rgba(255,255,255,0.2)',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          flexGrow: 1
                        }}
                      />
                      <button type="submit" className="tmp-btn btn-primary" style={{ padding: '10px 18px', fontSize: '13px', whiteSpace: 'nowrap' }}>
                        Subscribe <i className="fa-sharp fa-regular fa-paper-plane ms-1" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Navigation Columns */}
          <div className="footer-main footer-style-one">
            <div className="row g-5">
              {/* Brand & Mission */}
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo mb-3">
                    <Link href="/">
                      <div style={{ background: '#ffffff', padding: '8px 18px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}>
                        <Image
                          width={200}
                          height={64}
                          src="/assets/images/logo/lawrj-logo.png"
                          alt="LawRJ - Law Rights Justice"
                          style={{ height: 'auto', width: '170px' }}
                        />
                      </div>
                    </Link>
                  </div>
                  
                  <p className="description" style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.8' }}>
                    LawRJ is a global startup legal & regulatory consultancy engineering cross-border venture infrastructure from Idea to IPO across the United States, United Kingdom, Singapore, Australia, and Canada.
                  </p>

                  <div className="mt-4 pt-2">
                    <span style={{ fontSize: '12px', color: '#F3C644', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                      FOUNDER ADVISORY HELPLINE
                    </span>
                    <div className="d-flex align-items-center gap-3">
                      <a href="https://wa.me/919327000022" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2" style={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}>
                        <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '18px' }}></i>
                        +91 93270 00022
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Core Practice Pillars */}
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper pl-30 pl_md--0 pl_sm--0">
                  <h5 className="ft-title">Practice Pillars</h5>
                  <ul className="ft-link">
                    <li><Link href="/ServiceDetails?service=inception&pillar=PIL-01">1. Holding & Corporate Structuring</Link></li>
                    <li><Link href="/ServiceDetails?service=financing&pillar=PIL-02">2. VC Financing & Cap-Table</Link></li>
                    <li><Link href="/ServiceDetails?service=contracts&pillar=PIL-03">3. B2B SaaS Contracts & DPDP</Link></li>
                    <li><Link href="/ServiceDetails?service=india-bridge&pillar=PIL-04">4. Inbound Tech GCCs & FDI</Link></li>
                  </ul>
                </div>
              </div>

              {/* Target Jurisdictions */}
              <div className="col-lg-2 col-md-6">
                <div className="single-footer-wrapper">
                  <h5 className="ft-title">Key Domiciles</h5>
                  <ul className="ft-link">
                    <li><Link href="/ServiceDetails?service=sg">🇸🇬 Singapore</Link></li>
                    <li><Link href="/ServiceDetails?service=inception">🇦🇪 UAE (ADGM/DIFC)</Link></li>
                    <li><Link href="/ServiceDetails?service=uk">🇬🇧 United Kingdom</Link></li>
                    <li><Link href="/ServiceDetails?service=us">🇺🇸 United States</Link></li>
                    <li><Link href="/ServiceDetails?service=india-bridge">🇮🇳 India Tech Hubs</Link></li>
                  </ul>
                </div>
              </div>

              {/* Global Contact & HQ */}
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper">
                  <h5 className="ft-title">Principal Contact</h5>
                  <ul className="ft-link">
                    <li>
                      <div className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-briefcase mt-1" style={{ color: '#D4AF37' }}></i>
                        <div>
                          <span style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '14px', display: 'block' }}>Principal Contact Desk</span>
                          <span style={{ color: '#94a3b8', fontSize: '12px' }}>Cross-Border Venture Practice</span>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="d-flex align-items-start gap-2">
                        <i className="fa-regular fa-envelope mt-1" style={{ color: '#D4AF37' }}></i>
                        <div>
                          <span style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '14px', display: 'block' }}>Client Desk</span>
                          <a href="mailto:i@lawrj.com" style={{ color: '#94a3b8', fontSize: '13px' }}>i@lawrj.com</a>
                        </div>
                      </div>
                    </li>
                    <li className="mt-3">
                      <div className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-location-dot mt-1" style={{ color: '#D4AF37' }}></i>
                        <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px', lineHeight: '1.6' }}>
                          404, Devkuvar 7, Tragad, Ahmedabad-382470, Gujarat
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Clean Copyright Bar */}
      <div className="copyright-area-one py-3" style={{ background: '#030814', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                Institutional Venture Architecture & Cross-Border Advisory
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                © 2026 <strong style={{ color: '#F3C644' }}>LawRJ.COM</strong>. All Rights Reserved. DPDP Act 2023 Compliant.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
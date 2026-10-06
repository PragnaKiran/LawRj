"use client";
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <div>
      <footer className="footer-area footer-style-one-wrapper bg-color-footer tmp-section-gap" style={{ background: '#071126', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
        <div className="container">
          {/* Newsletter / Founder Briefing */}
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-area subscribe-style-1 mb-5" style={{ background: 'linear-gradient(135deg, #0B1B3D 0%, #162E66 100%)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '16px', padding: '40px' }}>
                <div className="subscribe-inner">
                  <div className="title" style={{ color: '#ffffff', fontSize: '24px', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
                    Subscribe to Global Startup Legal & Regulatory Briefings
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '14px', maxWidth: '650px', margin: '8px auto 24px' }}>
                    Receive timely analysis on Delaware corporate updates, cross-border tax treaties, YC SAFE best practices, and venture capital regulations across the US, UK, Canada, Australia, and Singapore.
                  </p>
                  <form action="#" className="newsletter-form-1 mt-3">
                    <input type="email" placeholder="Enter your work email address" required style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }} />
                    <button type="submit" className="tmp-btn btn-primary">
                      Subscribe Briefings <i className="fa-sharp fa-regular fa-paper-plane ms-1" />
                    </button>
                  </form>
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
                  <h5 className="ft-title">Principal Chambers</h5>
                  <ul className="ft-link">
                    <li>
                      <div className="d-flex align-items-start gap-2">
                        <i className="fa-solid fa-scale-balanced mt-1" style={{ color: '#D4AF37' }}></i>
                        <div>
                          <span style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '14px', display: 'block' }}>Advocate Viral Vyas</span>
                          <span style={{ color: '#94a3b8', fontSize: '12px' }}>High Court of Gujarat</span>
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

      {/* Regulatory Transparency & Copyright Bar */}
      <div className="copyright-area-one py-4" style={{ background: '#030814', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <p style={{ margin: 0, fontSize: '12px', color: '#64748B', lineHeight: '1.6' }}>
                <strong style={{ color: '#94a3b8' }}>Statutory Regulatory Notice (Advocates Act, 1961 Compliance):</strong> LawRJ operates as a strategic commercial venture architecture consultancy and cross-border corporate advisory practice. The materials on this website are provided for general informational purposes only and do not constitute formal legal solicitation, advertisement, or an attorney-client relationship. Visitors requiring formal litigation representation before the High Court of Gujarat or Indian district courts must engage through direct individual vakalatnama in compliance with Bar Council regulations. Zero client intake data is monetized or tracked.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <p style={{ margin: 0, fontSize: '12.5px', color: '#94a3b8' }}>
                © 2026 <strong style={{ color: '#F3C644' }}>LawRJ.COM</strong>. All Rights Reserved. Entity ID: ENT-09. DPDP Act 2023 Compliant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
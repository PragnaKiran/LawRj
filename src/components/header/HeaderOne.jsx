"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from "@/components/header/Nav"
import Image from 'next/image';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 120);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const handleMenuToggle = () => { setIsMenuVisible(!isMenuVisible); setIsOverlayVisible(!isOverlayVisible); };
  const handleCloseMenu = () => { setIsMenuVisible(false); setIsOverlayVisible(false); };

  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menu) => setOpenMenu(openMenu === menu ? null : menu);

  return (
    <div>
      <header className="tmp-header-area-start header-one">
        {/* Global Multi-Jurisdiction Top Bar */}
        <div className="header-top-one py-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="header-top-inner d-flex justify-content-between align-items-center">
                  <div className="left-information-area d-flex align-items-center gap-3">
                    <span className="badge" style={{ background: 'rgba(212, 175, 55, 0.2)', color: '#F3C644', border: '1px solid rgba(212, 175, 55, 0.4)', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.8px' }}>
                      VENTURE ADVISORY
                    </span>
                    <div className="location-area d-none d-md-flex align-items-center gap-2">
                      <span style={{ fontSize: '12.5px', color: '#cbd5e1', fontWeight: '500' }}>
                        🇸🇬 Singapore &nbsp;•&nbsp; 🇦🇪 UAE (ADGM/DIFC) &nbsp;•&nbsp; 🇬🇧 United Kingdom &nbsp;•&nbsp; 🇺🇸 United States &nbsp;•&nbsp; 🇮🇳 India
                      </span>
                    </div>
                  </div>
                  
                  <div className="right-header-top d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-2" style={{ color: '#e2e8f0', fontSize: '13px' }}>
                      <i className="fa-regular fa-envelope" style={{ color: '#D4AF37' }}></i>
                      <a href="mailto:i@lawrj.com" style={{ color: '#e2e8f0', textDecoration: 'none' }}>i@lawrj.com</a>
                    </div>
                    <div className="d-flex align-items-center gap-2" style={{ color: '#e2e8f0', fontSize: '13px' }}>
                      <i className="fa-solid fa-phone" style={{ color: '#D4AF37', fontSize: '12px' }}></i>
                      <a href="tel:+919327000022" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '600' }}>
                        Helpline: +91 93270 00022
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-header-one-wrapper">
                <div className="header-mida-area d-flex align-items-center justify-content-between py-3">
                  <div className="logo-area-start">
                    <Link className="logo d-flex align-items-center" href="/">
                      <div style={{ background: '#ffffff', padding: '8px 18px', borderRadius: '10px', boxShadow: '0 4px 14px rgba(11, 27, 61, 0.08)', display: 'inline-flex', alignItems: 'center' }}>
                        <Image
                          width={220}
                          height={68}
                          alt="LawRJ - Law Rights Justice"
                          src="/assets/images/logo/lawrj-logo.png"
                          priority
                          style={{ height: 'auto', width: '190px', objectFit: 'contain' }}
                        />
                      </div>
                    </Link>
                  </div>
                  
                  <div className="mid-header-center d-none d-lg-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-3 px-3 py-2 rounded-3" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '16px' }}>
                        <i className="fa-solid fa-seedling"></i>
                      </div>
                      <div>
                        <span style={{ fontSize: '11px', color: '#A9801A', display: 'block', fontWeight: '800', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                          IDEA TO IPO — YOUR PARTNERS
                        </span>
                        <span style={{ fontSize: '13px', color: '#0B1B3D', fontWeight: '700' }}>
                          Global Venture Legal & Corporate Counsel
                        </span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3 px-3 py-2 rounded-3" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '16px' }}>
                        <i className="fa-solid fa-headset"></i>
                      </div>
                      <div>
                        <span style={{ fontSize: '11px', color: '#64748B', display: 'block', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Confidential Direct Line
                        </span>
                        <a href="tel:+919327000022" style={{ fontSize: '13px', color: '#0B1B3D', fontWeight: '700', textDecoration: 'none' }}>
                          Helpline: +91 93270 00022
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <Link className="tmp-btn btn-primary" href="/Contact" style={{ padding: '12px 24px', fontSize: '14px' }}>
                      Schedule Consultation
                    </Link>
                  </div>
                </div>

                {/* Sticky Navbar */}
                <div className={`tmp-nav-area-one header--sticky ${isSticky ? 'sticky' : ''}`}>
                  <div className="logo-md-sm-device">
                    <Link className="logo" href="/">
                      <div style={{ background: '#ffffff', padding: '6px 14px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center' }}>
                        <Image
                          width={160}
                          height={50}
                          alt="LawRJ Logo"
                          src="/assets/images/logo/lawrj-logo.png"
                          style={{ height: 'auto', width: '130px' }}
                        />
                      </div>
                    </Link>
                  </div>
                  <Nav />
                  <div className="actions-area d-flex align-items-center gap-3">
                    <a
                      href="https://wa.me/919327000022?text=Hello%20Adv.%20Vyas%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing%20with%20LawRJ."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-none d-md-flex align-items-center gap-2 px-3 py-2 rounded text-decoration-none"
                      style={{ background: 'rgba(37, 211, 102, 0.15)', border: '1px solid rgba(37, 211, 102, 0.4)', color: '#16a34a', fontSize: '13px', fontWeight: '700' }}
                    >
                      <i className="fa-brands fa-whatsapp" style={{ fontSize: '16px' }}></i>
                      WhatsApp Line
                    </a>
                    <div className="tmp-side-collups-area" id="side-collups" onClick={handleMenuToggle} style={{ cursor: 'pointer' }}>
                      <svg fill="none" height="18" viewBox="0 0 20 16" width="22" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="#D4AF37" height="2.5" width="20" y="13.5" rx="1" />
                        <rect fill="#D4AF37" height="2.5" width="20" y="6.75" rx="1" />
                        <rect fill="#D4AF37" height="2.5" width="20" rx="1" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Global Off-canvas Slide Panel */}
      <div id="side-hide" className={isMenuVisible ? 'show' : ''}>
        <div className="top-area">
          <Link href="/" className="logo-area" onClick={handleCloseMenu}>
            <div style={{ background: '#ffffff', padding: '10px 18px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center' }}>
              <Image width={170} height={55} src="/assets/images/logo/lawrj-logo.png" alt="LawRJ" style={{ height: 'auto', width: '140px' }} />
            </div>
          </Link>
          <div className="close-icon-area">
            <div id="close-slide__main" onClick={handleCloseMenu} style={{ cursor: 'pointer' }}>
              <i className="fa-solid fa-x" style={{ color: '#D4AF37', fontSize: '20px' }} />
            </div>
          </div>
        </div>
        
        <div className="body">
          <h5 className="title">Cross-Border Venture Architecture</h5>
          <p className="disc">
            LawRJ advises high-growth technology founders, investors, and corporate ventures scaling seamlessly across the United States, United Kingdom, Singapore, Australia, and Canada.
          </p>
          
          <div className="short-contact-area-side-collups">
            <div className="single-contact-information-side">
              <i className="fa-solid fa-globe" style={{ color: '#D4AF37' }} />
              <div className="information">
                <span>Official Web</span>
                <a href="https://lawrj.com" className="number">LAWRJ.COM</a>
              </div>
            </div>

            <div className="single-contact-information-side">
              <i className="fa-solid fa-phone" style={{ color: '#D4AF37' }} />
              <div className="information">
                <span>Helpline</span>
                <a href="tel:+919327000022" className="number">+91 93270 00022</a>
              </div>
            </div>

            <div className="single-contact-information-side">
              <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }} />
              <div className="information">
                <span>Direct WhatsApp</span>
                <a href="https://wa.me/919327000022" className="number">+91 93270 00022</a>
              </div>
            </div>

            <div className="single-contact-information-side">
              <i className="fa-light fa-envelope" style={{ color: '#D4AF37' }} />
              <div className="information">
                <span>Direct Inbox</span>
                <a href="mailto:i@lawrj.com" className="number">i@lawrj.com</a>
              </div>
            </div>

            <div className="single-contact-information-side">
              <i className="fa-sharp fa-light fa-location-dot" style={{ color: '#D4AF37' }} />
              <div className="information">
                <span>Global Operational Office</span>
                <p className="number" style={{ fontSize: '13px', lineHeight: '1.5', margin: 0, color: '#cbd5e1' }}>
                  404, Devkuvar 7, Tragad, Ahmedabad-382470
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(212, 175, 55, 0.08)', borderRadius: '8px', borderLeft: '3px solid #D4AF37' }}>
            <span style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.5', display: 'block' }}>
              <strong>Regulatory Integrity Disclosure:</strong> LawRJ provides commercial corporate structuring, venture transactions, cross-border operations, and regulatory counsel. We do not engage in domestic court litigation or court appearance advocacy.
            </span>
          </div>
        </div>

        {/* Mobile menu nav */}
        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li><Link href="/" className="main">Home</Link></li>
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(1)}>Services</Link>
                <ul className={`submenu ${openMenu === 1 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=inception">Entity Formation & Founder Equity</Link></li>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=financing">Seed & VC SAFE Financing</Link></li>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=contracts">Commercial SaaS & Enterprise Contracts</Link></li>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=banking">Cross-Border Banking & Tax</Link></li>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=esop">Global Talent, ESOP & IP</Link></li>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=preipo">M&A Strategy & Pre-IPO</Link></li>
                </ul>
              </li>
              <li className="has-droupdown">
                <Link href="#" className="main" onClick={() => toggleMenu(2)}>Jurisdictions</Link>
                <ul className={`submenu ${openMenu === 2 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=us">🇺🇸 United States</Link></li>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=uk">🇬🇧 United Kingdom</Link></li>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=sg">🇸🇬 Singapore</Link></li>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=au">🇦🇺 Australia</Link></li>
                  <li><Link className="mobile-menu-link" href="/ServiceDetails?service=ca">🇨🇦 Canada</Link></li>
                </ul>
              </li>
              <li><Link href="/About" className="main">About</Link></li>
              <li><Link href="/FaqOne" className="main">FAQs</Link></li>
              <li><Link href="/Contact" className="main">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div id="overlay_every-where" className={isOverlayVisible ? 'bgshow' : ''} onClick={handleCloseMenu}></div>
    </div>
  );
}

export default Header;
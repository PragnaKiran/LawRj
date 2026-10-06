"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const bannerSlides = [
  {
    bgImage: "/assets/images/banner/01.jpg",
    badge: "GLOBAL VENTURE ARCHITECTURE",
    badgeIcon: "fa-solid fa-earth-americas",
    titleStart: "Jurisdiction-Agnostic Corporate Structuring for ",
    titleHighlight: "High-Growth Startups Worldwide",
    titleEnd: "",
    desc: "We architect optimized multi-entity corporate holding and operating structures across premier international venture jurisdictions—tailored precisely to founder tax residency, investor mandates, and cross-border IP protection (Singapore, UAE/ADGM/DIFC, United Kingdom, United States, Cayman Islands, and India).",
    primaryBtn: { text: "Schedule Strategy Call", href: "/Contact" },
    secondaryBtn: { 
      text: "Confidential WhatsApp Line", 
      href: "https://wa.me/919327000022?text=Hello%20LawRJ%20Team%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing." 
    },
    statNumber: "$150M+",
    statLabel: "Cross-Border Market Flow",
    trustHighlight: "Annual bilateral venture capital transaction flow across premier international innovation corridors.",
    cardRole: "PRINCIPAL CONTACT",
    cardTitle: "Principal Contact Desk",
    cardCredential: "Cross-Border Venture Practice • LawRJ",
    cardFocus: "Objective, jurisdiction-agnostic entity architecture designed for investor diligence and international scale."
  },
  {
    bgImage: "/assets/images/banner/startup.jpg",
    badge: "VENTURE CAPITAL & CAP-TABLE",
    badgeIcon: "fa-solid fa-chart-pie",
    titleStart: "Venture Capital Financing & ",
    titleHighlight: "Cap-Table Governance",
    titleEnd: "",
    desc: "Protect founder equity and prevent dilutive traps. We structure Y-Combinator Post-Money SAFEs (with Valuation Caps & MFN terms), 500 Global KISS agreements, convertible notes, and priced institutional Seed & Series A rounds.",
    primaryBtn: { text: "Review Financing Terms", href: "/ServiceDetails?service=financing" },
    secondaryBtn: { 
      text: "Confidential WhatsApp Line", 
      href: "https://wa.me/919327000022?text=Hello%20LawRJ%20Team%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing." 
    },
    statNumber: "Global Reach",
    statLabel: "Entity Domiciles Structured",
    trustHighlight: "Singapore, ADGM/DIFC, UK Ltd, Delaware C-Corp, Netherlands B.V., and India Pvt Ltd.",
    cardRole: "CAP-TABLE ARCHITECTURE",
    cardTitle: "Institutional Diligence",
    cardCredential: "SAFE • KISS • Priced Equity • ESOP Pools",
    cardFocus: "4-year vesting schedules, 1-year cliff terms, and investor side-letter negotiation."
  },
  {
    bgImage: "/assets/images/banner/02.jpg",
    badge: "COMMERCIAL CONTRACTS & DATA PRIVACY",
    badgeIcon: "fa-solid fa-file-shield",
    titleStart: "Enterprise B2B SaaS Contracts & ",
    titleHighlight: "Global Privacy Architecture",
    titleEnd: "",
    desc: "Arm your software venture with sales-enabling Master Services Agreements (MSAs), Service Level Agreements (SLAs) with 99.9% uptime commitments, and DPAs compliant with India DPDP Act 2023, GDPR, and CCPA.",
    primaryBtn: { text: "Explore Contract Suite", href: "/ServiceDetails?service=contracts" },
    secondaryBtn: { 
      text: "Confidential WhatsApp Line", 
      href: "https://wa.me/919327000022?text=Hello%20LawRJ%20Team%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing." 
    },
    statNumber: "300+",
    statLabel: "Standard Contract Suites",
    trustHighlight: "Procurement-ready commercial contract architecture satisfying Tier-1 enterprise security reviews.",
    cardRole: "COMMERCIAL CONTRACTS",
    cardTitle: "Enterprise SaaS Enablement",
    cardCredential: "DPDP Act 2023 • GDPR • CCPA • Enterprise SLAs",
    cardFocus: "Accelerating enterprise sales cycles with balanced, procurement-tested master agreements."
  },
  {
    bgImage: "/assets/images/banner/03.jpg",
    badge: "CROSS-BORDER BILATERAL BRIDGE",
    badgeIcon: "fa-solid fa-bridge-water",
    titleStart: "Cross-Border Market Expansion & ",
    titleHighlight: "Inbound Tech Engineering Hubs",
    titleEnd: "",
    desc: "The bilateral highway between global technology centers and India. Advisory for international ventures establishing engineering Global Capability Centers (GCCs), RBI/FEMA inbound FDI compliance, and cross-border holding flips.",
    primaryBtn: { text: "Explore Bilateral Bridge", href: "/ServiceDetails?service=india-bridge" },
    secondaryBtn: { 
      text: "Confidential WhatsApp Line", 
      href: "https://wa.me/919327000022?text=Hello%20LawRJ%20Team%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing." 
    },
    statNumber: "Bilateral Hub",
    statLabel: "Inbound GCC & Outbound Flips",
    trustHighlight: "FEMA / FDI compliance, transfer pricing documentation, and seamless inward capital deployment.",
    cardRole: "CROSS-BORDER BRIDGE",
    cardTitle: "Bilateral Practice Desk",
    cardCredential: "India Tech Hubs • RBI / FEMA • Global Flips",
    cardFocus: "Guiding international founders and institutional investors through Indian regulatory corridors."
  }
];

const BannerOne = () => {
  return (
    <div className="tmp-banner-swiper-one-area" style={{ position: 'relative' }}>
      <style>{`
        .lawrj-hero-slide {
          min-height: 740px;
          display: flex;
          align-items: center;
          position: relative;
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        .lawrj-hero-backdrop {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(7, 17, 38, 0.82) 0%, rgba(11, 27, 61, 0.68) 55%, rgba(7, 17, 38, 0.52) 100%);
          z-index: 1;
        }
        .lawrj-hero-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px);
          background-size: 32px 32px;
          z-index: 2;
        }
        .lawrj-hero-content {
          position: relative;
          z-index: 5;
          padding: 100px 0;
        }
        .lawrj-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.45);
          color: #F3C644;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 12.5px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 22px;
          font-weight: 700;
          backdrop-filter: blur(8px);
        }
        .lawrj-hero-title {
          font-size: 50px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.18;
          margin-bottom: 22px;
          font-family: Georgia, serif;
          letter-spacing: -0.5px;
        }
        .lawrj-hero-title span.gold-gradient-text {
          background: linear-gradient(135deg, #F3C644 0%, #D4AF37 50%, #E5A93C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .lawrj-hero-desc {
          color: #e2e8f0;
          font-size: 16.5px;
          line-height: 1.8;
          margin-bottom: 34px;
          max-width: 580px;
        }
        .lawrj-glass-feature-card {
          position: relative;
          z-index: 5;
          background: rgba(11, 27, 61, 0.82);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
        }
        .lawrj-hero-avatar-ring {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 2px solid #D4AF37;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }
        .lawrj-hero-avatar-ring img {
          object-fit: cover;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #D4AF37 !important;
          width: 26px;
          border-radius: 6px;
        }
        @media(max-width: 991px) {
          .lawrj-hero-title { font-size: 34px; }
          .lawrj-hero-slide { min-height: 640px; }
          .lawrj-glass-feature-card { margin-top: 30px; }
        }
      `}</style>

      <Swiper
        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay, Pagination]}
        className="mySwiper-banner-one"
        speed={1000}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect='fade'
        pagination={{ clickable: true }}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      >
        {bannerSlides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="lawrj-hero-slide"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="lawrj-hero-backdrop"></div>
              <div className="lawrj-hero-pattern"></div>
              
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="lawrj-hero-content">
                      <div className="lawrj-hero-badge">
                        <i className={slide.badgeIcon}></i> {slide.badge}
                      </div>
                      
                      <h1 className="lawrj-hero-title">
                        {slide.titleStart}
                        <span className="gold-gradient-text">{slide.titleHighlight}</span>
                        {slide.titleEnd}
                      </h1>
                      
                      <p className="lawrj-hero-desc">
                        {slide.desc}
                      </p>
                      
                      <div className="d-flex align-items-center gap-3 flex-wrap">
                        <Link href={slide.primaryBtn.href} className="tmp-btn btn-primary">
                          {slide.primaryBtn.text}
                        </Link>
                        {slide.secondaryBtn.href.startsWith("http") ? (
                          <a href={slide.secondaryBtn.href} target="_blank" rel="noopener noreferrer" className="tmp-btn btn-secondary">
                            <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', marginRight: '8px' }}></i>
                            {slide.secondaryBtn.text}
                          </a>
                        ) : (
                          <Link href={slide.secondaryBtn.href} className="tmp-btn btn-secondary">
                            {slide.secondaryBtn.text}
                          </Link>
                        )}
                      </div>

                      <div className="d-flex align-items-center gap-3 mt-4 pt-2">
                        <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>
                          LOCAL CORPORATE PRESENCE:
                        </span>
                        <div className="d-flex gap-2 flex-wrap">
                          <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: '500' }}>🇺🇸 US</span>
                          <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: '500' }}>🇬🇧 UK</span>
                          <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: '500' }}>🇸🇬 SG</span>
                          <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: '500' }}>🇦🇪 UAE</span>
                          <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: '500' }}>🇮🇳 IN</span>
                          <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: '500' }}>🇦🇺 AU</span>
                          <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: '500' }}>🇨🇦 CA</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="lawrj-glass-feature-card">
                      <div className="d-flex align-items-center justify-content-between mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ background: '#ffffff', padding: '6px 14px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center' }}>
                          <Image
                            src="/assets/images/logo/lawrj-logo.png"
                            width={130}
                            height={42}
                            alt="LawRJ"
                            style={{ height: 'auto', width: '120px' }}
                          />
                        </div>
                        <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '6px 12px', fontSize: '12px' }}>
                          Institutional Track Record
                        </span>
                      </div>

                      <div className="d-flex align-items-center gap-3 mb-4 p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                        <div style={{ fontSize: '36px', fontWeight: '800', color: '#F3C644', fontFamily: 'Georgia, serif', lineHeight: 1 }}>
                          {slide.statNumber}
                        </div>
                        <div style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.4' }}>
                          <strong style={{ color: '#fff', display: 'block', fontSize: '14px' }}>{slide.statLabel}</strong>
                          {slide.trustHighlight}
                        </div>
                      </div>

                      {/* Institutional Advisory & Direct Counsel Credentials */}
                      <div className="p-3 rounded-3" style={{ background: 'rgba(7, 17, 38, 0.75)', border: '1px solid rgba(212, 175, 55, 0.25)' }}>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <span style={{ fontSize: '11px', color: '#F3C644', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {slide.cardRole}
                          </span>
                          <span className="badge" style={{ background: 'rgba(212, 175, 55, 0.15)', color: '#F3C644', border: '1px solid rgba(212, 175, 55, 0.3)', fontSize: '10px' }}>
                            Verified Authority
                          </span>
                        </div>
                        <div style={{ fontSize: '15px', color: '#ffffff', fontWeight: '700', marginBottom: '2px' }}>
                          {slide.cardTitle}
                        </div>
                        <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '8px' }}>
                          {slide.cardCredential}
                        </div>
                        <p style={{ margin: 0, fontSize: '12.5px', color: '#cbd5e1', lineHeight: '1.5' }}>
                          "{slide.cardFocus}"
                        </p>
                      </div>

                      <div className="mt-4 pt-2">
                        <Link href="/Contact" className="tmp-btn btn-primary w-100 justify-content-center" style={{ fontSize: '14px', padding: '12px' }}>
                          Schedule Founder Strategy Call
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default BannerOne;

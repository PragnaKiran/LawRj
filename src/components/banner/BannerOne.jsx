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
    badge: "GLOBAL VENTURE COUNSEL",
    badgeIcon: "fa-solid fa-earth-americas",
    titleStart: "Strategic Venture Architecture for Startups in the ",
    titleHighlight: "US, UK, SG, AU & CA",
    titleEnd: "",
    desc: "From initial cross-border incorporation and clean cap-table founder vesting to Series A institutional SAFE rounds, commercial SaaS agreements, and direct local corporate banking setups.",
    primaryBtn: { text: "Schedule Strategy Call", href: "/Contact" },
    secondaryBtn: { text: "Explore Venture Services", href: "/Service" },
    statNumber: "5 Hubs",
    statLabel: "US, UK, SG, AU & CA",
    trustHighlight: "Verified corporate registration and local banking execution across premier international technology ecosystems.",
    clientAvatar: "/assets/images/team/team-1.png",
    clientQuote: "Flawless cross-border structuring and Delaware C-Corp execution.",
    clientAuthor: "Venture-Backed Founder"
  },
  {
    bgImage: "/assets/images/banner/startup.jpg",
    badge: "CAPITAL & SAFE ROUNDS",
    badgeIcon: "fa-solid fa-file-invoice-dollar",
    titleStart: "Silicon Valley & London Standard ",
    titleHighlight: "SAFE, KISS & Equity Structuring",
    titleEnd: "",
    desc: "Avoid costly cap-table dilution traps. We draft and negotiate Y-Combinator Post-Money SAFEs, 500 Global KISS agreements, convertible notes, and priced institutional Seed & Series A rounds.",
    primaryBtn: { text: "Review Financing Terms", href: "/ServiceDetails?service=financing" },
    secondaryBtn: { text: "Direct WhatsApp Line", href: "https://wa.me/919327000022" },
    statNumber: "100+",
    statLabel: "Venture Deals Closed",
    trustHighlight: "Handled over $150M+ in international client funding and cross-border investor transactions.",
    clientAvatar: "/assets/images/team/team-2.png",
    clientQuote: "Saved us months of friction when closing our international seed round.",
    clientAuthor: "Techstars Alum"
  },
  {
    bgImage: "/assets/images/banner/02.jpg",
    badge: "BANKING & CROSS-BORDER EXPANSION",
    badgeIcon: "fa-solid fa-building-columns",
    titleStart: "Verified Local Business Setup & ",
    titleHighlight: "Corporate Banking Infrastructure",
    titleEnd: "",
    desc: "Eliminate foreign banking hurdles. We facilitate local business registrations and corporate bank accounts in the US (Mercury, Brex), UK (Barclays), Singapore (DBS), and Australia (CommBank).",
    primaryBtn: { text: "Inquire Banking Setup", href: "/ServiceDetails?service=banking" },
    secondaryBtn: { text: "Multi-Jurisdiction Hubs", href: "/About" },
    statNumber: "100%",
    statLabel: "Bank Account Success",
    trustHighlight: "Direct multi-jurisdictional presence enabling smooth cross-border treasury operations and commercial contracts.",
    clientAvatar: "/assets/images/team/team-3.png",
    clientQuote: "Opened our US and UK accounts without needing to fly overseas.",
    clientAuthor: "B2B SaaS Founder"
  },
  {
    bgImage: "/assets/images/banner/03.jpg",
    badge: "COMMERCIAL & ENTERPRISE CONTRACTS",
    badgeIcon: "fa-solid fa-shield-halved",
    titleStart: "Enterprise B2B SaaS Architecture & ",
    titleHighlight: "Global Data Protection (GDPR/CCPA)",
    titleEnd: "",
    desc: "Arm your software venture with sales-enabling Master Services Agreements (MSA), Service Level Agreements (SLA), and bulletproof DPAs compliant with US, European, and Asian privacy laws.",
    primaryBtn: { text: "Explore Contract Suite", href: "/ServiceDetails?service=contracts" },
    secondaryBtn: { text: "Talk to Specialist", href: "/Contact" },
    statNumber: "300+",
    statLabel: "Enterprise MSAs Drafted",
    trustHighlight: "Production-ready commercial contracts that satisfy stringent Fortune 500 procurement teams.",
    clientAvatar: "/assets/images/team/team-4.png",
    clientQuote: "Closed our first $100K enterprise customer with their MSA draft.",
    clientAuthor: "Enterprise Software CEO"
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
          background: linear-gradient(90deg, rgba(7, 17, 38, 0.94) 0%, rgba(11, 27, 61, 0.88) 55%, rgba(7, 17, 38, 0.72) 100%);
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
                        <div className="d-flex gap-2">
                          <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: '500' }}>🇺🇸 US</span>
                          <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: '500' }}>🇬🇧 UK</span>
                          <span className="badge" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: '12px', fontWeight: '500' }}>🇸🇬 SG</span>
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
                          Proven Track Record
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

                      {/* Human Representation & Founder Feedback */}
                      <div className="d-flex align-items-center gap-3 p-3 rounded-3" style={{ background: 'rgba(7, 17, 38, 0.6)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div className="lawrj-hero-avatar-ring">
                          <Image
                            src={slide.clientAvatar}
                            width={60}
                            height={60}
                            alt={slide.clientAuthor}
                          />
                        </div>
                        <div>
                          <p style={{ margin: 0, fontSize: '13px', color: '#e2e8f0', fontStyle: 'italic', lineHeight: '1.5' }}>
                            "{slide.clientQuote}"
                          </p>
                          <span style={{ fontSize: '11px', color: '#F3C644', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginTop: '4px' }}>
                            — {slide.clientAuthor}
                          </span>
                        </div>
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

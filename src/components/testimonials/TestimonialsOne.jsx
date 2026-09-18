"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Marcus Sterling",
    role: "Founder & CEO, CloudForge AI",
    location: "San Francisco, CA (USA)",
    round: "Raised $3.2M Seed (SAFE)",
    review: "LawRJ engineered our Delaware C-Corp flip and restructured our YC Post-Money SAFEs in record time. Having an advisory team with direct presence and local banking execution in the US saved us weeks of friction and tens of thousands in US legal fees.",
    flag: "🇺🇸",
  },
  {
    name: "Alastair Vance",
    role: "Co-Founder, PayFlow Global",
    location: "London, UK",
    round: "Expanded UK to US & Singapore",
    review: "When expanding our B2B fintech from London into Singapore and the US, LawRJ handled the entire tripartite holding company structure, intercompany agreements, and commercial SaaS MSAs. They are true startup specialists from idea to scaling.",
    flag: "🇬🇧",
  },
  {
    name: "Jia-Wei Tan",
    role: "Managing Director, BioSense Tech",
    location: "Singapore",
    round: "Priced Series A ($6.5M)",
    review: "The LawRJ team knows cross-border venture capital inside out. Their expertise in Singapore ACRA holding setups, VIMA model contracts, and local corporate banking is second to none. An indispensable legal backbone for any high-growth Asian venture.",
    flag: "🇸🇬",
  },
  {
    name: "Liam O'Connor",
    role: "CTO, NextGen Robotics",
    location: "Sydney, Australia",
    round: "US Expansion & ESOP Setup",
    review: "Setting up our US subsidiary while maintaining our Australian R&D tax incentives was a complex task. LawRJ structured our cross-border IP licensing and international employee stock option plan seamlessly. Exceptional clarity and execution.",
    flag: "🇦🇺",
  },
  {
    name: "Elena Rostova",
    role: "Founder, QuantumLogistics",
    location: "Toronto, Canada",
    round: "Pre-Seed to Seed Expansion",
    review: "LawRJ’s 'Idea to IPO' roadmap gave us absolute peace of mind. They handled our incorporation, founder vesting, cross-border corporate banking, and enterprise data privacy contracts. Highly recommended for ambitious tech founders.",
    flag: "🇨🇦",
  },
];

function TestimonialsOne() {
  return (
    <section className="tmp-testimonials-area tmp-section-gap" style={{ background: '#F8FAFC' }}>
      <style>{`
        .lawrj-testimonial-card {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 36px 30px;
          box-shadow: 0 4px 20px rgba(11, 27, 61, 0.05);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
        }
        .lawrj-testimonial-card:hover {
          border-color: #D4AF37;
          box-shadow: 0 16px 40px rgba(11, 27, 61, 0.08);
          transform: translateY(-4px);
        }
        .lawrj-review-quote {
          color: #334155;
          font-size: 15px;
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 24px;
        }
        .lawrj-client-name {
          font-size: 17px;
          font-weight: 700;
          color: #0B1B3D;
          margin-bottom: 2px;
        }
        .lawrj-client-role {
          font-size: 13px;
          color: #64748B;
          margin-bottom: 4px;
        }
        .lawrj-round-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          font-size: 12px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 4px;
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center">
              <div className="section-sub-title center-title">
                <span>FOUNDER TESTIMONIALS</span>
              </div>
              <h2 className="title" data-aos="fade-up">
                What Global Founders Say About LawRJ
              </h2>
              <p style={{ maxWidth: 600, margin: '0 auto', color: '#64748B', fontSize: 16 }}>
                Entrepreneurs across the US, UK, Canada, Australia, and Singapore who scaled their corporate and fundraising infrastructure with LawRJ.
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
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx}>
                  <div className="lawrj-testimonial-card">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span style={{ fontSize: '28px' }}>{t.flag}</span>
                        <div className="lawrj-round-badge">
                          <i className="fa-solid fa-check"></i> {t.round}
                        </div>
                      </div>
                      <p className="lawrj-review-quote">
                        "{t.review}"
                      </p>
                    </div>

                    <div className="pt-3" style={{ borderTop: '1px solid #E2E8F0' }}>
                      <div className="lawrj-client-name">{t.name}</div>
                      <div className="lawrj-client-role">{t.role}</div>
                      <div style={{ fontSize: '12px', color: '#A9801A', fontWeight: '600' }}>
                        <i className="fa-solid fa-location-dot me-1"></i> {t.location}
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
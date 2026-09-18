"use client";
import { useState } from 'react';

const faqs = [
  {
    q: "Why do startups choose LawRJ over traditional local law firms?",
    a: "Traditional domestic law firms are strictly limited by national borders—if you want to incorporate in Delaware, raise in London, and hold IP in Singapore, you typically have to hire three separate expensive law firms that don't communicate with each other. LawRJ provides unified, full-lifecycle venture legal architecture from Idea to IPO across the US, UK, Canada, Australia, and Singapore, backed by verified local business registrations and direct corporate banking setups."
  },
  {
    q: "How does LawRJ comply with international legal practice and the Advocates Act?",
    a: "LawRJ operates strictly as an international corporate structuring, cross-border commercial contracting, regulatory compliance, and venture transaction consultancy. We do not engage in domestic court litigation or court appearance advocacy. By focusing on non-contentious commercial agreements, institutional fundraising instruments (YC SAFEs, KISS, Series A), and corporate governance, our consultancy operates in full compliance with Indian and international professional regulations."
  },
  {
    q: "Can LawRJ assist in opening local corporate bank accounts in the US, UK, or Singapore?",
    a: "Yes. One of our key competitive advantages is our direct local business presence and established corporate banking relationships in the US (Mercury, Brex, Silicon Valley Bank equivalents), UK (Barclays, Wise Business), and Singapore (DBS, OCBC). We ensure your foreign entity gets verified and operating bank accounts without travel hurdles."
  },
  {
    q: "What is a 'Delaware Flip' or 'Singapore HoldCo', and when should a founder execute one?",
    a: "A 'flip' is an international corporate restructuring where the operating company becomes a wholly owned subsidiary of a newly formed holding company in investor-friendly jurisdictions like Delaware (US) or Singapore. Top-tier US and global venture capital funds (like Y-Combinator, Sequoia, a16z) often mandate a Delaware C-Corp or Singapore Pte Ltd before wiring capital. We handle the share swaps, IP transfers, founder vesting, and regulatory clearances seamlessly."
  },
  {
    q: "Can you draft custom Master Services Agreements (MSA) and DPAs for our B2B SaaS?",
    a: "Yes. Enterprise customers in the US, Europe, and Asia have strict compliance demands regarding data protection, intellectual property indemnities, and service levels. We draft custom, sales-enabling MSAs, SLAs, and Data Processing Addendums that satisfy GDPR, CCPA, and Singapore PDPA requirements, helping your sales team close deals faster."
  },
  {
    q: "How do you handle International ESOPs for distributed engineering and sales teams?",
    a: "Rewarding global talent with stock options requires careful cross-border planning to avoid accidental tax traps for employees in different countries. We structure global Employee Stock Option Plans (ESOP) and phantom stock / RSU programs tailored to local tax rules in the US, UK, Canada, Australia, and Asia."
  }
];

function FaqOne() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-area tmp-section-gap" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <div className="section-head text-align-left" data-aos="fade-up">
              <div className="section-sub-title">
                <span>FOUNDER INTELLIGENCE</span>
              </div>
              <h2 className="title" style={{ fontFamily: 'Georgia, serif', color: '#0B1B3D' }}>
                Cross-Border Legal & Regulatory FAQs
              </h2>
              <p style={{ color: '#64748B', fontSize: '15px', lineHeight: '1.8', marginTop: '16px' }}>
                Clear answers for founders navigating international entity formation, VC term sheets, cross-border banking, and commercial compliance.
              </p>

              <div className="d-flex flex-column gap-3 mt-4">
                <div className="p-3" style={{ background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '18px' }}></i>
                    <span style={{ fontWeight: '700', color: '#0B1B3D', fontSize: '14px' }}>Founder WhatsApp Direct</span>
                  </div>
                  <a href="https://wa.me/919327000022" style={{ color: '#0B1B3D', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }} target="_blank" rel="noopener noreferrer">
                    +91 93270 00022
                  </a>
                </div>

                <div className="p-3" style={{ background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <i className="fa-regular fa-envelope" style={{ color: '#D4AF37', fontSize: '18px' }}></i>
                    <span style={{ fontWeight: '700', color: '#0B1B3D', fontSize: '14px' }}>Confidential Advisory Inbox</span>
                  </div>
                  <a href="mailto:i@lawrj.com" style={{ color: '#0B1B3D', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
                    i@lawrj.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="accordion" id="lawrjGlobalFaq">
              {faqs.map((item, idx) => (
                <div key={idx} className="accordion-item" style={{
                  border: '1px solid #E2E8F0',
                  marginBottom: '12px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: openIndex === idx ? '#F8FAFC' : '#ffffff',
                }}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${openIndex !== idx ? 'collapsed' : ''}`}
                      type="button"
                      onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                      style={{
                        background: openIndex === idx ? '#0B1B3D' : '#ffffff',
                        color: openIndex === idx ? '#ffffff' : '#0B1B3D',
                        fontWeight: '700',
                        fontSize: '15px',
                        padding: '18px 24px',
                        border: 'none',
                        boxShadow: 'none',
                      }}
                    >
                      {item.q}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openIndex === idx ? 'show' : ''}`}>
                    <div className="accordion-body" style={{ padding: '20px 24px', color: '#475569', lineHeight: '1.8', fontSize: '14.5px' }}>
                      {item.a}
                    </div>
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

export default FaqOne;
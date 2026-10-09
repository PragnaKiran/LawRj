import Header from "@/components/header/HeaderOne"
import AboutOne from "@/components/about/AboutOne"
import FunfactsOne from "@/components/funfacts/FunfactsOne"
import TestimonialsOne from "@/components/testimonials/TestimonialsOne"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"
import Image from "next/image"

export const metadata = {
  title: "About LawRJ | Global Venture Architecture & Regulatory Advisory",
  description: "Learn how LawRJ advises high-growth technology startups and venture-backed founders scaling across the United States, United Kingdom, Singapore, Australia, and Canada.",
};

function AboutPage() {
  return (
    <div className="index-one">
      <Header />
      <div style={{
        paddingTop: 160,
        background: 'linear-gradient(135deg, #071126 0%, #0B1B3D 70%, #162E66 100%)',
        textAlign: 'center',
        paddingBottom: 70,
        color: '#ffffff'
      }}>
        <div className="container">
          <span style={{ color: '#F3C644', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
            CROSS-BORDER PRACTICE
          </span>
          <h1 style={{ color: 'white', fontSize: 44, fontWeight: 800, marginTop: 12, fontFamily: 'Georgia, serif' }}>
            Engineering Global Venture Architecture
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, marginTop: 12, maxWidth: 650, margin: '12px auto 0' }}>
            Empowering tech founders to build, finance, and expand across the world’s premier English-speaking venture ecosystems.
          </p>
        </div>
      </div>

      <AboutOne />

      {/* Media & Global Practice Showcase */}
      <section className="py-5" style={{ background: '#F8FAFC' }} aria-labelledby="showcase-heading">
        <div className="container">
          <h2 id="showcase-heading" className="visually-hidden">Global Venture Practice Engagements</h2>
          <div className="row g-4 align-items-center">
            {/* Primary Exclusive Featured Visual */}
            <div className="col-lg-6">
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 35px rgba(11,27,61,0.08)', position: 'relative', height: '340px' }}>
                <Image
                  src="/assets/images/editorial/practice-boardroom.jpg"
                  alt="Venture Boardroom Advisory & Institutional Governance"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7, 17, 38, 0.88) 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', color: '#fff' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#F3C644', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Institutional Governance
                  </span>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginTop: '2px' }}>
                    Venture Boardroom Advisory & Cap Table Stewardship
                  </div>
                  <span style={{ fontSize: '12px', color: '#cbd5e1', display: 'block', marginTop: '4px' }}>
                    Delaware, London, Singapore, Sydney & Toronto Cross-Border Standards
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Practice Capability Pillars */}
            <div className="col-lg-6">
              <div className="d-flex flex-column gap-3">
                <div className="p-4 rounded-4" style={{ background: '#ffffff', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '18px' }}>
                      <i className="fa-solid fa-scale-balanced"></i>
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '16px', color: '#0B1B3D', fontWeight: '700' }}>
                        Cross-Border Transactions & Capital Architecture
                      </h3>
                      <span style={{ fontSize: '12px', color: '#A9801A', fontWeight: '600' }}>SAFE Notes, Equity Rounds & Flip Transactions</span>
                    </div>
                  </div>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#64748B', lineHeight: '1.6' }}>
                    We structure dilutive-proof financing instruments and cross-border holding architectures that satisfy institutional due diligence across tier-1 Silicon Valley and European venture syndicates.
                  </p>
                </div>

                <div className="p-4 rounded-4" style={{ background: '#ffffff', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '18px' }}>
                      <i className="fa-solid fa-globe"></i>
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '16px', color: '#0B1B3D', fontWeight: '700' }}>
                        Bilateral Tech Bridge & Engineering GCCs
                      </h3>
                      <span style={{ fontSize: '12px', color: '#A9801A', fontWeight: '600' }}>RBI FEMA Inflows & IP Shielding</span>
                    </div>
                  </div>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#64748B', lineHeight: '1.6' }}>
                    We eliminate cross-border friction for Western technology companies setting up wholly-owned Global Capability Centers in India, ensuring strict transfer pricing and IP security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FunfactsOne />
      <TestimonialsOne />
      <FooterOne />
      <BackTop />
    </div>
  )
}

export default AboutPage;
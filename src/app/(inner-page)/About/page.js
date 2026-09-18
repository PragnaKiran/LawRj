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
      <section className="py-5" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4">
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', position: 'relative', height: '280px' }}>
                <Image src="/assets/images/about/about-5.jpg" alt="Venture Boardroom Advisory" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', background: 'rgba(7,17,38,0.85)', backdropFilter: 'blur(10px)', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#F3C644' }}>Venture Boardroom Advisory</span>
                  <span style={{ fontSize: '11px', color: '#cbd5e1', display: 'block' }}>Delaware & London Institutional Standards</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', position: 'relative', height: '280px' }}>
                <Image src="/assets/images/about/about-4.jpg" alt="Cross-Border Commercial Transactions" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', background: 'rgba(7,17,38,0.85)', backdropFilter: 'blur(10px)', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#F3C644' }}>Cross-Border Transactions</span>
                  <span style={{ fontSize: '11px', color: '#cbd5e1', display: 'block' }}>SAFE, Equity & Holding Co Flips</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', position: 'relative', height: '280px' }}>
                <Image src="/assets/images/about/about-1.jpg" alt="Founder & Counsel Working Session" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', background: 'rgba(7,17,38,0.85)', backdropFilter: 'blur(10px)', padding: '12px', borderRadius: '8px', color: '#fff' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#F3C644' }}>Founder-First Alignment</span>
                  <span style={{ fontSize: '11px', color: '#cbd5e1', display: 'block' }}>Unified Global Strategy Across 5 Hubs</span>
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
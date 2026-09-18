import Header from "@/components/header/HeaderOne"
import ServiceOne from "@/components/service/ServiceOne"
import ProcessOne from "@/components/workingprocess/ProcessOne"
import FunfactsOne from "@/components/funfacts/FunfactsOne"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"

export const metadata = {
  title: "Idea to IPO Services | LawRJ Global Startup Advisory",
  description: "Explore LawRJ's complete venture legal architecture — Inception, SAFE Financing, Commercial Tech Contracts, Cross-Border Banking, ESOPs, and Pre-IPO Exits.",
};

function ServicesPage() {
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
            IDEA TO IPO FRAMEWORK
          </span>
          <h1 style={{ color: 'white', fontSize: 44, fontWeight: 800, marginTop: 12, fontFamily: 'Georgia, serif' }}>
            Cross-Border Legal & Regulatory Architecture
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, marginTop: 12, maxWidth: 650, margin: '12px auto 0' }}>
            A unified venture counsel solution for technology companies scaling across the US, UK, Canada, Australia, and Singapore.
          </p>
        </div>
      </div>
      <ServiceOne />
      <ProcessOne />
      <FunfactsOne />
      <FooterOne />
      <BackTop />
    </div>
  )
}

export default ServicesPage
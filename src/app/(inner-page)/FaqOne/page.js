import Header from "@/components/header/HeaderOne"
import FaqOne from "@/components/faq/FaqOne"
import ContactOne from "@/components/contact/ContactOne"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"

export const metadata = {
  title: "Cross-Border Startup FAQs | LawRJ Global Advisory",
  description: "Frequently asked questions regarding international entity formation, Delaware flips, Singapore holding companies, YC SAFEs, and cross-border bank accounts.",
};

function FaqPage() {
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
            FOUNDER INTELLIGENCE
          </span>
          <h1 style={{ color: 'white', fontSize: 44, fontWeight: 800, marginTop: 12, fontFamily: 'Georgia, serif' }}>
            Cross-Border Legal & Regulatory FAQs
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, marginTop: 12, maxWidth: 650, margin: '12px auto 0' }}>
            Key insights for technology founders expanding and raising across the US, UK, Canada, Australia, and Singapore.
          </p>
        </div>
      </div>
      <FaqOne />
      <ContactOne />
      <FooterOne />
      <BackTop />
    </div>
  )
}

export default FaqPage
import Header from "@/components/header/HeaderOne"
import ContactOne from "@/components/contact/ContactOne"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"

export const metadata = {
  title: "Contact LawRJ | Global Startup Legal & Regulatory Counsel",
  description: "Schedule your confidential venture strategy session with LawRJ. Advisory across US, UK, Singapore, Australia, and Canadian startup ecosystems.",
};

function ContactPage() {
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
            GLOBAL VENTURE INTAKE
          </span>
          <h1 style={{ color: 'white', fontSize: 44, fontWeight: 800, marginTop: 12, fontFamily: 'Georgia, serif' }}>
            Schedule Founder Strategy Briefing
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, marginTop: 12, maxWidth: 650, margin: '12px auto 0' }}>
            Connect directly with our cross-border venture leads for entity setup, SAFE rounds, and corporate banking.
          </p>
        </div>
      </div>
      <ContactOne />
      <FooterOne />
      <BackTop />
    </div>
  )
}

export default ContactPage
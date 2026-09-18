import Header from "@/components/header/HeaderOne"
import TeamOne from "@/components/team/TeamOne"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"

export const metadata = {
  title: "Our Team | LawRj Consultancy Gujarat",
  description: "Meet LawRj's expert legal consultants serving all 33 districts of Gujarat — specializing in documentation, compliance, RTI, and consumer rights.",
};

function TeamPage() {
  return (
    <div className="index-one">
      <Header />
      <div style={{ paddingTop: 140, background: 'linear-gradient(135deg, #1a2b5e 0%, #0d1a3a 100%)', textAlign: 'center', paddingBottom: 60 }}>
        <span style={{ color: '#e8901a', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' }}>Our Team</span>
        <h1 style={{ color: 'white', fontSize: 40, fontWeight: 800, marginTop: 10 }}>Meet Our Expert Consultants</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginTop: 10 }}>Experienced professionals dedicated to Gujarat's citizens and businesses</p>
      </div>
      <TeamOne />
      <FooterOne />
      <BackTop />
    </div>
  )
}

export default TeamPage
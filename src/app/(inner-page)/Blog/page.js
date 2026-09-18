import Header from "@/components/header/HeaderOne"
import Blog from "@/components/blog/Blog"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"

export const metadata = {
  title: "Legal Articles & Tips | LawRj Consultancy Gujarat",
  description: "Free legal tips, guides, and articles for Gujarat citizens and businesses — RTI, consumer rights, MSME registration, compliance, and more.",
};

function BlogPage() {
  return (
    <div className="index-one">
      <Header />
      <div style={{ paddingTop: 140, background: 'linear-gradient(135deg, #1a2b5e 0%, #0d1a3a 100%)', textAlign: 'center', paddingBottom: 60 }}>
        <span style={{ color: '#e8901a', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' }}>Legal Insights</span>
        <h1 style={{ color: 'white', fontSize: 40, fontWeight: 800, marginTop: 10 }}>Gujarat Legal Tips & Guides</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginTop: 10 }}>Free legal knowledge for every Gujarat citizen and business</p>
      </div>
      <Blog />
      <FooterOne />
      <BackTop />
    </div>
  )
}

export default BlogPage
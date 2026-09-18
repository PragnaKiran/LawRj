"use client";
import Link from 'next/link';

const posts = [
  {
    slug: "rti-right-to-information-gujarat",
    date: "Sep 10, 2026",
    category: "Citizen Rights",
    title: "Understanding RTI: Your Right to Information in Gujarat",
    excerpt: "The Right to Information Act 2005 empowers every citizen to seek information from government bodies. Learn how to effectively file RTI applications for Gujarat state departments and Central government offices.",
    readTime: "5 min read",
    color: "#1a2b5e",
  },
  {
    slug: "msme-registration-gujarat-businesses",
    date: "Sep 5, 2026",
    category: "Business",
    title: "MSME Registration Made Simple for Gujarat Businesses",
    excerpt: "Udyam (MSME) registration opens doors to government schemes, priority lending, and tax benefits. Here's a complete step-by-step guide for small and medium businesses across Gujarat.",
    readTime: "7 min read",
    color: "#e8901a",
  },
  {
    slug: "consumer-protection-law-gujarat",
    date: "Aug 28, 2026",
    category: "Consumer Rights",
    title: "How Consumer Protection Law Protects You in Gujarat",
    excerpt: "The Consumer Protection Act 2019 provides strong remedies against unfair trade practices. Discover how Gujarat's district consumer forums can help you get justice — without needing an advocate.",
    readTime: "6 min read",
    color: "#1a2b5e",
  },
];

function Blog() {
  return (
    <div>
      <style>{`
        .lawrj-blog-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(26,43,94,0.07);
          border: 1px solid rgba(26,43,94,0.06);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .lawrj-blog-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(26,43,94,0.12); }
        .lawrj-blog-banner {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .lawrj-blog-banner .category-badge {
          position: absolute;
          top: 16px; left: 16px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .lawrj-blog-body { padding: 24px; flex: 1; display: flex; flex-direction: column; }
        .lawrj-blog-body .meta { font-size: 12px; color: #bbb; margin-bottom: 10px; display: flex; gap: 12px; }
        .lawrj-blog-body h5 { font-size: 17px; font-weight: 700; color: #1a2b5e; line-height: 1.4; margin-bottom: 12px; }
        .lawrj-blog-body p { font-size: 14px; color: #666; line-height: 1.7; flex: 1; }
        .lawrj-blog-body .read-more { display: inline-flex; align-items: center; gap: 6px; color: #e8901a; font-weight: 600; font-size: 13px; text-decoration: none; margin-top: 16px; }
        .lawrj-blog-body .read-more:hover { gap: 10px; }
      `}</style>

      <div className="blog-area tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb--40">
              <div className="section-sub-title center-title"><span>LEGAL INSIGHTS</span></div>
              <h2 className="title" data-aos="fade-up">Gujarat Legal Tips & Guides</h2>
              <p style={{ color: '#666', fontSize: 15, maxWidth: 500, margin: '0 auto' }}>
                Free legal knowledge to help citizens and businesses across Gujarat understand their rights and responsibilities.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {posts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="lawrj-blog-card">
                  <div className="lawrj-blog-banner" style={{ background: `linear-gradient(135deg, ${post.color} 0%, ${post.color}aa 100%)` }}>
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" opacity="0.2">
                      <rect x="10" y="10" width="100" height="60" rx="8" fill="white"/>
                      <rect x="20" y="22" width="60" height="4" rx="2" fill="white"/>
                      <rect x="20" y="32" width="80" height="3" rx="2" fill="white"/>
                      <rect x="20" y="42" width="70" height="3" rx="2" fill="white"/>
                      <rect x="20" y="52" width="50" height="3" rx="2" fill="white"/>
                    </svg>
                    <div className="category-badge">{post.category}</div>
                  </div>
                  <div className="lawrj-blog-body">
                    <div className="meta">
                      <span><i className="fa-regular fa-calendar" style={{ marginRight: 4 }} />{post.date}</span>
                      <span><i className="fa-regular fa-clock" style={{ marginRight: 4 }} />{post.readTime}</span>
                    </div>
                    <h5>{post.title}</h5>
                    <p>{post.excerpt}</p>
                    <Link href={`/BlogDetails`} className="read-more">
                      Read Full Article <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt--40">
            <div className="col-12 text-center">
              <Link href="/Blog" className="tmp-btn btn-primary">View All Articles</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
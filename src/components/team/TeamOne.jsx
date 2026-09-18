"use client";
import Link from 'next/link';

const team = [
  {
    name: "Rajesh Patel",
    title: "Senior Legal Consultant",
    speciality: "Business Law & GST",
    city: "Ahmedabad",
    initials: "RP",
    color: "#1a2b5e",
    experience: "12 Years",
  },
  {
    name: "Priya Shah",
    title: "Documentation Expert",
    speciality: "Property & Will Drafting",
    city: "Surat",
    initials: "PS",
    color: "#e8901a",
    experience: "8 Years",
  },
  {
    name: "Mitesh Desai",
    title: "Compliance Advisor",
    speciality: "Labour & FSSAI Compliance",
    city: "Vadodara",
    initials: "MD",
    color: "#1a2b5e",
    experience: "10 Years",
  },
  {
    name: "Kavita Joshi",
    title: "RTI & Consumer Specialist",
    speciality: "RTI & Consumer Rights",
    city: "Rajkot",
    initials: "KJ",
    color: "#e8901a",
    experience: "6 Years",
  },
];

function TeamOne() {
  return (
    <div>
      <style>{`
        .lawrj-team-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(26,43,94,0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(26,43,94,0.06);
        }
        .lawrj-team-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(26,43,94,0.15); }
        .lawrj-team-avatar {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 64px;
          font-weight: 800;
          color: white;
          font-family: Georgia, serif;
          position: relative;
        }
        .lawrj-team-avatar .exp-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 20px;
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 600;
          color: white;
        }
        .lawrj-team-body { padding: 24px; }
        .lawrj-team-body h5 { font-size: 18px; font-weight: 700; color: #1a2b5e; margin: 0 0 4px; }
        .lawrj-team-body .title { font-size: 13px; color: #e8901a; font-weight: 600; margin: 0 0 6px; }
        .lawrj-team-body .speciality { font-size: 13px; color: #777; margin: 0 0 12px; }
        .lawrj-team-body .city { font-size: 12px; color: #aaa; display: flex; align-items: center; gap: 5px; }
        .lawrj-team-socials { padding: 0 24px 20px; display: flex; gap: 10px; }
        .lawrj-team-socials a {
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(26,43,94,0.06);
          display: flex; align-items: center; justify-content: center;
          color: #1a2b5e; font-size: 13px; text-decoration: none;
          transition: all 0.2s;
        }
        .lawrj-team-socials a:hover { background: #1a2b5e; color: white; }
      `}</style>

      <div className="tmp-team-area tmp-section-gap" style={{ background: '#f8f9ff' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head text-center">
                <div className="section-sub-title center-title">
                  <span>OUR TEAM</span>
                </div>
                <h2 className="title" data-aos="fade-up" data-aos-delay="100">
                  Meet Our Expert Consultants
                </h2>
                <p style={{ maxWidth: 550, margin: '0 auto', color: '#666', fontSize: 15 }}>
                  Experienced professionals across Gujarat dedicated to delivering accurate, accessible, and affordable legal consultancy services.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 mt--20">
            {team.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="lawrj-team-card">
                  <div className="lawrj-team-avatar" style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}cc 100%)` }}>
                    {member.initials}
                    <div className="exp-badge">{member.experience}</div>
                  </div>
                  <div className="lawrj-team-body">
                    <h5>{member.name}</h5>
                    <p className="title">{member.title}</p>
                    <p className="speciality">{member.speciality}</p>
                    <p className="city"><i className="fa-solid fa-location-dot" style={{ color: '#e8901a' }} /> {member.city}, Gujarat</p>
                  </div>
                  <div className="lawrj-team-socials">
                    <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
                    <a href="https://wa.me/917990000000"><i className="fa-brands fa-whatsapp" /></a>
                    <a href="mailto:info@lawrj.in"><i className="fa-regular fa-envelope" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt--40">
            <div className="col-12 text-center">
              <Link href="/TeamOne" className="tmp-btn btn-primary">View Full Team</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamOne;
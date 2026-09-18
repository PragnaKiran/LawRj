"use client";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { num: 5, suffix: " Hubs", label: "Premier Jurisdictions", sub: "US, UK, SG, AU & CA Local Registrations", icon: "fa-solid fa-earth-americas" },
  { num: 100, suffix: "+", label: "Venture Financing Deals", sub: "SAFEs, Seed & Series A Rounds Structuring", icon: "fa-solid fa-file-invoice-dollar" },
  { num: 100, suffix: "%", label: "Local Banking Success", sub: "Mercury, Brex, DBS & Barclays Bank Setup", icon: "fa-solid fa-building-columns" },
  { num: 150, suffix: "M+", label: "Venture Deal Volume ($)", sub: "Handled Across Cross-Border Startup Ecosystems", icon: "fa-solid fa-chart-line" },
];

function FunfactsOne() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="tmp-funfacts-area tmp-section-gap" style={{
      background: 'linear-gradient(135deg, #071126 0%, #0B1B3D 60%, #08142c 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 40%)",
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <span style={{ color: '#F3C644', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
              GLOBAL PROVEN TRACK RECORD
            </span>
            <h2 style={{ color: '#ffffff', fontSize: '38px', fontWeight: '800', marginTop: '10px', fontFamily: 'Georgia, serif' }}>
              Trusted by Ambitious Tech Founders Worldwide
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '10px auto 0', fontSize: '16px' }}>
              We have supported startup clients securing winning corporate setups and investor rounds across the US, UK, Canada, Australia, and Singapore.
            </p>
          </div>
        </div>

        <div className="row g-4" ref={ref}>
          {stats.map((stat, idx) => (
            <div key={idx} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={idx * 150}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: '16px',
                padding: '36px 24px',
                textAlign: 'center',
                backdropFilter: 'blur(12px)',
                height: '100%',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '22px',
                  color: '#F3C644',
                }}>
                  <i className={stat.icon} />
                </div>
                <div style={{ fontSize: '42px', fontWeight: '800', color: '#ffffff', fontFamily: 'Georgia, serif', lineHeight: 1 }}>
                  {inView ? (
                    <CountUp end={stat.num} duration={2.5} separator="," />
                  ) : '0'}
                  <span style={{ color: '#F3C644' }}>{stat.suffix}</span>
                </div>
                <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '16px', marginTop: '12px' }}>
                  {stat.label}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '13px', marginTop: '6px', lineHeight: '1.5' }}>
                  {stat.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FunfactsOne;

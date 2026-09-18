"use client";
import Header from "@/components/header/HeaderOne"
import Link from "next/link";
import ContactOne from "@/components/contact/ContactOne"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const serviceData = {
  inception: {
    stage: "VENTURE FORMATION",
    title: "Entity Incorporation & Founder Equity",
    subtitle: "US, UK, SG, AU & CA Entity Setup & Vesting Schedules",
    image: "/assets/images/banner/construction-01.jpg",
    description: "Launch your venture on institutional foundations. We incorporate Delaware C-Corps, UK Private Limiteds, Singapore Pte Ltds, and Australian Pty Ltds. We architect founder equity vesting, IP assignments, 83(b) elections, and cap-table structuring tailored for top global accelerators (YC, Techstars) and angel syndicates.",
    deliverables: [
      "Delaware C-Corp, UK Ltd or Singapore Pte Ltd Registration",
      "Founder Restricted Stock Purchase Agreements (Vesting Schedules)",
      "Confidential Information & Inventions Assignment (CIIA / IP Assignment)",
      "IRS Employer Identification Number (EIN) / UK UTR / SG UEN",
      "Section 83(b) Tax Election Drafting & US IRS Filing Guidance",
      "Initial Board of Directors Consents & Corporate Bylaws",
      "Cap Table Waterfall & Share Issuance Registers",
      "Registered Agent & Local Corporate Secretarial Coordination"
    ],
    timeline: "2 to 5 business days",
  },
  financing: {
    stage: "VENTURE FINANCING",
    title: "Seed & Venture Capital Financing",
    subtitle: "SAFE Notes, KISS Agreements & Priced Equity Rounds",
    image: "/assets/images/banner/startup-1.jpg",
    description: "Structure, draft, and negotiate venture capital financing rounds without dilutive traps. We handle Y-Combinator Post-Money SAFEs (with Valuation Caps and MFN provisions), 500-Startups KISS notes, Convertible Promissory Notes, and institutional Series Seed / Series A documentation.",
    deliverables: [
      "Y-Combinator Standard Post-Money SAFE Note Drafting",
      "500-Startups KISS (Keep It Simple Security) Structuring",
      "Investor Side Letters (Pro-rata rights, Information rights)",
      "Cap Table Dilution & Scenario Modeling",
      "Accredited Investor Representations & Warranties Review",
      "Priced Series Seed / Series A Term Sheet Advisory",
      "Investor Due Diligence Clean-Up & Review",
      "Board & Shareholder Consents for Capital Expansion"
    ],
    timeline: "3 to 7 business days",
  },
  contracts: {
    stage: "COMMERCIAL ARCHITECTURE",
    title: "Commercial SaaS & Tech Architecture",
    subtitle: "Enterprise Contracts, MSAs, SLAs & Global DPAs",
    image: "/assets/images/banner/construction-02.jpg",
    description: "Equip your software and technology products with enterprise-ready commercial contracts that close sales. We build robust Master Services Agreements (MSA), Data Processing Addendums (DPA) compliant with GDPR, CCPA, and Singapore PDPA, Service Level Agreements (SLA), and acceptable use policies.",
    deliverables: [
      "B2B Enterprise Master Services Agreement (MSA)",
      "Global Data Processing Addendum (GDPR, CCPA & PDPA Compliant)",
      "Enterprise Service Level Agreement (SLA with Uptime Guarantees)",
      "Terms of Service (ToS) & Privacy Policy for Web & Mobile",
      "API Licensing & Data Partnership Agreements",
      "Channel Partner & Reseller Commercial Agreements",
      "Customer Procurement & Legal Redline Negotiation Support",
      "Vendor & Third-Party Tech Integration Agreements"
    ],
    timeline: "48 to 96 hours",
  },
  banking: {
    stage: "CROSS-BORDER OPERATIONS",
    title: "Cross-Border Structuring & Local Corporate Banking",
    subtitle: "Local Business Registrations & Direct Bank Accounts",
    image: "/assets/images/banner/construction-03.jpg",
    description: "Overcome international banking friction. Leveraging our verified corporate presence and established networks, we facilitate local corporate bank accounts in the US (Mercury, Brex), UK (Barclays, Wise Business), Singapore (DBS, OCBC), and Australia (CommBank). We also draft intercompany transfer pricing agreements and foreign subsidiary governance.",
    deliverables: [
      "Direct Corporate Bank Account Opening (US, UK, SG, AU, CA)",
      "Fintech Banking Stack Setup (Mercury, Brex, Wise, Stripe)",
      "Intercompany Transfer Pricing & Cost-Plus Agreements",
      "Cross-Border Technology IP Licensing Framework",
      "Overseas Direct Investment (ODI) / FDI Compliance Roadmaps",
      "Foreign Subsidiary & Branch Office Registrations",
      "International Merchant Processing (Stripe/Adyen) Structuring",
      "Corporate Treasury & Multi-Currency Flow Guidance"
    ],
    timeline: "5 to 10 business days",
  },
  esop: {
    stage: "TALENT & IP SHIELD",
    title: "Global Talent, ESOPs & IP Protection",
    subtitle: "International Stock Options & Global Team Shielding",
    image: "/assets/images/about/about-2.jpg",
    description: "Attract and retain world-class engineering, product, and sales talent across borders. We structure multi-jurisdiction Employee Stock Option Plans (ESOP) and Phantom Stock / RSU programs, contractor-to-employee compliance shielding (EOR integration), and ironclad non-compete/non-solicit assignments.",
    deliverables: [
      "Comprehensive Global Employee Stock Option Plan (ESOP)",
      "Option Grant Agreements & Exercise Notice Documentation",
      "International Contractor Agreements & IP Assignment Safeguards",
      "Employer of Record (EOR) Review (Deel, Remote, Oyster)",
      "Employee Proprietary Information & Inventions Agreements",
      "Non-Solicitation & Trade Secret Shielding",
      "Phantom Stock & Synthetic Equity Schemes for Global Hires",
      "ESOP Cap Table Pool Allocation & Vesting Tracking"
    ],
    timeline: "3 to 5 business days",
  },
  preipo: {
    stage: "GOVERNANCE & LIQUIDITY",
    title: "M&A, Governance & Pre-IPO Readiness",
    subtitle: "Strategic Liquidity, Secondary Sales & Exit Architecture",
    image: "/assets/images/banner/construction-04.jpg",
    description: "Prepare your enterprise for transformative liquidity. We conduct full virtual data room sanitization, audit corporate governance records, structure secondary share sales, and advise founders through strategic acquisition term sheets, acqui-hires, and dual-listing IPO pathways.",
    deliverables: [
      "Virtual Data Room (VDR) Structuring & Sanitization",
      "M&A Asset & Stock Purchase Agreement (APA / SPA) Review",
      "Founder Secondary Share Sale Documentation",
      "Strategic Acqui-hire Employment Transitions",
      "Board of Directors Governance Charters & Committee Mandates",
      "Material Contracts Audit & Change of Control Clause Analysis",
      "Pre-IPO Corporate Governance & Disclosure Frameworks",
      "Cross-Border Dual Listing Advisory"
    ],
    timeline: "Custom Venture Engagement",
  },
  "india-bridge": {
    stage: "INDIA MARKET CORRIDOR",
    title: "Western Startups Entering India (GCC & FDI)",
    subtitle: "Global Capability Centers, Inward Remittance & Indian Tech Hubs",
    image: "/assets/images/banner/startup-3.jpg",
    description: "Expand into India's booming digital market and engineering ecosystem with complete legal certainty. We incorporate wholly-owned Indian subsidiaries, structure Global Capability Centers (GCCs), navigate RBI foreign exchange (FEMA/FDI) approvals, and draft ironclad US-standard IP assignments for Indian tech talent.",
    deliverables: [
      "Indian Wholly-Owned Subsidiary / Private Ltd Incorporation",
      "FDI Compliance, RBI Reporting (FC-GPR) & Inward Capital Routing",
      "GCC Facility Structuring & Corporate Governance Setup",
      "US/UK-Standard Technology IP Assignment & Invention Agreements",
      "Employment Contracts, ESOP Allocation & Compliant Local Payroll",
      "Digital Personal Data Protection Act (DPDPA) Compliance Framework",
      "Transfer Pricing Documentation & Intercompany Services Agreements",
      "GST, Corporate PAN, TAN & Inward Remittance Certificates"
    ],
    timeline: "5 to 12 business days",
  },
  us: {
    stage: "MARKET DEEP DIVE",
    title: "🇺🇸 United States Market (Delaware C-Corp)",
    subtitle: "The Gold Standard for Global Venture Capital",
    image: "/assets/images/banner/04.jpg",
    description: "Delaware is the undisputed capital of venture-backed technology. We handle your complete Delaware C-Corp formation, IRS EIN procurement, Silicon Valley YC SAFEs, founder vesting with 83(b) tax elections, and Mercury/Brex US banking setup.",
    deliverables: [
      "Delaware C-Corp Articles of Incorporation & Expedited Filing",
      "IRS EIN Expedited Procurement for Foreign/US Founders",
      "Standard YC Post-Money SAFE Note Architecture",
      "US Corporate Bank Account Setup (Mercury / Brex / Silicon Valley)",
      "Foreign Qualification in California / New York (if applicable)",
      "Bylaws, Action of Incorporator & Founder Stock Issuance"
    ],
    timeline: "3 to 5 business days",
  },
  uk: {
    stage: "MARKET DEEP DIVE",
    title: "🇬🇧 United Kingdom Market (London Tech Ltd)",
    subtitle: "Europe's Leading Fintech & Venture Ecosystem",
    image: "/assets/images/banner/05.jpg",
    description: "London is the fintech and technology hub of Europe. We incorporate your UK Private Limited company, secure Companies House and HMRC tax credentials, and structure Advance Subscription Agreements (ASA) and SEIS/EIS investor qualification frameworks.",
    deliverables: [
      "UK Companies House Ltd Incorporation & Articles of Association",
      "HMRC Corporation Tax & VAT Registration",
      "UK Advance Subscription Agreements (ASA) for Angel Rounds",
      "UK Corporate Bank Account Opening (Barclays, Wise, Airwallex)",
      "Founder Service Agreements & IP Transfer Assignment",
      "UK Commercial SaaS & GDPR-Compliant Data Documentation"
    ],
    timeline: "2 to 4 business days",
  },
  sg: {
    stage: "MARKET DEEP DIVE",
    title: "🇸🇬 Singapore Market (ACRA Holding Co)",
    subtitle: "Gateway to Southeast Asia & Premier Asian HoldCo",
    image: "/assets/images/product/04.jpg",
    description: "Singapore provides tax efficiency, rock-solid common law governance, and an unmatched gateway to Southeast Asia. We establish ACRA Pte Ltd holding entities, implement Singapore VIMA venture financing contracts, and coordinate DBS/OCBC institutional corporate accounts.",
    deliverables: [
      "ACRA Singapore Pte Ltd Company Incorporation",
      "VIMA Model Venture Financing Term Sheets & Convertible Notes",
      "Corporate Secretarial & Nominee Director Coordination",
      "Singapore Corporate Bank Account (DBS / OCBC / Aspire)",
      "Regional Intellectual Property Holding Structure",
      "PDPA Data Protection Compliance Policy"
    ],
    timeline: "3 to 6 business days",
  },
  au: {
    stage: "MARKET DEEP DIVE",
    title: "🇦🇺 Australia Market (Sydney / Melbourne Pty Ltd)",
    subtitle: "Thriving Innovation Hub with R&D Tax Incentives",
    image: "/assets/images/product/05.jpg",
    description: "Australia boasts world-class technology talent and generous government R&D tax incentives. We incorporate ASIC Proprietary Limited (Pty Ltd) entities, handle Australian Business Numbers (ABN/TFN), structure employee share schemes (ESS), and set up corporate banking with CommBank.",
    deliverables: [
      "ASIC Australian Pty Ltd Company Registration",
      "ABN, ACN & TFN Corporate Tax Registrations",
      "Australian SAFE & Convertible Note Structuring",
      "Corporate Banking Opening (CommBank / NAB / Airwallex)",
      "Employee Share Scheme (ESS) for Australian Staff",
      "R&D Tax Incentive Legal Structuring"
    ],
    timeline: "3 to 5 business days",
  },
  ca: {
    stage: "MARKET DEEP DIVE",
    title: "🇨🇦 Canada Market (Federal & Provincial Tech Corp)",
    subtitle: "North American Tech Hub with SR&ED Benefits",
    image: "/assets/images/product/06.jpg",
    description: "Canada offers direct access to the North American market combined with lucrative SR&ED scientific research tax credits. We incorporate Federal or Provincial corporations (Ontario/BC), arrange Canadian corporate banking, and prepare enterprise SaaS contracts.",
    deliverables: [
      "Federal / Ontario / British Columbia Corporation Registration",
      "Canada Revenue Agency (CRA) Business Number & Tax Accounts",
      "Canadian SAFE & Convertible Debt Financing Notes",
      "Corporate Bank Account Setup (RBC / TD / BMO)",
      "SR&ED Tax Credit Intellectual Property Documentation",
      "PIPEDA Canadian Privacy Compliance Documentation"
    ],
    timeline: "3 to 6 business days",
  }
};

function ServiceDetailsContent() {
  const params = useSearchParams();
  const serviceKey = params.get('service') || 'inception';
  const item = serviceData[serviceKey] || serviceData.inception;

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
            {item.stage}
          </span>
          <h1 style={{ color: 'white', fontSize: 42, fontWeight: 800, marginTop: 12, fontFamily: 'Georgia, serif' }}>
            {item.title}
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: 17, marginTop: 12, maxWidth: 650, margin: '12px auto 0' }}>
            {item.subtitle}
          </p>
        </div>
      </div>

      <div className="tmp-section-gap" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              {/* Media Card */}
              <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 30, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', position: 'relative', height: '340px' }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(7,17,38,0.7) 100%)' }}></div>
              </div>

              <div style={{ background: 'white', borderRadius: 16, padding: '40px', boxShadow: '0 4px 24px rgba(11,27,61,0.06)', border: '1px solid #E2E8F0', marginBottom: 30 }}>
                <h3 style={{ color: '#0B1B3D', fontWeight: 700, marginBottom: 16, fontFamily: 'Georgia, serif' }}>
                  Strategic Scope & Purpose
                </h3>
                <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.8 }}>
                  {item.description}
                </p>
              </div>

              <div style={{ background: 'white', borderRadius: 16, padding: '40px', boxShadow: '0 4px 24px rgba(11,27,61,0.06)', border: '1px solid #E2E8F0' }}>
                <h3 style={{ color: '#0B1B3D', fontWeight: 700, marginBottom: 24, fontFamily: 'Georgia, serif' }}>
                  Key Documents & Deliverables
                </h3>
                <div className="row g-3">
                  {item.deliverables.map((d, i) => (
                    <div key={i} className="col-md-6">
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', background: '#F8FAFC', borderRadius: 10, border: '1px solid #E2E8F0', height: '100%' }}>
                        <i className="fa-solid fa-circle-check mt-1" style={{ color: '#D4AF37', fontSize: 16, flexShrink: 0 }} />
                        <span style={{ fontSize: 13.5, color: '#1E293B', fontWeight: 600, lineHeight: 1.5 }}>{d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regulatory Disclosure */}
              <div style={{ background: 'rgba(11, 27, 61, 0.04)', borderLeft: '4px solid #D4AF37', borderRadius: '0 12px 12px 0', padding: '20px 24px', marginTop: 30 }}>
                <p style={{ fontSize: 13, color: '#64748B', margin: 0, lineHeight: 1.7 }}>
                  <strong style={{ color: '#0B1B3D' }}>Compliance Transparency:</strong> LawRJ provides corporate legal architecture, venture capital documentation, international banking coordination, and commercial contracting consultancy. In full compliance with international legal practice regulations and the Advocates Act, LawRJ does not practice domestic litigation or court appearance advocacy.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div style={{
                background: 'linear-gradient(135deg, #071126 0%, #0B1B3D 100%)',
                borderRadius: 16,
                padding: '36px 28px',
                color: 'white',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
                marginBottom: 24
              }}>
                <h4 style={{ fontWeight: 700, color: '#F3C644', marginBottom: 20, fontSize: 18 }}>
                  Execution Timeline
                </h4>
                
                <div className="d-flex justify-content-between align-items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ color: '#94a3b8', fontSize: 14 }}>Turnaround Time</span>
                  <span style={{ fontWeight: 700, color: '#ffffff', fontSize: 15 }}>{item.timeline}</span>
                </div>

                <div className="d-flex justify-content-between align-items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ color: '#94a3b8', fontSize: 14 }}>Jurisdiction Scope</span>
                  <span style={{ fontWeight: 700, color: '#D4AF37', fontSize: 15 }}>US, UK, SG, AU, CA</span>
                </div>

                <div className="d-flex justify-content-between align-items-center py-3">
                  <span style={{ color: '#94a3b8', fontSize: 14 }}>Direct Contact</span>
                  <span style={{ fontWeight: 700, color: '#10b981', fontSize: 15 }}>+91 93270 00022</span>
                </div>

                <Link href="/Contact" className="tmp-btn btn-primary w-100 justify-content-center mt-4">
                  Schedule Strategy Call
                </Link>

                <a
                  href="https://wa.me/919327000022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center gap-2 mt-3 p-3 rounded text-decoration-none"
                  style={{ background: '#25D366', color: 'white', fontWeight: '700', fontSize: '14px' }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i>
                  WhatsApp Helpline
                </a>
              </div>

              {/* Navigation Menu for All Stages */}
              <div style={{ background: 'white', borderRadius: 16, padding: '28px', border: '1px solid #E2E8F0' }}>
                <h5 style={{ color: '#0B1B3D', fontWeight: 700, marginBottom: 18, fontSize: 16 }}>
                  Venture Services & Hubs
                </h5>
                <div className="d-flex flex-column gap-2">
                  <span style={{ fontSize: '11px', color: '#A9801A', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>Venture Services</span>
                  <Link href="/ServiceDetails?service=inception" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'inception' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'inception' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'inception' ? '700' : '500' }}>
                    Entity Formation & Founder Equity
                  </Link>
                  <Link href="/ServiceDetails?service=financing" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'financing' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'financing' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'financing' ? '700' : '500' }}>
                    Seed & VC SAFE Financing
                  </Link>
                  <Link href="/ServiceDetails?service=contracts" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'contracts' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'contracts' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'contracts' ? '700' : '500' }}>
                    Commercial SaaS & Tech Contracts
                  </Link>
                  <Link href="/ServiceDetails?service=banking" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'banking' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'banking' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'banking' ? '700' : '500' }}>
                    Cross-Border Banking & Tax
                  </Link>
                  <Link href="/ServiceDetails?service=esop" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'esop' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'esop' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'esop' ? '700' : '500' }}>
                    Global Talent, ESOP & IP
                  </Link>
                  <Link href="/ServiceDetails?service=preipo" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'preipo' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'preipo' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'preipo' ? '700' : '500' }}>
                    M&A Strategy & Pre-IPO
                  </Link>
                  <Link href="/ServiceDetails?service=india-bridge" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'india-bridge' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'india-bridge' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'india-bridge' ? '700' : '500' }}>
                    🇮🇳 India Entry & GCC Hubs
                  </Link>

                  <span style={{ fontSize: '11px', color: '#A9801A', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '14px' }}>Strategic Hubs</span>
                  <Link href="/ServiceDetails?service=us" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'us' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'us' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'us' ? '700' : '500' }}>
                    🇺🇸 United States (Delaware)
                  </Link>
                  <Link href="/ServiceDetails?service=uk" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'uk' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'uk' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'uk' ? '700' : '500' }}>
                    🇬🇧 United Kingdom (London)
                  </Link>
                  <Link href="/ServiceDetails?service=sg" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'sg' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'sg' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'sg' ? '700' : '500' }}>
                    🇸🇬 Singapore (Holding Co)
                  </Link>
                  <Link href="/ServiceDetails?service=au" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'au' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'au' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'au' ? '700' : '500' }}>
                    🇦🇺 Australia (Pty Ltd)
                  </Link>
                  <Link href="/ServiceDetails?service=ca" style={{ padding: '8px 12px', borderRadius: '6px', background: serviceKey === 'ca' ? '#0B1B3D' : '#F8FAFC', color: serviceKey === 'ca' ? '#fff' : '#334155', textDecoration: 'none', fontSize: '13px', fontWeight: serviceKey === 'ca' ? '700' : '500' }}>
                    🇨🇦 Canada (Tech Corp)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactOne />
      <FooterOne />
      <BackTop />
    </div>
  )
}

function ServiceDetailsPage() {
  return (
    <Suspense fallback={<div className="text-center p-5">Loading Venture Scope...</div>}>
      <ServiceDetailsContent />
    </Suspense>
  );
}

export default ServiceDetailsPage;
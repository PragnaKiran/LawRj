"use client";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

function ContactOne() {
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    phone: '',
    companyName: '',
    stage: 'Seed / SAFE Round',
    targetJurisdiction: 'United States (Delaware C-Corp)',
    details: '',
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY');
      setStatus('sent');
      setFormData({
        name: '',
        workEmail: '',
        phone: '',
        companyName: '',
        stage: 'Seed / SAFE Round',
        targetJurisdiction: 'United States (Delaware C-Corp)',
        details: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact-area tmp-section-gap" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className="section-sub-title center-title">
              <span>FOUNDER STRATEGY INTAKE</span>
            </div>
            <h2 className="title" style={{ fontFamily: 'Georgia, serif', color: '#0B1B3D' }}>
              Schedule Your Cross-Border Venture Briefing
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '650px', margin: '10px auto 0' }}>
              Directly consult with our international startup team on US/UK/SG entity incorporation, SAFE note documentation, local corporate banking, and cross-border commercial compliance.
            </p>
          </div>
        </div>

        <div className="row g-5">
          {/* Global Operations Card */}
          <div className="col-lg-5">
            <div style={{
              background: 'linear-gradient(135deg, #071126 0%, #0B1B3D 70%, #162E66 100%)',
              borderRadius: '20px',
              padding: '40px 36px',
              color: '#ffffff',
              height: '100%',
              boxShadow: '0 20px 50px rgba(11, 27, 61, 0.2)',
            }}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge" style={{ background: '#D4AF37', color: '#071126', fontWeight: '700', padding: '5px 12px' }}>
                  LAWRJ.COM
                </span>
                <span style={{ fontSize: '12px', color: '#cbd5e1' }}>GLOBAL DESK</span>
              </div>
              
              <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '800', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
                Multi-Jurisdictional Hubs
              </h3>
              
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', marginBottom: '28px' }}>
                We maintain active corporate registrations, operational presence, and trusted banking networks across the primary venture corridors.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F3C644', flexShrink: 0 }}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Confidential Direct Email</span>
                    <a href="mailto:i@lawrj.com" style={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}>
                      i@lawrj.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(37, 211, 102, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', flexShrink: 0 }}>
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Direct Founder Helpline (Voice / WhatsApp)</span>
                    <a href="https://wa.me/919327000022" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}>
                      +91 93270 00022
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F3C644', flexShrink: 0 }}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Operational Liaison & Admin HQ</span>
                    <p style={{ margin: 0, color: '#e2e8f0', fontSize: '13.5px', lineHeight: '1.6' }}>
                      404, Devkuvar 7, B/H Apollo International School, Tragad, Ahmedabad-382470, Gujarat
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <span style={{ fontSize: '12px', color: '#F3C644', fontWeight: '700', display: 'block', marginBottom: '4px' }}>
                  Target Startup Jurisdictions:
                </span>
                <span style={{ fontSize: '13px', color: '#cbd5e1' }}>
                  🇺🇸 USA (Delaware) • 🇬🇧 United Kingdom (London) • 🇸🇬 Singapore • 🇦🇺 Australia • 🇨🇦 Canada
                </span>
              </div>
            </div>
          </div>

          {/* Founder Intake Form */}
          <div className="col-lg-7">
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px 36px',
              boxShadow: '0 10px 40px rgba(11, 27, 61, 0.06)',
              border: '1px solid #E2E8F0',
            }}>
              <h4 style={{ color: '#0B1B3D', fontWeight: '800', marginBottom: '8px', fontFamily: 'Georgia, serif' }}>
                Startup Legal Intake Form
              </h4>
              <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '24px' }}>
                Share brief details about your venture stage and legal architecture requirements. All submissions are held under strict confidential privilege.
              </p>

              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '50px', marginBottom: '16px' }}>🚀</div>
                  <h4 style={{ color: '#0B1B3D', fontWeight: '700' }}>Inquiry Received Successfully</h4>
                  <p style={{ color: '#64748B', maxWidth: '450px', margin: '10px auto 0' }}>
                    Our international venture team will review your requirements and follow up within 4 hours. You can also message us directly on WhatsApp for immediate response.
                  </p>
                  <a href="https://wa.me/919327000022" className="tmp-btn btn-primary mt-4" target="_blank" rel="noopener noreferrer">
                    Open WhatsApp Fast-Track
                  </a>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Founder Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} required type="text" placeholder="e.g. Alex Morgan" style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', outline: 'none' }} />
                    </div>

                    <div className="col-md-6">
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Work Email *</label>
                      <input name="workEmail" value={formData.workEmail} onChange={handleChange} required type="email" placeholder="alex@venture.com" style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', outline: 'none' }} />
                    </div>

                    <div className="col-md-6">
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Company / Project Name</label>
                      <input name="companyName" value={formData.companyName} onChange={handleChange} type="text" placeholder="e.g. Nexus AI Labs" style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', outline: 'none' }} />
                    </div>

                    <div className="col-md-6">
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Direct Phone / WhatsApp *</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="+1 (415) ... or +44 ..." style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', outline: 'none' }} />
                    </div>

                    <div className="col-md-6">
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Venture Stage</label>
                      <select name="stage" value={formData.stage} onChange={handleChange} style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', outline: 'none', background: '#ffffff' }}>
                        <option>Pre-Inception / Idea Stage</option>
                        <option>Incorporation & Founder Vesting</option>
                        <option>Seed / SAFE Round Raising</option>
                        <option>Series A / Venture Round</option>
                        <option>Cross-Border Bank Setup Needed</option>
                        <option>Commercial SaaS MSA & Contracts</option>
                        <option>M&A / Pre-IPO Advisory</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Primary Target Jurisdiction</label>
                      <select name="targetJurisdiction" value={formData.targetJurisdiction} onChange={handleChange} style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', outline: 'none', background: '#ffffff' }}>
                        <option>United States (Delaware C-Corp)</option>
                        <option>United Kingdom (London Ltd)</option>
                        <option>Singapore (ACRA HoldCo)</option>
                        <option>Australia (ASIC Pty Ltd)</option>
                        <option>Canada (Federal / Provincial)</option>
                        <option>Multi-Jurisdiction Structure</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px', display: 'block' }}>Specific Requirements or Challenges</label>
                      <textarea name="details" value={formData.details} onChange={handleChange} rows={4} placeholder="Briefly outline your situation (e.g. Raising $1.5M on SAFE, need Delaware flip, or requiring US bank account setup)..." style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', outline: 'none' }} />
                    </div>

                    <div className="col-12 mt-3">
                      <button type="submit" disabled={status === 'sending'} className="tmp-btn btn-primary w-100 justify-content-center py-3">
                        {status === 'sending' ? 'Submitting Briefing...' : 'Request Confidential Founder Strategy Call'}
                      </button>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span style={{ fontSize: '12px', color: '#64748B' }}>
                          <i className="fa-solid fa-lock me-1"></i> Strict Founder Confidentiality Guaranteed
                        </span>
                        <a href="https://wa.me/919327000022" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#25D366', fontWeight: '700', textDecoration: 'none' }}>
                          <i className="fa-brands fa-whatsapp me-1"></i> Need instant reply? WhatsApp Us
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactOne;
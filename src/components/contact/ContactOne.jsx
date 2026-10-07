"use client";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const availableJurisdictions = [
  "Singapore",
  "UAE (ADGM/DIFC)",
  "United States",
  "United Kingdom",
  "European Union",
  "India",
  "Other"
];

function ContactOne() {
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    founder_name: '',
    company_name: '',
    work_email: '',
    phone: '',
    company_stage: 'Seed',
    primary_requirement: 'Global Holding Structuring',
    target_jurisdictions: ['Singapore', 'United States'],
    execution_timeline: 'Within 30 Days',
    details: '',
    mutual_nda_requested: false,
    regulatory_disclaimer: false,
    hp_url: '', // Honeypot field for bot trapping
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleJurisdictionToggle = (jurisdiction) => {
    setFormData((prev) => {
      const exists = prev.target_jurisdictions.includes(jurisdiction);
      const updated = exists
        ? prev.target_jurisdictions.filter((j) => j !== jurisdiction)
        : [...prev.target_jurisdictions, jurisdiction];
      return { ...prev, target_jurisdictions: updated };
    });
    if (errors.target_jurisdictions) {
      setErrors((prev) => ({ ...prev, target_jurisdictions: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.founder_name.trim() || formData.founder_name.trim().length < 2) {
      errs.founder_name = 'Founder full name must be at least 2 characters.';
    }
    if (!formData.company_name.trim() || formData.company_name.trim().length < 2) {
      errs.company_name = 'Company / startup name must be at least 2 characters.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.work_email.trim() || !emailRegex.test(formData.work_email.trim())) {
      errs.work_email = 'A valid RFC-compliant work email address is required.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      errs.phone = 'Direct phone / WhatsApp number is required.';
    }
    if (!formData.company_stage) {
      errs.company_stage = 'Please select your venture stage.';
    }
    if (!formData.primary_requirement) {
      errs.primary_requirement = 'Please select your primary advisory track.';
    }
    if (!formData.target_jurisdictions || formData.target_jurisdictions.length === 0) {
      errs.target_jurisdictions = 'Select at least one target jurisdiction.';
    }
    if (!formData.execution_timeline) {
      errs.execution_timeline = 'Please select an execution timeline.';
    }
    if (!formData.regulatory_disclaimer) {
      errs.regulatory_disclaimer = 'You must acknowledge the commercial advisory disclaimer prior to submission.';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.hp_url) {
      // Honeypot trapped: drop silently
      setStatus('sent');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstKey);
      if (el) el.focus();
      return;
    }

    setStatus('sending');
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      }
      setStatus('sent');
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
              <span>STRUCTURED FOUNDER SCOPING INTAKE</span>
            </div>
            <h2 className="title" style={{ fontFamily: 'Georgia, serif', color: '#0B1B3D' }}>
              Schedule Your Confidential Founder Strategy Briefing
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '680px', margin: '10px auto 0' }}>
              Consult directly with our Cross-Border Legal Advisory Desk on multi-entity corporate structuring, YC Post-Money SAFEs, enterprise SaaS MSAs, and inbound India GCC engineering hubs.
            </p>
          </div>
        </div>

        <div className="row g-5">
          {/* Advisory Coordinates & Direct Channel */}
          <div className="col-lg-5">
            <div
              style={{
                background: 'linear-gradient(135deg, #071126 0%, #0B1B3D 70%, #162E66 100%)',
                borderRadius: '20px',
                padding: '40px 36px',
                color: '#ffffff',
                height: '100%',
                boxShadow: '0 20px 50px rgba(11, 27, 61, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="badge" style={{ background: '#D4AF37', color: '#071126', fontWeight: '800', padding: '5px 12px' }}>
                    LAWRJ
                  </span>
                  <span style={{ fontSize: '12px', color: '#cbd5e1', letterSpacing: '0.8px' }}>
                    VENTURE PRACTICE
                  </span>
                </div>

                <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '800', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
                  Direct Strategic Briefing
                </h3>

                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', marginBottom: '28px' }}>
                  All intake submissions are received directly by our Principal Contact Desk. We operate under strict professional privilege with zero automated third-party ad telemetry.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(37, 211, 102, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', flexShrink: 0 }}>
                      <i className="fa-brands fa-whatsapp" style={{ fontSize: '20px' }}></i>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>
                        Confidential WhatsApp Advisory Line
                      </span>
                      <a
                        href="https://wa.me/919327000022?text=Hello%20LawRJ%20Team%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}
                      >
                        +91 93270 00022
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F3C644', flexShrink: 0 }}>
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>
                        Confidential Client Desk
                      </span>
                      <a href="mailto:i@lawrj.com" style={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}>
                        i@lawrj.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F3C644', flexShrink: 0 }}>
                      <i className="fa-solid fa-building-columns"></i>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>
                        Principal Contact & HQ
                      </span>
                      <p style={{ margin: 0, color: '#e2e8f0', fontSize: '13.5px', lineHeight: '1.6' }}>
                        Principal Contact Desk • LawRJ Practice<br />
                        404, Devkuvar 7, Tragad, Ahmedabad-382470
                      </p>
                    </div>
                  </div>
                </div>

                {/* Institutional Advisory Standards */}
                <div className="p-3 rounded-3 mb-3" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                  <span style={{ fontSize: '11px', color: '#F3C644', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '8px' }}>
                    Institutional Delivery Standards
                  </span>
                  <div className="d-flex flex-column gap-2" style={{ fontSize: '12.5px', color: '#cbd5e1' }}>
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-circle-check" style={{ color: '#10b981', fontSize: '12px' }}></i>
                      <span>4-Hour First Response on Cross-Border SAFEs</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-circle-check" style={{ color: '#10b981', fontSize: '12px' }}></i>
                      <span>Mutual NDA Gating Provided Upon Request</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-circle-check" style={{ color: '#10b981', fontSize: '12px' }}></i>
                      <span>Zero Third-Party Telemetry or Ad Retargeting</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Box */}
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.25)', marginTop: '10px' }}>
                <span style={{ fontSize: '11.5px', color: '#F3C644', fontWeight: '700', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Fast-Track Strategic Escalation:
                </span>
                <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.4', margin: '0 0 10px 0' }}>
                  Closing an urgent SAFE round or require immediate M-NDA execution? Reach our desk directly via encrypted channel.
                </p>
                <a
                  href="https://wa.me/919327000022?text=Hello%20LawRJ%20Team%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tmp-btn btn-secondary w-100 justify-content-center"
                  style={{ fontSize: '13px', padding: '10px 16px' }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', marginRight: '6px' }}></i>
                  Open Encrypted WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Structured Scoping Form */}
          <div className="col-lg-7">
            <div
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '40px 36px',
                boxShadow: '0 10px 40px rgba(11, 27, 61, 0.06)',
                border: '1px solid #E2E8F0',
              }}
            >
              <h4 style={{ color: '#0B1B3D', fontWeight: '800', marginBottom: '6px', fontFamily: 'Georgia, serif' }}>
                Founder Scoping Questionnaire
              </h4>
              <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '24px' }}>
                Complete the scoping brief below to focus our strategy session. Zero trackers, zero automated marketing spam.
              </p>

              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '28px', marginBottom: '20px' }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h4 style={{ color: '#0B1B3D', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
                    Briefing Received Successfully
                  </h4>
                  <p style={{ color: '#64748B', maxWidth: '480px', margin: '10px auto 20px', fontSize: '14.5px', lineHeight: '1.6' }}>
                    Our Principal Contact Desk has received your founder scoping brief. We will review your corporate parameters and respond within 12 business hours.
                  </p>
                  <a
                    href="https://wa.me/919327000022?text=Hello%20LawRJ%20Team%2C%20I%20have%20submitted%20a%20Founder%20Strategy%20Briefing%20and%20would%20like%20to%20connect."
                    className="tmp-btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', marginRight: '6px' }}></i>
                    Message Directly on WhatsApp
                  </a>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} noValidate>
                  {/* Honeypot anti-spam trap */}
                  <div style={{ display: 'none', position: 'absolute', left: '-9999px' }}>
                    <label htmlFor="hp_url">Do not fill this</label>
                    <input
                      id="hp_url"
                      name="hp_url"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.hp_url}
                      onChange={handleTextChange}
                    />
                  </div>

                  <div className="row g-3">
                    {/* Founder Name */}
                    <div className="col-md-6">
                      <label htmlFor="founder_name" style={{ fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>
                        Founder Full Name *
                      </label>
                      <input
                        id="founder_name"
                        name="founder_name"
                        autoComplete="name"
                        value={formData.founder_name}
                        onChange={handleTextChange}
                        aria-invalid={errors.founder_name ? "true" : "false"}
                        type="text"
                        placeholder="e.g. Elena Rostova"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: errors.founder_name ? '1.5px solid #ef4444' : '1.5px solid #E2E8F0',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                      {errors.founder_name && (
                        <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                          {errors.founder_name}
                        </span>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="col-md-6">
                      <label htmlFor="company_name" style={{ fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>
                        Corporate / Startup Name *
                      </label>
                      <input
                        id="company_name"
                        name="company_name"
                        autoComplete="organization"
                        value={formData.company_name}
                        onChange={handleTextChange}
                        aria-invalid={errors.company_name ? "true" : "false"}
                        type="text"
                        placeholder="e.g. Apex Compute Labs"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: errors.company_name ? '1.5px solid #ef4444' : '1.5px solid #E2E8F0',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                      {errors.company_name && (
                        <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                          {errors.company_name}
                        </span>
                      )}
                    </div>

                    {/* Work Email */}
                    <div className="col-md-6">
                      <label htmlFor="work_email" style={{ fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>
                        Work Email Address *
                      </label>
                      <input
                        id="work_email"
                        name="work_email"
                        autoComplete="email"
                        value={formData.work_email}
                        onChange={handleTextChange}
                        aria-invalid={errors.work_email ? "true" : "false"}
                        type="email"
                        placeholder="elena@apexcompute.com"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: errors.work_email ? '1.5px solid #ef4444' : '1.5px solid #E2E8F0',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                      {errors.work_email && (
                        <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                          {errors.work_email}
                        </span>
                      )}
                    </div>

                    {/* Direct Phone / WhatsApp */}
                    <div className="col-md-6">
                      <label htmlFor="phone" style={{ fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleTextChange}
                        aria-invalid={errors.phone ? "true" : "false"}
                        type="tel"
                        placeholder="+1 (415) ... or +91 ..."
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: errors.phone ? '1.5px solid #ef4444' : '1.5px solid #E2E8F0',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                      {errors.phone && (
                        <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* Current Company Stage */}
                    <div className="col-md-6">
                      <label htmlFor="company_stage" style={{ fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>
                        Current Company Stage *
                      </label>
                      <select
                        id="company_stage"
                        name="company_stage"
                        value={formData.company_stage}
                        onChange={handleTextChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1.5px solid #E2E8F0',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          background: '#ffffff',
                        }}
                      >
                        <option value="Idea / Bootstrapped">Idea / Bootstrapped</option>
                        <option value="Pre-Seed">Pre-Seed</option>
                        <option value="Seed">Seed</option>
                        <option value="Series A+">Series A+</option>
                        <option value="Enterprise">Enterprise</option>
                      </select>
                    </div>

                    {/* Primary Requirement */}
                    <div className="col-md-6">
                      <label htmlFor="primary_requirement" style={{ fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>
                        Primary Advisory Requirement *
                      </label>
                      <select
                        id="primary_requirement"
                        name="primary_requirement"
                        value={formData.primary_requirement}
                        onChange={handleTextChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1.5px solid #E2E8F0',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          background: '#ffffff',
                        }}
                      >
                        <option value="Global Holding Structuring">Global Holding Structuring (SG/UAE/UK/US)</option>
                        <option value="Venture Capital / SAFE Financing">Venture Capital / SAFE Financing</option>
                        <option value="Enterprise SaaS MSAs & Privacy">Enterprise SaaS MSAs & DPDP/GDPR</option>
                        <option value="Inbound India GCC Setup">Inbound India GCC Setup & FEMA</option>
                        <option value="General Corporate Counsel">General Corporate Counsel</option>
                      </select>
                    </div>

                    {/* Target Domicile Jurisdictions (Multi-select) */}
                    <div className="col-12">
                      <label style={{ fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '8px', display: 'block' }}>
                        Target Domicile Jurisdictions *
                      </label>
                      <div className="d-flex flex-wrap gap-2">
                        {availableJurisdictions.map((jur) => {
                          const isSelected = formData.target_jurisdictions.includes(jur);
                          return (
                            <button
                              key={jur}
                              type="button"
                              onClick={() => handleJurisdictionToggle(jur)}
                              style={{
                                padding: '6px 14px',
                                borderRadius: '20px',
                                fontSize: '12.5px',
                                fontWeight: '700',
                                border: isSelected ? '1.5px solid #D4AF37' : '1.5px solid #CBD5E1',
                                background: isSelected ? '#0B1B3D' : '#F8FAFC',
                                color: isSelected ? '#F3C644' : '#1E293B',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              {isSelected ? `✓ ${jur}` : `+ ${jur}`}
                            </button>
                          );
                        })}
                      </div>
                      {errors.target_jurisdictions && (
                        <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
                          {errors.target_jurisdictions}
                        </span>
                      )}
                    </div>

                    {/* Execution Timeline */}
                    <div className="col-md-6">
                      <label htmlFor="execution_timeline" style={{ fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>
                        Anticipated Execution Horizon *
                      </label>
                      <select
                        id="execution_timeline"
                        name="execution_timeline"
                        value={formData.execution_timeline}
                        onChange={handleTextChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1.5px solid #E2E8F0',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          background: '#ffffff',
                        }}
                      >
                        <option value="Immediate (<14 Days)">Immediate (&lt;14 Days)</option>
                        <option value="Within 30 Days">Within 30 Days</option>
                        <option value="Exploring Options">Exploring Options</option>
                      </select>
                    </div>

                    {/* Mutual NDA Checkbox */}
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="form-check mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="mutual_nda_requested"
                          name="mutual_nda_requested"
                          checked={formData.mutual_nda_requested}
                          onChange={handleCheckboxChange}
                          style={{ cursor: 'pointer' }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="mutual_nda_requested"
                          style={{ fontSize: '13px', color: '#334155', fontWeight: '600', cursor: 'pointer' }}
                        >
                          Request Mutual Non-Disclosure Agreement (M-NDA) Prior to Call
                        </label>
                      </div>
                    </div>

                    {/* Notes / Details */}
                    <div className="col-12">
                      <label htmlFor="details" style={{ fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px', display: 'block' }}>
                        Venture Overview / Specific Transaction Notes (Optional)
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={3}
                        value={formData.details}
                        onChange={handleTextChange}
                        placeholder="Brief summary of your round, cap-table objectives, or cross-border expansion targets..."
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1.5px solid #E2E8F0',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    {/* Mandatory Statutory Gating Checkbox */}
                    <div className="col-12">
                      <div
                        style={{
                          padding: '14px 16px',
                          background: errors.regulatory_disclaimer ? 'rgba(239, 68, 68, 0.08)' : 'rgba(11, 27, 61, 0.04)',
                          borderRadius: '8px',
                          border: errors.regulatory_disclaimer ? '1.5px solid #ef4444' : '1px solid rgba(212, 175, 55, 0.3)',
                        }}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="regulatory_disclaimer"
                            name="regulatory_disclaimer"
                            checked={formData.regulatory_disclaimer}
                            onChange={handleCheckboxChange}
                            aria-invalid={errors.regulatory_disclaimer ? "true" : "false"}
                            style={{ cursor: 'pointer', marginTop: '3px' }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="regulatory_disclaimer"
                            style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5', cursor: 'pointer' }}
                          >
                            <strong>Statutory Disclaimer Acknowledgment *:</strong> I understand that LawRJ provides strategic commercial venture architecture and corporate advisory. Formal court litigation before the High Court of Gujarat or Indian district courts requires direct individual engagement under Bar Council of India regulations.
                          </label>
                        </div>
                        {errors.regulatory_disclaimer && (
                          <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '6px', display: 'block', fontWeight: '600' }}>
                            {errors.regulatory_disclaimer}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Submit Action */}
                    <div className="col-12 mt-3">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="tmp-btn btn-primary w-100 justify-content-center py-3"
                        style={{ fontSize: '15px', fontWeight: '700' }}
                      >
                        {status === 'sending' ? (
                          <>
                            <i className="fa-solid fa-spinner fa-spin me-2"></i>
                            Submitting Strategy Briefing...
                          </>
                        ) : (
                          'Submit Strategy Briefing'
                        )}
                      </button>

                      {status === 'error' && (
                        <div className="mt-3 p-3 rounded text-center" style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#991B1B', fontSize: '13px' }}>
                          Notice: Serverless dispatcher is unavailable. Please connect directly via our encrypted WhatsApp line at +91 93270 00022.
                        </div>
                      )}

                      <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
                        <span style={{ fontSize: '12px', color: '#64748B' }}>
                          <i className="fa-solid fa-shield-halved me-1" style={{ color: '#D4AF37' }}></i>
                          DPDP Act 2023 Compliant • Zero Telemetry
                        </span>
                        <a
                          href="https://wa.me/919327000022?text=Hello%20LawRJ%20Team%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing."
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '13px', color: '#15803d', fontWeight: '800', textDecoration: 'none' }}
                        >
                          <i className="fa-brands fa-whatsapp me-1"></i>
                          Urgent Round? Open WhatsApp
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
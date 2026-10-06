"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RegulatoryConsent() {
  const [hasAcknowledged, setHasAcknowledged] = useState(true); // default true to avoid SSR flash

  useEffect(() => {
    try {
      const consent = localStorage.getItem('lawrj_regulatory_consent_v1');
      if (!consent) {
        setHasAcknowledged(false);
      }
    } catch {
      // In case localStorage is disabled
      setHasAcknowledged(false);
    }
  }, []);

  const handleAcknowledge = () => {
    try {
      localStorage.setItem('lawrj_regulatory_consent_v1', 'acknowledged_' + new Date().toISOString());
    } catch {
      // Ignore
    }
    setHasAcknowledged(true);
  };

  if (hasAcknowledged) return null;

  return (
    <div
      className="lawrj-regulatory-consent-banner"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        right: '20px',
        maxWidth: '1080px',
        margin: '0 auto',
        background: 'rgba(7, 17, 38, 0.96)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(212, 175, 55, 0.45)',
        borderRadius: '14px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        padding: '16px 24px',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        flexWrap: 'wrap'
      }}
    >
      <div style={{ flex: '1 1 650px' }}>
        <div className="d-flex align-items-center gap-2 mb-1">
          <span
            className="badge"
            style={{
              background: 'rgba(212, 175, 55, 0.2)',
              color: '#F3C644',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              fontSize: '11px',
              padding: '3px 8px',
              letterSpacing: '0.5px'
            }}
          >
            REGULATORY DISCLOSURE & COOKIE CONSENT
          </span>
          <span style={{ color: '#94a3b8', fontSize: '11px' }}>Advocates Act, 1961 Compliance</span>
        </div>
        <p style={{ margin: 0, fontSize: '12.5px', color: '#cbd5e1', lineHeight: '1.5' }}>
          LawRJ operates as an institutional cross-border venture architecture consultancy. Materials here are informational and do not constitute formal legal solicitation or advocate-client relationship. By continuing, you agree to our privacy framework and standard cookies.
        </p>
      </div>

      <div className="d-flex align-items-center gap-2" style={{ flexShrink: 0 }}>
        <Link
          href="/Contact"
          style={{
            fontSize: '12px',
            color: '#94a3b8',
            textDecoration: 'underline',
            marginRight: '8px'
          }}
        >
          Privacy Terms
        </Link>
        <button
          onClick={handleAcknowledge}
          className="tmp-btn btn-primary"
          style={{
            padding: '8px 20px',
            fontSize: '12.5px',
            fontWeight: '700',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '6px'
          }}
        >
          Acknowledge & Proceed
        </button>
      </div>
    </div>
  );
}

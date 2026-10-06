/**
 * 🖖 STARFLEET DIAGNOSTIC QA TEST SUITE
 * USS Enterprise (NCC-1701) | Nurse Christine Chapel (»Chapel, Agent 10)
 * Bound Project: [PRJ-02] LawRJ | Sub-Project: SUB-014 (2-4-7)
 * Gherkin User Story Criteria Verification: US-IT-001 through US-IT-009
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

describe('Starfleet Diagnostic QA Acceptance Suite (»Chapel)', () => {

  describe('US-IT-001: Jurisdiction-Agnostic Hero Banner & Verified Metrics', () => {
    const bannerPath = path.join(ROOT, 'src/components/banner/BannerOne.jsx');
    const content = fs.readFileSync(bannerPath, 'utf8');

    it('Scenario 1: Eradication of Delaware-only lock-in copy', () => {
      assert.ok(!content.includes('exclusive Delaware focus'), 'Should not contain exclusive Delaware focus');
      assert.ok(content.includes('Jurisdiction-Agnostic Corporate Structuring for'), 'Should contain jurisdiction-agnostic headline');
      assert.ok(content.includes('High-Growth Startups Worldwide'), 'Should contain headline highlight');
      assert.ok(content.includes('Singapore'), 'Should explicitly mention Singapore');
      assert.ok(content.includes('UAE/ADGM/DIFC'), 'Should explicitly mention UAE/ADGM/DIFC');
      assert.ok(content.includes('United Kingdom'), 'Should explicitly mention United Kingdom');
      assert.ok(content.includes('United States'), 'Should explicitly mention United States');
      assert.ok(content.includes('India'), 'Should explicitly mention India');
    });

    it('Scenario 2: Display verified transaction and institutional metrics', () => {
      assert.ok(content.includes('$150M+'), 'Metric 1 must be $150M+');
      assert.ok(content.includes('Cross-Border Market Flow'), 'Metric 1 label must be Cross-Border Market Flow');
      assert.ok(content.includes('Global Reach'), 'Metric 2 must be Global Reach');
      assert.ok(content.includes('Entity Domiciles Structured'), 'Metric 2 label must be Entity Domiciles Structured');
      assert.ok(content.includes('300+'), 'Metric 3 must be 300+');
      assert.ok(content.includes('Standard Contract Suites'), 'Metric 3 label must be Standard Contract Suites');
    });

    it('Scenario 3: Verified primary and secondary conversion actions', () => {
      assert.ok(content.includes('Schedule Strategy Call'), 'Primary button text');
      assert.ok(content.includes('/Contact'), 'Primary button route');
      assert.ok(content.includes('Confidential WhatsApp Line'), 'Secondary button text');
      assert.ok(content.includes('https://wa.me/919327000022'), 'Secondary button WhatsApp URL');
      assert.ok(content.includes('rel="noopener noreferrer"'), 'Rel security isolation');
      assert.ok(content.includes('target="_blank"'), 'Target blank isolation');
    });

    it('Scenario 4: Removal of anonymous template filler and personal names', () => {
      assert.ok(!content.includes('Techstars Alum'), 'Must eradicate Techstars Alum filler');
      assert.ok(!content.includes('Venture-Backed Founder'), 'Must eradicate Venture-Backed Founder filler');
      assert.ok(!content.includes('Viral'), 'Must NOT contain Viral');
      assert.ok(!content.includes('Vyas'), 'Must NOT contain Vyas');
      assert.ok(content.includes('Principal Contact Desk'), 'Must highlight Principal Contact Desk');
    });
  });

  describe('US-IT-002: Four Core Practice Pillars Presentation', () => {
    const servicePath = path.join(ROOT, 'src/components/service/ServiceOne.jsx');
    const content = fs.readFileSync(servicePath, 'utf8');

    it('Scenario 1: Complete rendering of 4 practice pillars', () => {
      assert.ok(content.includes('PIL-01'), 'Must contain Pillar 01 ID');
      assert.ok(content.includes('PIL-02'), 'Must contain Pillar 02 ID');
      assert.ok(content.includes('PIL-03'), 'Must contain Pillar 03 ID');
      assert.ok(content.includes('PIL-04'), 'Must contain Pillar 04 ID');
      assert.ok(content.includes('Global Corporate Structuring & Holding Architecture'), 'Pillar 1 title');
      assert.ok(content.includes('Venture Capital Financing & Cap-Table Governance'), 'Pillar 2 title');
      assert.ok(content.includes('Enterprise B2B SaaS Contracts & Global Privacy'), 'Pillar 3 title');
      assert.ok(content.includes('Cross-Border Market Expansion & Inbound Tech Hubs'), 'Pillar 4 title');
      assert.ok(content.includes('CORE PRACTICE TAXONOMY'), 'Section taxonomy subtitle');
      assert.ok(content.includes('Institutional Venture Infrastructure Across Four Strategic Pillars'), 'Section title');
    });

    it('Scenario 2: Verification of Cap-Table financing instruments', () => {
      assert.ok(content.includes('YC Post-Money SAFE'), 'Pillar 2 SAFE notes');
      assert.ok(content.includes('Valuation Cap and Discount'), 'Pillar 2 Cap and Discount terms');
      assert.ok(content.includes('500 Global KISS'), 'Pillar 2 KISS instruments');
      assert.ok(content.includes('Shareholders\' Agreements (SHA/SSA)'), 'Pillar 2 SHA/SSA');
      assert.ok(content.includes('4-year vesting, 1-year cliff'), 'Pillar 2 founder vesting');
    });

    it('Scenario 3: Verification of SaaS & Data Privacy standards', () => {
      assert.ok(content.includes('Master Services Agreements (MSAs)'), 'Pillar 3 MSAs');
      assert.ok(content.includes('99.9% uptime'), 'Pillar 3 SLAs');
      assert.ok(content.includes('DPDP Act 2023'), 'Pillar 3 India DPDP compliance');
      assert.ok(content.includes('GDPR'), 'Pillar 3 European GDPR');
      assert.ok(content.includes('CCPA'), 'Pillar 3 California CCPA');
    });

    it('Scenario 4: Verification of Inbound Tech Hub & GCC capabilities', () => {
      assert.ok(content.includes('Global Capability Center (GCC)'), 'Pillar 4 GCC hubs');
      assert.ok(content.includes('Inbound FDI compliance, RBI reporting (FC-GPR) & FEMA'), 'Pillar 4 FEMA FDI');
      assert.ok(content.includes('Outbound Flips'), 'Pillar 4 Outbound flips');
    });
  });

  describe('US-IT-003: Structured Founder Scoping Intake Pipeline', () => {
    const contactPath = path.join(ROOT, 'src/components/contact/ContactOne.jsx');
    const content = fs.readFileSync(contactPath, 'utf8');

    it('Scenario 1: Rendering of mandatory founder scoping fields', () => {
      assert.ok(content.includes('name="founder_name"'), 'founder_name field');
      assert.ok(content.includes('name="company_name"'), 'company_name field');
      assert.ok(content.includes('name="work_email"'), 'work_email field');
      assert.ok(content.includes('name="phone"'), 'phone field');
      assert.ok(content.includes('name="company_stage"'), 'company_stage field');
      assert.ok(content.includes('name="primary_requirement"'), 'primary_requirement field');
      assert.ok(content.includes('target_jurisdictions'), 'target_jurisdictions field');
      assert.ok(content.includes('name="execution_timeline"'), 'execution_timeline field');
      assert.ok(content.includes('name="mutual_nda_requested"'), 'mutual_nda_requested checkbox');
      assert.ok(content.includes('name="regulatory_disclaimer"'), 'regulatory_disclaimer gating checkbox');
    });

    it('Scenario 2: Anti-spam bot trap and security honeypot', () => {
      assert.ok(content.includes('hp_url'), 'Must include honeypot field');
    });

    it('Scenario 3: Validation and disclaimer gating enforcement', () => {
      assert.ok(content.includes('You must acknowledge the commercial advisory disclaimer prior to submission.'), 'Mandatory disclaimer error text');
      assert.ok(content.includes('aria-invalid'), 'A11y validation aria-invalid attribute');
    });
  });

  describe('US-IT-004: Confidential WhatsApp Advisory Routing', () => {
    const headerPath = path.join(ROOT, 'src/components/header/HeaderOne.jsx');
    const contactPath = path.join(ROOT, 'src/components/contact/ContactOne.jsx');
    const headerContent = fs.readFileSync(headerPath, 'utf8');
    const contactContent = fs.readFileSync(contactPath, 'utf8');

    it('Scenario 1: Pre-filled URI-encoded message presence', () => {
      const expectedEncoded = 'Hello%20LawRJ%20Team%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing.';
      assert.ok(headerContent.includes(expectedEncoded), 'Header WhatsApp has pre-filled message');
      assert.ok(contactContent.includes(expectedEncoded), 'Contact WhatsApp has pre-filled message');
    });

    it('Scenario 2: Security attributes on external links', () => {
      assert.ok(contactContent.includes('rel="noopener noreferrer"'), 'Contact WhatsApp rel attribute');
      assert.ok(headerContent.includes('rel="noopener noreferrer"'), 'Header WhatsApp rel attribute');
    });
  });

  describe('US-IT-005: India-Global Cross-Border Technology Bridge', () => {
    const aboutPath = path.join(ROOT, 'src/components/about/AboutOne.jsx');
    const content = fs.readFileSync(aboutPath, 'utf8');

    it('Scenario 1: Dual inbound/outbound narrative display', () => {
      assert.ok(content.includes('Inbound to India: Engineering GCCs'), 'Inbound GCC narrative');
      assert.ok(content.includes('FEMA'), 'FEMA compliance mention');
      assert.ok(content.includes('Outbound to World: Cap-Table Flips'), 'Outbound flips narrative');
      assert.ok(content.includes('Jurisdiction-Agnostic Advisory'), 'Objective positioning');
    });
  });

  describe('US-IT-006: Statutory Regulatory Transparency Disclaimer', () => {
    const footerPath = path.join(ROOT, 'src/components/footer/FooterOne.jsx');
    const contactPath = path.join(ROOT, 'src/components/contact/ContactOne.jsx');
    const aboutPath = path.join(ROOT, 'src/components/about/AboutOne.jsx');
    const footerContent = fs.readFileSync(footerPath, 'utf8');
    const contactContent = fs.readFileSync(contactPath, 'utf8');
    const consentPath = path.join(ROOT, 'src/components/consent/RegulatoryConsent.jsx');
    const consentContent = fs.readFileSync(consentPath, 'utf8');

    it('Scenario 1: Floating Regulatory Consent Modal disclaimer presence', () => {
      assert.ok(consentContent.includes('Advocates Act, 1961 Compliance'), 'Consent modal references Advocates Act');
      assert.ok(consentContent.includes('REGULATORY DISCLOSURE & COOKIE CONSENT'), 'Consent modal has compliance title');
      assert.ok(consentContent.includes('Acknowledge & Proceed'), 'Consent modal has acknowledge CTA');
      assert.ok(footerContent.includes('DPDP Act 2023 Compliant'), 'Footer references DPDP Act 2023');
    });

    it('Scenario 2: Form submission disclaimer gating', () => {
      assert.ok(contactContent.includes('Statutory Disclaimer Acknowledgment'), 'Form has statutory acknowledgment');
      assert.ok(contactContent.includes('Bar Council of India'), 'Form references Bar Council');
    });

    it('Scenario 3: Regulatory consent component integration on home page', () => {
      const pagePath = path.join(ROOT, 'src/app/page.js');
      const pageContent = fs.readFileSync(pagePath, 'utf8');
      assert.ok(pageContent.includes('RegulatoryConsent'), 'HomePage mounts RegulatoryConsent component');
    });
  });

  describe('US-IT-007: Technical SEO & Schema.org JSON-LD Structured Data', () => {
    const layoutPath = path.join(ROOT, 'src/app/layout.js');
    const content = fs.readFileSync(layoutPath, 'utf8');

    it('Scenario 1: Schema.org LegalService validation', () => {
      assert.ok(content.includes('application/ld+json'), 'Must contain ld+json script');
      assert.ok(content.includes('"@type": "LegalService"'), 'Type must be LegalService');
      assert.ok(content.includes('"name": "LawRJ"'), 'Name must be LawRJ');
      assert.ok(content.includes('+919327000022'), 'Telephone must be +919327000022');
      assert.ok(content.includes('https://law-rj.web.app'), 'URL must match target domain');
      assert.ok(content.includes('"priceRange": "$$$$"'), 'Price range must be defined');
      assert.ok(content.includes('Global'), 'areaServed includes Global');
      assert.ok(content.includes('India'), 'areaServed includes India');
      assert.ok(content.includes('Singapore'), 'areaServed includes Singapore');
    });

    it('Scenario 2: OpenGraph and Twitter tags', () => {
      assert.ok(content.includes('openGraph:'), 'Must contain openGraph metadata');
      assert.ok(content.includes('twitter:'), 'Must contain twitter metadata');
    });
  });

  describe('US-IT-008: Zero-Bloat Static Export & Edge CDN Caching', () => {
    const nextConfigPath = path.join(ROOT, 'next.config.mjs');
    const firebasePath = path.join(ROOT, 'firebase.json');
    const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
    const firebaseConfig = JSON.parse(fs.readFileSync(firebasePath, 'utf8'));

    it('Scenario 1: Static export in next.config.mjs', () => {
      assert.ok(nextConfig.includes("output: 'export'"), 'next.config must enforce output export');
      assert.ok(nextConfig.includes("unoptimized: true"), 'next.config must have unoptimized images');
    });

    it('Scenario 2: Firebase edge caching and ZTNA headers', () => {
      const headers = firebaseConfig.hosting.headers;
      assert.ok(Array.isArray(headers), 'Headers must be an array');
      
      const staticAssets = headers.find(h => h.source.includes('jpg'));
      assert.ok(staticAssets, 'Must have static asset rule');
      const staticCache = staticAssets.headers.find(k => k.key === 'Cache-Control');
      assert.ok(staticCache.value.includes('immutable'), 'Static assets must be immutable');

      const htmlAssets = headers.find(h => h.source === '**/*.html');
      assert.ok(htmlAssets, 'Must have html rule');
      const htmlCache = htmlAssets.headers.find(k => k.key === 'Cache-Control');
      assert.ok(htmlCache.value.includes('s-maxage=86400'), 'HTML must have edge s-maxage');

      const globalHeaders = headers.find(h => h.source === '**');
      assert.ok(globalHeaders, 'Must have global security headers');
      const csp = globalHeaders.headers.find(k => k.key === 'Content-Security-Policy');
      assert.ok(csp, 'Must have CSP');
      assert.ok(csp.value.includes('api.emailjs.com'), 'CSP must whitelist api.emailjs.com');
      const hsts = globalHeaders.headers.find(k => k.key === 'Strict-Transport-Security');
      assert.ok(hsts.value.includes('max-age=63072000'), 'HSTS must be 2 years (63072000)');
      const permissions = globalHeaders.headers.find(k => k.key === 'Permissions-Policy');
      assert.ok(permissions.value.includes('camera=()'), 'Permissions policy must disable camera');
    });
  });

  describe('Discovery Manifests & Indexation Assets', () => {
    it('Robots.txt and Sitemap.xml exist', () => {
      assert.ok(fs.existsSync(path.join(ROOT, 'public/robots.txt')), 'public/robots.txt must exist');
      assert.ok(fs.existsSync(path.join(ROOT, 'public/sitemap.xml')), 'public/sitemap.xml must exist');
      const robots = fs.readFileSync(path.join(ROOT, 'public/robots.txt'), 'utf8');
      assert.ok(robots.includes('Sitemap: https://law-rj.web.app/sitemap.xml'), 'robots.txt references sitemap');
    });
  });

  describe('US-IT-009: Strict Identity Calibration & Zero Personal Name Leakage', () => {
    const bannerContent = fs.readFileSync(path.join(ROOT, 'src/components/banner/BannerOne.jsx'), 'utf8');
    const aboutContent = fs.readFileSync(path.join(ROOT, 'src/components/about/AboutOne.jsx'), 'utf8');
    const serviceContent = fs.readFileSync(path.join(ROOT, 'src/components/service/ServiceOne.jsx'), 'utf8');
    const contactContent = fs.readFileSync(path.join(ROOT, 'src/components/contact/ContactOne.jsx'), 'utf8');
    const footerContent = fs.readFileSync(path.join(ROOT, 'src/components/footer/FooterOne.jsx'), 'utf8');
    const headerContent = fs.readFileSync(path.join(ROOT, 'src/components/header/HeaderOne.jsx'), 'utf8');
    const layoutContent = fs.readFileSync(path.join(ROOT, 'src/app/layout.js'), 'utf8');

    it('Scenario 1: Complete eradication of personal name from public markup', () => {
      const allContent = [bannerContent, aboutContent, serviceContent, contactContent, footerContent, headerContent, layoutContent].join(' ');
      assert.ok(!allContent.includes('Viral'), 'Must NOT contain Viral');
      assert.ok(!allContent.includes('Vyas'), 'Must NOT contain Vyas');
    });

    it('Scenario 2: Principal Chambers replaced with Principal Contact', () => {
      const allContent = [bannerContent, aboutContent, serviceContent, contactContent, footerContent, headerContent].join(' ');
      assert.ok(!allContent.includes('Principal Chambers'), 'Must NOT contain Principal Chambers');
      assert.ok(footerContent.includes('Principal Contact'), 'Footer must contain Principal Contact');
      assert.ok(contactContent.includes('Principal Contact & HQ'), 'Contact must contain Principal Contact & HQ');
      assert.ok(footerContent.includes('Principal Contact Desk'), 'Footer must contain Principal Contact Desk');
      assert.ok(bannerContent.includes('Principal Contact Desk'), 'Banner must contain Principal Contact Desk');
    });
  });

  describe('US-IT-010: Zero Internal Data Leakage (No ENT-09 or internal tokens)', () => {
    const footerContent = fs.readFileSync(path.join(ROOT, 'src/components/footer/FooterOne.jsx'), 'utf8');
    const contactContent = fs.readFileSync(path.join(ROOT, 'src/components/contact/ContactOne.jsx'), 'utf8');
    const layoutContent = fs.readFileSync(path.join(ROOT, 'src/app/layout.js'), 'utf8');

    it('Scenario 1: No Entity ID: ENT-09 in public footer or layout', () => {
      assert.ok(!footerContent.includes('ENT-09'), 'Footer must NOT contain ENT-09');
      assert.ok(!footerContent.includes('Entity ID:'), 'Footer must NOT contain Entity ID:');
      assert.ok(!layoutContent.includes('ENT-09'), 'Layout must NOT contain ENT-09');
    });
  });

  describe('US-IT-011: Global Market Truths & Objective Ecosystem Standards', () => {
    const funfactsContent = fs.readFileSync(path.join(ROOT, 'src/components/funfacts/FunfactsOne.jsx'), 'utf8');
    const blueprintsContent = fs.readFileSync(path.join(ROOT, 'src/components/testimonials/TestimonialsOne.jsx'), 'utf8');
    const processContent = fs.readFileSync(path.join(ROOT, 'src/components/workingprocess/ProcessOne.jsx'), 'utf8');

    it('Scenario 1: Funfacts states objective market flow without first-person boasting', () => {
      assert.ok(funfactsContent.includes('GLOBAL VENTURE BENCHMARKS'), 'Must highlight GLOBAL VENTURE BENCHMARKS');
      assert.ok(funfactsContent.includes('Bilateral Deal Volume ($)'), 'Must define Bilateral Deal Volume ($)');
      assert.ok(funfactsContent.includes('Annual venture capital flow'), 'Factual explanation of deal flow');
      assert.ok(!funfactsContent.includes('Handled Across'), 'Must NOT contain Handled Across');
      assert.ok(!funfactsContent.includes('100% Local Banking Success'), 'Must NOT contain boastful 100% banking success');
      assert.ok(!funfactsContent.includes('We have supported'), 'Must NOT contain We have supported');
    });

    it('Scenario 2: Testimonials replaced with objective structural blueprints', () => {
      assert.ok(blueprintsContent.includes('STRUCTURAL BLUEPRINTS'), 'Must highlight STRUCTURAL BLUEPRINTS');
      assert.ok(blueprintsContent.includes('Cross-Border Transaction Archetypes'), 'Must headline Cross-Border Transaction Archetypes');
      assert.ok(blueprintsContent.includes('US Delaware Flip & YC SAFE Financing'), 'Blueprint 1 title');
      assert.ok(blueprintsContent.includes('Tripartite Singapore & UK HoldCo Architecture'), 'Blueprint 2 title');
      assert.ok(blueprintsContent.includes('Institutional Series A Equity Governance'), 'Blueprint 3 title');
      assert.ok(blueprintsContent.includes('Inbound India Engineering GCC Hub Structure'), 'Blueprint 4 title');
      assert.ok(blueprintsContent.includes('Enterprise B2B SaaS Contracting & Privacy'), 'Blueprint 5 title');
      assert.ok(!blueprintsContent.includes('What Global Founders Say About LawRJ'), 'Must NOT contain fake review title');
    });

    it('Scenario 3: Working process states institutional venture lifecycle architecture', () => {
      assert.ok(processContent.includes('VENTURE LIFECYCLE ARCHITECTURE'), 'Process badge');
      assert.ok(processContent.includes('Institutional Venture Roadmap: Inception to Scale'), 'Process title');
      assert.ok(!processContent.includes('How We Engineer'), 'Must NOT contain How We Engineer');
    });
  });

});

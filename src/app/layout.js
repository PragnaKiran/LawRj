import "/public/assets/css/vendor/fontawesome.css";
import "/public/assets/css/plugins/swiper.css";
import "/public/assets/css/plugins/cursor.css";
import "/public/assets/css/vendor/animate.min.css";
import "/public/assets/css/vendor/metismenu.css";
import "/public/assets/css/vendor/bootstrap.min.css";
import "/public/assets/css/style.css";
import 'aos/dist/aos.css';
import 'react-modal-video/css/modal-video.min.css';
import "/public/assets/css/lawrj-custom.css";

export const metadata = {
  title: "LawRJ | Jurisdiction-Agnostic Venture Architecture & Strategic Counsel",
  description: "Global corporate structuring, YC Post-Money SAFEs, enterprise B2B SaaS contracts, and India engineering GCC tech hubs across Singapore, UAE/ADGM, UK, US, and India.",
  keywords: "global venture architecture, startup corporate structuring, YC Post-Money SAFE, cross-border holding flip, Singapore Pte Ltd, ADGM DIFC setup, Delaware C-Corp, SaaS Master Services Agreement, India GCC tech hub, FEMA FDI compliance",
  metadataBase: new URL("https://law-rj.web.app"),
  openGraph: {
    title: "LawRJ | Jurisdiction-Agnostic Venture Architecture & Strategic Counsel",
    description: "Multi-jurisdiction corporate structuring, YC Post-Money SAFEs, enterprise B2B SaaS contracts, and bilateral India tech hubs.",
    url: "https://law-rj.web.app",
    siteName: "LawRJ",
    images: [
      {
        url: "/assets/images/logo/lawrj-logo.png",
        width: 1200,
        height: 630,
        alt: "LawRJ Global Venture Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LawRJ | Jurisdiction-Agnostic Venture Architecture",
    description: "Multi-entity corporate structuring, YC SAFEs, and enterprise SaaS contracts across SG, UAE, UK, US, and India.",
    images: ["/assets/images/logo/lawrj-logo.png"],
  },
  icons: {
    icon: [
      { url: '/fav.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: '/fav.png',
  },
};

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "LawRJ",
  "telephone": "+919327000022",
  "url": "https://law-rj.web.app",
  "priceRange": "$$$$",
  "image": "https://law-rj.web.app/assets/images/logo/lawrj-logo.png",
  "areaServed": [
    "Global",
    "India",
    "Singapore",
    "United States",
    "United Kingdom"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "404, Devkuvar 7, Tragad",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382470",
    "addressCountry": "IN"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "4 Core Practice Pillars",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Global Corporate Structuring & Holding Architecture",
          "description": "Multi-jurisdiction holding and subsidiary entity formation across Singapore, ADGM/DIFC, UK Ltd, Delaware C-Corp, Netherlands, and Cayman Islands."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Venture Capital Financing & Cap-Table Governance",
          "description": "Y-Combinator Post-Money SAFEs, 500 Global KISS notes, priced Seed & Series A rounds, and founder vesting protection."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise B2B SaaS Contracts & Global Privacy",
          "description": "Procurement-ready Master Services Agreements (MSAs), 99.9% SLAs, and DPDP Act 2023 / GDPR Data Processing Addenda."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cross-Border Market Expansion & Inbound Tech Hubs",
          "description": "India engineering Global Capability Centers (GCCs), RBI/FEMA inbound FDI compliance, and domestic tech scale-up outbound flips."
        }
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
      </head>
      <body>
        {children}
        {/* Persistent Global Confidential WhatsApp Channel */}
        <a
          href="https://wa.me/919327000022?text=Hello%20Adv.%20Vyas%2C%20I%20would%20like%20to%20schedule%20a%20confidential%20Founder%20Strategy%20Briefing%20with%20LawRJ."
          className="lawrj-whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          title="Direct Founder Advisory Line on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp" />
        </a>
      </body>
    </html>
  );
}

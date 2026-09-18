import "/public/assets/css/vendor/fontawesome.css"
import "/public/assets/css/plugins/swiper.css"
import "/public/assets/css/plugins/cursor.css"
import "/public/assets/css/vendor/animate.min.css"
import "/public/assets/css/vendor/metismenu.css"
import "/public/assets/css/vendor/bootstrap.min.css"
import "/public/assets/css/style.css"
import 'aos/dist/aos.css';
import 'react-modal-video/css/modal-video.min.css';
import "/public/assets/css/lawrj-custom.css"

export const metadata = {
  title: "LawRJ | Global Startup Legal & Regulatory Counsel (Idea to IPO)",
  description: "Cross-border legal advisory, entity formation, venture financing (SAFE/Priced), and compliance for startups scaling across the US, UK, Canada, Australia, and Singapore. Local registrations & corporate banking.",
  keywords: "startup legal counsel, cross-border entity incorporation, US Delaware flip, UK company formation, Singapore holding company, Australia venture setup, SAFE note drafting, Series A due diligence, tech startup regulatory compliance",
  icons: {
    icon: [
      { url: '/fav.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: '/fav.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.png" />
      </head>
      <body>
        {children}
        {/* Persistent Global WhatsApp Contact */}
        <a
          href="https://wa.me/919327000022?text=Hello%20LawRJ%20Team%2C%20we%20are%20seeking%20startup%20legal%20and%20regulatory%20consultancy%20for%20our%20venture."
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

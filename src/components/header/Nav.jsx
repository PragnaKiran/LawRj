import React from 'react'
import Link from 'next/link';

function Nav() {
  return (
    <div className="header-nav main-nav-one">
      <nav>
        <ul className="parent-nav d-flex align-items-center mb-0 list-unstyled">
          <li>
            <Link className="nav-link" href="/" aria-label="Home">
              <span className="rolling-text">
                <div className="block"><span className="letter">H</span><span className="letter">O</span><span className="letter">M</span><span className="letter">E</span></div>
                <div className="block" aria-hidden="true"><span className="letter">H</span><span className="letter">O</span><span className="letter">M</span><span className="letter">E</span></div>
              </span>
            </Link>
          </li>
          <li className="has-dropdown">
            <Link className="nav-link" href="/Service" aria-label="Services">
              <span className="rolling-text">
                <div className="block">
                  <span className="letter">S</span><span className="letter">E</span><span className="letter">R</span><span className="letter">V</span><span className="letter">I</span><span className="letter">C</span><span className="letter">E</span><span className="letter">S</span>
                </div>
                <div className="block" aria-hidden="true">
                  <span className="letter">S</span><span className="letter">E</span><span className="letter">R</span><span className="letter">V</span><span className="letter">I</span><span className="letter">C</span><span className="letter">E</span><span className="letter">S</span>
                </div>
              </span>
            </Link>
            <ul className="submenu">
              <li><Link href="/ServiceDetails?service=inception&pillar=PIL-01">1. Global Holding & Entity Structuring</Link></li>
              <li><Link href="/ServiceDetails?service=financing&pillar=PIL-02">2. VC Financing & Cap-Table</Link></li>
              <li><Link href="/ServiceDetails?service=contracts&pillar=PIL-03">3. Enterprise SaaS MSAs & Privacy</Link></li>
              <li><Link href="/ServiceDetails?service=india-bridge&pillar=PIL-04">4. Inbound India GCC Tech Hubs</Link></li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link className="nav-link" href="#" aria-label="Jurisdictions">
              <span className="rolling-text">
                <div className="block">
                  <span className="letter">J</span><span className="letter">U</span><span className="letter">R</span><span className="letter">I</span><span className="letter">S</span><span className="letter">D</span><span className="letter">I</span><span className="letter">C</span><span className="letter">T</span><span className="letter">I</span><span className="letter">O</span><span className="letter">N</span><span className="letter">S</span>
                </div>
                <div className="block" aria-hidden="true">
                  <span className="letter">J</span><span className="letter">U</span><span className="letter">R</span><span className="letter">I</span><span className="letter">S</span><span className="letter">D</span><span className="letter">I</span><span className="letter">C</span><span className="letter">T</span><span className="letter">I</span><span className="letter">O</span><span className="letter">N</span><span className="letter">S</span>
                </div>
              </span>
            </Link>
            <ul className="submenu">
              <li><Link href="/ServiceDetails?service=sg">🇸🇬 Singapore (ACRA HoldCo)</Link></li>
              <li><Link href="/ServiceDetails?service=inception">🇦🇪 UAE (ADGM & DIFC)</Link></li>
              <li><Link href="/ServiceDetails?service=uk">🇬🇧 United Kingdom (London Ltd)</Link></li>
              <li><Link href="/ServiceDetails?service=us">🇺🇸 United States (Delaware C-Corp)</Link></li>
              <li><Link href="/ServiceDetails?service=india-bridge">🇮🇳 India (Tech GCC & Operating Co)</Link></li>
            </ul>
          </li>
          <li>
            <Link className="nav-link" href="/About" aria-label="About">
              <span className="rolling-text">
                <div className="block"><span className="letter">A</span><span className="letter">B</span><span className="letter">O</span><span className="letter">U</span><span className="letter">T</span></div>
                <div className="block" aria-hidden="true"><span className="letter">A</span><span className="letter">B</span><span className="letter">O</span><span className="letter">U</span><span className="letter">T</span></div>
              </span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/FaqOne" aria-label="FAQs">
              <span className="rolling-text">
                <div className="block"><span className="letter">F</span><span className="letter">A</span><span className="letter">Q</span><span className="letter">S</span></div>
                <div className="block" aria-hidden="true"><span className="letter">F</span><span className="letter">A</span><span className="letter">Q</span><span className="letter">S</span></div>
              </span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/Contact" aria-label="Contact">
              <span className="rolling-text">
                <div className="block"><span className="letter">C</span><span className="letter">O</span><span className="letter">N</span><span className="letter">T</span><span className="letter">A</span><span className="letter">C</span><span className="letter">T</span></div>
                <div className="block" aria-hidden="true"><span className="letter">C</span><span className="letter">O</span><span className="letter">N</span><span className="letter">T</span><span className="letter">A</span><span className="letter">C</span><span className="letter">T</span></div>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
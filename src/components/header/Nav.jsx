import React from 'react'
import Link from 'next/link';

function Nav() {
  return (
    <div className="header-nav main-nav-one">
      <nav>
        <ul className="parent-nav d-flex align-items-center mb-0 list-unstyled">
          <li>
            <Link className="nav-link" href="/">
              <span className="rolling-text">
                <div className="block"><span className="letter">H</span><span className="letter">O</span><span className="letter">M</span><span className="letter">E</span></div>
                <div className="block"><span className="letter">H</span><span className="letter">O</span><span className="letter">M</span><span className="letter">E</span></div>
              </span>
            </Link>
          </li>
          <li className="has-dropdown">
            <Link className="nav-link" href="/Service">
              <span className="rolling-text">
                <div className="block">
                  <span className="letter">S</span><span className="letter">E</span><span className="letter">R</span><span className="letter">V</span><span className="letter">I</span><span className="letter">C</span><span className="letter">E</span><span className="letter">S</span>
                </div>
                <div className="block">
                  <span className="letter">S</span><span className="letter">E</span><span className="letter">R</span><span className="letter">V</span><span className="letter">I</span><span className="letter">C</span><span className="letter">E</span><span className="letter">S</span>
                </div>
              </span>
            </Link>
            <ul className="submenu">
              <li><Link href="/ServiceDetails?service=inception">Entity Formation & Founder Equity</Link></li>
              <li><Link href="/ServiceDetails?service=financing">Seed & VC SAFE Financing</Link></li>
              <li><Link href="/ServiceDetails?service=contracts">Commercial SaaS & Enterprise Contracts</Link></li>
              <li><Link href="/ServiceDetails?service=banking">Cross-Border Banking & Tax Routing</Link></li>
              <li><Link href="/ServiceDetails?service=esop">Global Talent, ESOPs & IP Protection</Link></li>
              <li><Link href="/ServiceDetails?service=preipo">M&A Strategy, Diligence & Pre-IPO</Link></li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link className="nav-link" href="#">
              <span className="rolling-text">
                <div className="block">
                  <span className="letter">J</span><span className="letter">U</span><span className="letter">R</span><span className="letter">I</span><span className="letter">S</span><span className="letter">D</span><span className="letter">I</span><span className="letter">C</span><span className="letter">T</span><span className="letter">I</span><span className="letter">O</span><span className="letter">N</span><span className="letter">S</span>
                </div>
                <div className="block">
                  <span className="letter">J</span><span className="letter">U</span><span className="letter">R</span><span className="letter">I</span><span className="letter">S</span><span className="letter">D</span><span className="letter">I</span><span className="letter">C</span><span className="letter">T</span><span className="letter">I</span><span className="letter">O</span><span className="letter">N</span><span className="letter">S</span>
                </div>
              </span>
            </Link>
            <ul className="submenu">
              <li><Link href="/ServiceDetails?service=us">🇺🇸 United States (Delaware C-Corp)</Link></li>
              <li><Link href="/ServiceDetails?service=uk">🇬🇧 United Kingdom (London Tech Ltd)</Link></li>
              <li><Link href="/ServiceDetails?service=sg">🇸🇬 Singapore (Southeast Asia HoldCo)</Link></li>
              <li><Link href="/ServiceDetails?service=au">🇦🇺 Australia (Sydney & Melbourne Pty Ltd)</Link></li>
              <li><Link href="/ServiceDetails?service=ca">🇨🇦 Canada (Federal & Provincial Tech Corp)</Link></li>
            </ul>
          </li>
          <li>
            <Link className="nav-link" href="/About">
              <span className="rolling-text">
                <div className="block"><span className="letter">A</span><span className="letter">B</span><span className="letter">O</span><span className="letter">U</span><span className="letter">T</span></div>
                <div className="block"><span className="letter">A</span><span className="letter">B</span><span className="letter">O</span><span className="letter">U</span><span className="letter">T</span></div>
              </span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/FaqOne">
              <span className="rolling-text">
                <div className="block"><span className="letter">F</span><span className="letter">A</span><span className="letter">Q</span><span className="letter">S</span></div>
                <div className="block"><span className="letter">F</span><span className="letter">A</span><span className="letter">Q</span><span className="letter">S</span></div>
              </span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/Contact">
              <span className="rolling-text">
                <div className="block"><span className="letter">C</span><span className="letter">O</span><span className="letter">N</span><span className="letter">T</span><span className="letter">A</span><span className="letter">C</span><span className="letter">T</span></div>
                <div className="block"><span className="letter">C</span><span className="letter">O</span><span className="letter">N</span><span className="letter">T</span><span className="letter">A</span><span className="letter">C</span><span className="letter">T</span></div>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
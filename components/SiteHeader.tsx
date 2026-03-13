"use client";

import Link from "next/link";
import { useState } from "react";
import HeaderUser from "./HeaderUser";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Link className="brand" href="/">
        <span className="brand-mark" aria-hidden="true">
          <svg
            className="brand-logo"
            viewBox="0 0 64 64"
            role="img"
            aria-label="L1 Coaching Center"
          >
            <defs>
              <linearGradient id="brandGlow" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#11c5b6" />
                <stop offset="50%" stopColor="#2b6bf3" />
                <stop offset="100%" stopColor="#ffb347" />
              </linearGradient>
            </defs>
            <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#brandGlow)" />
            <path
              d="M22 18 v28 h8"
              fill="none"
              stroke="#0b1020"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38 18 v28"
              fill="none"
              stroke="#0b1020"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="38" cy="18" r="3" fill="#0b1020" />
          </svg>
        </span>
        <span className="brand-text">
          <span className="brand-title">L1 Coaching</span>
          <span className="brand-sub">JEE · NEET · Govt</span>
        </span>
      </Link>

      <button
        className="nav-hamburger"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(prev => !prev)}
      >
        <span className={`hamburger-bar bar1${mobileOpen ? " open" : ""}`} />
        <span className={`hamburger-bar bar2${mobileOpen ? " open" : ""}`} />
        <span className={`hamburger-bar bar3${mobileOpen ? " open" : ""}`} />
      </button>

      <nav className={`nav${mobileOpen ? " mobile-open" : ""}`} aria-label="Primary">
        <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

        {/* Courses dropdown */}
        <div className="nav-dropdown">
          <button className="nav-dropdown-btn">
            Courses <span aria-hidden="true">▾</span>
          </button>
          <div className="nav-dropdown-menu">
            <Link href="/jee" onClick={() => setMobileOpen(false)}>JEE Main + Advanced</Link>
            <Link href="/neet" onClick={() => setMobileOpen(false)}>NEET</Link>
            <Link href="/govt" onClick={() => setMobileOpen(false)}>Govt Jobs</Link>
            <Link href="/courses" onClick={() => setMobileOpen(false)}>All Courses</Link>
          </div>
        </div>

        {/* Resources dropdown */}
        <div className="nav-dropdown">
          <button className="nav-dropdown-btn">
            Resources <span aria-hidden="true">▾</span>
          </button>
          <div className="nav-dropdown-menu">
            <Link href="/tests" onClick={() => setMobileOpen(false)}>Tests</Link>
            <Link href="/lectures" onClick={() => setMobileOpen(false)}>Lectures</Link>
            <Link href="/materials" onClick={() => setMobileOpen(false)}>Materials</Link>
            <Link href="/doubts" onClick={() => setMobileOpen(false)}>Doubts</Link>
          </div>
        </div>

        <Link href="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
        <Link href="/admin" onClick={() => setMobileOpen(false)}>Admin</Link>
        <Link className="nav-demo" href="#inquiry" onClick={() => setMobileOpen(false)}>
          Book Demo
        </Link>

        <div className="nav-divider" aria-hidden="true" />
        <HeaderUser />
      </nav>
    </header>
  );
}

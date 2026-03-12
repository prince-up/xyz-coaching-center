import Link from "next/link";

export default function SiteHeader() {
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
          <span className="brand-title">L1 Coaching Center</span>
          <span className="brand-sub">JEE · NEET · Govt</span>
        </span>
      </Link>
      <nav className="nav" aria-label="Primary">
        <Link href="/">Home</Link>
        <Link href="/jee">JEE</Link>
        <Link href="/neet">NEET</Link>
        <Link href="/govt">Govt Jobs</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/tests">Tests</Link>
        <Link href="/lectures">Lectures</Link>
        <Link href="/materials">Materials</Link>
        <Link href="/doubts">Doubts</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>
        <Link href="/#inquiry" className="cta">
          Book counseling
        </Link>
      </nav>
    </header>
  );
}

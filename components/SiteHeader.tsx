import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark" aria-hidden="true" />
        L1 Coaching Center
      </Link>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/jee">JEE</Link>
        <Link href="/neet">NEET</Link>
        <Link href="/govt">Govt Jobs</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/login">Login</Link>
        <Link href="/#inquiry" className="cta">
          Book counseling
        </Link>
      </nav>
    </header>
  );
}

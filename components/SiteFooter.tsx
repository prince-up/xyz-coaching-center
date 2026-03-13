export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-meta">
        <strong>L1 Coaching Center</strong>
        <p className="footer-tagline">
          Structured preparation for JEE, NEET, SSC, Banking, Railways, and
          State exams.
        </p>
        <address>
          Durgakund, Varanasi, Uttar Pradesh 221005<br />
          Mon to Sat, 9:00 AM to 8:00 PM
        </address>
        <div className="footer-accent-pill">Trusted by 3,50,000+ learners</div>
      </div>

      <div className="footer-grid">
        <div className="footer-links">
          <strong>Programs</strong>
          <a href="/jee">JEE Main + Advanced</a>
          <a href="/neet">NEET Track</a>
          <a href="/govt/ssc">SSC Exams</a>
          <a href="/govt/banking">Banking Exams</a>
          <a href="/govt/railways">Railway Exams</a>
        </div>

        <div className="footer-links">
          <strong>Platform</strong>
          <a href="/tests">Test Series</a>
          <a href="/lectures">Video Lectures</a>
          <a href="/materials">Study Materials</a>
          <a href="/doubts">Doubt Support</a>
          <a href="/dashboard">Student Dashboard</a>
        </div>

        <div className="footer-links">
          <strong>Company</strong>
          <a href="/courses">All Courses</a>
          <a href="/admin">Admin</a>
          <a href="/login">Login</a>
          <a href="/signup">Create Account</a>
        </div>

        <div className="footer-links">
          <strong>Support</strong>
          <a href="mailto:hello@l1coaching.in">hello@l1coaching.in</a>
          <a href="tel:+919415000000">+91 94150 00000</a>
          <span>Response window: within 24 hours</span>
        </div>
      </div>

      <div className="footer-copy">
        <span>© {year} L1 Coaching Center. All rights reserved.</span>
        <div className="footer-legal-links">
          <a href="/login">Terms</a>
          <a href="/signup">Privacy</a>
          <a href="/doubts">Support Center</a>
        </div>
      </div>
    </footer>
  );
}

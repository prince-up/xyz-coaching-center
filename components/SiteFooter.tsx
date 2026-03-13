export default function SiteFooter() {
  return (
    <footer className="footer">
      {/* Brand + Address */}
      <div>
        <strong>L1 Coaching Center</strong>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem" }}>
          JEE Main + Advanced · NEET · SSC · Banking · Railways
        </p>
        <address>
          📍 Near Durgakund Temple, Durgakund<br />
          Varanasi (Banaras), Uttar Pradesh — 221 005
        </address>
        <div className="footer-accent-pill">⭐ Trusted since 2010</div>
      </div>

      {/* Courses */}
      <div className="footer-links">
        <strong>Courses</strong>
        <a href="/jee">⚛ JEE Main + Advanced</a>
        <a href="/neet">🧬 NEET Focused Track</a>
        <a href="/govt/ssc">📋 SSC Exams</a>
        <a href="/govt/banking">🏦 Banking Exams</a>
        <a href="/govt/railways">🚆 Railway Exams</a>
        <a href="/courses">All Courses →</a>
      </div>

      {/* Resources */}
      <div className="footer-links">
        <strong>Resources</strong>
        <a href="/tests">📝 Test Series</a>
        <a href="/lectures">🎥 Video Lectures</a>
        <a href="/materials">📚 Study Materials</a>
        <a href="/doubts">💬 Doubt Board</a>
        <a href="/dashboard">📊 Dashboard</a>
      </div>

      {/* Contact */}
      <div className="footer-links">
        <strong>Contact Us</strong>
        <a href="mailto:hello@l1coaching.in">📧 hello@l1coaching.in</a>
        <a href="tel:+919415000000">📞 +91 94150 00000</a>
        <span>🕘 Mon – Sat · 9 AM – 8 PM</span>
        <span>🚶 Walk-ins welcome at Durgakund</span>
      </div>

      {/* Copyright row */}
      <div className="footer-copy">
        <span>© 2026 L1 Coaching Center, Varanasi. All rights reserved.</span>
        <span>Empowering students across UP since 2010 🎓</span>
      </div>
    </footer>
  );
}

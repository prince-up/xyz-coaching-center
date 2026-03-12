export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>L1 Coaching Center</strong>
        <span>JEE Main + Advanced + NEET · Online + Classroom · Jaipur</span>
        <p className="footer-note">
          Results-first mentoring with daily practice, analytics, and support.
        </p>
      </div>
      <div className="footer-links">
        <strong>Quick links</strong>
        <a href="/courses">Courses</a>
        <a href="/tests">Tests</a>
        <a href="/lectures">Lectures</a>
        <a href="/materials">Materials</a>
        <a href="/doubts">Doubts</a>
      </div>
      <div className="footer-links">
        <strong>Contact</strong>
        <a href="mailto:hello@l1coaching.in">hello@l1coaching.in</a>
        <a href="tel:+919999999999">+91 99999 99999</a>
        <span className="footer-note">Mon-Sat · 9:00 AM - 8:00 PM</span>
      </div>
    </footer>
  );
}

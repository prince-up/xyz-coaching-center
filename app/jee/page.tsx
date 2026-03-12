import AuthPanel from "../../components/AuthPanel";
import InquiryForm from "../../components/InquiryForm";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function JeePage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="badge">JEE Main + Advanced</p>
          <h1>Precision coaching for engineering aspirants.</h1>
          <p className="hero-subtitle">
            Two-year and one-year tracks with deep concept drills, weekly
            analytics, and rank-focused mentorship.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book counseling</a>
            <a className="ghost" href="/courses">View courses</a>
          </div>
        </div>
        <div className="hero-visual">
          <h3>JEE learning loop</h3>
          <ul>
            <li>Concept sprint + DPP daily</li>
            <li>Weekend full-length tests</li>
            <li>Advance-level problem clinics</li>
          </ul>
          <div className="metric-row">
            <div>
              <span>Avg rank jump</span>
              <strong>+1800</strong>
            </div>
            <div>
              <span>Mentor ratio</span>
              <strong>1:12</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Batch structure</h2>
          <p>Choose the pacing that suits your class year and target rank.</p>
        </div>
        <div className="program-grid">
          <article className="program-card">
            <h3>2-Year Foundation</h3>
            <p>Class 11-12 roadmap with weekly tests and monthly mock exams.</p>
            <div className="program-meta">
              <span className="pill">PCM core</span>
              <span className="pill ghost">24 months</span>
            </div>
          </article>
          <article className="program-card">
            <h3>1-Year Accelerator</h3>
            <p>For droppers or class 12 students targeting high percentiles.</p>
            <div className="program-meta">
              <span className="pill">Fast-track</span>
              <span className="pill ghost">12 months</span>
            </div>
          </article>
          <article className="program-card">
            <h3>Crash Revision</h3>
            <p>Last 90 days intensive tests, analytics, and chapter sprints.</p>
            <div className="program-meta">
              <span className="pill">90-day sprint</span>
              <span className="pill ghost">Test-only</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Subject mastery plan</h2>
          <p className="hero-subtitle">
            Weekly diagnostics for Physics, Chemistry, and Mathematics with
            precision feedback.
          </p>
          <div className="timeline">
            <div>
              <strong>Physics</strong>
              <span>Conceptual depth + calculus-based problem sets.</span>
            </div>
            <div>
              <strong>Chemistry</strong>
              <span>NCERT precision + advanced organic practice.</span>
            </div>
            <div>
              <strong>Mathematics</strong>
              <span>Speed-building drills and advanced problem marathons.</span>
            </div>
          </div>
        </div>
        <div className="cta-band">
          <h3>Next JEE mock test</h3>
          <p>Sunday 9:00 AM · Online + Classroom · Free for new students.</p>
          <a className="ghost" href="#inquiry">Reserve a seat</a>
        </div>
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your JEE roadmap</h2>
          <p>Share your targets and get a mentor-designed weekly plan.</p>
        </div>
        <InquiryForm />
      </section>

      <section className="section" id="auth">
        <div className="section-head">
          <h2>Student portal</h2>
          <p>Track JEE progress, tests, and reports in one place.</p>
        </div>
        <AuthPanel />
      </section>

      <SiteFooter />
    </main>
  );
}

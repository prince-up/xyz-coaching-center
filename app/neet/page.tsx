import AuthPanel from "../../components/AuthPanel";
import InquiryForm from "../../components/InquiryForm";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function NeetPage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="badge">NEET Focused Track</p>
          <h1>NEET prep with clarity, consistency, and MCQ mastery.</h1>
          <p className="hero-subtitle">
            Biology-heavy teaching with daily practice, revision loops, and
            exam-aligned mock tests.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book counseling</a>
            <a className="ghost" href="/courses">View courses</a>
          </div>
        </div>
        <div className="hero-visual">
          <h3>NEET practice system</h3>
          <ul>
            <li>Daily MCQ drills with accuracy tracking</li>
            <li>NCERT-first Biology deep dives</li>
            <li>Fortnightly full syllabus mocks</li>
          </ul>
          <div className="metric-row">
            <div>
              <span>Avg score rise</span>
              <strong>+92</strong>
            </div>
            <div>
              <span>Revision cycles</span>
              <strong>6x</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Batch structure</h2>
          <p>Build concept clarity and MCQ speed with these formats.</p>
        </div>
        <div className="program-grid">
          <article className="program-card">
            <h3>2-Year Core</h3>
            <p>Class 11-12 NEET syllabus with daily biology practice.</p>
            <div className="program-meta">
              <span className="pill">PCB focus</span>
              <span className="pill ghost">24 months</span>
            </div>
          </article>
          <article className="program-card">
            <h3>1-Year Intensive</h3>
            <p>For droppers aiming to improve scores quickly.</p>
            <div className="program-meta">
              <span className="pill">Rapid revision</span>
              <span className="pill ghost">12 months</span>
            </div>
          </article>
          <article className="program-card">
            <h3>Revision Sprint</h3>
            <p>90-day final stretch with mock tests and error clinics.</p>
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
            Weekly diagnostics for Biology, Chemistry, and Physics with
            precision feedback.
          </p>
          <div className="timeline">
            <div>
              <strong>Biology</strong>
              <span>NCERT-aligned teaching + daily MCQ sets.</span>
            </div>
            <div>
              <strong>Chemistry</strong>
              <span>High-yield chapters with reaction flow mastery.</span>
            </div>
            <div>
              <strong>Physics</strong>
              <span>Formula drills, numericals, and exam simulations.</span>
            </div>
          </div>
        </div>
        <div className="cta-band">
          <h3>Next NEET mock test</h3>
          <p>Saturday 8:30 AM · Online + Classroom · Free for new students.</p>
          <a className="ghost" href="#inquiry">Reserve a seat</a>
        </div>
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your NEET roadmap</h2>
          <p>Share your targets and get a mentor-designed weekly plan.</p>
        </div>
        <InquiryForm />
      </section>

      <section className="section" id="auth">
        <div className="section-head">
          <h2>Student portal</h2>
          <p>Track NEET progress, tests, and reports in one place.</p>
        </div>
        <AuthPanel />
      </section>

      <SiteFooter />
    </main>
  );
}

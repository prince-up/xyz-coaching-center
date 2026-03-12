import AuthPanel from "../../components/AuthPanel";
import InquiryForm from "../../components/InquiryForm";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function GovtJobsPage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="badge">Government Exams</p>
          <h1>Government exam prep with daily targets and weekly proof.</h1>
          <p className="hero-subtitle">
            Quant, reasoning, and GK preparation with topic-wise targets,
            weekly tests, and interview readiness.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book counseling</a>
            <a className="ghost" href="/courses">View courses</a>
          </div>
        </div>
        <div className="hero-visual">
          <h3>Exam focus</h3>
          <ul>
            <li>SSC CGL · CHSL · MTS</li>
            <li>Bank PO · Clerk · RRB</li>
            <li>Railways · State exams</li>
          </ul>
          <div className="metric-row">
            <div>
              <span>Weekly mocks</span>
              <strong>3x</strong>
            </div>
            <div>
              <span>Mentor ratio</span>
              <strong>1:20</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Preparation blueprint</h2>
          <p>Structured phases that keep every subject on track.</p>
        </div>
        <div className="phase-grid">
          <article className="phase-card">
            <span className="pill">Phase 1</span>
            <h3>Foundation</h3>
            <p>Core concepts in quant, reasoning, and GK with daily drills.</p>
          </article>
          <article className="phase-card">
            <span className="pill">Phase 2</span>
            <h3>Speed building</h3>
            <p>Sectional tests, timing strategy, and error analysis.</p>
          </article>
          <article className="phase-card">
            <span className="pill">Phase 3</span>
            <h3>Selection push</h3>
            <p>Full mocks, interview prep, and revision sprints.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Choose your exam stream</h2>
          <p>Pick a track to open a dedicated dashboard.</p>
        </div>
        <div className="stream-grid">
          <a className="stream-card" href="/govt/ssc">
            <div className="stream-header">
              <span className="pill">SSC</span>
              <span className="pill ghost">CGL · CHSL · MTS</span>
            </div>
            <h3>SSC Exams</h3>
            <p>Tier-wise plan, quant + reasoning drills, and mock analysis.</p>
            <span className="link">Open SSC dashboard</span>
          </a>
          <a className="stream-card" href="/govt/banking">
            <div className="stream-header">
              <span className="pill">Banking</span>
              <span className="pill ghost">PO · Clerk · RRB</span>
            </div>
            <h3>Banking Exams</h3>
            <p>Speed drills, sectional tests, and interview readiness.</p>
            <span className="link">Open Banking dashboard</span>
          </a>
          <a className="stream-card" href="/govt/railways">
            <div className="stream-header">
              <span className="pill">Railways</span>
              <span className="pill ghost">NTPC · Group D</span>
            </div>
            <h3>Railway Exams</h3>
            <p>Shift-based strategy, mock cycles, and GK focus.</p>
            <span className="link">Open Railways dashboard</span>
          </a>
          <a className="stream-card" href="/govt/state">
            <div className="stream-header">
              <span className="pill">State</span>
              <span className="pill ghost">UP · Bihar · MP</span>
            </div>
            <h3>State Exams</h3>
            <p>State-specific GK, policy updates, and regional prep.</p>
            <span className="link">Open State dashboard</span>
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Batch options</h2>
          <p>Flexible batches for working students and full-time aspirants.</p>
        </div>
        <div className="batch-grid">
          <article className="batch-card">
            <h3>Comprehensive 10-Month</h3>
            <p>Complete syllabus with weekly mocks and personal mentoring.</p>
            <div className="badge-row">
              <span className="pill">Full syllabus</span>
              <span className="pill ghost">10 months</span>
            </div>
          </article>
          <article className="batch-card">
            <h3>Fast-track 6-Month</h3>
            <p>Revision + practice cycle for upcoming exam dates.</p>
            <div className="badge-row">
              <span className="pill">Fast-track</span>
              <span className="pill ghost">6 months</span>
            </div>
          </article>
          <article className="batch-card">
            <h3>Test Series</h3>
            <p>Full mocks, sectional tests, and analytics dashboard.</p>
            <div className="badge-row">
              <span className="pill">Test-only</span>
              <span className="pill ghost">Rolling</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Subject focus</h2>
          <p className="hero-subtitle">
            Weekly targets across quant, reasoning, English, and GK.
          </p>
          <div className="timeline">
            <div>
              <strong>Quantitative Aptitude</strong>
              <span>Arithmetic, algebra, and DI drills.</span>
            </div>
            <div>
              <strong>Reasoning</strong>
              <span>Puzzles, series, and logic practice.</span>
            </div>
            <div>
              <strong>GK + English</strong>
              <span>Daily current affairs + grammar mastery.</span>
            </div>
          </div>
        </div>
        <div className="cta-band">
          <h3>Next mock test</h3>
          <p>Saturday 7:00 PM · Online + Classroom · Free for new students.</p>
          <a className="ghost" href="#inquiry">Reserve a seat</a>
        </div>
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your government exam roadmap</h2>
          <p>Share your target exam and we will map your plan.</p>
        </div>
        <InquiryForm />
      </section>

      <section className="section" id="auth">
        <div className="section-head">
          <h2>Student portal</h2>
          <p>Track tests, reports, and study plans in one place.</p>
        </div>
        <AuthPanel />
      </section>

      <SiteFooter />
    </main>
  );
}

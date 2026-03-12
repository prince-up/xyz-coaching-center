import AuthPanel from "../components/AuthPanel";
import CourseList from "../components/CourseList";
import InquiryForm from "../components/InquiryForm";
import AdminPanel from "../components/AdminPanel";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function Home() {
  return (
    <main className="page">
      <SiteHeader />
      <header className="hero">
        <div className="hero-content">
          <p className="badge">L1 Coaching Center · Mission Control</p>
          <h1>Prep built like a system: visible, measured, unstoppable.</h1>
          <p className="hero-subtitle">
            Weekly sprint planning, precision diagnostics, and mentor
            interventions that keep every student on track.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book a strategy call</a>
            <a className="ghost" href="/courses">View live courses</a>
          </div>
          <div className="stat-strip">
            <div className="stat-card">
              <span>Live batches</span>
              <strong>14</strong>
            </div>
            <div className="stat-card">
              <span>Weekly completion</span>
              <strong>92%</strong>
            </div>
            <div className="stat-card">
              <span>Avg rank lift</span>
              <strong>+27%</strong>
            </div>
            <div className="stat-card">
              <span>Students trained</span>
              <strong>3,50,000+</strong>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <h3>Next intake</h3>
          <p className="hero-card-meta">April 2026 · Hybrid batches</p>
          <ul>
            <li>Diagnostic test + roadmap</li>
            <li>Small-batch mentorship</li>
            <li>Weekly parent progress report</li>
          </ul>
          <div className="hero-card-accent">
            Limited seats for advanced batch
          </div>
        </div>
      </header>

      <section className="section">
        <div className="section-head">
          <h2>Weekly command center</h2>
          <p>Everything you need to track targets, tests, and outcomes.</p>
        </div>
        <div className="dashboard-grid">
          <div className="info-card">
            <div className="card-header">
              <h3>Week 12 sprint</h3>
              <span className="chip">Live</span>
            </div>
            <div className="progress-list">
              <div>
                <strong>Physics</strong>
                <span>Electrostatics test + 120 MCQs</span>
              </div>
              <div>
                <strong>Chemistry</strong>
                <span>Organic practice + error notebook</span>
              </div>
              <div>
                <strong>Maths</strong>
                <span>Calculus sprint + time drills</span>
              </div>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">
              <h3>Performance snapshot</h3>
              <span className="chip ghost">Last 7 days</span>
            </div>
            <div className="kpi-grid">
              <div>
                <span>Accuracy</span>
                <strong>76%</strong>
              </div>
              <div>
                <span>Attempt rate</span>
                <strong>88%</strong>
              </div>
              <div>
                <span>Rank trend</span>
                <strong>Upward</strong>
              </div>
            </div>
            <p className="muted-text">
              Mentor review locks the next set of topics every week.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Programs built for outcomes</h2>
          <p>Choose a track and follow a clear, measurable plan.</p>
        </div>
        <div className="program-grid">
          <article className="program-card">
            <div className="program-meta">
              <span className="pill">JEE</span>
              <span className="pill ghost">2-year + 1-year</span>
            </div>
            <h3>JEE Main + Advanced</h3>
            <p>
              Concept depth, weekly mocks, and advanced problem clinics for
              rank growth.
            </p>
            <div className="program-footer">
              <span>Starts April 2026</span>
              <a className="link" href="/jee">View details</a>
            </div>
          </article>
          <article className="program-card">
            <div className="program-meta">
              <span className="pill">NEET</span>
              <span className="pill ghost">2-year + 1-year</span>
            </div>
            <h3>NEET Focused Track</h3>
            <p>
              Biology-first learning loop with daily MCQ drills and revision
              sprints.
            </p>
            <div className="program-footer">
              <span>Starts April 2026</span>
              <a className="link" href="/neet">View details</a>
            </div>
          </article>
          <article className="program-card">
            <div className="program-meta">
              <span className="pill">Govt Jobs</span>
              <span className="pill ghost">SSC · Banking · Railways</span>
            </div>
            <h3>Government Exam Track</h3>
            <p>
              Quant, reasoning, and GK plans with daily tests, sectional
              targets, and interview prep.
            </p>
            <div className="program-footer">
              <span>Rolling batches</span>
              <a className="link" href="/govt">View details</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Choose your govt exam stream</h2>
          <p>Pick a stream to open a dedicated dashboard.</p>
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

      <section className="section split">
        <div>
          <h2>Batch structure</h2>
          <p className="hero-subtitle">
            Clear weekly rhythm. Clear weekly feedback. Clear next steps.
          </p>
          <div className="timeline">
            <div>
              <strong>Concept days</strong>
              <span>Lectures + guided practice + mini quizzes</span>
            </div>
            <div>
              <strong>Assessment days</strong>
              <span>Timed tests + analytics review</span>
            </div>
            <div>
              <strong>Revision days</strong>
              <span>Problem clinics + doubt clearing</span>
            </div>
          </div>
        </div>
        <div className="panel">
          <h3>Parents stay in the loop</h3>
          <p>
            Weekly summaries include accuracy, attendance, and chapter
            completion rates.
          </p>
          <div className="metric-row">
            <div>
              <span>Weekly report</span>
              <strong>Sunday</strong>
            </div>
            <div>
              <span>Mentor call</span>
              <strong>Monthly</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="courses">
        <div className="section-head">
          <h2>Courses aligned to your goal</h2>
          <p>
            Courses are loaded live from Supabase. Add or update them from the
            admin panel once your database is ready.
          </p>
        </div>
        <CourseList />
      </section>

      <section className="section inquiry-panel" id="inquiry">
        <div className="section-head">
          <h2>Talk to a mentor</h2>
          <p>
            Share your goal and we will respond within 24 hours with a custom
            study plan.
          </p>
        </div>
        <InquiryForm />
      </section>
+      <SiteFooter />
     </main>
   );
 }

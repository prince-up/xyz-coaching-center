import CourseList from "../components/CourseList";
import HeroAnimatedBackdrop from "../components/HeroAnimatedBackdrop";
import InquiryForm from "../components/InquiryForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function Home() {
  const stickerItems = [
    { label: "Get up to", value: "90%", sub: "Scholarship", tone: "" },
    { label: "Ranked", value: "#1", sub: "Coaching in UP", tone: "sticker-blue" },
    { label: "Expert", value: "25+", sub: "Faculty Verified", tone: "sticker-green" },
    { label: "Proven", value: "98%", sub: "Results Rate", tone: "sticker-crimson" },
    { label: "Doubts", value: "24x7", sub: "Mentor Support", tone: "sticker-violet" },
    { label: "Daily", value: "2", sub: "Practice Tests", tone: "sticker-teal" },
    { label: "Parents", value: "100%", sub: "Weekly Reports", tone: "sticker-amber" }
  ];

  return (
    <main className="page" id="main-content">
      <SiteHeader />
      <header className="hero hero-banner">
        <HeroAnimatedBackdrop />
        <div className="hero-banner-copy">
          <span className="banner-pill">Scholarship + Admission Test</span>
          <h1>One exam. One plan. Better rank outcomes.</h1>
          <p className="hero-subtitle">
            Results-focused JEE, NEET, and Govt preparation with daily targets,
            analytics, and expert mentor support.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Register for counseling</a>
            <a className="ghost" href="/tests">Explore test series</a>
          </div>
          <div className="hero-trust-badges" aria-label="Trust badges">
            <span>Google rating 4.9/5</span>
            <span>Since 2010</span>
            <span>3,50,000+ students mentored</span>
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
        <div className="hero-banner-panel">
          <div className="sticker-slider" aria-label="Highlights">
            <div className="sticker-track">
              {[...stickerItems, ...stickerItems].map((item, index) => (
                <div
                  className={`sticker ${item.tone}`.trim()}
                  key={`${item.label}-${item.value}-${index}`}
                >
                  <span className="sticker-label">{item.label}</span>
                  <strong>{item.value}</strong>
                  <span className="sticker-sub">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-banner-card">
            <h3>April 2026 intake</h3>
            <p className="hero-card-meta">Online + classroom · Jaipur</p>
            <ul>
              <li>Diagnostic test + roadmap</li>
              <li>Small-batch mentorship</li>
            </ul>
            <div className="hero-card-accent">
              Limited seats for advanced batch
            </div>
          </div>
        </div>
      </header>

      <section className="section why-parents">
        <div className="section-head">
          <h2>Why parents choose L1 Coaching</h2>
          <p>Simple systems, visible progress, and timely mentor intervention.</p>
        </div>
        <div className="why-grid">
          <article className="why-card">
            <h3>Weekly transparent reporting</h3>
            <p>Families get attendance, accuracy, and chapter completion updates.</p>
          </article>
          <article className="why-card">
            <h3>Test analytics with action plan</h3>
            <p>Every test is followed by error analysis and next-week targets.</p>
          </article>
          <article className="why-card">
            <h3>Small-batch mentor accountability</h3>
            <p>Each learner is tracked with regular checkpoints and quick doubt support.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Your weekly progress dashboard</h2>
          <p>Track targets, tests, and outcomes from one clear view.</p>
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
          <h2>Programs designed for measurable results</h2>
          <p>Pick a goal and follow a structured, trackable preparation path.</p>
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

      <section className="section trust-strip" aria-label="Proof and credibility">
        <p>Trusted by families from 180+ cities</p>
        <div className="trust-list">
          <span>Parent NPS 72</span>
          <span>94% batch attendance</span>
          <span>Daily mentor checkpoints</span>
          <span>AI-assisted test analytics</span>
          <span>Scholarship-driven admissions</span>
        </div>
      </section>

      <section className="section success-section">
        <div className="section-head">
          <h2>Outcomes that are easy to verify</h2>
          <p>
            Real student progress cards, rank movement, and parent-visible
            learning consistency.
          </p>
        </div>
        <div className="success-grid">
          <article className="success-card">
            <span className="pill">JEE</span>
            <h3>Arjun moved from AIR 31k to AIR 6.4k</h3>
            <p>
              Weekly strategy calls and error-book corrections turned test
              attempts into scoring attempts.
            </p>
            <strong>+78 percentile jump in 7 months</strong>
          </article>
          <article className="success-card">
            <span className="pill">NEET</span>
            <h3>Sana raised Biology accuracy to 92%</h3>
            <p>
              Daily revision loops and memory maps improved retention and
              reduced negative marking.
            </p>
            <strong>+143 marks across mock cycle</strong>
          </article>
          <article className="success-card">
            <span className="pill">Govt</span>
            <h3>Ravi cracked Banking PO on second attempt</h3>
            <p>
              Sectional speed drills and interview mentoring closed the final
              gap between preparation and selection.
            </p>
            <strong>From pre cutoff to final merit list</strong>
          </article>
        </div>
      </section>

      <section className="section cta-spotlight">
        <div>
          <h2>Need a clear starting point?</h2>
          <p>
            Take a free diagnostic and receive a personalized 12-week action
            plan from our mentors.
          </p>
        </div>
        <div className="hero-actions">
          <a className="primary" href="#inquiry">Book free counseling</a>
          <a className="ghost" href="/tests">Take a sample test</a>
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

      <a className="sticky-cta" href="#inquiry">Book Free Counseling</a>

      <SiteFooter />
    </main>
  );
}

import InquiryForm from "../../components/InquiryForm";
import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import TrackCoursesList from "../../components/TrackCoursesList";

export default function GovtJobsPage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="badge">Government Exams</p>
          <h1>Government exam prep with clear targets and weekly proof.</h1>
          <p className="hero-subtitle">
            Focused preparation for SSC, Banking, Railways, and State exams
            with measurable progress every week.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book counseling</a>
            <a className="ghost" href="/courses">View courses</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="panel-image">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Students preparing for government exams"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{ objectFit: "cover" }}
            />
          </div>
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
          <h2>3-phase preparation blueprint</h2>
          <p>Simple structure that keeps your full syllabus in control.</p>
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
          <p>Pick your target and move to the dedicated preparation page.</p>
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
          <h2>Govt exam courses</h2>
          <p>Curated courses for SSC, Banking, Railways, and State exams.</p>
        </div>
        <TrackCoursesList track="govt" />
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your government exam roadmap</h2>
          <p>Share your target exam and get a personalized weekly plan.</p>
        </div>
        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}

import InquiryForm from "../../components/InquiryForm";
import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import TrackCoursesList from "../../components/TrackCoursesList";

export default function JeePage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="badge">JEE Main + Advanced</p>
          <h1>JEE preparation engineered for rank growth.</h1>
          <p className="hero-subtitle">
            Advanced problem practice, weekly diagnostics, and mentor-led
            correction loops designed to improve rank with consistency.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book counseling</a>
            <a className="ghost" href="/courses">View all programs</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="panel-image">
            <Image
              src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80"
              alt="JEE students practicing mathematics and physics"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>JEE learning loop</h3>
          <ul>
            <li>Concept sprint + DPP daily</li>
            <li>Weekend full-length tests</li>
            <li>Advanced problem clinics</li>
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
          <h2>JEE success blueprint</h2>
          <p>Phase-led plan with checkpoints and weekly analytics.</p>
        </div>
        <div className="phase-grid">
          <article className="phase-card">
            <span className="pill">Phase 1</span>
            <h3>Concept depth</h3>
            <p>PCM fundamentals and daily disciplined practice.</p>
          </article>
          <article className="phase-card">
            <span className="pill">Phase 2</span>
            <h3>Problem mastery</h3>
            <p>Advanced sheets, mixed drills, and timed solving strategy.</p>
          </article>
          <article className="phase-card">
            <span className="pill">Phase 3</span>
            <h3>Rank launch</h3>
            <p>Full-length mocks, error clinics, and personal strategy.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Batch options</h2>
          <p>Choose a timeline that matches your class year.</p>
        </div>
        <div className="batch-grid">
          <article className="batch-card">
            <h3>2-Year Foundation</h3>
            <p>Class 11-12 roadmap with weekly tests and monthly mocks.</p>
            <div className="badge-row">
              <span className="pill">PCM core</span>
              <span className="pill ghost">24 months</span>
            </div>
          </article>
          <article className="batch-card">
            <h3>1-Year Accelerator</h3>
            <p>For droppers and class 12 students targeting high ranks.</p>
            <div className="badge-row">
              <span className="pill">Fast-track</span>
              <span className="pill ghost">12 months</span>
            </div>
          </article>
          <article className="batch-card">
            <h3>Crash Revision</h3>
            <p>90-day intensive tests, analytics, and revision sprints.</p>
            <div className="badge-row">
              <span className="pill">90-day sprint</span>
              <span className="pill ghost">Test-only</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>JEE courses</h2>
          <p>Focused courses that match the JEE roadmap.</p>
        </div>
        <TrackCoursesList track="jee" />
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your JEE roadmap</h2>
          <p>Share your target rank and get a mentor-designed weekly plan.</p>
        </div>
        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}

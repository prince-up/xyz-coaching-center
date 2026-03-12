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
          <p className="badge">L1 Coaching Center</p>
          <h1>Structured JEE + Mains prep with real accountability.</h1>
          <p className="hero-subtitle">
            Weekly diagnostics, curated practice, and mentor-led revisions.
            Track progress per chapter and see exactly where to improve.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book a counseling slot</a>
            <a className="ghost" href="/courses">Explore courses</a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>420+</strong>
              <span>Students mentored</span>
            </div>
            <div>
              <strong>92%</strong>
              <span>Weekly practice completion</span>
            </div>
            <div>
              <strong>18</strong>
              <span>Top 1k ranks last year</span>
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
          <h2>Choose your program</h2>
          <p>Dedicated learning tracks with different pacing and testing.</p>
        </div>
        <div className="program-grid">
          <article className="program-card">
            <div className="program-meta">
              <span className="pill">JEE</span>
              <span className="pill ghost">2-year + 1-year</span>
            </div>
            <h3>JEE Main + Advanced</h3>
            <p>
              Physics-first problem solving, math rigor, and advanced test
              series with weekly analytics.
            </p>
            <a className="link" href="/jee">Explore JEE program</a>
          </article>
          <article className="program-card">
            <div className="program-meta">
              <span className="pill">NEET</span>
              <span className="pill ghost">2-year + 1-year</span>
            </div>
            <h3>NEET Focused Track</h3>
            <p>
              Concept-first teaching for Biology + Chemistry with daily MCQ
              drills and revision loops.
            </p>
            <a className="link" href="/neet">Explore NEET program</a>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Why L1 works</h2>
          <p className="hero-subtitle">
            A structured cycle keeps every student accountable. We plan the
            week, track the week, and re-teach the gaps.
          </p>
          <div className="timeline">
            <div>
              <strong>Monday</strong>
              <span>Targeted concept sprint + mentor check-in</span>
            </div>
            <div>
              <strong>Wednesday</strong>
              <span>Timed drill + analytics session</span>
            </div>
            <div>
              <strong>Saturday</strong>
              <span>Full-length test + revision clinic</span>
            </div>
          </div>
        </div>
        <div className="panel">
          <h3>Personal scorecards</h3>
          <p>
            Track accuracy, attempt rate, and rank trajectory. Parents receive
            updates every Sunday.
          </p>
          <div className="metric-row">
            <div>
              <span>Average improvement</span>
              <strong>+27%</strong>
            </div>
            <div>
              <span>Attendance</span>
              <strong>96%</strong>
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

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Talk to a mentor</h2>
          <p>
            Share your goal and we will respond within 24 hours with a custom
            study plan.
          </p>
        </div>
        <InquiryForm />
      </section>

      <section className="section" id="auth">
        <div className="section-head">
          <h2>Student portal</h2>
          <p>Sign in to manage your inquiry, schedule, and course access.</p>
        </div>
        <AuthPanel />
      </section>

      <section className="section" id="admin">
        <div className="section-head">
          <h2>Admin control</h2>
          <p>
            Only the admin email defined in environment variables can manage
            courses and inquiries.
          </p>
        </div>
        <AdminPanel />
      </section>
      <SiteFooter />
    </main>
  );
}

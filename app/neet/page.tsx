import InquiryForm from "../../components/InquiryForm";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import TrackCoursesList from "../../components/TrackCoursesList";
import TopPerformersList from "../../components/TopPerformersList";
import TeachersList from "../../components/TeachersList";

export default function NeetPage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="badge">NEET Focused Track</p>
          <h1>NEET preparation with precision, pace, and MCQ control.</h1>
          <p className="hero-subtitle">
            Biology-first learning loop with daily practice, revision cycles,
            and exam-aligned mock tests.
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
          <h2>NEET success blueprint</h2>
          <p>Structured phases that keep Biology and Chemistry on track.</p>
        </div>
        <div className="phase-grid">
          <article className="phase-card">
            <span className="pill">Phase 1</span>
            <h3>Concept clarity</h3>
            <p>NCERT-aligned teaching and foundational MCQ practice.</p>
          </article>
          <article className="phase-card">
            <span className="pill">Phase 2</span>
            <h3>Speed building</h3>
            <p>Topic-wise test cycles with daily accuracy tracking.</p>
          </article>
          <article className="phase-card">
            <span className="pill">Phase 3</span>
            <h3>Score surge</h3>
            <p>Full-syllabus mocks, error clinics, and revision sprints.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Batch options</h2>
          <p>Pick a timeline that matches your NEET goal.</p>
        </div>
        <div className="batch-grid">
          <article className="batch-card">
            <h3>2-Year Core</h3>
            <p>Class 11-12 NEET syllabus with daily biology practice.</p>
            <div className="badge-row">
              <span className="pill">PCB focus</span>
              <span className="pill ghost">24 months</span>
            </div>
          </article>
          <article className="batch-card">
            <h3>1-Year Intensive</h3>
            <p>For droppers aiming to improve scores quickly.</p>
            <div className="badge-row">
              <span className="pill">Rapid revision</span>
              <span className="pill ghost">12 months</span>
            </div>
          </article>
          <article className="batch-card">
            <h3>Revision Sprint</h3>
            <p>90-day final stretch with mock tests and error clinics.</p>
            <div className="badge-row">
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

      <section className="section">
        <div className="section-head">
          <h2>NEET courses</h2>
          <p>Biology-first learning plans with weekly tests.</p>
        </div>
        <TrackCoursesList track="neet" />
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Top performers</h2>
          <p>Recent NEET results from our mentor-led batches.</p>
        </div>
        <TopPerformersList track="neet" />
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Faculty for NEET</h2>
          <p>Subject experts for Physics, Chemistry, and Biology.</p>
        </div>
        <TeachersList track="neet" />
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your NEET roadmap</h2>
          <p>Share your targets and get a mentor-designed weekly plan.</p>
        </div>
        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}

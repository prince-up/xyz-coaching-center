import InquiryForm from "../../../components/InquiryForm";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import TrackCoursesList from "../../../components/TrackCoursesList";
import TopPerformersList from "../../../components/TopPerformersList";
import TeachersList from "../../../components/TeachersList";

export default function RailwaysPage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="rail-hero">
        <div>
          <p className="badge">Railways Track</p>
          <h1>Railway exam prep with shift-based strategy.</h1>
          <p className="hero-subtitle">
            NTPC and Group D-focused preparation with daily practice targets and
            mock cycles.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book counseling</a>
            <a className="ghost" href="/govt">Back to Govt Jobs</a>
          </div>
        </div>
        <div className="rail-panel">
          <h3>Shift strategy</h3>
          <div className="rail-list">
            <div>
              <strong>Shift 1</strong>
              <span>Warm-up sets + speed boosters</span>
            </div>
            <div>
              <strong>Shift 2</strong>
              <span>Accuracy challenge + GK sprint</span>
            </div>
            <div>
              <strong>Shift 3</strong>
              <span>Mixed mock + revision loop</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Railway exam lanes</h2>
          <p>Prep blocks built for NTPC and Group D patterns.</p>
        </div>
        <div className="lane-grid">
          <article className="lane-card">
            <h3>Quant + DI</h3>
            <p>Arithmetic focus with daily calculation drills.</p>
          </article>
          <article className="lane-card">
            <h3>Reasoning</h3>
            <p>Puzzles, series, and non-verbal practice sets.</p>
          </article>
          <article className="lane-card">
            <h3>GK + Current</h3>
            <p>Static GK, science basics, and daily updates.</p>
          </article>
          <article className="lane-card">
            <h3>Mock cycles</h3>
            <p>Shift-wise tests with instant scorecards.</p>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Weekly cadence</h2>
          <p className="hero-subtitle">
            Stay test-ready with multi-shift practice.
          </p>
          <div className="timeline">
            <div>
              <strong>Monday</strong>
              <span>Quant + Reasoning sprint tests</span>
            </div>
            <div>
              <strong>Wednesday</strong>
              <span>GK drill + revision quiz</span>
            </div>
            <div>
              <strong>Saturday</strong>
              <span>Railways full mock + analysis</span>
            </div>
          </div>
        </div>
        <div className="cta-band">
          <h3>Next Railways mock</h3>
          <p>Sunday 8:00 AM · Online + Classroom · Free for new students.</p>
          <a className="ghost" href="#inquiry">Reserve a seat</a>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Railways courses</h2>
          <p>NTPC, Group D, ALP, and JE prep batches.</p>
        </div>
        <TrackCoursesList track="govt-railways" />
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Top performers</h2>
          <p>Recent railways results from our mentor-led batches.</p>
        </div>
        <TopPerformersList track="govt-railways" />
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Railways faculty</h2>
          <p>Experts for arithmetic, reasoning, science, and GK.</p>
        </div>
        <TeachersList track="govt-railways" />
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your railway plan</h2>
          <p>Share your target exam and we will map your plan.</p>
        </div>
        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}

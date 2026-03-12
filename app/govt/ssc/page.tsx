import InquiryForm from "../../../components/InquiryForm";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";

export default function SscPage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="ssc-hero">
        <div>
          <p className="badge">SSC Track</p>
          <h1>SSC CGL/CHSL/MTS prep with tier-wise command.</h1>
          <p className="hero-subtitle">
            Structured Tier I + Tier II roadmap with quant, reasoning, and GK
            sprints every week.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book counseling</a>
            <a className="ghost" href="/govt">Back to Govt Jobs</a>
          </div>
        </div>
        <div className="ssc-panel">
          <h3>Tier readiness</h3>
          <div className="ssc-steps">
            <div>
              <strong>Tier I</strong>
              <span>Speed drills + accuracy targets</span>
            </div>
            <div>
              <strong>Tier II</strong>
              <span>Advanced quant + descriptive practice</span>
            </div>
            <div>
              <strong>Interview</strong>
              <span>Mock interviews + GK updates</span>
            </div>
          </div>
          <div className="ssc-metrics">
            <div>
              <span>Weekly mocks</span>
              <strong>4x</strong>
            </div>
            <div>
              <span>Daily quizzes</span>
              <strong>30 min</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>SSC dashboard modules</h2>
          <p>Keep every subject moving with micro-targets.</p>
        </div>
        <div className="module-grid">
          <article className="module-card">
            <h3>Quant vault</h3>
            <p>Arithmetic, algebra, DI practice with timed sheets.</p>
          </article>
          <article className="module-card">
            <h3>Reasoning lab</h3>
            <p>Daily puzzle drills with accuracy benchmarks.</p>
          </article>
          <article className="module-card">
            <h3>GK tracker</h3>
            <p>Static + current affairs map and weekly tests.</p>
          </article>
          <article className="module-card">
            <h3>English edge</h3>
            <p>Grammar, vocab, and comprehension sprints.</p>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Tier-wise schedule</h2>
          <p className="hero-subtitle">
            Every week includes sectional tests and a full mock.
          </p>
          <div className="timeline">
            <div>
              <strong>Monday</strong>
              <span>Quant + Reasoning timed drills</span>
            </div>
            <div>
              <strong>Wednesday</strong>
              <span>GK + English mock set</span>
            </div>
            <div>
              <strong>Saturday</strong>
              <span>Full-length SSC mock + analysis</span>
            </div>
          </div>
        </div>
        <div className="cta-band">
          <h3>Next SSC mock</h3>
          <p>Sunday 10:00 AM · Online + Classroom · Free for new students.</p>
          <a className="ghost" href="#inquiry">Reserve a seat</a>
        </div>
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your SSC plan</h2>
          <p>Share your target exam and we will map your plan.</p>
        </div>
        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}

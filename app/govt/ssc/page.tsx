import InquiryForm from "../../../components/InquiryForm";
import Image from "next/image";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import TrackCoursesList from "../../../components/TrackCoursesList";

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
          <div className="panel-image">
            <Image
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
              alt="SSC aspirants solving practice papers"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{ objectFit: "cover" }}
            />
          </div>
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
              <span>Mock interviews and GK updates</span>
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
          <h2>SSC modules</h2>
          <p>Focused practice blocks for each subject area.</p>
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

      <section className="section">
        <div className="section-head">
          <h2>SSC courses</h2>
          <p>Tier-focused batches for CGL, CHSL, MTS, and CPO.</p>
        </div>
        <TrackCoursesList track="govt-ssc" />
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your SSC plan</h2>
          <p>Share your target exam and get a practical weekly roadmap.</p>
        </div>
        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}

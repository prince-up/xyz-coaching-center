import InquiryForm from "../../../components/InquiryForm";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";

export default function StateExamsPage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="state-hero">
        <div>
          <p className="badge">State Exams</p>
          <h1>State-specific preparation with local GK and policy focus.</h1>
          <p className="hero-subtitle">
            Tailored plans for state exams with regional GK, current affairs,
            and subject mastery.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book counseling</a>
            <a className="ghost" href="/govt">Back to Govt Jobs</a>
          </div>
        </div>
        <div className="state-panel">
          <h3>State focus</h3>
          <div className="state-tags">
            <span className="pill">UP</span>
            <span className="pill">Bihar</span>
            <span className="pill">Rajasthan</span>
            <span className="pill">MP</span>
            <span className="pill">Punjab</span>
          </div>
          <p className="muted-text">
            Weekly state GK updates and policy summaries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>State prep modules</h2>
          <p>Focus areas crafted for state-specific exams.</p>
        </div>
        <div className="state-grid">
          <article className="state-card">
            <h3>State GK</h3>
            <p>History, geography, and current affairs by state.</p>
          </article>
          <article className="state-card">
            <h3>Quant + Reasoning</h3>
            <p>Practice sets aligned to state exam patterns.</p>
          </article>
          <article className="state-card">
            <h3>Language</h3>
            <p>Hindi + English grammar and comprehension sets.</p>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Weekly cadence</h2>
          <p className="hero-subtitle">
            State-wise current affairs + monthly revision tests.
          </p>
          <div className="timeline">
            <div>
              <strong>Tuesday</strong>
              <span>State GK briefing + quiz</span>
            </div>
            <div>
              <strong>Friday</strong>
              <span>Quant + reasoning test</span>
            </div>
            <div>
              <strong>Sunday</strong>
              <span>Full state mock + mentor review</span>
            </div>
          </div>
        </div>
        <div className="cta-band">
          <h3>Next State mock</h3>
          <p>Saturday 9:00 AM · Online + Classroom · Free for new students.</p>
          <a className="ghost" href="#inquiry">Reserve a seat</a>
        </div>
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your state exam plan</h2>
          <p>Share your state and exam target to get a custom roadmap.</p>
        </div>
        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}

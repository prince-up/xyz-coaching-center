import InquiryForm from "../../../components/InquiryForm";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";

export default function BankingPage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="bank-hero">
        <div>
          <p className="badge">Banking Track</p>
          <h1>Bank PO and Clerk prep built for speed and precision.</h1>
          <p className="hero-subtitle">
            Daily sectional practice, speed tests, and interview readiness
            support.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#inquiry">Book counseling</a>
            <a className="ghost" href="/govt">Back to Govt Jobs</a>
          </div>
        </div>
        <div className="bank-panel">
          <h3>Exam map</h3>
          <div className="bank-grid">
            <div>
              <span>Prelims</span>
              <strong>Speed drills</strong>
+              <p>Quant + Reasoning sprint sets.</p>
            </div>
            <div>
              <span>Mains</span>
              <strong>Accuracy focus</strong>
+              <p>DI + GA + English mastery.</p>
            </div>
            <div>
              <span>Interview</span>
              <strong>Ready kit</strong>
+              <p>Mock interviews + GD practice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Banking prep stack</h2>
          <p>Separate prep lanes for every stage.</p>
        </div>
        <div className="stack-grid">
          <article className="stack-card">
            <h3>Quant speed</h3>
            <p>Shortcuts, DI, and time-management practice.</p>
          </article>
          <article className="stack-card">
            <h3>Reasoning logic</h3>
            <p>Puzzles, seating, and critical reasoning drills.</p>
          </article>
          <article className="stack-card">
            <h3>English + GA</h3>
            <p>Daily vocab + weekly current affairs revision.</p>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Weekly pace</h2>
          <p className="hero-subtitle">
            Keep the momentum with speed tests and mock reviews.
          </p>
          <div className="timeline">
            <div>
              <strong>Tuesday</strong>
              <span>Prelims speed set + analysis</span>
            </div>
            <div>
              <strong>Thursday</strong>
              <span>Mains sectional test + GA drill</span>
            </div>
            <div>
              <strong>Sunday</strong>
              <span>Full mock + mentor review</span>
            </div>
          </div>
        </div>
        <div className="cta-band">
          <h3>Next banking mock</h3>
          <p>Saturday 6:00 PM · Online + Classroom · Free for new students.</p>
          <a className="ghost" href="#inquiry">Reserve a seat</a>
        </div>
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your banking plan</h2>
          <p>Share your target exam and we will map your plan.</p>
        </div>
        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}

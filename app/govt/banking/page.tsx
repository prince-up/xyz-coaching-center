import InquiryForm from "../../../components/InquiryForm";
import Image from "next/image";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import TrackCoursesList from "../../../components/TrackCoursesList";

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
          <div className="panel-image">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
              alt="Banking exam preparation and finance study"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>Exam map</h3>
          <div className="bank-grid">
            <div>
              <span>Prelims</span>
              <strong>Speed drills</strong>
              <p>Quant + reasoning sprint sets.</p>
            </div>
            <div>
              <span>Mains</span>
              <strong>Accuracy focus</strong>
              <p>DI, GA, and English mastery.</p>
            </div>
            <div>
              <span>Interview</span>
              <strong>Ready kit</strong>
              <p>Mock interviews + GD practice.</p>
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

      <section className="section">
        <div className="section-head">
          <h2>Banking courses</h2>
          <p>PO, Clerk, and RRB batches with speed drills.</p>
        </div>
        <TrackCoursesList track="govt-banking" />
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your banking plan</h2>
          <p>Share your target exam and get a focused weekly roadmap.</p>
        </div>
        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}

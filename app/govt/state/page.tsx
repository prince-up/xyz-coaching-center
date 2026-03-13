import InquiryForm from "../../../components/InquiryForm";
import Image from "next/image";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import TrackCoursesList from "../../../components/TrackCoursesList";

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
          <div className="panel-image">
            <Image
              src="https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1200&q=80"
              alt="State exam preparation with regional study notes"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>State focus</h3>
          <div className="state-tags">
            <span className="pill">UP</span>
            <span className="pill">Bihar</span>
            <span className="pill">Rajasthan</span>
            <span className="pill">MP</span>
            <span className="pill">Punjab</span>
          </div>
          <p className="muted-text">
            Weekly state GK updates with policy summaries.
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

      <section className="section">
        <div className="section-head">
          <h2>State exam courses</h2>
          <p>PCS and state service batches with regional focus.</p>
        </div>
        <TrackCoursesList track="govt-state" />
      </section>

      <section className="section highlight" id="inquiry">
        <div className="section-head">
          <h2>Start your state exam plan</h2>
          <p>Share your state target and get a custom weekly roadmap.</p>
        </div>
        <InquiryForm />
      </section>

      <SiteFooter />
    </main>
  );
}

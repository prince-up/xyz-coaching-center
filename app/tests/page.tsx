import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import TestsList from "../../components/TestsList";

export default function TestsPage() {
  return (
    <main className="page">
      <SiteHeader />

      <header className="section page-hero">
        <div>
          <p className="badge">Online Test Series</p>
          <h1>Timed mocks, topic drills, instant results.</h1>
          <p className="hero-subtitle">
            Full-length and topic-wise tests with negative marking and detailed
            accuracy insights.
          </p>
        </div>
        <div className="hero-visual">
          <h3>Default rules</h3>
          <ul>
            <li>90 questions · 180 minutes</li>
            <li>Negative marking: -1</li>
            <li>Instant score + accuracy</li>
          </ul>
        </div>
      </header>

      <section className="section">
        <div className="section-head">
          <h2>Available tests</h2>
          <p>Choose a mock or drill to start your timer.</p>
        </div>
        <TestsList />
      </section>

      <SiteFooter />
    </main>
  );
}

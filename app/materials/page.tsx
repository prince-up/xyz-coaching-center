import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import MaterialsLibrary from "../../components/MaterialsLibrary";

export default function MaterialsPage() {
  return (
    <main className="page">
      <SiteHeader />

      <header className="section page-hero">
        <div>
          <p className="badge">Study Material Library</p>
          <h1>Notes, assignments, and previous year papers.</h1>
          <p className="hero-subtitle">
            Download PDFs, formula sheets, and assignments curated by faculty.
          </p>
        </div>
        <div className="hero-visual">
          <h3>Library highlights</h3>
          <ul>
            <li>PDF notes + assignments</li>
            <li>Previous year papers</li>
            <li>Formula sheets & quick maps</li>
          </ul>
        </div>
      </header>

      <section className="section">
        <div className="section-head">
          <h2>Downloads</h2>
          <p>Browse by track and subject.</p>
        </div>
        <MaterialsLibrary />
      </section>

      <SiteFooter />
    </main>
  );
}

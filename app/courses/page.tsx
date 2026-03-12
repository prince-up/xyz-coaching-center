import CourseList from "../../components/CourseList";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function CoursesPage() {
  return (
    <main className="page">
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="badge">All Courses</p>
          <h1>Live catalog with real-time batch updates.</h1>
          <p className="hero-subtitle">
            Add new courses from the admin panel and they appear here
            instantly.
          </p>
        </div>
        <div className="hero-visual">
          <h3>What you can manage</h3>
          <ul>
            <li>Pricing and batch details</li>
            <li>Descriptions and outcomes</li>
            <li>Course visibility</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Courses</h2>
          <p>Filter by goal or duration, then explore the live list.</p>
        </div>
        <div className="filter-row">
          <button className="chip">All</button>
          <button className="chip ghost">JEE</button>
          <button className="chip ghost">NEET</button>
          <button className="chip ghost">Govt Jobs</button>
          <button className="chip ghost">Foundation</button>
          <button className="chip ghost">Crash</button>
        </div>
        <CourseList />
      </section>

      <SiteFooter />
    </main>
  );
}

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
          <h1>Live course catalog from Supabase.</h1>
          <p className="hero-subtitle">
            Add new courses from the admin panel and they will appear here
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
          <p>These are live from Supabase.</p>
        </div>
        <CourseList />
      </section>

      <SiteFooter />
    </main>
  );
}

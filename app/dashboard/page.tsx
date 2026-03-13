import DashboardData from "../../components/DashboardData";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function DashboardPage() {
  return (
    <main className="page">
      <SiteHeader />

      <header className="section dashboard-hero">
        <div>
          <p className="badge">Student Dashboard</p>
          <h1>Your complete student profile and dashboard.</h1>
          <p className="hero-subtitle">
            View account details, enrolled courses, test performance, upcoming
            classes, materials, and tasks in one place.
          </p>
          <div className="hero-actions dashboard-actions">
            <a className="primary" href="#profile-account">Open profile</a>
            <a className="ghost" href="/courses">Browse courses</a>
          </div>
        </div>
      </header>

      <DashboardData />

      <SiteFooter />
    </main>
  );
}

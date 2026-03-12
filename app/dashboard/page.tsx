import AuthPanel from "../../components/AuthPanel";
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
          <h1>Your prep, organized and visible.</h1>
          <p className="hero-subtitle">
            Track enrolled courses, test performance, and upcoming classes in
            one place. This dashboard is the first step before we add live data
            and analytics.
          </p>
          <div className="hero-actions dashboard-actions">
            <a className="primary" href="/login">Sign in to sync</a>
            <a className="ghost" href="/courses">Browse courses</a>
          </div>
        </div>
        <div className="card auth">
          <h3>Account access</h3>
          <p className="muted-text">
            Log in to unlock personalized progress, saved tests, and materials.
          </p>
          <AuthPanel />
        </div>
      </header>

      <DashboardData />

      <SiteFooter />
    </main>
  );
}

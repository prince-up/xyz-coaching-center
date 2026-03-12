import AdminPanel from "../../components/AdminPanel";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export default function AdminPage() {
  return (
    <main className="page">
      <SiteHeader />

      <header className="section">
        <div className="section-head">
          <h2>Admin control room</h2>
          <p>Manage courses, lectures, materials, doubts, and announcements.</p>
        </div>
      </header>

      <section className="section">
        <AdminPanel />
      </section>

      <SiteFooter />
    </main>
  );
}

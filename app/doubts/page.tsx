import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import DoubtsBoard from "../../components/DoubtsBoard";

export default function DoubtsPage() {
  return (
    <main className="page">
      <SiteHeader />

      <header className="section page-hero">
        <div>
          <p className="badge">Doubt Solving</p>
          <h1>Post doubts and get mentor replies.</h1>
          <p className="hero-subtitle">
            Ask questions with images or formulas. Teachers reply with guidance
            and resources.
          </p>
        </div>
        <div className="hero-visual">
          <h3>Doubt flow</h3>
          <ul>
            <li>Student posts doubt</li>
            <li>Teacher replies + tips</li>
            <li>Upvote best answers</li>
          </ul>
        </div>
      </header>

      <DoubtsBoard />

      <SiteFooter />
    </main>
  );
}

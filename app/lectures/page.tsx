import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import LecturesList from "../../components/LecturesList";

export default function LecturesPage() {
  return (
    <main className="page">
      <SiteHeader />

      <header className="section page-hero">
        <div>
          <p className="badge">Video Lectures</p>
          <h1>Recorded classes with playlists and progress.</h1>
          <p className="hero-subtitle">
            Watch topic-wise videos, control playback speed, and resume where
            you left off.
          </p>
        </div>
        <div className="hero-visual">
          <h3>Lecture tools</h3>
          <ul>
            <li>Topic-wise playlists</li>
            <li>Playback speed control</li>
            <li>Resume last watched</li>
          </ul>
        </div>
      </header>

      <section className="section">
        <div className="section-head">
          <h2>Latest lectures</h2>
          <p>New recordings from our faculty this week.</p>
        </div>
        <LecturesList />
      </section>

      <SiteFooter />
    </main>
  );
}

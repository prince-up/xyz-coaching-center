"use client";

import { useEffect, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Lecture = {
  id: number;
  title: string;
  track: string | null;
  topic: string | null;
  teacher: string | null;
  video_url: string | null;
  duration_minutes: number | null;
};

const demoLectures: Lecture[] = [
  {
    id: 1,
    title: "Electrostatics Basics",
    track: "jee",
    topic: "Physics",
    teacher: "Aarav Sinha",
    video_url: "#",
    duration_minutes: 42
  },
  {
    id: 2,
    title: "Human Physiology - Circulation",
    track: "neet",
    topic: "Biology",
    teacher: "Isha Verma",
    video_url: "#",
    duration_minutes: 38
  },
  {
    id: 3,
    title: "Percentage & Ratio Crash",
    track: "govt",
    topic: "Quant",
    teacher: "Riya Kapoor",
    video_url: "#",
    duration_minutes: 30
  }
];

export default function LecturesList() {
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase || !isSupabaseReady) {
      setLectures(demoLectures);
      setDemoMode(true);
      setLoading(false);
      return;
    }

    const loadLectures = async () => {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from("lectures")
        .select(
          "id, title, track, topic, teacher, video_url, duration_minutes"
        )
        .order("created_at", { ascending: false })
        .limit(12);

      if (fetchError) {
        setError(fetchError.message);
        setLectures(demoLectures);
        setDemoMode(true);
      } else {
        setLectures(data ?? []);
      }
      setLoading(false);
    };

    loadLectures();
  }, []);

  if (loading) {
    return <div className="notice">Loading lectures...</div>;
  }

  if (error) {
    return <div className="notice">{error}</div>;
  }

  if (!lectures.length) {
    return <div className="notice">No lectures uploaded yet.</div>;
  }

  return (
    <div className="section">
      {demoMode ? (
        <div className="notice">
          Showing demo lectures. Add real lectures in Supabase.
        </div>
      ) : null}
      <div className="lecture-grid">
        {lectures.map((lecture) => (
          <article key={lecture.id} className="lecture-card">
            <div className="lecture-meta">
              {lecture.track ? <span className="pill">{lecture.track}</span> : null}
              {lecture.topic ? (
                <span className="pill ghost">{lecture.topic}</span>
              ) : null}
            </div>
            <h3>{lecture.title}</h3>
            <p className="muted-text">{lecture.teacher ?? ""}</p>
            <div className="lecture-footer">
              <span>{lecture.duration_minutes ?? 0} min</span>
              <a className="link" href={lecture.video_url ?? "#"}>
                Watch
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type TrackCourse = {
  id: number;
  title: string;
  description: string | null;
  duration: string | null;
  level: string | null;
};

type Props = {
  track: string;
  limit?: number;
};

export default function TrackCoursesList({ track, limit = 6 }: Props) {
  const [courses, setCourses] = useState<TrackCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    const fetchCourses = async () => {
      setLoading(true);
      const { data, error: fetchError } = await supabase!
        .from("track_courses")
        .select("id, title, description, duration, level")
        .eq("track", track)
        .order("created_at", { ascending: false })
        .limit(limit);

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setCourses(data ?? []);
        setError(null);
      }
      setLoading(false);
    };

    fetchCourses();
  }, [track, limit]);

  if (!isSupabaseReady) {
    return (
      <div className="notice">
        Supabase is not configured yet. Add keys in .env.local to load courses.
      </div>
    );
  }

  if (loading) {
    return <div className="notice">Loading courses...</div>;
  }

  if (error) {
    return <div className="notice">{error}</div>;
  }

  if (!courses.length) {
    return <div className="notice">No courses yet for this track.</div>;
  }

  return (
    <div className="course-grid">
      {courses.map((course) => (
        <article key={course.id} className="course-card">
          <h3>{course.title}</h3>
          <p>{course.description ?? ""}</p>
          <div className="badge-row">
            {course.level ? <span className="pill">{course.level}</span> : null}
            {course.duration ? (
              <span className="pill ghost">{course.duration}</span>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

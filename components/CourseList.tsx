"use client";

import { useEffect, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Course = {
  id: number;
  title: string;
  description: string | null;
  price: string | null;
};

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);
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
        .from("courses")
        .select("id, title, description, price")
        .order("created_at", { ascending: false });

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setCourses(data ?? []);
        setError(null);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

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
    return (
      <div className="notice">
        No courses yet. Add them from the admin panel once Supabase is ready.
      </div>
    );
  }

  return (
    <div className="grid">
      {courses.map((course) => (
        <article key={course.id} className="card">
          <h4>{course.title}</h4>
          <p>{course.description ?? ""}</p>
          {course.price ? <strong>{course.price}</strong> : null}
        </article>
      ))}
    </div>
  );
}

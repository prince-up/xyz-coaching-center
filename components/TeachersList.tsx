"use client";

import { useEffect, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Teacher = {
  id: number;
  name: string;
  subject: string;
  experience: string | null;
};

type Props = {
  track: string;
  limit?: number;
};

export default function TeachersList({ track, limit = 6 }: Props) {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    const fetchTeachers = async () => {
      setLoading(true);
      const { data, error: fetchError } = await supabase!
        .from("teachers")
        .select("id, name, subject, experience")
        .eq("track", track)
        .order("created_at", { ascending: false })
        .limit(limit);

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setTeachers(data ?? []);
        setError(null);
      }
      setLoading(false);
    };

    fetchTeachers();
  }, [track, limit]);

  if (!isSupabaseReady) {
    return (
      <div className="notice">
        Supabase is not configured yet. Add keys in .env.local to load faculty.
      </div>
    );
  }

  if (loading) {
    return <div className="notice">Loading teachers...</div>;
  }

  if (error) {
    return <div className="notice">{error}</div>;
  }

  if (!teachers.length) {
    return <div className="notice">No teachers added for this track yet.</div>;
  }

  return (
    <div className="profile-grid">
      {teachers.map((teacher) => (
        <article key={teacher.id} className="profile-card">
          <div className="avatar">◎</div>
          <div>
            <h3>{teacher.name}</h3>
            <p>{teacher.subject}</p>
            {teacher.experience ? (
              <span className="profile-meta">{teacher.experience}</span>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

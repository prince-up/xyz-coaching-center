"use client";

import { useEffect, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Performer = {
  id: number;
  name: string;
  achievement: string;
  year: string | null;
};

type Props = {
  track: string;
  limit?: number;
};

export default function TopPerformersList({ track, limit = 6 }: Props) {
  const [performers, setPerformers] = useState<Performer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    const fetchPerformers = async () => {
      setLoading(true);
      const { data, error: fetchError } = await supabase!
        .from("top_performers")
        .select("id, name, achievement, year")
        .eq("track", track)
        .order("created_at", { ascending: false })
        .limit(limit);

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setPerformers(data ?? []);
        setError(null);
      }
      setLoading(false);
    };

    fetchPerformers();
  }, [track, limit]);

  if (!isSupabaseReady) {
    return (
      <div className="notice">
        Supabase is not configured yet. Add keys in .env.local to load results.
      </div>
    );
  }

  if (loading) {
    return <div className="notice">Loading top performers...</div>;
  }

  if (error) {
    return <div className="notice">{error}</div>;
  }

  if (!performers.length) {
    return <div className="notice">No results added for this track yet.</div>;
  }

  return (
    <div className="profile-grid">
      {performers.map((performer) => (
        <article key={performer.id} className="profile-card">
          <div className="avatar">★</div>
          <div>
            <h3>{performer.name}</h3>
            <p>{performer.achievement}</p>
            {performer.year ? (
              <span className="profile-meta">{performer.year}</span>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

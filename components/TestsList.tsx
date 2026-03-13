"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Test = {
  id: number;
  title: string;
  track: string | null;
  type: string | null;
  total_questions: number | null;
  duration_minutes: number | null;
  negative_mark: number | null;
};

const demoTests: Test[] = [
  {
    id: 1,
    title: "JEE Full Length Mock 1",
    track: "jee",
    type: "full",
    total_questions: 90,
    duration_minutes: 180,
    negative_mark: 1
  },
  {
    id: 2,
    title: "NEET Biology Topic Test",
    track: "neet",
    type: "topic",
    total_questions: 45,
    duration_minutes: 60,
    negative_mark: 1
  },
  {
    id: 3,
    title: "Govt Exam Reasoning Drill",
    track: "govt",
    type: "topic",
    total_questions: 50,
    duration_minutes: 60,
    negative_mark: 0.25
  }
];

export default function TestsList() {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase || !isSupabaseReady) {
      setTests(demoTests);
      setDemoMode(true);
      setLoading(false);
      return;
    }

    const loadTests = async () => {
      setLoading(true);
      const { data, error: fetchError } = await supabase!
        .from("tests")
        .select(
          "id, title, track, type, total_questions, duration_minutes, negative_mark"
        )
        .order("created_at", { ascending: false });

      if (fetchError) {
        setError(fetchError.message);
        setTests(demoTests);
        setDemoMode(true);
      } else {
        setTests(data ?? []);
      }
      setLoading(false);
    };

    loadTests();
  }, []);

  if (loading) {
    return <div className="notice">Loading tests...</div>;
  }

  if (error) {
    return <div className="notice">{error}</div>;
  }

  if (!tests.length) {
    return <div className="notice">No tests available yet.</div>;
  }

  return (
    <div className="section">
      {demoMode ? (
        <div className="notice">
          Showing demo tests. Add tests in Supabase for real data.
        </div>
      ) : null}
      <div className="test-grid">
        {tests.map((test) => (
          <article key={test.id} className="test-card">
            <div className="test-meta">
              {test.track ? <span className="pill">{test.track}</span> : null}
              {test.type ? (
                <span className="pill ghost">{test.type}</span>
              ) : null}
            </div>
            <h3>{test.title}</h3>
            <div className="test-details">
              <span>{test.total_questions ?? 0} questions</span>
              <span>{test.duration_minutes ?? 0} minutes</span>
              <span>Negative: -{test.negative_mark ?? 0}</span>
            </div>
            <Link className="link" href={`/tests/${test.id}`}>
              Start test
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

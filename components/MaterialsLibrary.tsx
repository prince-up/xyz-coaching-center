"use client";

import { useEffect, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Material = {
  id: number;
  title: string;
  track: string | null;
  kind: string;
  pages: number | null;
  file_url: string | null;
};

const demoMaterials: Material[] = [
  {
    id: 1,
    title: "Physics Formula Sheet",
    track: "jee",
    kind: "PDF",
    pages: 18,
    file_url: "#"
  },
  {
    id: 2,
    title: "NEET Biology Notes",
    track: "neet",
    kind: "PDF",
    pages: 32,
    file_url: "#"
  },
  {
    id: 3,
    title: "Govt Exam Quant Set",
    track: "govt",
    kind: "Assignment",
    pages: 40,
    file_url: "#"
  }
];

export default function MaterialsLibrary() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase || !isSupabaseReady) {
      setMaterials(demoMaterials);
      setDemoMode(true);
      setLoading(false);
      return;
    }

    const loadMaterials = async () => {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from("materials_library")
        .select("id, title, track, kind, pages, file_url")
        .order("created_at", { ascending: false })
        .limit(20);

      if (fetchError) {
        setError(fetchError.message);
        setMaterials(demoMaterials);
        setDemoMode(true);
      } else {
        setMaterials(data ?? []);
      }
      setLoading(false);
    };

    loadMaterials();
  }, []);

  if (loading) {
    return <div className="notice">Loading materials...</div>;
  }

  if (error) {
    return <div className="notice">{error}</div>;
  }

  if (!materials.length) {
    return <div className="notice">No materials uploaded yet.</div>;
  }

  return (
    <div className="section">
      {demoMode ? (
        <div className="notice">
          Showing demo materials. Add real materials in Supabase.
        </div>
      ) : null}
      <div className="material-grid">
        {materials.map((item) => (
          <article key={item.id} className="material-card">
            <div className="lecture-meta">
              {item.track ? <span className="pill">{item.track}</span> : null}
              <span className="pill ghost">{item.kind}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="muted-text">
              {item.pages ? `${item.pages} pages` : "Downloadable"}
            </p>
            <a className="link" href={item.file_url ?? "#"}>
              Download
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

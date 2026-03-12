"use client";

import { FormEvent, useEffect, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Doubt = {
  id: number;
  title: string;
  question: string;
  subject: string | null;
  status: string | null;
};

type Reply = {
  id: number;
  doubt_id: number;
  teacher_name: string | null;
  reply: string;
};

const demoDoubts: Doubt[] = [
  {
    id: 1,
    title: "Organic reaction chain",
    question: "How to remember the mechanism for SN1 vs SN2?",
    subject: "Chemistry",
    status: "answered"
  },
  {
    id: 2,
    title: "NCERT Genetics",
    question: "Which chapters are most important for NEET?",
    subject: "Biology",
    status: "open"
  }
];

const demoReplies: Reply[] = [
  {
    id: 1,
    doubt_id: 1,
    teacher_name: "Meera Nair",
    reply: "Focus on substrate type and solvent. Practice 20 reactions." 
  }
];

export default function DoubtsBoard() {
  const [doubts, setDoubts] = useState<Doubt[]>([]);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    subject: "",
    question: "",
    imageUrl: ""
  });

  useEffect(() => {
    if (!supabase || !isSupabaseReady) {
      setDoubts(demoDoubts);
      setReplies(demoReplies);
      setDemoMode(true);
      setLoading(false);
      return;
    }

    const loadDoubts = async () => {
      setLoading(true);
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData.session?.user.id;

      if (!userId) {
        setDoubts(demoDoubts);
        setReplies(demoReplies);
        setDemoMode(true);
        setLoading(false);
        return;
      }

      const { data: doubtsData, error: doubtsError } = await supabase
        .from("doubts")
        .select("id, title, question, subject, status")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      const { data: replyData } = await supabase
        .from("doubt_replies")
        .select("id, doubt_id, teacher_name, reply")
        .order("created_at", { ascending: false });

      if (doubtsError) {
        setNotice(doubtsError.message);
        setDoubts(demoDoubts);
        setReplies(demoReplies);
        setDemoMode(true);
      } else {
        setDoubts(doubtsData ?? []);
        setReplies(replyData ?? []);
      }
      setLoading(false);
    };

    loadDoubts();
  }, []);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) {
      setNotice("Supabase is not configured yet.");
      return;
    }

    const { data: sessionData } = await supabase.auth.getSession();
    const userId = sessionData.session?.user.id;

    if (!userId) {
      setNotice("Please sign in to submit a doubt.");
      return;
    }

    const { error } = await supabase.from("doubts").insert({
      user_id: userId,
      title: form.title,
      subject: form.subject,
      question: form.question,
      image_url: form.imageUrl,
      status: "open"
    });

    if (error) {
      setNotice(error.message);
      return;
    }

    setForm({ title: "", subject: "", question: "", imageUrl: "" });
    setNotice("Doubt submitted. You will get a reply soon.");
  };

  if (loading) {
    return <div className="notice">Loading doubts...</div>;
  }

  return (
    <div className="section">
      {demoMode ? (
        <div className="notice">
          Showing demo doubts. Sign in to post your own doubts.
        </div>
      ) : null}
      <div className="split">
        <div className="panel">
          <h3>Post a doubt</h3>
          <form className="form" onSubmit={onSubmit}>
            <div className="row">
              <label htmlFor="doubt-title">Title</label>
              <input
                id="doubt-title"
                value={form.title}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, title: event.target.value }))
                }
                required
              />
            </div>
            <div className="row">
              <label htmlFor="doubt-subject">Subject</label>
              <input
                id="doubt-subject"
                value={form.subject}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, subject: event.target.value }))
                }
                placeholder="Physics / Chemistry / Biology"
                required
              />
            </div>
            <div className="row">
              <label htmlFor="doubt-question">Question</label>
              <textarea
                id="doubt-question"
                value={form.question}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, question: event.target.value }))
                }
                required
              />
            </div>
            <div className="row">
              <label htmlFor="doubt-image">Image URL (optional)</label>
              <input
                id="doubt-image"
                value={form.imageUrl}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, imageUrl: event.target.value }))
                }
                placeholder="https://..."
              />
            </div>
            <button type="submit">Submit doubt</button>
            {notice ? <p className="notice">{notice}</p> : null}
          </form>
        </div>
        <div>
          <h3>Your doubts</h3>
          {!doubts.length ? (
            <div className="notice">No doubts posted yet.</div>
          ) : (
            <div className="doubt-grid">
              {doubts.map((doubt) => (
                <article key={doubt.id} className="doubt-card">
                  <div className="lecture-meta">
                    <span className="pill ghost">{doubt.subject ?? ""}</span>
                    <span className="pill">{doubt.status ?? "open"}</span>
                  </div>
                  <h4>{doubt.title}</h4>
                  <p>{doubt.question}</p>
                  {replies
                    .filter((reply) => reply.doubt_id === doubt.id)
                    .map((reply) => (
                      <div key={reply.id} className="reply-card">
                        <strong>{reply.teacher_name ?? "Teacher"}</strong>
                        <p>{reply.reply}</p>
                      </div>
                    ))}
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

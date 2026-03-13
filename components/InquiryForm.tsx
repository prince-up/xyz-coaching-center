"use client";

import { FormEvent, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    examTarget: "",
    classLevel: "",
    message: ""
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!supabase) {
      setStatus("Supabase is not configured yet. Add keys in .env.local.");
      return;
    }
    setLoading(true);
    setStatus(null);

    const enrichedMessage = [
      `Exam target: ${form.examTarget}`,
      `Current class: ${form.classLevel}`,
      `Query: ${form.message}`
    ].join("\n");

    const { error } = await supabase.from("inquiries").insert([
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: enrichedMessage
      }
    ]);

    if (error) {
      setStatus(error.message);
    } else {
      setStatus("Thanks! We will reach out within 24 hours.");
      setForm({
        name: "",
        phone: "",
        email: "",
        examTarget: "",
        classLevel: "",
        message: ""
      });
    }

    setLoading(false);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      {!isSupabaseReady ? (
        <p className="notice">
          Supabase is not configured yet. You can still fill the form, but it
          will not submit until keys are added.
        </p>
      ) : null}
      <div className="grid">
        <div className="row">
          <label htmlFor="name">Student name</label>
          <input
            id="name"
            placeholder="Full name"
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            required
          />
        </div>
        <div className="row">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, phone: event.target.value }))
            }
            required
          />
        </div>
        <div className="row">
          <label htmlFor="examTarget">Target exam</label>
          <select
            id="examTarget"
            value={form.examTarget}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, examTarget: event.target.value }))
            }
            required
          >
            <option value="">Select exam</option>
            <option value="JEE Main + Advanced">JEE Main + Advanced</option>
            <option value="NEET">NEET</option>
            <option value="SSC">SSC</option>
            <option value="Banking">Banking</option>
            <option value="Railways">Railways</option>
            <option value="State Exams">State Exams</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="classLevel">Current class</label>
          <select
            id="classLevel"
            value={form.classLevel}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, classLevel: event.target.value }))
            }
            required
          >
            <option value="">Select class</option>
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 11">Class 11</option>
            <option value="Class 12">Class 12</option>
            <option value="Dropper">Dropper</option>
            <option value="Graduate">Graduate</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="name@email.com"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            required
          />
        </div>
      </div>
      <div className="row">
        <label htmlFor="message">Goal / query</label>
        <textarea
          id="message"
          placeholder="Tell us your target exam, current class, and concerns."
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Request mentoring call"}
      </button>
      {status ? <p className="notice">{status}</p> : null}
    </form>
  );
}

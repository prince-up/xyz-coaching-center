"use client";

import { FormEvent, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
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

    const { error } = await supabase.from("inquiries").insert([
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message
      }
    ]);

    if (error) {
      setStatus(error.message);
    } else {
      setStatus("Thanks! We will reach out within 24 hours.");
      setForm({ name: "", phone: "", email: "", message: "" });
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

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Mode = "login" | "signup";

type Props = {
  mode: Mode;
};

export default function AuthForm({ mode }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Check your email to confirm your account.");
        router.push("/");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Signed in successfully.");
        router.push("/");
      }
    }

    setLoading(false);
  };

  const title = mode === "signup" ? "Create your account" : "Welcome back";
  const subtitle =
    mode === "signup"
      ? "Start tracking your coaching plan and tests."
      : "Sign in to see your schedule and reports.";

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>{title}</h1>
        <p className="auth-subtitle">{subtitle}</p>

        {!isSupabaseReady ? (
          <p className="notice">
            Supabase is not configured yet. Add keys in .env.local to enable
            sign in.
          </p>
        ) : null}

        <form className="form" onSubmit={onSubmit}>
          <div className="row">
            <label htmlFor="auth-email">Email</label>
            <input
              id="auth-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="row">
            <label htmlFor="auth-password">Password</label>
            <input
              id="auth-password"
              type="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : mode === "signup"
              ? "Create account"
              : "Sign in"}
          </button>
        </form>

        {status ? <p className="notice">{status}</p> : null}

        <div className="auth-switch">
          {mode === "signup" ? (
            <span>
              Already have an account? <Link href="/login">Sign in</Link>
            </span>
          ) : (
            <span>
              New here? <Link href="/signup">Create an account</Link>
            </span>
          )}
        </div>
      </div>
      <div className="auth-side">
        <h2>Student portal</h2>
        <p>
          Access your weekly targets, mock tests, and performance analytics in
          one place.
        </p>
        <ul>
          <li>Weekly test analysis</li>
          <li>Mentor feedback</li>
          <li>Parent updates</li>
        </ul>
      </div>
    </div>
  );
}

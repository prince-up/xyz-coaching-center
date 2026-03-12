"use client";

import { useEffect, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type AuthStatus = {
  email: string | null;
  loading: boolean;
  message: string | null;
};

export default function AuthPanel() {
  const [status, setStatus] = useState<AuthStatus>({
    email: null,
    loading: true,
    message: null
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!supabase) {
      setStatus({ email: null, loading: false, message: null });
      return;
    }
    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();
      setStatus({
        email: data.session?.user.email ?? null,
        loading: false,
        message: null
      });
    };

    loadSession();
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setStatus({
        email: session?.user.email ?? null,
        loading: false,
        message: null
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async () => {
    setStatus((prev) => ({ ...prev, loading: true, message: null }));
    const { error } = await supabase.auth.signUp({ email, password });
    setStatus((prev) => ({
      ...prev,
      loading: false,
      message: error ? error.message : "Check your email to confirm sign up."
    }));
  };

  const signIn = async () => {
    setStatus((prev) => ({ ...prev, loading: true, message: null }));
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    setStatus((prev) => ({
      ...prev,
      loading: false,
      message: error ? error.message : "Signed in successfully."
    }));
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setStatus((prev) => ({ ...prev, email: null }));
  };

  if (!isSupabaseReady) {
    return (
      <div className="notice">
        Supabase is not configured yet. Add keys in .env.local to enable auth.
      </div>
    );
  }

  if (status.loading) {
    return <div className="notice">Checking session...</div>;
  }

  if (status.email) {
    return (
      <div className="card auth">
        <p>Signed in as {status.email}</p>
        <button className="primary" onClick={signOut}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="card auth">
      <div className="row">
        <label htmlFor="auth-email">Email</label>
        <input
          id="auth-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
        />
      </div>
      <div className="row">
        <button className="primary" onClick={signIn}>
          Sign in
        </button>
        <button className="ghost" onClick={signUp}>
          Create account
        </button>
      </div>
      {status.message ? <p className="notice">{status.message}</p> : null}
    </div>
  );
}

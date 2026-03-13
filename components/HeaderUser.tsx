"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

export default function HeaderUser() {
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!isSupabaseReady || !supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      const u = data.session?.user;
      setEmail(u?.email ?? null);
      setName(u?.user_metadata?.name ?? "");
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setEmail(session?.user?.email ?? null);
      setName(session?.user?.user_metadata?.name ?? "");
    });
    return () => subscription.unsubscribe();
  }, []);

  if (email) {
    const initial = (name || email)[0].toUpperCase();
    const displayName = name || email.split("@")[0];
    return (
      <div className="nav-dropdown">
        <button className="nav-dropdown-btn" aria-label="Account menu">
          <span className="header-avatar" aria-hidden="true">{initial}</span>
          <span className="header-user-name">{displayName}</span>
          <span aria-hidden="true">▾</span>
        </button>
        <div className="nav-dropdown-menu">
          <Link href="/dashboard">📊 My Dashboard</Link>
          <button
            className="nav-signout-btn"
            onClick={() => supabase!.auth.signOut()}
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Link href="/login" className="nav-login">Login</Link>
      <Link href="/#inquiry" className="cta">Book counseling</Link>
    </>
  );
}

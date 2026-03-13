"use client";

import { useEffect, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Profile = { name: string; phone: string; address: string };
type AuthStatus = { email: string | null; loading: boolean; message: string | null };

export default function AuthPanel() {
  const [status, setStatus] = useState<AuthStatus>({ email: null, loading: true, message: null });
  const [profile, setProfile] = useState<Profile>({ name: "", phone: "", address: "" });
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState<Profile>({ name: "", phone: "", address: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!supabase) {
      setStatus({ email: null, loading: false, message: null });
      return;
    }
    const loadUser = async () => {
      const { data } = await supabase!.auth.getSession();
      const u = data.session?.user;
      if (u) {
        const m = u.user_metadata ?? {};
        setProfile({ name: m.name ?? "", phone: m.phone ?? "", address: m.address ?? "" });
      }
      setStatus({ email: u?.email ?? null, loading: false, message: null });
    };
    loadUser();
    const { data: { subscription } } = supabase!.auth.onAuthStateChange((_, session) => {
      const u = session?.user;
      if (u) {
        const m = u.user_metadata ?? {};
        setProfile({ name: m.name ?? "", phone: m.phone ?? "", address: m.address ?? "" });
      }
      setStatus({ email: u?.email ?? null, loading: false, message: null });
    });
    return () => subscription.unsubscribe();
  }, []);

  const signUp = async () => {
    setStatus(p => ({ ...p, loading: true, message: null }));
    const { error } = await supabase!.auth.signUp({ email, password });
    setStatus(p => ({ ...p, loading: false, message: error ? error.message : "Check your email to confirm sign up." }));
  };

  const signIn = async () => {
    setStatus(p => ({ ...p, loading: true, message: null }));
    const { error } = await supabase!.auth.signInWithPassword({ email, password });
    setStatus(p => ({ ...p, loading: false, message: error ? error.message : "Signed in successfully." }));
  };

  const signOut = async () => {
    await supabase!.auth.signOut();
    setStatus(p => ({ ...p, email: null }));
    setProfile({ name: "", phone: "", address: "" });
    setEditing(false);
  };

  const startEdit = () => { setEditData({ ...profile }); setEditing(true); };

  const saveProfile = async () => {
    setStatus(p => ({ ...p, loading: true, message: null }));
    const { error } = await supabase!.auth.updateUser({
      data: { name: editData.name, phone: editData.phone, address: editData.address }
    });
    if (!error) { setProfile({ ...editData }); setEditing(false); }
    setStatus(p => ({ ...p, loading: false, message: error ? error.message : "Profile updated successfully!" }));
  };

  if (!isSupabaseReady) {
    return <div className="notice">Supabase not configured. Add keys in .env.local to enable auth.</div>;
  }

  if (status.loading) {
    return <div className="notice">Checking session…</div>;
  }

  if (status.email) {
    const initial = (profile.name || status.email || "S")[0].toUpperCase();
    return (
      <div className="profile-panel">
        {/* Header */}
        <div className="profile-panel-header">
          <div className="profile-avatar-lg">{initial}</div>
          <div>
            <strong className="profile-name">{profile.name || "Student"}</strong>
            <p className="profile-email">{status.email}</p>
          </div>
        </div>

        {/* Info or Edit form */}
        {!editing ? (
          <div className="profile-info-list">
            <div className="profile-info-row">
              <span className="profile-info-icon">📧</span>
              <span>{status.email}</span>
            </div>
            <div className="profile-info-row">
              <span className="profile-info-icon">📞</span>
              <span className={profile.phone ? "" : "muted-text"}>{profile.phone || "Mobile not set"}</span>
            </div>
            <div className="profile-info-row">
              <span className="profile-info-icon">👤</span>
              <span className={profile.name ? "" : "muted-text"}>{profile.name || "Name not set"}</span>
            </div>
            <div className="profile-info-row">
              <span className="profile-info-icon">📍</span>
              <span className={profile.address ? "" : "muted-text"}>{profile.address || "Address not set"}</span>
            </div>
          </div>
        ) : (
          <div className="profile-edit-form">
            <div className="row">
              <label>Full Name</label>
              <input type="text" placeholder="Your full name" value={editData.name}
                onChange={e => setEditData(p => ({ ...p, name: e.target.value }))} />
            </div>
            <div className="row">
              <label>Mobile Number</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" value={editData.phone}
                onChange={e => setEditData(p => ({ ...p, phone: e.target.value }))} />
            </div>
            <div className="row">
              <label>Address</label>
              <input type="text" placeholder="City, State, PIN" value={editData.address}
                onChange={e => setEditData(p => ({ ...p, address: e.target.value }))} />
            </div>
          </div>
        )}

        {status.message ? <p className="notice">{status.message}</p> : null}

        {/* Actions */}
        <div className="profile-panel-actions">
          {!editing ? (
            <>
              <button className="chip" onClick={startEdit}>✏️ Edit Profile</button>
              <button className="chip ghost" onClick={signOut}>Sign out</button>
            </>
          ) : (
            <>
              <button className="primary" style={{ fontSize: "0.9rem", padding: "9px 18px" }}
                onClick={saveProfile} disabled={status.loading}>
                {status.loading ? "Saving…" : "💾 Save Changes"}
              </button>
              <button className="chip ghost" onClick={() => setEditing(false)}>Cancel</button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="card auth">
      <div className="row">
        <label htmlFor="auth-email">Email</label>
        <input id="auth-email" type="email" placeholder="you@example.com" value={email}
          onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="row">
        <label htmlFor="auth-password">Password</label>
        <input id="auth-password" type="password" placeholder="At least 6 characters" value={password}
          onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="row">
        <button className="primary" onClick={signIn}>Sign in</button>
        <button className="ghost" onClick={signUp}>Create account</button>
      </div>
      {status.message ? <p className="notice">{status.message}</p> : null}
    </div>
  );
}

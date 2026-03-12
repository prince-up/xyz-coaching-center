"use client";

import { useEffect, useState } from "react";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Inquiry = {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
};

type Course = {
  id: number;
  title: string;
  description: string | null;
  price: string | null;
};

const adminEmail = (process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "").toLowerCase();

export default function AdminPanel() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    price: ""
  });
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const loadAdmin = async () => {
      const { data } = await supabase.auth.getSession();
      setEmail(data.session?.user.email ?? null);
      setLoading(false);
    };

    loadAdmin();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      if (!email || (adminEmail && email.toLowerCase() !== adminEmail)) {
        return;
      }

      const { data: inquiryData, error: inquiryError } = await supabase
        .from("inquiries")
        .select("id, name, phone, email, message, created_at")
        .order("created_at", { ascending: false });

      const { data: courseData, error: courseError } = await supabase
        .from("courses")
        .select("id, title, description, price")
        .order("created_at", { ascending: false });

      if (inquiryError || courseError) {
        setNotice(inquiryError?.message ?? courseError?.message ?? null);
      } else {
        setInquiries(inquiryData ?? []);
        setCourses(courseData ?? []);
        setNotice(null);
      }
    };

    loadData();
  }, [email]);

  const addCourse = async () => {
    setNotice(null);
    const { error } = await supabase.from("courses").insert([
      {
        title: courseForm.title,
        description: courseForm.description,
        price: courseForm.price
      }
    ]);

    if (error) {
      setNotice(error.message);
      return;
    }

    setCourseForm({ title: "", description: "", price: "" });
    const { data } = await supabase
      .from("courses")
      .select("id, title, description, price")
      .order("created_at", { ascending: false });
    setCourses(data ?? []);
  };

  const deleteCourse = async (id: number) => {
    await supabase.from("courses").delete().eq("id", id);
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  if (!isSupabaseReady) {
    return (
      <div className="notice">
        Supabase is not configured yet. Add keys in .env.local to enable admin
        tools.
      </div>
    );
  }

  if (loading) {
    return <div className="notice">Loading admin tools...</div>;
  }

  if (!adminEmail) {
    return (
      <div className="notice">
        Set NEXT_PUBLIC_ADMIN_EMAIL in your environment to enable admin tools.
      </div>
    );
  }

  if (!email || email.toLowerCase() !== adminEmail) {
    return (
      <div className="notice">
        Sign in with the admin email to manage courses and inquiries.
      </div>
    );
  }

  return (
    <div className="grid">
      <div className="card">
        <h4>Add course</h4>
        <div className="form">
          <div className="row">
            <label htmlFor="course-title">Title</label>
            <input
              id="course-title"
              value={courseForm.title}
              onChange={(event) =>
                setCourseForm((prev) => ({
                  ...prev,
                  title: event.target.value
                }))
              }
            />
          </div>
          <div className="row">
            <label htmlFor="course-description">Description</label>
            <textarea
              id="course-description"
              value={courseForm.description}
              onChange={(event) =>
                setCourseForm((prev) => ({
                  ...prev,
                  description: event.target.value
                }))
              }
            />
          </div>
          <div className="row">
            <label htmlFor="course-price">Price</label>
            <input
              id="course-price"
              value={courseForm.price}
              onChange={(event) =>
                setCourseForm((prev) => ({
                  ...prev,
                  price: event.target.value
                }))
              }
            />
          </div>
          <button type="button" onClick={addCourse}>
            Save course
          </button>
          {notice ? <p className="notice">{notice}</p> : null}
        </div>
      </div>
      <div className="card">
        <h4>Inquiries</h4>
        {!inquiries.length ? (
          <p className="notice">No inquiries yet.</p>
        ) : (
          <div className="grid">
            {inquiries.map((inquiry) => (
              <article key={inquiry.id} className="card">
                <strong>{inquiry.name}</strong>
                <span>{inquiry.phone}</span>
                <span>{inquiry.email}</span>
                <p>{inquiry.message}</p>
              </article>
            ))}
          </div>
        )}
      </div>
      <div className="card">
        <h4>Manage courses</h4>
        {!courses.length ? (
          <p className="notice">No courses yet.</p>
        ) : (
          <div className="grid">
            {courses.map((course) => (
              <article key={course.id} className="card">
                <strong>{course.title}</strong>
                <span>{course.price ?? ""}</span>
                <p>{course.description ?? ""}</p>
                <button type="button" onClick={() => deleteCourse(course.id)}>
                  Remove
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

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

type Lecture = {
  id: number;
  title: string;
  track: string | null;
  topic: string | null;
  teacher: string | null;
  video_url: string | null;
};

type Material = {
  id: number;
  title: string;
  track: string | null;
  kind: string;
  pages: number | null;
  file_url: string | null;
};

type Announcement = {
  id: number;
  title: string;
  detail: string | null;
};

type Doubt = {
  id: number;
  title: string;
  question: string;
  subject: string | null;
  status: string | null;
};

const adminEmail = (process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "").toLowerCase();

export default function AdminPanel() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [doubts, setDoubts] = useState<Doubt[]>([]);
  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    price: ""
  });
  const [lectureForm, setLectureForm] = useState({
    title: "",
    track: "",
    topic: "",
    teacher: "",
    videoUrl: "",
    duration: ""
  });
  const [materialForm, setMaterialForm] = useState({
    title: "",
    track: "",
    kind: "PDF",
    pages: "",
    fileUrl: ""
  });
  const [announcementForm, setAnnouncementForm] = useState({
    title: "",
    detail: ""
  });
  const [replyForm, setReplyForm] = useState<Record<number, string>>({});
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const loadAdmin = async () => {
      const { data } = await supabase!.auth.getSession();
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

      const { data: inquiryData, error: inquiryError } = await supabase!
        .from("inquiries")
        .select("id, name, phone, email, message, created_at")
        .order("created_at", { ascending: false });

      const { data: courseData, error: courseError } = await supabase!
        .from("courses")
        .select("id, title, description, price")
        .order("created_at", { ascending: false });

      const { data: lectureData, error: lectureError } = await supabase!
        .from("lectures")
        .select("id, title, track, topic, teacher, video_url")
        .order("created_at", { ascending: false });

      const { data: materialData, error: materialError } = await supabase!
        .from("materials_library")
        .select("id, title, track, kind, pages, file_url")
        .order("created_at", { ascending: false });

      const { data: announcementData, error: announcementError } = await supabase!
        .from("announcements")
        .select("id, title, detail")
        .order("created_at", { ascending: false });

      const { data: doubtData, error: doubtError } = await supabase!
        .from("doubts")
        .select("id, title, question, subject, status")
        .order("created_at", { ascending: false })
        .limit(20);

      if (
        inquiryError ||
        courseError ||
        lectureError ||
        materialError ||
        announcementError ||
        doubtError
      ) {
        setNotice(
          inquiryError?.message ||
            courseError?.message ||
            lectureError?.message ||
            materialError?.message ||
            announcementError?.message ||
            doubtError?.message ||
            null
        );
      } else {
        setInquiries(inquiryData ?? []);
        setCourses(courseData ?? []);
        setLectures(lectureData ?? []);
        setMaterials(materialData ?? []);
        setAnnouncements(announcementData ?? []);
        setDoubts(doubtData ?? []);
        setNotice(null);
      }
    };

    loadData();
  }, [email]);

  const addCourse = async () => {
    setNotice(null);
    const { error } = await supabase!.from("courses").insert([
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
    const { data } = await supabase!
      .from("courses")
      .select("id, title, description, price")
      .order("created_at", { ascending: false });
    setCourses(data ?? []);
  };

  const deleteCourse = async (id: number) => {
    await supabase!.from("courses").delete().eq("id", id);
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const addLecture = async () => {
    setNotice(null);
    const { error } = await supabase!.from("lectures").insert([
      {
        title: lectureForm.title,
        track: lectureForm.track || null,
        topic: lectureForm.topic || null,
        teacher: lectureForm.teacher || null,
        video_url: lectureForm.videoUrl || null,
        duration_minutes: lectureForm.duration
          ? Number(lectureForm.duration)
          : null
      }
    ]);

    if (error) {
      setNotice(error.message);
      return;
    }

    setLectureForm({
      title: "",
      track: "",
      topic: "",
      teacher: "",
      videoUrl: "",
      duration: ""
    });
  };

  const addMaterial = async () => {
    setNotice(null);
    const { error } = await supabase!.from("materials_library").insert([
      {
        title: materialForm.title,
        track: materialForm.track || null,
        kind: materialForm.kind,
        pages: materialForm.pages ? Number(materialForm.pages) : null,
        file_url: materialForm.fileUrl || null
      }
    ]);

    if (error) {
      setNotice(error.message);
      return;
    }

    setMaterialForm({
      title: "",
      track: "",
      kind: "PDF",
      pages: "",
      fileUrl: ""
    });
  };

  const addAnnouncement = async () => {
    setNotice(null);
    const { error } = await supabase!.from("announcements").insert([
      { title: announcementForm.title, detail: announcementForm.detail }
    ]);

    if (error) {
      setNotice(error.message);
      return;
    }

    setAnnouncementForm({ title: "", detail: "" });
  };

  const replyToDoubt = async (id: number) => {
    const reply = replyForm[id];
    if (!reply) return;

    await supabase!.from("doubt_replies").insert([
      {
        doubt_id: id,
        teacher_name: adminEmail,
        reply
      }
    ]);
    await supabase!.from("doubts").update({ status: "answered" }).eq("id", id);
    setReplyForm((prev) => ({ ...prev, [id]: "" }));
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
      <div className="card">
        <h4>Add lecture</h4>
        <div className="form">
          <div className="row">
            <label htmlFor="lecture-title">Title</label>
            <input
              id="lecture-title"
              value={lectureForm.title}
              onChange={(event) =>
                setLectureForm((prev) => ({
                  ...prev,
                  title: event.target.value
                }))
              }
            />
          </div>
          <div className="row">
            <label htmlFor="lecture-track">Track</label>
            <input
              id="lecture-track"
              value={lectureForm.track}
              onChange={(event) =>
                setLectureForm((prev) => ({
                  ...prev,
                  track: event.target.value
                }))
              }
              placeholder="jee / neet / govt"
            />
          </div>
          <div className="row">
            <label htmlFor="lecture-topic">Topic</label>
            <input
              id="lecture-topic"
              value={lectureForm.topic}
              onChange={(event) =>
                setLectureForm((prev) => ({
                  ...prev,
                  topic: event.target.value
                }))
              }
            />
          </div>
          <div className="row">
            <label htmlFor="lecture-teacher">Teacher</label>
            <input
              id="lecture-teacher"
              value={lectureForm.teacher}
              onChange={(event) =>
                setLectureForm((prev) => ({
                  ...prev,
                  teacher: event.target.value
                }))
              }
            />
          </div>
          <div className="row">
            <label htmlFor="lecture-url">Video URL</label>
            <input
              id="lecture-url"
              value={lectureForm.videoUrl}
              onChange={(event) =>
                setLectureForm((prev) => ({
                  ...prev,
                  videoUrl: event.target.value
                }))
              }
            />
          </div>
          <div className="row">
            <label htmlFor="lecture-duration">Duration (min)</label>
            <input
              id="lecture-duration"
              value={lectureForm.duration}
              onChange={(event) =>
                setLectureForm((prev) => ({
                  ...prev,
                  duration: event.target.value
                }))
              }
            />
          </div>
          <button type="button" onClick={addLecture}>
            Save lecture
          </button>
        </div>
      </div>
      <div className="card">
        <h4>Add material</h4>
        <div className="form">
          <div className="row">
            <label htmlFor="material-title">Title</label>
            <input
              id="material-title"
              value={materialForm.title}
              onChange={(event) =>
                setMaterialForm((prev) => ({
                  ...prev,
                  title: event.target.value
                }))
              }
            />
          </div>
          <div className="row">
            <label htmlFor="material-track">Track</label>
            <input
              id="material-track"
              value={materialForm.track}
              onChange={(event) =>
                setMaterialForm((prev) => ({
                  ...prev,
                  track: event.target.value
                }))
              }
            />
          </div>
          <div className="row">
            <label htmlFor="material-kind">Type</label>
            <input
              id="material-kind"
              value={materialForm.kind}
              onChange={(event) =>
                setMaterialForm((prev) => ({
                  ...prev,
                  kind: event.target.value
                }))
              }
              placeholder="PDF / Assignment"
            />
          </div>
          <div className="row">
            <label htmlFor="material-pages">Pages</label>
            <input
              id="material-pages"
              value={materialForm.pages}
              onChange={(event) =>
                setMaterialForm((prev) => ({
                  ...prev,
                  pages: event.target.value
                }))
              }
            />
          </div>
          <div className="row">
            <label htmlFor="material-url">File URL</label>
            <input
              id="material-url"
              value={materialForm.fileUrl}
              onChange={(event) =>
                setMaterialForm((prev) => ({
                  ...prev,
                  fileUrl: event.target.value
                }))
              }
            />
          </div>
          <button type="button" onClick={addMaterial}>
            Save material
          </button>
        </div>
      </div>
      <div className="card">
        <h4>Add announcement</h4>
        <div className="form">
          <div className="row">
            <label htmlFor="announcement-title">Title</label>
            <input
              id="announcement-title"
              value={announcementForm.title}
              onChange={(event) =>
                setAnnouncementForm((prev) => ({
                  ...prev,
                  title: event.target.value
                }))
              }
            />
          </div>
          <div className="row">
            <label htmlFor="announcement-detail">Detail</label>
            <textarea
              id="announcement-detail"
              value={announcementForm.detail}
              onChange={(event) =>
                setAnnouncementForm((prev) => ({
                  ...prev,
                  detail: event.target.value
                }))
              }
            />
          </div>
          <button type="button" onClick={addAnnouncement}>
            Publish notice
          </button>
        </div>
      </div>
      <div className="card">
        <h4>Open doubts</h4>
        {!doubts.length ? (
          <p className="notice">No doubts yet.</p>
        ) : (
          <div className="doubt-grid">
            {doubts.map((doubt) => (
              <article key={doubt.id} className="doubt-card">
                <strong>{doubt.title}</strong>
                <p>{doubt.question}</p>
                <span className="muted-text">{doubt.subject ?? ""}</span>
                <div className="row">
                  <textarea
                    value={replyForm[doubt.id] ?? ""}
                    onChange={(event) =>
                      setReplyForm((prev) => ({
                        ...prev,
                        [doubt.id]: event.target.value
                      }))
                    }
                    placeholder="Reply to student"
                  />
                </div>
                <button type="button" onClick={() => replyToDoubt(doubt.id)}>
                  Send reply
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

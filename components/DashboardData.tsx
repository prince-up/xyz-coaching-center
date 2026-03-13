"use client";

import { useEffect, useMemo, useState } from "react";
import AuthPanel from "./AuthPanel";
import DashboardCharts from "./DashboardCharts";
import { isSupabaseReady, supabase } from "../lib/supabaseClient";

type Enrollment = {
  id: number;
  progress: number | null;
  next_class_at: string | null;
  next_class_label: string | null;
  track_courses:
    | {
        title: string;
        description: string | null;
      }
    | Array<{
        title: string;
        description: string | null;
      }>
    | null;
};

type UpcomingClass = {
  id: number;
  title: string;
  starts_at: string;
  track: string | null;
};

type TestAttempt = {
  id: number;
  score: number;
  total: number;
  accuracy: number;
  rank: number | null;
  created_at: string;
};

type Notification = {
  id: number;
  title: string;
  detail: string | null;
  created_at: string;
};

type StudyMaterial = {
  id: number;
  title: string;
  kind: string;
  pages: number | null;
};

type WeakTopic = {
  id: number;
  topic: string;
  accuracy: number;
};

type StudyTask = {
  id: number;
  title: string;
  detail: string | null;
};

const formatDateTime = (value: string | null) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(undefined, {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
};

export default function DashboardData() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [demoMode, setDemoMode] = useState(false);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [upcomingClasses, setUpcomingClasses] = useState<UpcomingClass[]>([]);
  const [testAttempts, setTestAttempts] = useState<TestAttempt[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [weakTopics, setWeakTopics] = useState<WeakTopic[]>([]);
  const [studyTasks, setStudyTasks] = useState<StudyTask[]>([]);

  const demoData = useMemo(() => ({
    enrollments: [
      {
        id: 1,
        progress: 72,
        next_class_at: new Date(Date.now() + 2 * 86400000).toISOString(),
        next_class_label: "Next class",
        track_courses: {
          title: "JEE Core Physics",
          description: "Mechanics, rotation, and electrostatics sprint."
        }
      },
      {
        id: 2,
        progress: 64,
        next_class_at: new Date(Date.now() + 3 * 86400000).toISOString(),
        next_class_label: "Next class",
        track_courses: {
          title: "NEET Biology Mastery",
          description: "Botany + Zoology with NCERT focus."
        }
      },
      {
        id: 3,
        progress: 58,
        next_class_at: new Date(Date.now() + 4 * 86400000).toISOString(),
        next_class_label: "Next class",
        track_courses: {
          title: "Govt Exam Foundation",
          description: "Quant, reasoning, English, and GK modules."
        }
      }
    ],
    upcomingClasses: [
      {
        id: 1,
        title: "Physics Test Discussion",
        starts_at: new Date(Date.now() + 2 * 86400000).toISOString(),
        track: "jee"
      },
      {
        id: 2,
        title: "Biology Rapid Revision",
        starts_at: new Date(Date.now() + 3 * 86400000).toISOString(),
        track: "neet"
      },
      {
        id: 3,
        title: "Quant Drill Session",
        starts_at: new Date(Date.now() + 4 * 86400000).toISOString(),
        track: "govt"
      }
    ],
    testAttempts: [
      { id: 1, score: 78, total: 100, accuracy: 71, rank: 124, created_at: "" },
      { id: 2, score: 82, total: 100, accuracy: 75, rank: 118, created_at: "" },
      { id: 3, score: 74, total: 100, accuracy: 69, rank: 136, created_at: "" },
      { id: 4, score: 86, total: 100, accuracy: 78, rank: 98, created_at: "" },
      { id: 5, score: 80, total: 100, accuracy: 73, rank: 112, created_at: "" }
    ],
    notifications: [
      {
        id: 1,
        title: "JEE mock test scheduled",
        detail: "Saturday · 9:00 AM",
        created_at: ""
      },
      {
        id: 2,
        title: "NEET biology worksheet added",
        detail: "Download in Study Materials",
        created_at: ""
      },
      {
        id: 3,
        title: "Govt exam strategy session",
        detail: "Sunday · 4:00 PM",
        created_at: ""
      }
    ],
    materials: [
      { id: 1, title: "Physics Formula Sheet", kind: "PDF", pages: 18 },
      { id: 2, title: "NEET Biology Notes", kind: "PDF", pages: 32 },
      { id: 3, title: "Govt Exam Quant Set", kind: "Assignment", pages: 40 }
    ],
    weakTopics: [
      { id: 1, topic: "Organic Chemistry", accuracy: 32 },
      { id: 2, topic: "Magnetic Effects", accuracy: 41 },
      { id: 3, topic: "Data Interpretation", accuracy: 44 }
    ],
    studyTasks: [
      {
        id: 1,
        title: "Practice 50 Organic Chem MCQs",
        detail: "Target accuracy 65%"
      },
      { id: 2, title: "Revise Magnetism notes", detail: "30 minutes" },
      { id: 3, title: "Attempt Govt DI speed set", detail: "20 questions" }
    ]
  }), []);

  useEffect(() => {
    if (!supabase || !isSupabaseReady) {
      setDemoMode(true);
      setEnrollments(demoData.enrollments);
      setUpcomingClasses(demoData.upcomingClasses);
      setTestAttempts(demoData.testAttempts);
      setNotifications(demoData.notifications);
      setMaterials(demoData.materials);
      setWeakTopics(demoData.weakTopics);
      setStudyTasks(demoData.studyTasks);
      setLoading(false);
      setMessage(null);
      return;
    }

    const loadDashboard = async () => {
      setLoading(true);
      setMessage(null);
      const { data: sessionData } = await supabase!.auth.getSession();
      const userId = sessionData.session?.user.id;

      if (!userId) {
        setDemoMode(true);
        setEnrollments(demoData.enrollments);
        setUpcomingClasses(demoData.upcomingClasses);
        setTestAttempts(demoData.testAttempts);
        setNotifications(demoData.notifications);
        setMaterials(demoData.materials);
        setWeakTopics(demoData.weakTopics);
        setStudyTasks(demoData.studyTasks);
        setLoading(false);
        setMessage(null);
        return;
      }

      const [
        enrollmentRes,
        upcomingRes,
        attemptsRes,
        notificationsRes,
        materialsRes,
        weakTopicsRes,
        tasksRes
      ] = await Promise.all([
        supabase!
          .from("student_enrollments")
          .select(
            "id, progress, next_class_at, next_class_label, track_courses(title, description)"
          )
          .eq("user_id", userId)
          .order("created_at", { ascending: false }),
        supabase!
          .from("upcoming_classes")
          .select("id, title, starts_at, track")
          .eq("user_id", userId)
          .order("starts_at", { ascending: true })
          .limit(5),
        supabase!
          .from("test_attempts")
          .select("id, score, total, accuracy, rank, created_at")
          .eq("user_id", userId)
          .order("created_at", { ascending: false })
          .limit(5),
        supabase!
          .from("notifications")
          .select("id, title, detail, created_at")
          .eq("user_id", userId)
          .order("created_at", { ascending: false })
          .limit(6),
        supabase!
          .from("study_materials")
          .select("id, title, kind, pages")
          .eq("user_id", userId)
          .order("created_at", { ascending: false })
          .limit(6),
        supabase!
          .from("weak_topics")
          .select("id, topic, accuracy")
          .eq("user_id", userId)
          .order("accuracy", { ascending: true })
          .limit(3),
        supabase!
          .from("study_tasks")
          .select("id, title, detail")
          .eq("user_id", userId)
          .order("created_at", { ascending: false })
          .limit(5)
      ]);

      if (
        enrollmentRes.error ||
        upcomingRes.error ||
        attemptsRes.error ||
        notificationsRes.error ||
        materialsRes.error ||
        weakTopicsRes.error ||
        tasksRes.error
      ) {
        setMessage(
          enrollmentRes.error?.message ||
            upcomingRes.error?.message ||
            attemptsRes.error?.message ||
            notificationsRes.error?.message ||
            materialsRes.error?.message ||
            weakTopicsRes.error?.message ||
            tasksRes.error?.message ||
            "Failed to load dashboard data."
        );
      }

      setEnrollments(enrollmentRes.data ?? []);
      setUpcomingClasses(upcomingRes.data ?? []);
      setTestAttempts(attemptsRes.data ?? []);
      setNotifications(notificationsRes.data ?? []);
      setMaterials(materialsRes.data ?? []);
      setWeakTopics(weakTopicsRes.data ?? []);
      setStudyTasks(tasksRes.data ?? []);
      setLoading(false);
    };

    loadDashboard();
  }, [demoData]);

  const overallProgress = useMemo(() => {
    if (!enrollments.length) return 0;
    const sum = enrollments.reduce(
      (acc, enrollment) => acc + (enrollment.progress ?? 0),
      0
    );
    return Math.round(sum / enrollments.length);
  }, [enrollments]);

  const latestAttempt = testAttempts[0];

  if (loading) {
    return <div className="notice">Loading dashboard data...</div>;
  }

  if (message) {
    return <div className="notice">{message}</div>;
  }

  return (
    <>
      {demoMode ? (
        <div className="notice">
          Showing demo data. Sign in to see your personal dashboard.
        </div>
      ) : null}

      <section className="section split" id="profile-account">
        <div className="panel">
          <h2>Profile and account</h2>
          <p className="muted-text">
            Edit personal details, sign in, and keep your dashboard synced.
          </p>
          <AuthPanel />
        </div>
        <div className="panel">
          <h3>Your quick summary</h3>
          <div className="metric-row">
            <div>
              <span>Enrolled courses</span>
              <strong>{enrollments.length}</strong>
            </div>
            <div>
              <span>Upcoming classes</span>
              <strong>{upcomingClasses.length}</strong>
            </div>
            <div>
              <span>Latest test score</span>
              <strong>
                {latestAttempt
                  ? `${latestAttempt.score}/${latestAttempt.total}`
                  : "-"}
              </strong>
            </div>
          </div>
          <p className="muted-text">
            Total materials: {materials.length} · Pending tasks: {studyTasks.length}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Enrolled courses</h2>
          <p>Live progress for your JEE, NEET, and Govt exam tracks.</p>
        </div>
        {!enrollments.length ? (
          <div className="notice">No enrollments yet.</div>
        ) : (
          <div className="course-grid">
            {enrollments.map((enrollment) => {
              const course = Array.isArray(enrollment.track_courses)
                ? enrollment.track_courses[0]
                : enrollment.track_courses;

              return (
                <article key={enrollment.id} className="course-card">
                  <h3>{course?.title ?? "Course"}</h3>
                  <p>{course?.description ?? ""}</p>
                  <div className="progress-row">
                    <span>Progress</span>
                    <strong>{enrollment.progress ?? 0}%</strong>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${enrollment.progress ?? 0}%` }}
                    />
                  </div>
                  {enrollment.next_class_label || enrollment.next_class_at ? (
                    <span className="profile-meta">
                      {enrollment.next_class_label
                        ? `${enrollment.next_class_label} · `
                        : ""}
                      {formatDateTime(enrollment.next_class_at)}
                    </span>
                  ) : null}
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="section dashboard-grid">
        <div className="info-card">
          <div className="card-header">
            <h3>Upcoming classes</h3>
            <span className="chip">Next 7 days</span>
          </div>
          {!upcomingClasses.length ? (
            <div className="notice">No upcoming classes.</div>
          ) : (
            <div className="list">
              {upcomingClasses.map((item) => (
                <div key={item.id} className="list-item">
                  <strong>{item.title}</strong>
                  <span>
                    {formatDateTime(item.starts_at)}
                    {item.track ? ` · ${item.track.toUpperCase()}` : ""}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="info-card">
          <div className="card-header">
            <h3>Test performance</h3>
            <span className="chip ghost">Last 30 days</span>
          </div>
          {!latestAttempt ? (
            <div className="notice">No test attempts yet.</div>
          ) : (
            <>
              <div className="kpi-grid">
                <div>
                  <span>Score</span>
                  <strong>
                    {latestAttempt.score}/{latestAttempt.total}
                  </strong>
                </div>
                <div>
                  <span>Accuracy</span>
                  <strong>{latestAttempt.accuracy}%</strong>
                </div>
                <div>
                  <span>Rank</span>
                  <strong>{latestAttempt.rank ?? "-"}</strong>
                </div>
              </div>
              <p className="muted-text">Charts are available below.</p>
            </>
          )}
        </div>
      </section>

      <DashboardCharts testAttempts={testAttempts} weakTopics={weakTopics} />

      <section className="section dashboard-grid">
        <div className="info-card">
          <div className="card-header">
            <h3>Notifications</h3>
            <span className="chip">Latest</span>
          </div>
          {!notifications.length ? (
            <div className="notice">No notifications yet.</div>
          ) : (
            <div className="list">
              {notifications.map((item) => (
                <div key={item.id} className="list-item">
                  <strong>{item.title}</strong>
                  <span>{item.detail ?? ""}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="info-card">
          <div className="card-header">
            <h3>Study materials</h3>
            <span className="chip ghost">Quick access</span>
          </div>
          {!materials.length ? (
            <div className="notice">No study materials yet.</div>
          ) : (
            <div className="list">
              {materials.map((item) => (
                <div key={item.id} className="list-item">
                  <strong>{item.title}</strong>
                  <span>
                    {item.kind}
                    {item.pages ? ` · ${item.pages} pages` : ""}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section split">
        <div className="panel">
          <h3>Progress & focus</h3>
          <p className="muted-text">
            Overall progress is calculated from enrollments and tests.
          </p>
          <div className="progress-row">
            <span>Overall completion</span>
            <strong>{overallProgress}%</strong>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${overallProgress}%` }} />
          </div>
          <div className="badge-row">
            {weakTopics.length ? (
              weakTopics.map((topic) => (
                <span key={topic.id} className="pill ghost">
                  Weak: {topic.topic} ({topic.accuracy}%)
                </span>
              ))
            ) : (
              <span className="pill">No weak topics yet</span>
            )}
          </div>
        </div>
        <div className="panel">
          <h3>Suggested next steps</h3>
          {!studyTasks.length ? (
            <div className="notice">No tasks assigned yet.</div>
          ) : (
            <div className="list">
              {studyTasks.map((task) => (
                <div key={task.id} className="list-item">
                  <strong>{task.title}</strong>
                  <span>{task.detail ?? ""}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

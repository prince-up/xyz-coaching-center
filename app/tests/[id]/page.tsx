"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { isSupabaseReady, supabase } from "../../../lib/supabaseClient";

type Test = {
  id: number;
  title: string;
  track: string | null;
  type: string | null;
  total_questions: number;
  duration_minutes: number;
  negative_mark: number;
  marks_per_question: number;
};

type Question = {
  id: number;
  question_text: string;
  options: string[];
  correct_index: number;
  subject: string | null;
};

const demoTest: Test = {
  id: 1,
  title: "JEE Full Length Mock 1",
  track: "jee",
  type: "full",
  total_questions: 5,
  duration_minutes: 30,
  negative_mark: 1,
  marks_per_question: 4
};

const demoQuestions: Question[] = [
  {
    id: 1,
    question_text: "A body moves with constant acceleration. Which is true?",
    options: [
      "Velocity increases linearly with time",
      "Velocity is constant",
      "Displacement is constant",
      "Acceleration is zero"
    ],
    correct_index: 0,
    subject: "Physics"
  },
  {
    id: 2,
    question_text: "Which gas is most abundant in the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    correct_index: 1,
    subject: "Chemistry"
  },
  {
    id: 3,
    question_text: "The derivative of sin(x) is?",
    options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    correct_index: 0,
    subject: "Mathematics"
  },
  {
    id: 4,
    question_text: "Which part of the cell contains genetic material?",
    options: ["Cytoplasm", "Nucleus", "Ribosome", "Cell wall"],
    correct_index: 1,
    subject: "Biology"
  },
  {
    id: 5,
    question_text: "What is the average of 18 and 30?",
    options: ["20", "22", "24", "26"],
    correct_index: 2,
    subject: "Aptitude"
  }
];

export default function TestRunnerPage() {
  const params = useParams();
  const router = useRouter();
  const testId = Array.isArray(params.id) ? params.id[0] : params.id;

  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const [test, setTest] = useState<Test | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase || !isSupabaseReady || !testId) {
      setTest(demoTest);
      setQuestions(demoQuestions);
      setSecondsLeft(demoTest.duration_minutes * 60);
      setDemoMode(true);
      setLoading(false);
      return;
    }

    const loadTest = async () => {
      setLoading(true);
      const { data: testData, error: testError } = await supabase
        .from("tests")
        .select(
          "id, title, track, type, total_questions, duration_minutes, negative_mark, marks_per_question"
        )
        .eq("id", Number(testId))
        .single();

      if (testError || !testData) {
        setDemoMode(true);
        setTest(demoTest);
        setQuestions(demoQuestions);
        setSecondsLeft(demoTest.duration_minutes * 60);
        setLoading(false);
        return;
      }

      const { data: questionData, error: questionError } = await supabase
        .from("test_questions")
        .select("id, question_text, options, correct_index, subject")
        .eq("test_id", Number(testId))
        .order("id", { ascending: true });

      if (questionError) {
        setDemoMode(true);
        setTest(demoTest);
        setQuestions(demoQuestions);
        setSecondsLeft(demoTest.duration_minutes * 60);
      } else {
        setTest(testData as Test);
        setQuestions((questionData as Question[]) ?? []);
        setSecondsLeft((testData as Test).duration_minutes * 60);
      }
      setLoading(false);
    };

    loadTest();
  }, [testId]);

  useEffect(() => {
    if (submitted || loading) return;
    if (secondsLeft <= 0) {
      setSubmitted(true);
      return;
    }
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft, submitted, loading]);

  const timeLabel = useMemo(() => {
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }, [secondsLeft]);

  const result = useMemo(() => {
    if (!test || !questions.length) return null;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer === undefined) {
        skipped += 1;
        return;
      }
      if (answer === question.correct_index) {
        correct += 1;
      } else {
        wrong += 1;
      }
    });

    const marks = test.marks_per_question ?? 1;
    const negative = test.negative_mark ?? 0;
    const score = correct * marks - wrong * negative;
    const accuracy = questions.length
      ? Math.round((correct / questions.length) * 100)
      : 0;

    return { correct, wrong, skipped, score, accuracy };
  }, [answers, questions, test]);

  const handleSubmit = async () => {
    setSubmitted(true);
    if (!test || !result) return;

    if (!supabase || demoMode) {
      setResultMessage("Result saved locally (demo mode). Sign in for real data.");
      return;
    }

    const { data: sessionData } = await supabase.auth.getSession();
    const userId = sessionData.session?.user.id;

    if (!userId) {
      setResultMessage("Please sign in to save your result.");
      return;
    }

    const total = test.total_questions ?? questions.length;
    await supabase.from("test_attempts").insert({
      user_id: userId,
      test_id: test.id,
      score: result.score,
      total,
      accuracy: result.accuracy,
      rank: null,
      correct_count: result.correct,
      wrong_count: result.wrong,
      skipped_count: result.skipped
    });

    setResultMessage("Result saved to your dashboard.");
  };

  if (loading) {
    return (
      <main className="page">
        <SiteHeader />
        <div className="notice">Loading test...</div>
        <SiteFooter />
      </main>
    );
  }

  if (!test) {
    return (
      <main className="page">
        <SiteHeader />
        <div className="notice">Test not found.</div>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main className="page">
      <SiteHeader />

      <header className="section test-hero">
        <div>
          <p className="badge">{demoMode ? "Demo Test" : "Live Test"}</p>
          <h1>{test.title}</h1>
          <p className="hero-subtitle">
            Total questions: {test.total_questions} · Time: {test.duration_minutes}
            m · Negative marking: -{test.negative_mark}
          </p>
        </div>
        <div className="test-timer">
          <span>Time left</span>
          <strong>{timeLabel}</strong>
          {demoMode ? <p className="muted-text">Demo mode only</p> : null}
        </div>
      </header>

      <section className="section">
        {questions.map((question, index) => (
          <article key={question.id} className="question-card">
            <div className="question-head">
              <span>Q{index + 1}</span>
              <span>{question.subject ?? "General"}</span>
            </div>
            <h3>{question.question_text}</h3>
            <div className="options">
              {question.options.map((option, optionIndex) => {
                const isSelected = answers[question.id] === optionIndex;
                return (
                  <button
                    key={option}
                    type="button"
                    className={`option ${isSelected ? "selected" : ""}`}
                    onClick={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [question.id]: optionIndex
                      }))
                    }
                    disabled={submitted}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </section>

      <section className="section split">
        <div className="panel">
          <h3>Result summary</h3>
          {result ? (
            <div className="kpi-grid">
              <div>
                <span>Score</span>
                <strong>{result.score}</strong>
              </div>
              <div>
                <span>Accuracy</span>
                <strong>{result.accuracy}%</strong>
              </div>
              <div>
                <span>Correct</span>
                <strong>{result.correct}</strong>
              </div>
              <div>
                <span>Wrong</span>
                <strong>{result.wrong}</strong>
              </div>
              <div>
                <span>Skipped</span>
                <strong>{result.skipped}</strong>
              </div>
            </div>
          ) : (
            <div className="notice">Answer questions to see summary.</div>
          )}
          {resultMessage ? <p className="notice">{resultMessage}</p> : null}
        </div>
        <div className="panel">
          <h3>Finish test</h3>
          <p className="muted-text">
            Submit to calculate score, accuracy, and save the attempt.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={handleSubmit} disabled={submitted}>
              {submitted ? "Submitted" : "Submit test"}
            </button>
            <button className="ghost" onClick={() => router.push("/tests")}>
              Back to tests
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

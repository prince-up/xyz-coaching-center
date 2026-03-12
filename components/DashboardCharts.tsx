"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

type TestAttempt = {
  id: number;
  score: number;
  total: number;
  accuracy: number;
  created_at: string;
};

type WeakTopic = {
  id: number;
  topic: string;
  accuracy: number;
};

type Props = {
  testAttempts: TestAttempt[];
  weakTopics: WeakTopic[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const defaultSubjects = [
  { label: "Physics", score: 78 },
  { label: "Chemistry", score: 71 },
  { label: "Mathematics", score: 69 },
  { label: "Biology", score: 74 },
  { label: "Aptitude", score: 66 }
];

export default function DashboardCharts({ testAttempts, weakTopics }: Props) {
  const subjectData = weakTopics.length
    ? weakTopics.map((topic) => ({
        label: topic.topic,
        score: Math.max(100 - topic.accuracy, 40)
      }))
    : defaultSubjects;

  const accuracySeries = [...testAttempts]
    .slice()
    .reverse()
    .map((attempt, index) => ({
      label: `T${index + 1}`,
      accuracy: attempt.accuracy,
      score: attempt.score
    }));

  const accuracyChart = {
    labels: accuracySeries.map((item) => item.label),
    datasets: [
      {
        label: "Accuracy %",
        data: accuracySeries.map((item) => item.accuracy),
        borderColor: "#2b6bf3",
        backgroundColor: "rgba(43, 107, 243, 0.2)",
        tension: 0.3
      }
    ]
  };

  const improvementChart = {
    labels: accuracySeries.map((item) => item.label),
    datasets: [
      {
        label: "Score",
        data: accuracySeries.map((item) => item.score),
        borderColor: "#11c5b6",
        backgroundColor: "rgba(17, 197, 182, 0.2)",
        tension: 0.3
      }
    ]
  };

  const subjectChart = {
    labels: subjectData.map((item) => item.label),
    datasets: [
      {
        label: "Subject score",
        data: subjectData.map((item) => item.score),
        backgroundColor: [
          "rgba(17, 197, 182, 0.7)",
          "rgba(43, 107, 243, 0.7)",
          "rgba(255, 179, 71, 0.7)",
          "rgba(94, 92, 255, 0.7)",
          "rgba(15, 23, 42, 0.7)"
        ],
        borderRadius: 10
      }
    ]
  };

  const focusChart = {
    labels: ["Strong", "Average", "Weak"],
    datasets: [
      {
        data: [55, 25, 20],
        backgroundColor: [
          "rgba(17, 197, 182, 0.8)",
          "rgba(255, 179, 71, 0.8)",
          "rgba(43, 107, 243, 0.8)"
        ],
        borderWidth: 0
      }
    ]
  };

  return (
    <section className="section">
      <div className="section-head">
        <h2>Performance analytics</h2>
        <p>Subject-wise scores, accuracy trend, and improvement curve.</p>
      </div>
      <div className="chart-grid">
        <article className="chart-card">
          <h3>Subject-wise score</h3>
          <Bar data={subjectChart} options={{ responsive: true }} />
        </article>
        <article className="chart-card">
          <h3>Accuracy trend</h3>
          <Line data={accuracyChart} options={{ responsive: true }} />
        </article>
        <article className="chart-card">
          <h3>Improvement trend</h3>
          <Line data={improvementChart} options={{ responsive: true }} />
        </article>
        <article className="chart-card">
          <h3>Focus split</h3>
          <Doughnut data={focusChart} />
        </article>
      </div>
    </section>
  );
}

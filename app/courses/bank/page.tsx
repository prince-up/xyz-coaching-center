import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import Link from "next/link";

const bankExams = [
  {
    title: "IBPS PO",
    full: "Probationary Officer",
    icon: "🏦",
    color: "from-indigo-600 to-indigo-400",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    badge: "Most Popular",
    badgeColor: "bg-indigo-600",
    posts: ["PO", "Management Trainee"],
    duration: "12 Months",
    fee: "₹9,999",
    students: "18,000+",
    href: "/courses/bank/ibps-po",
  },
  {
    title: "IBPS Clerk",
    full: "Clerical Cadre",
    icon: "📑",
    color: "from-blue-600 to-blue-400",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "High Demand",
    badgeColor: "bg-blue-600",
    posts: ["Clerk", "Junior Associate"],
    duration: "8 Months",
    fee: "₹6,999",
    students: "22,000+",
    href: "/courses/bank/ibps-clerk",
  },
  {
    title: "SBI PO",
    full: "State Bank of India PO",
    icon: "💰",
    color: "from-sky-600 to-sky-400",
    bg: "bg-sky-50",
    border: "border-sky-200",
    badge: "Premium",
    badgeColor: "bg-sky-600",
    posts: ["Probationary Officer"],
    duration: "12 Months",
    fee: "₹11,999",
    students: "14,000+",
    href: "/courses/bank/sbi-po",
  },
  {
    title: "SBI Clerk",
    full: "Junior Associate",
    icon: "🗂️",
    color: "from-cyan-600 to-cyan-400",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    badge: "Trending",
    badgeColor: "bg-cyan-600",
    posts: ["Junior Associate", "Customer Support"],
    duration: "8 Months",
    fee: "₹7,499",
    students: "19,500+",
    href: "/courses/bank/sbi-clerk",
  },
  {
    title: "RRB PO",
    full: "Regional Rural Bank PO",
    icon: "🌾",
    color: "from-green-600 to-green-400",
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "New Batch",
    badgeColor: "bg-green-600",
    posts: ["Officer Scale I", "Scale II", "Scale III"],
    duration: "10 Months",
    fee: "₹7,999",
    students: "8,400+",
    href: "/courses/bank/rrb",
  },
  {
    title: "RBI Grade B",
    full: "Reserve Bank of India",
    icon: "🏛️",
    color: "from-amber-600 to-amber-400",
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "Premium",
    badgeColor: "bg-amber-600",
    posts: ["Grade B Officer", "DEPR", "DSIM"],
    duration: "12 Months",
    fee: "₹14,999",
    students: "4,200+",
    href: "/courses/bank/rbi",
  },
];

export default function BankPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteHeader />

      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/courses" className="text-indigo-200 hover:text-white text-sm transition">← All Courses</Link>
            <span className="text-indigo-400">/</span>
            <span className="text-white text-sm">Banking Exams</span>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-700/50 border border-indigo-500 rounded-full px-4 py-1.5 text-sm mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Banking & Finance Sector
              </div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Bank Exam <br />
                <span className="text-indigo-300">Preparation</span>
              </h1>
              <p className="text-indigo-100 text-lg max-w-xl">
                Get selected in top government banks with our structured course, live classes, and interview guidance.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                {[["6", "Bank Courses"], ["800+", "Practice Sets"], ["98%", "Interview Tips"], ["25K+", "Students"]].map(([val, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-bold text-white">{val}</div>
                    <div className="text-indigo-200 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 min-w-[280px]">
              <h3 className="font-bold text-lg mb-4">Course Highlights</h3>
              {["Reasoning & Quant Mastery", "English Grammar & Comprehension", "GA + Current Affairs Daily", "Interview Preparation", "Group Discussion Practice"].map(f => (
                <div key={f} className="flex items-center gap-2 mb-2 text-indigo-100 text-sm">
                  <span className="text-green-400">✓</span> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Bank Exam</h2>
          <p className="text-gray-500 text-lg">From clerk to officer — we cover every role in every bank</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bankExams.map((exam) => (
            <Link href={exam.href} key={exam.title}>
              <div className={`group relative rounded-2xl border-2 ${exam.border} ${exam.bg} p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full`}>
                <div className={`absolute top-4 right-4 text-xs font-bold text-white px-2.5 py-1 rounded-full ${exam.badgeColor}`}>
                  {exam.badge}
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exam.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {exam.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{exam.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{exam.full}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exam.posts.map(p => (
                    <span key={p} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{p}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 text-center border-t border-gray-200 pt-4">
                  <div><div className="font-bold text-gray-900 text-sm">{exam.duration}</div><div className="text-gray-400 text-xs">Duration</div></div>
                  <div><div className="font-bold text-gray-900 text-sm">{exam.fee}</div><div className="text-gray-400 text-xs">Fee</div></div>
                  <div><div className="font-bold text-gray-900 text-sm">{exam.students}</div><div className="text-gray-400 text-xs">Students</div></div>
                </div>
                <div className={`mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r ${exam.color} text-white text-sm font-semibold text-center group-hover:opacity-90 transition`}>
                  Explore Course →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
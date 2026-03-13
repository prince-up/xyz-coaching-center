import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import Link from "next/link";

const railwayExams = [
  {
    title: "RRB NTPC",
    full: "Non-Technical Popular Categories",
    icon: "🚆",
    color: "from-blue-600 to-blue-400",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "Most Popular",
    badgeColor: "bg-blue-600",
    posts: ["Station Master", "Goods Guard", "Junior Clerk"],
    duration: "10 Months",
    fee: "₹6,999",
    students: "28,000+",
    href: "/courses/railways/ntpc",
  },
  {
    title: "RRB Group D",
    full: "Level 1 Posts",
    icon: "🔧",
    color: "from-orange-600 to-orange-400",
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "Mass Exam",
    badgeColor: "bg-orange-600",
    posts: ["Track Maintainer", "Helper", "Porter", "Gateman"],
    duration: "6 Months",
    fee: "₹3,999",
    students: "45,000+",
    href: "/courses/railways/group-d",
  },
  {
    title: "RRB JE",
    full: "Junior Engineer",
    icon: "⚙️",
    color: "from-teal-600 to-teal-400",
    bg: "bg-teal-50",
    border: "border-teal-200",
    badge: "Technical",
    badgeColor: "bg-teal-600",
    posts: ["Junior Engineer", "DMS", "CMA"],
    duration: "8 Months",
    fee: "₹7,499",
    students: "6,200+",
    href: "/courses/railways/je",
  },
  {
    title: "RPF",
    full: "Railway Protection Force",
    icon: "🚓",
    color: "from-red-600 to-red-400",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "New Batch",
    badgeColor: "bg-red-600",
    posts: ["Constable", "Sub Inspector"],
    duration: "6 Months",
    fee: "₹4,499",
    students: "11,000+",
    href: "/courses/railways/rpf",
  },
];

export default function RailwaysPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteHeader />

      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/railway-pattern.svg')]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/courses" className="text-blue-200 hover:text-white text-sm transition">← All Courses</Link>
            <span className="text-blue-400">/</span>
            <span className="text-white text-sm">Railway Exams</span>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 border border-blue-400 rounded-full px-4 py-1.5 text-sm mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Indian Railways
              </div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Railway Exam <br />
                <span className="text-orange-300">Preparation</span>
              </h1>
              <p className="text-blue-100 text-lg max-w-xl">
                From Group D to JE — join thousands of successful railway job holders trained by us.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                {[["4", "Exam Courses"], ["1000+", "MCQs Daily"], ["45K+", "Students"], ["92%", "Selection Rate"]].map(([val, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-bold text-white">{val}</div>
                    <div className="text-blue-200 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 min-w-[280px]">
              <h3 className="font-bold text-lg mb-4">What&apos;s Included</h3>
              {["CBT 1 & CBT 2 Complete Coverage", "Railway GK & Current Affairs", "Physics, Math & Reasoning", "Previous 10 Year Papers", "Physical Test Guidance"].map(f => (
                <div key={f} className="flex items-center gap-2 mb-2 text-blue-100 text-sm">
                  <span className="text-green-400">✓</span> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Railway Exam</h2>
          <p className="text-gray-500 text-lg">Join India&apos;s largest railway exam coaching platform</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {railwayExams.map((exam) => (
            <Link href={exam.href} key={exam.title}>
              <div className={`group relative rounded-2xl border-2 ${exam.border} ${exam.bg} p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
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
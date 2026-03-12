import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import Link from "next/link";

const stateExams = [
  { state: "Uttar Pradesh", icon: "🏛️", exams: ["UPPSC PCS", "UP Police", "UPSSSC PET", "UP Lekhpal"], color: "from-yellow-600 to-yellow-400", bg: "bg-yellow-50", border: "border-yellow-200", students: "32,000+", href: "/courses/state/up" },
  { state: "Rajasthan", icon: "🏰", exams: ["RPSC RAS", "Rajasthan Police", "RSMSSB", "Patwari"], color: "from-orange-600 to-orange-400", bg: "bg-orange-50", border: "border-orange-200", students: "14,000+", href: "/courses/state/rajasthan" },
  { state: "Bihar", icon: "📜", exams: ["BPSC", "Bihar Police", "BSSC", "CDPO"], color: "from-green-600 to-green-400", bg: "bg-green-50", border: "border-green-200", students: "18,000+", href: "/courses/state/bihar" },
  { state: "Madhya Pradesh", icon: "🌿", exams: ["MPPSC", "MP Police", "MPESB", "Patwari"], color: "from-teal-600 to-teal-400", bg: "bg-teal-50", border: "border-teal-200", students: "11,000+", href: "/courses/state/mp" },
  { state: "Maharashtra", icon: "🌆", exams: ["MPSC", "Maharashtra Police", "ZP Bharti"], color: "from-blue-600 to-blue-400", bg: "bg-blue-50", border: "border-blue-200", students: "9,500+", href: "/courses/state/maharashtra" },
  { state: "Haryana", icon: "🌾", exams: ["HPSC HCS", "HSSC", "Haryana Police", "Patwari"], color: "from-purple-600 to-purple-400", bg: "bg-purple-50", border: "border-purple-200", students: "8,200+", href: "/courses/state/haryana" },
  { state: "Gujarat", icon: "💎", exams: ["GPSC", "Gujarat Police", "GSSSB", "Talati"], color: "from-red-600 to-red-400", bg: "bg-red-50", border: "border-red-200", students: "7,800+", href: "/courses/state/gujarat" },
  { state: "Punjab", icon: "🌻", exams: ["PPSC", "Punjab Police", "PSSSB"], color: "from-indigo-600 to-indigo-400", bg: "bg-indigo-50", border: "border-indigo-200", students: "6,400+", href: "/courses/state/punjab" },
];

export default function StateExamsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteHeader />

      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/courses" className="text-green-200 hover:text-white text-sm transition">← All Courses</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm">State Exams</span>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-700/50 border border-green-500 rounded-full px-4 py-1.5 text-sm mb-4">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                State Government Jobs
              </div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                State Exam <br />
                <span className="text-green-300">Preparation</span>
              </h1>
              <p className="text-green-100 text-lg max-w-xl">
                State-specific preparation for PCS, Police, and government exams across every major state.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                {[["8+", "States Covered"], ["200+", "State Exams"], ["1.2L+", "Students"], ["88%", "Pass Rate"]].map(([val, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-bold text-white">{val}</div>
                    <div className="text-green-200 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 min-w-[280px]">
              <h3 className="font-bold text-lg mb-4">State Exam Features</h3>
              {["State-Specific GK", "Hindi & Regional Medium", "Local Pattern Mock Tests", "PCS Interview Coaching", "Weekly Current Affairs"].map(f => (
                <div key={f} className="flex items-center gap-2 mb-2 text-green-100 text-sm">
                  <span className="text-yellow-400">✓</span> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Select Your State</h2>
          <p className="text-gray-500 text-lg">Exam-specific courses tailored to your state's syllabus and pattern</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stateExams.map((item) => (
            <Link href={item.href} key={item.state}>
              <div className={`group relative rounded-2xl border-2 ${item.border} ${item.bg} p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl mb-3 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.state}</h3>
                <div className="space-y-1 mb-4">
                  {item.exams.map(e => (
                    <div key={e} className="text-xs text-gray-600 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gray-400"></span>{e}
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                  <span className="text-xs text-gray-400">{item.students} Students</span>
                  <span className={`text-xs font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>Explore →</span>
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
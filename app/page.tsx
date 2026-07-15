import Link from "next/link";
import { classes } from "@/data/books";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            📚 CBSE NCERT Books PDF
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Free download of all NCERT textbooks from Class 1 to 12.
            Access your study material anytime, anywhere!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#classes" className="download-btn text-lg px-8 py-3">
              Browse All Classes
            </a>
          </div>
        </div>
      </section>


      {/* Class Grid */}
      <section id="classes" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Select Your Class
          </h2>
          <p className="text-text-secondary text-center mb-16 max-w-xl mx-auto">
            Choose your class to browse all available subjects and chapters
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {classes.map((classData) => (
              <Link
                key={classData.id}
                href={`/class/${classData.id}`}
                className={`class-card class-${classData.id} p-6 md:p-8 text-center text-white`}
                style={{ animationDelay: `${classData.id * 50}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {classData.id}
                </div>
                <div className="text-sm opacity-90">Class</div>
                <div className="mt-3 text-xs opacity-75">
                  {classData.subjects.length} Subjects
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links by Popular Subjects */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Popular Subjects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/class/10/math" className="subject-card text-center">
              <div className="text-3xl mb-2">📐</div>
              <div className="font-semibold">Class 10 Math</div>
            </Link>
            <Link href="/class/10/science" className="subject-card text-center">
              <div className="text-3xl mb-2">🔬</div>
              <div className="font-semibold">Class 10 Science</div>
            </Link>
            <Link href="/class/12/physics" className="subject-card text-center">
              <div className="text-3xl mb-2">⚛️</div>
              <div className="font-semibold">Class 12 Physics</div>
            </Link>
            <Link href="/class/12/chemistry" className="subject-card text-center">
              <div className="text-3xl mb-2">🧪</div>
              <div className="font-semibold">Class 12 Chemistry</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why NCERT */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Study from NCERT Books?
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ul className="text-left space-y-4 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span><strong>Board Exam Foundation:</strong> NCERT is the primary source for CBSE board exams</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span><strong>Competitive Exams:</strong> Essential for JEE, NEET, UPSC, and other competitive exams</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span><strong>Clear Concepts:</strong> Simple language and well-structured explanations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span><strong>Authentic Content:</strong> Prepared by subject matter experts</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

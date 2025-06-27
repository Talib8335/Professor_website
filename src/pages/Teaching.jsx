import React, { useState } from "react";
import { useEffect } from 'react';
import { FaDownload } from "react-icons/fa";

const coursesByYear = [
  {
    year: 2025,
    odd: [
      { level: "PG", title: "Computing Lab", code: "CS702/ CS801", notes: "https://example.com/cs702-notes.pdf" },
      { level: "UG", title: "Advanced Data Structures", code: "CS365", notes: "https://example.com/cs365-notes.pdf" }
    ],
    even: [
      { level: "UG", title: "Cloud Computing", code: "CO463", notes: "https://example.com/co463-notes.pdf" },
      { level: "UG", title: "Data Structures and Algorithm Lab", code: "CS204", notes: "https://example.com/cs204-notes.pdf" }
    ]
  },
  {
    year: 2024,
    odd: [
      { level: "PG", title: "Computing Lab", code: "CS702/ CS801", notes: "https://example.com/cs702-notes.pdf" },
      { level: "UG", title: "Advanced Data Structures", code: "CS365", notes: "https://example.com/cs365-notes.pdf" }
    ],
    even: [
      { level: "UG", title: "Cloud Computing", code: "CO463", notes: "https://example.com/co463-notes.pdf" },
      { level: "UG", title: "Data Structures and Algorithm Lab", code: "CS204", notes: "https://example.com/cs204-notes.pdf" }
    ]
  },
   {
    year: 2023,
    odd: [
      { level: "PG", title: "Computing Lab", code: "CS702/ CS801", notes: "https://example.com/cs702-notes.pdf" },
      { level: "UG", title: "Advanced Data Structures", code: "CS365", notes: "https://example.com/cs365-notes.pdf" }
    ],
    even: [
      { level: "UG", title: "Cloud Computing", code: "CO463", notes: "https://example.com/co463-notes.pdf" },
      { level: "UG", title: "Data Structures and Algorithm Lab", code: "CS204", notes: "https://example.com/cs204-notes.pdf" }
    ]
  },
   {
    year: 2022,
    odd: [
      { level: "PG", title: "Computing Lab", code: "CS702/ CS801", notes: "https://example.com/cs702-notes.pdf" },
      { level: "UG", title: "Advanced Data Structures", code: "CS365", notes: "https://example.com/cs365-notes.pdf" }
    ],
    even: [
      { level: "UG", title: "Cloud Computing", code: "CO463", notes: "https://example.com/co463-notes.pdf" },
      { level: "UG", title: "Data Structures and Algorithm Lab", code: "CS204", notes: "https://example.com/cs204-notes.pdf" }
    ]
  }

];

function DownloadIcon({ url }) {
  return (
    <span>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#389589] dark:text-[#A78BFA] hover:text-[#2a6b5f] dark:hover:text-[#C4B5FD] transition-colors"
          title="Download/View Notes"
          style={{ fontSize: "1.15rem" }}
        >
          <FaDownload />
        </a>
      ) : (
        <FaDownload className="text-gray-300 dark:text-gray-700" title="No notes available" />
      )}
    </span>
  );
}

function Teaching() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };



  const [activeYear, setActiveYear] = useState(coursesByYear[0].year);
  const activeCourses = coursesByYear.find(c => c.year === activeYear);

  return (
    <section className="min-h-screen w-full bg-bgLight dark:bg-bgDark py-10 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] mb-10 text-center">
          Teaching
        </h1>
        {/* Year Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {coursesByYear.map(({ year }) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-5 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-300 ${
                activeYear === year
                  ? 'bg-[#389589] text-white dark:bg-[#A78BFA] dark:text-gray-900 shadow'
                  : 'bg-[#e6f4f1] text-[#389589] dark:bg-[#2e1d4d] dark:text-[#A78BFA]'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Semester Content */}
        {activeCourses ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Odd Semester */}
            <div>
              <h2 className="text-2xl font-bold text-[#389589] dark:text-[#A78BFA] mb-4 text-center md:text-left">
                Odd Semester
              </h2>
              <div className="space-y-5">
                {activeCourses.odd && activeCourses.odd.length > 0 ? (
                  activeCourses.odd.map((course) => (
                    <div
                      key={course.code + course.title}
                      className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg border-l-4 border-[#389589] dark:border-[#A78BFA] px-5 py-4 flex flex-col justify-center group hover:shadow-2xl transition-all duration-300"
                      style={{ minHeight: "90px" }}
                    >
                      {/* Download icon */}
                      <div className="absolute top-4 right-4 z-10">
                        <DownloadIcon url={course.notes} />
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#389589] dark:text-[#A78BFA] uppercase tracking-wider">
                          {course.level}
                        </span>
                        <span className="ml-2 text-sm font-semibold text-[#389589] dark:text-[#A78BFA]">
                          {course.title}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{course.code}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400 italic text-center">No courses</div>
                )}
              </div>
            </div>
            {/* Even Semester */}
            <div>
              <h2 className="text-2xl font-bold text-[#389589] dark:text-[#A78BFA] mb-4 text-center md:text-left">
                Even Semester
              </h2>
              <div className="space-y-5">
                {activeCourses.even && activeCourses.even.length > 0 ? (
                  activeCourses.even.map((course) => (
                    <div
                      key={course.code + course.title}
                      className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg border-l-4 border-[#389589] dark:border-[#A78BFA] px-5 py-4 flex flex-col justify-center group hover:shadow-2xl transition-all duration-300"
                      style={{ minHeight: "90px" }}
                    >
                      {/* Download icon */}
                      <div className="absolute top-4 right-4 z-10">
                        <DownloadIcon url={course.notes} />
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#389589] dark:text-[#A78BFA] uppercase tracking-wider">
                          {course.level}
                        </span>
                        <span className="ml-2 text-sm font-semibold text-[#389589] dark:text-[#A78BFA]">
                          {course.title}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{course.code}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400 italic text-center">No courses</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-400">No courses available for this year.</div>
        )}
      </div>
    </section>
  );
}

export default Teaching;


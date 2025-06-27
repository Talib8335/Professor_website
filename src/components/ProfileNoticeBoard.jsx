import React, { useEffect, useRef } from "react";
import { FaThumbtack } from "react-icons/fa";

// Notice Board Data
const notices = [
  {
    title: "PhD & M.Tech (Research) Admissions",
    date: "Open Now",
    text: "🚀 We are looking for motivated PhD and M.Tech (Research) students to join our lab. Explore advanced research in cloud computing, AI, and systems.",
    action: {
      label: "Apply",
      url: "https://forms.gle/YOUR_GOOGLE_FORM_LINK",
      icon: "📝"
    }
  },
  {
    title: "Internship Opportunity",
    date: "Summer 2025",
    text: "🔥 Internship positions are open for college students interested in cloud, AI, and systems research. Gain hands-on experience with real-world projects.",
    action: {
      label: "Apply",
      url: "https://forms.gle/YOUR_GOOGLE_FORM_LINK",
      icon: "📝"
    }
  },
  {
    title: "Upcoming Paper Presentation",
    date: "July 2025",
    text: "📄 Our latest paper on Federated Learning will be presented at ICML 2025. Stay tuned for more details and the presentation schedule.",
    action: null
  },
  {
    title: "Conference Participation",
    date: "August 2025",
    text: "📅 The lab will participate in the IEEE Cloud 2025 conference. Meet us at our session on scalable edge-cloud systems.",
    action: null
  }
];

// Profile Stats Data
const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "25+", label: "Students Mentored" },
  { value: "52+", label: "Published Works" },
  { value: "600+", label: "Professionals Upskilled in Cloud/Blockchain" }
];

// Animated counter hook
function useCountUp(target, duration = 1200) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/\D/g, "")) || 0;
    if (end === 0) return setCount(target);
    const stepTime = Math.max(Math.floor(duration / end), 16);
    let frame;
    function update() {
      start += 1;
      setCount(start + (target.endsWith("+") ? "+" : ""));
      if (start < end) {
        frame = setTimeout(update, stepTime);
      }
    }
    update();
    return () => clearTimeout(frame);
  }, [target, duration]);
  return count;
}

// Concise, relevant cloud computing quote
const cloudQuote =
  "Cloud computing empowers scientific discovery, collaboration, and innovation for the next generation.";

function ProfileNoticeBoard() {
  // For seamless infinite scroll, duplicate notices if more than 3
  const displayNotices = notices.length > 3 ? [...notices, ...notices] : notices;
  const showScroll = notices.length > 3;

  // Pause animation on hover
  const scrollRef = useRef(null);
  useEffect(() => {
    if (!showScroll || !scrollRef.current) return;
    const el = scrollRef.current;
    const handleMouseEnter = () => (el.style.animationPlayState = "paused");
    const handleMouseLeave = () => (el.style.animationPlayState = "running");
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [showScroll]);

  return (
    <section className="my-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Stats (Left) */}
          <div className="md:w-1/2 w-full flex">
            <div className="flex flex-col flex-1 justify-between bg-[#f7f5ee] dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-dashed border-[#389589] dark:border-[#A78BFA] px-6 py-8 md:py-10 min-h-[400px]">
              <h2 className="text-2xl md:text-3xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center mb-4">
                Profile Highlights
              </h2>
              <blockquote className="italic text-lg md:text-xl font-body text-center text-[#389589] dark:text-[#A78BFA] mb-6 px-2">
                {cloudQuote}
              </blockquote>
              <div className="grid grid-cols-2 gap-4 w-full">
                {stats.map((item, idx) => {
                  const count = useCountUp(item.value);
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow-md border border-[#389589] dark:border-[#A78BFA] py-5 min-h-[80px] justify-center"
                    >
                      <span className="text-3xl md:text-4xl font-extrabold text-[#389589] dark:text-[#A78BFA] font-cool mb-1 tracking-tight">
                        {count}
                      </span>
                      <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 text-center">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Notice Board (Right) */}
          <div className="md:w-1/2 w-full flex">
            <div className="relative flex flex-col flex-1 justify-between bg-[#f7f5ee] dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-dashed border-[#389589] dark:border-[#A78BFA] px-3 py-8 md:py-10 min-h-[400px]">
              <h2 className="text-2xl md:text-3xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center mb-4">
                Notice Board
              </h2>
              {/* Pin at the top */}
              <div className="absolute left-1/2 -top-5 transform -translate-x-1/2 z-10">
                <FaThumbtack className="text-[#389589] dark:text-[#A78BFA] text-3xl drop-shadow-lg rotate-12" />
              </div>
              {/* Smooth scroll container */}
              <div className="relative overflow-hidden" style={{ height: "380px" }}>
                <ul
                  ref={scrollRef}
                  className={`flex flex-col ${showScroll ? "notice-scroll" : ""}`}
                  style={{
                    animation: showScroll
                      ? `smoothScroll ${notices.length * 4.5}s linear infinite`
                      : "none"
                  }}
                >
                  {displayNotices.map((notice, idx) => (
                    <li
                      key={idx}
                      className="relative bg-white dark:bg-gray-900 rounded-xl shadow-md px-4 py-3 border-l-4 border-[#389589] dark:border-[#A78BFA] hover:shadow-lg transition group flex flex-col justify-center mb-2"
                      style={{ minHeight: "80px" }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#A78BFA] dark:text-[#389589] uppercase tracking-wider">
                          {notice.date}
                        </span>
                        <span className="ml-2 text-sm font-semibold text-[#389589] dark:text-[#A78BFA]">
                          {notice.title}
                        </span>
                      </div>
                      <div className="text-gray-700 dark:text-gray-200 text-sm mb-1">
                        {notice.text}
                      </div>
                      {notice.action && (
                        <a
                          href={notice.action.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1 bg-[#389589] text-white dark:bg-[#A78BFA] dark:text-gray-900 rounded-md text-xs font-semibold hover:bg-[#2a6b5f] dark:hover:bg-purple-700 transition-colors duration-300 w-max"
                        >
                          <span>{notice.action.icon}</span>
                          {notice.action.label}
                        </a>
                      )}
                      <div className="absolute -left-2 top-4">
                        <span className="text-[#389589] dark:text-[#A78BFA] text-lg rotate-12 opacity-80">📌</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <style jsx>{`
                  @keyframes smoothScroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                  }
                  .notice-scroll {
                    animation-play-state: running;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileNoticeBoard;

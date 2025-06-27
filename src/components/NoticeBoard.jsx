import React from "react";
import { FaThumbtack } from "react-icons/fa";

// Example news notices
const notices = [
  {
    title: "PhD & M.Tech (Research) Admissions",
    date: "Open Now",
    text: "🚀 We are looking for motivated PhD and M.Tech (Research) students to join our lab. Explore advanced research in cloud computing, AI, and systems.",
    action: {
      label: "Apply",
      url: "https://forms.gle/YOUR_GOOGLE_FORM_LINK", // replace with your form
      icon: "📝"
    }
  },
  {
    title: "Internship Opportunity",
    date: "Summer 2025",
    text: "🔥 Internship positions are open for college students interested in cloud, AI, and systems research. Gain hands-on experience with real-world projects.",
    action: {
      label: "Apply",
      url: "https://forms.gle/YOUR_GOOGLE_FORM_LINK", // replace with your form
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


function NoticeBoard() {
  return (
    <section className="my-16">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-serifHeading text-[#389589] text-center mb-6">
          Notice Board
        </h2>
        <div className="relative bg-[#f7f5ee] dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-dashed border-[#389589] px-3 py-8 md:py-10">
          {/* Pin at the top */}
          <div className="absolute left-1/2 -top-5 transform -translate-x-1/2 z-10">
            <FaThumbtack className="text-[#A78BFA] text-3xl drop-shadow-lg rotate-12" />
          </div>
          {/* Notices */}
          <ul className="space-y-5">
  {notices.map((notice, idx) => (
    <li
      key={idx}
      className="relative bg-white dark:bg-gray-900 rounded-xl shadow-md px-5 py-4 border-l-4 border-[#389589] dark:border-[#A78BFA] hover:shadow-lg transition group min-h-[90px] flex flex-col justify-center"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-bold text-[#A78BFA] dark:text-[#389589] uppercase tracking-wider">
          {notice.date}
        </span>
        <span className="ml-2 text-sm font-semibold text-[#389589] dark:text-[#A78BFA]">
          {notice.title}
        </span>
      </div>
      <div className="text-gray-700 dark:text-gray-200 text-sm mb-2">
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
      {/* Pin for each notice */}
      <div className="absolute -left-3 top-4">
        <span className="text-[#389589] dark:text-[#A78BFA] text-lg rotate-12 opacity-80">📌</span>
      </div>
    </li>
  ))}
</ul>

        </div>
      </div>
    </section>
  );
}

export default NoticeBoard;

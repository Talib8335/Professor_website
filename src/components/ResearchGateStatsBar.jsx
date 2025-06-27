import React from "react";
import { FaResearchgate, FaUserFriends, FaChartBar, FaStar } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

// Example stats (replace with your own)
const rgStats = {
  rgScore: 21.4,
  reads: 12500,
  citations: 320,
  followers: 410,
  yearly: [
    { year: 2018, reads: 400 },
    { year: 2019, reads: 800 },
    { year: 2020, reads: 2000 },
    { year: 2021, reads: 3500 },
    { year: 2022, reads: 4100 },
    { year: 2023, reads: 2700 },
    { year: 2024, reads: 2000 },
  ]
};

function ResearchGateStatsBar() {
  // Detect dark mode using Tailwind's dark class on <html>
  const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark");
  const barColor = isDark ? "#A78BFA" : "#389589";
  const barShadow = isDark ? "#6D28D9" : "#60A5FA";

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-[#389589] dark:border-[#A78BFA] p-6 w-full max-w-xl mx-auto">
      <a
        href="https://www.researchgate.net/profile/YOUR_PROFILE"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[#389589] dark:text-[#A78BFA] text-lg font-bold mb-3 hover:underline"
      >
        <FaResearchgate className="text-2xl" />
        ResearchGate
      </a>
      <div className="flex flex-wrap gap-6 items-center justify-center mb-6">
        <div className="flex items-center gap-2">
          <FaStar className="text-[#389589] dark:text-[#A78BFA]" />
          <span className="font-bold text-2xl">{rgStats.rgScore}</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">RG Score</span>
        </div>
        <div className="flex items-center gap-2">
          <FaChartBar className="text-[#389589] dark:text-[#A78BFA]" />
          <span className="font-bold text-2xl">{rgStats.reads.toLocaleString()}</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">Reads</span>
        </div>
        <div className="flex items-center gap-2">
          <FaChartBar className="text-[#389589] dark:text-[#A78BFA]" />
          <span className="font-bold text-2xl">{rgStats.citations}</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">Citations</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserFriends className="text-[#389589] dark:text-[#A78BFA]" />
          <span className="font-bold text-2xl">{rgStats.followers}</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">Followers</span>
        </div>
      </div>
      <div className="w-full h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={rgStats.yearly}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#444" : "#eee"} />
            <XAxis dataKey="year" stroke={barColor} fontSize={12} />
            <YAxis stroke={barColor} fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#22223b" : "#f7f5ee",
                borderColor: barColor,
                color: isDark ? "#A78BFA" : "#389589"
              }}
              cursor={{ fill: isDark ? "#A78BFA22" : "#38958922" }}
            />
            <Bar
              dataKey="reads"
              fill={`url(#rgBarGradient)`}
              radius={[6, 6, 0, 0]}
              stroke={barShadow}
              strokeWidth={1}
            />
            <defs>
              <linearGradient id="rgBarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={barColor} stopOpacity={0.8} />
                <stop offset="100%" stopColor={barShadow} stopOpacity={0.3} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <span className="mt-3 block text-xs text-gray-400 text-center">
        Last updated: June 2025 &mdash; <a href="https://www.researchgate.net/profile/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className="underline">View on ResearchGate</a>
      </span>
    </div>
  );
}

export default ResearchGateStatsBar;

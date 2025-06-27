import React from "react";
import { FaGoogle, FaChartBar, FaHashtag, FaDatabase } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip as ChartJsTooltip, Legend } from "chart.js";

Chart.register(ArcElement, ChartJsTooltip, Legend);

// Google Scholar Data
const googleScholarStats = {
  total: 635,
  hIndex: 13,
  i10Index: 16,
  yearly: [
    { year: 2015, count: 4 },
    { year: 2016, count: 5 },
    { year: 2017, count: 10 },
    { year: 2018, count: 19 },
    { year: 2019, count: 35 },
    { year: 2020, count: 65 },
    { year: 2021, count: 73 },
    { year: 2022, count: 95 },
    { year: 2023, count: 117 },
    { year: 2024, count: 142 },
    { year: 2025, count: 66 },
  ]
};

// Scopus Data
const scopusStats = {
  total: 445, // Total citations
  hIndex: 11,
  documents: 57,
  topSources: [
    { label: "COMSNETS 2024", value: 3 },
    { label: "ICDCN 2025", value: 3 },
    { label: "Journal of Supercomputing", value: 3 },
    { label: "Cloud Computing Environments", value: 3 },
    { label: "COMSNETS 2022", value: 2 },
    { label: "COMSNETS 2023", value: 2 },
    { label: "ACM Proceedings", value: 2 },
    { label: "IEEE Systems Journal", value: 2 },
    { label: "COMSNETS", value: 2 },
    { label: "ANTS", value: 2 }
  ]
};

function getScholarColors(isDark) {
  return isDark
    ? ["#A78BFA", "#60A5FA", "#34D399", "#FBBF24", "#F472B6", "#818CF8"]
    : ["#389589", "#93C5FD", "#4ADE80", "#F59E42", "#2563EB", "#A78BFA"];
}

function ScholarStats() {
  // Detect dark mode for chart color adaptation
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const barColor = isDark ? "#A78BFA" : "#389589";
  const barShadow = isDark ? "#6D28D9" : "#60A5FA";

  // Pie chart for Scopus sources (show top 5, group rest as "Other")
  const sources = scopusStats.topSources.slice(0, 5);
  const otherCount = scopusStats.topSources.slice(5).reduce((sum, s) => sum + s.value, 0);
  const pieLabels = [...sources.map(s => s.label), ...(otherCount > 0 ? ["Other"] : [])];
  const pieData = [...sources.map(s => s.value), ...(otherCount > 0 ? [otherCount] : [])];

  const scopusPie = {
    labels: pieLabels,
    datasets: [
      {
        data: pieData,
        backgroundColor: getScholarColors(isDark).slice(0, pieLabels.length),
        borderColor: isDark ? "#22223b" : "#fff",
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  const scopusPieOptions = {
    plugins: { legend: { display: false } },
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section className="my-16">
      <h2 className="text-3xl md:text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center mb-4">
        Academic Impact Metrics
      </h2>
      <div className="relative mx-auto mb-10 h-1 w-64 rounded-full bg-gradient-to-r from-transparent via-[#389589] dark:via-[#A78BFA] to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#389589] dark:from-[#A78BFA] via-[#93C5FD] dark:via-[#8B5CF6] to-[#389589] dark:to-[#A78BFA] animate-slide" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Google Scholar Stats */}
          <div className="md:w-1/2 w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-[#389589] dark:border-[#A78BFA] p-6 flex flex-col">
            <a
              href="https://scholar.google.com/citations?user=4TxJGusAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#389589] dark:text-[#A78BFA] text-lg font-bold mb-3 hover:underline"
            >
              <FaGoogle className="text-2xl" />
              Google Scholar
            </a>
            <div className="flex flex-wrap gap-6 items-center justify-center mb-6">
              <div className="flex items-center gap-2">
                <FaChartBar className="text-[#389589] dark:text-[#A78BFA]" />
                <span className="font-bold text-2xl">{googleScholarStats.total}</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">Citations</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHashtag className="text-[#389589] dark:text-[#A78BFA]" />
                <span className="font-bold text-2xl">{googleScholarStats.hIndex}</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">h-index</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHashtag className="text-[#389589] dark:text-[#A78BFA]" />
                <span className="font-bold text-2xl">{googleScholarStats.i10Index}</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">i10-index</span>
              </div>
            </div>
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={googleScholarStats.yearly}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#444' : '#eee'} />
                  <XAxis dataKey="year" stroke={barColor} fontSize={12} />
                  <YAxis stroke={barColor} fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? '#22223b' : '#f7f5ee',
                      borderColor: barColor,
                      color: isDark ? '#A78BFA' : '#389589'
                    }}
                    cursor={{ fill: isDark ? '#A78BFA22' : '#38958922' }}
                  />
                  <Bar
                    dataKey="count"
                    fill={`url(#barGradient)`}
                    radius={[6, 6, 0, 0]}
                    stroke={barShadow}
                    strokeWidth={1}
                  />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={barColor} stopOpacity={0.8} />
                      <stop offset="100%" stopColor={barShadow} stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <span className="mt-3 block text-xs text-gray-400 text-center">
              Last updated: June 2025 &mdash; <a href="https://scholar.google.com/citations?user=4TxJGusAAAAJ" target="_blank" rel="noopener noreferrer" className="underline">View on Google Scholar</a>
            </span>
          </div>
          {/* Scopus Stats */}
          <div className="md:w-1/2 w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-[#389589] dark:border-[#A78BFA] p-6 flex flex-col">
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=56538204500"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#389589] dark:text-[#A78BFA] text-lg font-bold mb-3 hover:underline"
            >
              <FaDatabase className="text-2xl" />
              Scopus
            </a>
            <div className="flex flex-wrap gap-6 items-center justify-center mb-6">
              <div className="flex items-center gap-2">
                <FaChartBar className="text-[#389589] dark:text-[#A78BFA]" />
                <span className="font-bold text-2xl">{scopusStats.total}</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">Citations</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHashtag className="text-[#389589] dark:text-[#A78BFA]" />
                <span className="font-bold text-2xl">{scopusStats.hIndex}</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">h-index</span>
              </div>
              <div className="flex items-center gap-2">
                <FaChartBar className="text-[#389589] dark:text-[#A78BFA]" />
                <span className="font-bold text-2xl">{scopusStats.documents}</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">Documents</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Pie chart left, legend right */}
              <div className="w-60 h-55 flex-shrink-0">
                <Doughnut
                  data={scopusPie}
                  options={scopusPieOptions}
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="font-semibold text-xs text-gray-800 dark:text-gray-200 mb-1">Top Sources</div>
                <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  {pieLabels.map((label, idx) => (
                    <li key={label} className="flex items-center gap-1">
                      <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: getScholarColors(isDark)[idx] }} />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <span className="mt-10 block text-xs text-gray-400 text-center">
              Last updated: June 2025 &mdash; <a href="https://www.scopus.com/authid/detail.uri?authorId=56538204500" target="_blank" rel="noopener noreferrer" className="underline">View on Scopus</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScholarStats;

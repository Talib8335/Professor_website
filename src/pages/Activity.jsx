import React, { useState } from "react";
import { useEffect } from 'react';
import { FaExternalLinkAlt, FaIdBadge, FaUsersCog, FaRegIdBadge,  FaRegCalendarAlt,  FaUsers, FaEdit, FaUserTie, FaBook, FaAward, FaUserCheck, FaCheckCircle } from "react-icons/fa";

const organizingCommittee = [
  {
    event: "17th COMSNETS 2025",
    url: "https://www.comsnets.org/archive/2025/organizing_committee.html",
    role: "Workshop Co-Chair",
    date: "6-10 January 2025, Bangalore, India"
  },
  {
    event: "2024 3rd ICDDS",
    url: "https://icdds.org/Organizing-Committee.html/",
    role: "TPC Co-Chair",
    date: "5-7 December 2024, Bangalore, India"
  },
  {
    event: "IEEE B-HTC 2024",
    url: "https://bhtc-2024.ieeebangalore.org/organizing-committee/",
    role: "Finance Co-Chair",
    date: "22-23 March 2024, Karkala, Karnataka, India"
  },
  {
    event: "16th COMSNETS 2024",
    url: "https://www.comsnets.org/archive/2024/organizing_committee.html",
    role: "MINDS Workshop Co-Chair",
    date: "3-7 January 2024, Bangalore, India",
    suburl: "https://www.comsnets.org/minds_workshop.html"
  },
  {
    event: "2023 IEEE ICDDS",
    url: "https://icdds.org/Organizing-Committee.html",
    role: "Organizing Co-Chair",
    date: "1-2 December 2023, Surathkal, India"
  },
  {
    event: "2023 IEEE Discover",
    url: "https://www.ieee-discover.org/",
    role: "Finance Co-Chair",
    date: "13-14 October 2023, Mangalore, India"
  },
  {
    event: "15th COMSNETS 2023",
    url: "https://www.comsnets.org/archive/2023/organizing_committee.html",
    role: "Travel Grant Co-Chair",
    date: "3-8 January 2023, Bangalore, India"
  },
  {
    event: "24th ICDCN 2023",
    url: "https://cse.iitkgp.ac.in/conf/ICDCN23/committee.html",
    role: "Poster Co-Chair",
    date: "4-7 January 2023, Kharagpur, India"
  },
  {
    event: "7th IEEE ICRAIE 2022",
    url: "http://icraie.nitk.ac.in/",
    role: "Organizing Co-Chair",
    date: "1-3 December 2022, Surathkal, India"
  },
  {
    event: "2022 IEEE Discover",
    url: "https://2022.ieee-discover.org/",
    role: "TPC Co-Chair",
    date: "14-15 October 2022, Shimoga, India"
  },
  {
    event: "SMARTSTATE 2022",
    url: "https://sites.google.com/view/smartstate-2022/home?authuser=0",
    role: "Organizing Co-Chair",
    date: "20-24 June 2022, Espoo, Finland"
  },
  {
    event: "IEEE BlackSeaCom 2022",
    url: "https://blackseacom2022.ieee-blackseacom.org/committee/",
    role: "Awards Co-Chair",
    date: "6-9 June 2022, Sofia, Bulgaria"
  },
  {
    event: "2nd STEERS 2022",
    url: "http://www.steers.iitkgp.ac.in/",
    role: "Organizing Co-Chair",
    date: "16-19 May 2022, Taormina (Messina), Italy"
  },
  {
    event: "2nd FogNetwork 2021",
    url: "https://ants2021.ieee-comsoc-ants.org/fog-networks/",
    role: "Organizing Co-Chair",
    date: "13-16 December 2021, Hyderabad, India"
  },
  {
    event: "STEERS 2021",
    url: "http://www.steers.iitkgp.ac.in/2021/",
    role: "Organizing Co-Chair",
    date: "10-13 May 2021, Melbourne, Australia"
  },
  {
    event: "FogNetwork 2020",
    url: "https://ants2020.ieee-comsoc-ants.org/authors/workshops/fog-networks-the-next-generation-cellular-communication-systems/",
    role: "Organizing Co-Chair",
    date: "14-17 December 2020, New Delhi, India"
  }
];

const tpcMember = [
  "WTS 2022 (6-8 April 2021) Pomona, USA",
  "COMSNETS 2022, Bangalore, India",
  "WTS 2021 (21-23 April 2021) San Francisco, USA",
  "COMSNETS 2021, Bangalore, India",
  "ACM iMobile 2021",
  "IDC2020",
  "COMSNETS 2020, Bangalore, India",
  "IoTsm 2018, Imperial College London, London, UK",
  "IEEE GLOBECOMM 2015, San Diego, USA"
];

const execomMember = [
  {
    org: "IEEE Computer Society Bangalore Chapter",
    url: "https://cs.ieeebangalore.org/",
    role: "Vice Chair",
    year: "2025"
  },
  {
    org: "IEEE Computer Society Bangalore Chapter",
    url: "https://cs.ieeebangalore.org/",
    role: "Joint Secretary",
    year: "2024"
  },
  {
    org: "IEEE Mangalore Sub-section",
    url: "https://ieee-mangalore.org/",
    role: "Treasurer",
    year: "2024"
  },
  {
    org: "IEEE Computer Society Bangalore Chapter",
    url: "https://cs.ieeebangalore.org/",
    role: "Conference activity",
    year: "2023"
  },
  {
    org: "IEEE Mangalore Sub-section",
    url: "https://ieee-mangalore.org/",
    role: "Treasurer",
    year: "2023"
  },
  {
    org: "IEEE Mangalore Sub-section",
    url: "https://ieee-mangalore.org/execom-2022/",
    role: "Chair, Distinguished Lecture Program (DLP)",
    year: "2022"
  }
];

const editorialBoard = [
  {
    journal: "IEEE Transactions on Services Computing",
    url: "https://www.computer.org/csdl/journal/sc/about/107381?title=Editorial%20Board&periodical=IEEE%20Transactions%20on%20Services%20Computing",
    role: "Associate Editor"
  },
  {
    journal: "Ad Hoc Network, Elsevier (Special Issue: Edge and Serverless Computing)",
    url: "https://www.sciencedirect.com/special-issue/305113/special-issue-on-edge-and-serverless-computing",
    role: "Executive Guest Editor"
  }
];

const reviewer = [
  "IEEE Systems Journal",
  "IEEE Transactions on Sustainable Computing",
  "IEEE Transactions on Mobile Computing",
  "IEEE Transactions on Dependable and Secure Computing",
  "IEEE Communications Magazine",
  "Computers & Electrical Engineering, Elsevier",
  "IET Communications",
  "Journal of Supercomputing, Springer",
  "Mobile Networks and Applications, Springer"
];

const facultyAdvisor = [
  {
    org: "Computer Society Chapter, IEEE NITK Student Branch",
    url: "https://ieee.nitk.ac.in/team.html"
  },
  {
    org: "Association for Computing Machinery, NITK Chapter (2021-2024)",
    url: "https://nitk.acm.org/#/"
  }
];

const societyMembership = [
  "Associate Life Member, Cryptology Research Society of India",
  "Senior Member, Institute of Electrical and Electronics Engineers (IEEE) (Elevated on June 2020)",
  "Member, IEEE Communications Society",
  "Member, IEEE Computer Society",
  "Member, IEEE Cloud Computing Community",
  "Senior Member, Association for Computing Machinery (ACM) (Elevated on October 2024)",
  "Member, ACM iMobile"
];



function Activity() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };


  return (
    <section className="min-h-screen w-full bg-bgLight/90 dark:bg-gray-900/90 py-10 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] mb-10 text-center">
          Professional Activity
        </h1>

        {/* Organizing Committee: Card Grid with Year Badge */}
      <section className="mb-16">
  {/* Section Heading */}
  <div className="flex items-center gap-4 mb-8">
     <h2 className="text-2xl font-bold flex items-center gap-2 text-[#389589] dark:text-[#A78BFA] mb-4">
    <FaUsers className="text-2xl" />
    Organizing Committee Member
  </h2>
  </div>

  {/* Card Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {organizingCommittee.map((item, idx) => (
      <div
        key={item.event + item.role + item.date}
        className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg border-l-4 border-gradient-to-b from-[#389589] to-[#A78BFA] px-7 py-6 flex flex-col group hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
      >
        {/* Year badge */}
        <div className="absolute -top-5 -left-5 flex items-center gap-2 bg-gradient-to-r from-[#389589] to-[#A78BFA] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg ring-2 ring-white dark:ring-gray-900 rotate-[-6deg]">
          <FaRegCalendarAlt className="text-base" />
          {item.date.match(/\d{4}/)?.[0] || ""}
        </div>
        {/* Event Title and Links */}
        <div className="flex items-center gap-2 mb-2">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-lg text-[#389589] dark:text-[#A78BFA] hover:underline hover:decoration-wavy transition-all"
            title="Visit event page"
          >
            {item.event}
            <FaExternalLinkAlt className="inline text-xs ml-1" />
          </a>
          {item.suburl && (
            <a
              href={item.suburl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-xs underline text-[#389589] dark:text-[#A78BFA] bg-[#f0fdfa] dark:bg-[#312e81] rounded-full px-2 py-0.5"
            >
              Workshop
            </a>
          )}
        </div>
        {/* Role */}
        <div className="text-xs inline-block bg-[#f0fdfa] dark:bg-[#312e81] text-[#389589] dark:text-[#A78BFA] font-semibold px-3 py-1 rounded-full mb-1">
          {item.role}
        </div>
        {/* Date */}
        <div className="text-xs italic text-gray-500 dark:text-gray-400">{item.date}</div>
      </div>
    ))}
  </div>
      </section>



        {/* TPC Member: Two-Column List with Icon */}
       <div className="mb-12">
  {/* Heading with Icon */}
  <h2 className="text-2xl font-bold flex items-center gap-2 text-[#389589] dark:text-[#A78BFA] mb-6">
    <FaIdBadge className="text-2xl" />
    TPC Members
  </h2>
  {/* Badge Card List */}
  <div className="flex flex-wrap gap-4">
    {tpcMember.map((item, idx) => (
      <div
        key={item}
        className="flex items-center gap-3 bg-gradient-to-r from-[#f0fdfa] via-white to-[#e0f7fa] dark:from-[#312e81] dark:via-gray-900 dark:to-[#1e293b] rounded-full shadow px-5 py-2 min-w-[220px] hover:scale-105 hover:shadow-lg transition-all"
      >
        {/* Avatar or Initials */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#389589]/80 dark:bg-[#A78BFA]/80 text-white font-bold text-lg shadow">
          {item[0]}
        </div>
        {/* Name */}
        <span className="text-base font-medium text-[#389589] dark:text-[#A78BFA]">{item}</span>
      </div>
    ))}
  </div>
</div>



        {/* ExeCom Member Alternating Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-[#389589] dark:text-[#A78BFA] mb-4">
            <FaAward className="text-2xl" />
            ExeCom Member
          </h2>
          <div className="space-y-4">
            {execomMember.map((item, idx) => (
              <div
                key={item.org + item.role + item.year}
                className={`flex items-center rounded-xl shadow-md px-5 py-4 ${idx % 2 === 0
                  ? 'bg-white dark:bg-gray-900 border-l-4 border-[#389589] dark:border-[#A78BFA]'
                  : 'bg-[#f7f5ee] dark:bg-[#2e1d4d] border-r-4 border-[#A78BFA] dark:border-[#389589]'
                  }`}
              >
                <div className="flex-1">
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    className="font-bold text-[#389589] dark:text-[#A78BFA] hover:underline flex items-center gap-1">
                    {item.org}
                    <FaExternalLinkAlt className="inline text-xs" />
                  </a>
                  <div className="text-sm text-gray-700 dark:text-gray-200">
                    <span className="font-semibold">{item.role}</span>
                    {item.year && <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">({item.year})</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Board Horizontal Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-[#389589] dark:text-[#A78BFA] mb-4">
            <FaEdit className="text-2xl" />
            Editorial Board / Editor
          </h2>
          <div className="flex flex-wrap gap-5">
            {editorialBoard.map((item, idx) => (
              <div
                key={item.journal + item.role}
                className="flex items-center bg-white dark:bg-gray-900 rounded-xl shadow-md border border-[#389589] dark:border-[#A78BFA] px-5 py-4 min-w-[280px]"
              >
                <div className="flex-1">
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    className="font-bold text-[#389589] dark:text-[#A78BFA] hover:underline flex items-center gap-1">
                    {item.journal}
                    <FaExternalLinkAlt className="inline text-xs" />
                  </a>
                  <div className="text-sm text-gray-700 dark:text-gray-200">
                    <span className="font-semibold">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviewer Two-Column Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-[#389589] dark:text-[#A78BFA] mb-4">
            <FaBook className="text-2xl" />
            Reviewer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {reviewer.map((item, idx) => (
              <div key={item} className="flex items-center gap-2 bg-[#389589]/10 dark:bg-[#A78BFA]/10 rounded-lg px-4 py-2 text-[#389589] dark:text-[#A78BFA]">
                <FaCheckCircle className="text-[#389589] dark:text-[#A78BFA]" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Advisor Callout */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-[#389589] dark:text-[#A78BFA] mb-4">
            <FaUserCheck className="text-2xl" />
            Faculty Advisor
          </h2>
          <div className="bg-gradient-to-r from-[#389589]/10 via-[#A78BFA]/10 to-[#389589]/10 dark:from-[#A78BFA]/10 dark:to-[#389589]/10 rounded-xl px-5 py-4 shadow flex flex-col gap-2">
            {facultyAdvisor.map((item, idx) => (
              <div key={item.org} className="flex items-center gap-2">
                <FaUsers className="text-[#389589] dark:text-[#A78BFA]" />
                <a href={item.url} target="_blank" rel="noopener noreferrer"
                  className="font-semibold text-[#389589] dark:text-[#A78BFA] hover:underline">
                  {item.org}
                </a>
              </div>
            ))}
          </div>
        </div>

              {/* Society Membership: Vertical List with Icon */}
    <div className="mb-12">
  {/* Section Heading with Icon */}
  <h2 className="text-2xl font-bold flex items-center gap-2 text-[#389589] dark:text-[#A78BFA] mb-5">
    <FaUsersCog className="text-2xl" />
    Society Membership
  </h2>
  {/* Vertical Card List */}
  <div className="flex flex-col gap-4">
    {societyMembership.map((item, idx) => (
      <div
        key={item}
        className="flex items-center gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow border-l-4 border-[#389589] dark:border-[#A78BFA] px-5 py-3 hover:scale-[1.02] hover:shadow-lg transition-all"
      >
        <FaRegIdBadge className="text-[#389589] dark:text-[#A78BFA] text-lg" />
        <span className="text-base font-medium text-gray-800 dark:text-gray-100">{item}</span>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
}

export default Activity;


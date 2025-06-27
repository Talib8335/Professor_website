import React, { useState } from "react";
import { useEffect } from 'react';
import { FaUserGraduate, FaUserFriends, FaUsers, FaLinkedin, FaGithub, FaGlobe, FaFilePdf } from "react-icons/fa";

// Data structure for all years and categories
const groupData = {
  2026:{
    mtech:[
      {
        name: "Mr. Abhishek Pandey",
        research_domain: "IoT Offloading",
        links: {
          linkedin: "https://www.linkedin.com/in/abhishek-pandey-b13385231/"
        }
      },
      {
        name: "Ms. Hardi Desai",
        research_domain: "Serverless Computing",
        links: {
          linkedin: "https://www.linkedin.com/in/hardidesai210/"
        }
      },
      {
        name: "Mr. Shaik Sohail",
        research_domain: "Internet of Vehicles",
        links: {
          linkedin: "https://www.linkedin.com/in/shaik-sohail-ba05221a5/"
        }
      },
    ]
  },
  2025: {
    phd: [
      {
        name: "Mrs. Birajdar Priyanka Ashok",
        research_domain: "Serverless Computing",
        assistants: ["Mr. Sarveshwaran S", "Ms. Hardi Desai"],
        links: {
          github: "https://github.com/priyankabirajdar21",
          linkedin: "https://www.linkedin.com/in/priyanka-birajdar-a7936bb6/",
          cv: "assets/people/Priyanka_Birajdar_resume.pdf"
        }
      },
      {
        name: "Ms. Priyanka Soni",
        research_domain: "IoT Offloading",
        assistants: ["Mr. Omkar Manohar Mense", "Mr. Abhishek Pandey"],
        links: {
          linkedin: "https://www.linkedin.com/in/priyanka-soni-21646b114/"
        }
      },
      {
        name: "Mrs. Sushma S A",
        research_domain: "IoT Offloading",
        assistants: ["Mr. Md. Talib", "Mr. Prasanna Kumar"],
        links: {
          linkedin: "https://www.linkedin.com/in/sushma-sa-467b28216/"
        }
      },
      {
        name: "Mr. Preetham N",
        research_domain: "Virtual Network Embedding",
        assistants: ["Mr. Anik Kanti Biswas"],
        links: {
          linkedin: "https://www.linkedin.com/in/preetham-n-gowda-8787b167/"
        }
      },
      {
        name: "Mr. Rajeev K K",
        research_domain: "Internet of Vehicles",
        assistants: ["Mr. Satyaranjan Patra", "Mr. Shaik Sohail"],
        links: {
          linkedin: "https://www.linkedin.com/in/rajeev-k-k-492919251/"
        }
      }
    ],
    mtech: [
      {
        name: "Mr. Prasanna Kumar",
        research_domain: "IoT Offloading",
        links: {
          github: "https://github.com/prasanna-kumar-26",
          linkedin: "https://www.linkedin.com/in/prasanna-kumar26/",
          portfolio: "https://prasanna-kumar-26.github.io/resume/"
        }
      },
      {
        name: "Mr. Satyaranjan Patra",
        research_domain: "Internet of Vehicles",
        links: {
          github: "https://github.com/satyaranjanpatra2002",
          linkedin: "https://www.linkedin.com/in/satyaranjan-patra-1294271a8/",
          portfolio: "https://satyaranjanpatra2002.github.io/Portfolio/"
        }
      },
      {
        name: "Mr. Omkar Manohar Mense",
        research_domain: "IoT Offloading",
        links: {
          linkedin: "https://www.linkedin.com/in/omkar-mense-0b6a79175/"
        }
      },
      {
        name: "Mr. Md. Talib",
        research_domain: "Internet of Vehicles",
        links: {
          github: "https://github.com/talib8335",
          linkedin: "https://www.linkedin.com/in/mohammad-talib-737801291/",
          portfolio: "https://talib8335.github.io"
        }
      },
      {
        name: "Mr. Anik Kanti Biswas",
        research_domain: "Virtual Network Embedding",
        links: {
          linkedin: "https://www.linkedin.com/in/akanik07/"
        }
      },
      {
        name: "Mr. Sarveshwaran S",
        research_domain: "Serverless Computing",
        links: {
          linkedin: "https://www.linkedin.com/in/sarveshwaran-s-7b5656149/"
        }
      },
    ],
    btech: []
  }
};

const years = Object.keys(groupData).map(Number).sort((a, b) => b - a);
const mainMenus = ["Groups", "PhD", "MTech", "BTech"];

function ProfileLinks({ links }) {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };



  return (
    <div className="flex gap-3 ml-2">
      {links?.linkedin && (
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"
          className="text-[#389589] dark:text-[#A78BFA] hover:text-[#0a66c2] dark:hover:text-[#C4B5FD] text-lg">
          <FaLinkedin />
        </a>
      )}
      {links?.github && (
        <a href={links.github} target="_blank" rel="noopener noreferrer" title="GitHub"
          className="text-[#389589] dark:text-[#A78BFA] hover:text-black dark:hover:text-[#C4B5FD] text-lg">
          <FaGithub />
        </a>
      )}
      {links?.portfolio && (
        <a href={links.portfolio} target="_blank" rel="noopener noreferrer" title="Portfolio"
          className="text-[#389589] dark:text-[#A78BFA] hover:text-[#389589] dark:hover:text-[#C4B5FD] text-lg">
          <FaGlobe />
        </a>
      )}
      {links?.cv && (
        <a href={links.cv} target="_blank" rel="noopener noreferrer" title="CV/Resume"
          className="text-[#389589] dark:text-[#A78BFA] hover:text-[#e53e3e] dark:hover:text-[#C4B5FD] text-lg">
          <FaFilePdf />
        </a>
      )}
    </div>
  );
}

function Card({ name, degree, research_domain, assistants, links, showAssistants }) {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg border-l-4 border-[#389589] dark:border-[#A78BFA] px-5 py-4 flex flex-col group hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between mb-1 w-full">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#389589] dark:text-[#A78BFA]">{name}</span>
          {degree && (
            <span className="text-xs bg-[#389589]/10 dark:bg-[#A78BFA]/10 text-[#389589] dark:text-[#A78BFA] rounded-full px-3 py-1 ml-2">
              {degree}
            </span>
          )}
        </div>
        <ProfileLinks links={links} />
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-200 mb-2">
        <span className="font-semibold">Research Domain:</span>{" "}
        <span className="text-[#389589] dark:text-[#A78BFA]">{research_domain}</span>
      </div>
      {showAssistants && assistants && assistants.length > 0 && (
        <div className="mt-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
            <FaUserFriends className="text-[#389589] dark:text-[#A78BFA]" />
            Research Assistance:
          </div>
          <ul className="flex flex-wrap gap-2">
            {assistants.map((asst) => (
              <li
                key={asst}
                className="bg-[#389589]/10 dark:bg-[#A78BFA]/10 text-[#389589] dark:text-[#A78BFA] rounded-full px-3 py-1 text-xs font-semibold"
              >
                {asst}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Groups() {
  const [mainTab, setMainTab] = useState(mainMenus[0]);
  const [yearTab, setYearTab] = useState(years[0]);

  // Get data for current year and menu
  const yearData = groupData[yearTab];

  let content = null;
  if (mainTab === "Groups") {
    // Show all PhD candidates with assistants
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {yearData.phd && yearData.phd.length > 0 ? (
          yearData.phd.map((phd) => (
            <Card
              key={phd.name}
              name={phd.name}
              degree="Ph.D."
              research_domain={phd.research_domain}
              assistants={phd.assistants}
              links={phd.links}
              showAssistants={true}
            />
          ))
        ) : (
          <div className="text-gray-400 italic">No Ph.D. candidates listed.</div>
        )}
      </div>
    );
  } else if (mainTab === "PhD") {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {yearData.phd && yearData.phd.length > 0 ? (
          yearData.phd.map((phd) => (
            <Card
              key={phd.name}
              name={phd.name}
              degree="Ph.D."
              research_domain={phd.research_domain}
              links={phd.links}
              showAssistants={false}
            />
          ))
        ) : (
          <div className="text-gray-400 italic">No Ph.D. candidates listed.</div>
        )}
      </div>
    );
  } else if (mainTab === "MTech") {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {yearData.mtech && yearData.mtech.length > 0 ? (
          yearData.mtech.map((mtech) => (
            <Card
              key={mtech.name}
              name={mtech.name}
              degree="M.Tech."
              research_domain={mtech.research_domain}
              links={mtech.links}
              showAssistants={false}
            />
          ))
        ) : (
          <div className="text-gray-400 italic">No M.Tech. students listed.</div>
        )}
      </div>
    );
  } else if (mainTab === "BTech") {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {yearData.btech && yearData.btech.length > 0 ? (
          yearData.btech.map((btech) => (
            <Card
              key={btech.name}
              name={btech.name}
              degree="B.Tech."
              research_domain={btech.research_domain}
              links={btech.links}
              showAssistants={false}
            />
          ))
        ) : (
          <div className="text-gray-400 italic">No B.Tech. students listed.</div>
        )}
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full bg-bgLight/90 dark:bg-gray-900/90 py-10 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] mb-10 text-center">
          Student Team
        </h1>
        {/* Main Menu Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {mainMenus.map((menu) => (
            <button
              key={menu}
              onClick={() => setMainTab(menu)}
              className={`px-5 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-300 ${
                mainTab === menu
                  ? 'bg-[#389589] text-white dark:bg-[#A78BFA] dark:text-gray-900 shadow'
                  : 'bg-[#e6f4f1] text-[#389589] dark:bg-[#2e1d4d] dark:text-[#A78BFA]'
              }`}
            >
              {menu}
            </button>
          ))}
        </div>
        {/* Year Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setYearTab(year)}
              className={`px-4 py-1 rounded-full font-medium cursor-pointer transition-colors duration-300 ${
                yearTab === year
                  ? 'bg-[#389589] text-white dark:bg-[#A78BFA] dark:text-gray-900'
                  : 'bg-[#e6f4f1] text-[#389589] dark:bg-[#2e1d4d] dark:text-[#A78BFA]'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
        {content}
      </div>

<div className="flex justify-center mt-12">
  <div className="relative bg-[#f7f5ee] dark:bg-[#2e1d4d] border-l-4 border-[#389589] dark:border-[#A78BFA] rounded-xl shadow-md px-6 py-5 max-w-xl w-full flex items-center gap-4">
    <span className="text-2xl md:text-3xl text-[#389589] dark:text-[#A78BFA] mr-2">ℹ️</span>
    <div>
      <div className="font-bold text-[#389589] dark:text-[#A78BFA] text-lg mb-1">For More Information</div>
      <div className="text-gray-700 dark:text-gray-200 text-base">
        Visit our lab website:&nbsp;
        <a
          href="https://cs3-lab.github.io/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-semibold underline underline-offset-4 text-[#389589] dark:text-[#A78BFA] hover:text-[#2a6b5f] dark:hover:text-[#C4B5FD] transition-colors"
        >
          cs3-lab.github.io
        </a>
      </div>
    </div>
  </div>
</div>



    </section>
  );
}

export default Groups;

import React from "react";

function OpenSourceContributions() {
  const contributions = [
    {
      title: "EFraS",
      description:
        "Emulated framework to develop and analyze dynamic Virtual Network Embedding strategies over SDN infrastructure",
      link: "https://doi.org/10.1016/j.simpat.2024.102952",
      image: "/src/assets/efras.jpg",
      tags: ["Virtual Network Embedding", "Software Defined Network", "RESEARCH"],
    },
    {
      title: "InDS",
      description:
        "Intelligent DRL Strategy for Effective Virtual Network Embedding of an Online Virtual Network Requests",
      link: "https://doi.org/10.1109/ACCESS.2024.3424474",
      image: "/src/assets/inds.gif",
      tags: ["Virtual Network Embedding", "Software Defined Network", "RESEARCH"],
    },
    
  ];

  return (
    <section className="my-16 bg-bgLight dark:bg-bgDark">
      <div className="max-w-[90%] mx-auto px-4 md:px-10">
        <p className="text-sm text-textDark dark:text-Light mb-1 text-center">
          Community Contributions
        </p>
        <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center">
          Open Source Contributions
        </h2>
        <div className="relative mx-auto mt-3 h-1 w-64 rounded-full bg-gradient-to-r from-transparent via-[#389589] dark:via-[#A78BFA] to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#389589] dark:from-[#A78BFA] via-[#93C5FD] dark:via-[#8B5CF6] to-[#389589] dark:to-[#A78BFA] animate-slide" />
          </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributions.map((item, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-[#389589] dark:border-[#A78BFA]/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#389589]/80 to-transparent opacity-0" />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-bold font-cool text-gray-900 dark:text-gray-100 mb-3">
                  {item.title}
                </h5>
                <p className="text-sm font-body text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#389589] text-white dark:bg-[#A78BFA] rounded-md text-sm font-body hover:bg-[#2a6b5f] dark:hover:bg-purple-dark  transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
              <div className="p-6 pt-0 flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block bg-[#389589]/10 dark:bg-[white] dark:text-purple hover:text-[#2b6f6a] text-[#389589] rounded-full px-3 py-1 text-xs font-body transition-transform duration-300 group-hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default OpenSourceContributions;
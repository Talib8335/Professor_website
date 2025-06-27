import React from "react";

function RecentNews() {
  const announcements = [
    {
      title: "Associate Editor",
      description: (
        <>
          Selected as Editorial Board Member (Associate Editor) @{" "}
          <a
            href="https://www.computer.org/csdl/journal/sc/about/107381?title=Editorial%20Board&periodical=IEEE%20Transactions%20on%20Services%20Computing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#389589] hover:text-[#2b6f6a] dark:text-[#A78BFA] dark:hover:text-[#8B5CF6]"
          >
            IEEE Transactions on Services Computing to Dr. Addya
          </a>
        </>
      ),
      date: "March 2025",
    },
    {
      title: "Paper Accepted",
      description: (
        <>
          Our work{" "}
          <a
            href="https://doi.org/#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#389589] hover:text-[#2b6f6a] dark:text-[#A78BFA] dark:hover:text-[#8B5CF6]"
          >
            "DCRDA"
          </a>{" "}
          has been accepted in Journal of Cluster Computing, Springer (IF-3.6).
        </>
      ),
      date: "January 2025",
    },
    {
      title: "Best Paper Award",
      description: (
        <>
          Best Paper Award (Poster Track) @{" "}
          <a
            href="https://www.comsnets.org/awards.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#389589] hover:text-[#2b6f6a] dark:text-[#A78BFA] dark:hover:text-[#8B5CF6]"
          >
            17th COMSNETS 2025
          </a>
        </>
      ),
      date: "January 2025",
    },
    {
      title: "Executive Guest Editor",
      description: (
        <>
          Selected as Executive Guest Editor @{" "}
          <a
            href="https://www.sciencedirect.com/journal/ad-hoc-networks/about/call-for-papers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#389589] hover:text-[#2b6f6a] dark:text-[#A78BFA] dark:hover:text-[#8B5CF6]"
          >
            Ad Hoc Network, Elsevier: Special Issue (IF-4.8) to Dr. Addya
          </a>
        </>
      ),
      date: "November 2024",
    },
    {
      title: "Paper Accepted",
      description: (
        <>
          Our work{" "}
          <a
            href="https://doi.org/10.1016/j.simpat.2024.102952"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#389589] hover:text-[#2b6f6a] dark:text-[#A78BFA] dark:hover:text-[#8B5CF6]"
          >
            "EFraS"
          </a>{" "}
          has been accepted in Journal of Simulation Modelling Practice and Theory, Elsevier (IF-4.2).
        </>
      ),
      date: "July 2024",
    },
  ];

  return (
    <section className="text-center my-16 bg-bgLight dark:bg-bgDark">
      <div className="max-w-[90%] mx-auto px-4 md:px-10">
        {/* Announcements */}
        <div className="mb-16">
          <p className="text-sm text-textDark dark:text-Light mb-1">Stay Updated</p>
          <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA]">
            Recent Updates
          </h2>
          <div className="relative mx-auto mt-3 h-1 w-64 rounded-full bg-gradient-to-r from-transparent via-[#389589] dark:via-[#A78BFA] to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#389589] dark:from-[#A78BFA] via-[#93C5FD] dark:via-[#8B5CF6] to-[#389589] dark:to-[#A78BFA] animate-slide" />
          </div>
          <div
            className="mt-10 overflow-hidden"
            style={{ maxHeight: "15vw", position: "relative" }}
          >
            <div
              className="animate-marquee"
              style={{
                animation: "marquee 20s linear infinite",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
              onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
            >
              {[...announcements, ...announcements].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-[#389589]/30 dark:border-[#A78BFA]/30"
                >
                  <p className="text-xs font-body text-secondary min-w-[80px]">
                    {item.date}
                  </p>
                  <div className="text-left">
                    <h3 className="text-base font-semibold font-cool text-gray-900 dark:text-gray-100 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-body text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LinkedIn Post Updates */}
        <div>
          <p className="text-sm text-textDark dark:text-Light mb-1">Social Updates</p>
          <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA]">
            Follow us for Updates
          </h2>
          <div className="relative mx-auto mt-3 h-1 w-64 rounded-full bg-gradient-to-r from-transparent via-[#389589] dark:via-[#A78BFA] to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#389589] dark:from-[#A78BFA] via-[#93C5FD] dark:via-[#8B5CF6] to-[#389589] dark:to-[#A78BFA] animate-slide" />
          </div>
          <div
            className="mt-10 p-4 rounded-xl shadow-lg linkedin-border"
            style={{
              border: "2px solid transparent",
              backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #389589, #48bb78)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <style jsx>{`
              .linkedin-border {
                background-image: linear-gradient(white, white), linear-gradient(to right, #389589, #48bb78);
              }
              .dark .linkedin-border {
                background-image: linear-gradient(white, white), linear-gradient(to right, #A78BFA, #8B5CF6);
              }
            `}</style>
            <iframe
              src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25543108"
              frameBorder="0"
              width="100%"
              height="470"
              title="LinkedIn Updates"
            />
          </div>
        </div>
      </div>

      {/* CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default RecentNews;
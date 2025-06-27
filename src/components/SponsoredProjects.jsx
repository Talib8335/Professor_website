import React, { useEffect, useRef } from "react";

function SponsoredProjects() {
  const projects = [
    {
      title: "Academic Partner for iON",
      sponsor: "Tata Consultancy Services (TCS)",
      pi: "Dr. Sourav Kanti Addya (Joint)",
      status: "Active",
      duration: "202X-202X",
      logo: "/src/assets/tcs.png",
      alt: "Tata Consultancy Services",
    },
    {
      title: "Web 3.0 driven platform for students and organisations",
      sponsor: "Robosoft Technologies",
      pi: "Dr. Sourav Kanti Addya",
      status: "Active",
      duration: "202X-202X",
      logo: "/src/assets/robosoft-technologies.png",
      alt: "Robosoft Technologies",
    },
    {
      title: "DoH Based Load Balancer",
      sponsor: "Tata Communications Ltd (TCL)",
      pi: "Dr. Sourav Kanti Addya (Joint)",
      status: "Completed",
      duration: "202X-202X",
      logo: "/src/assets/tcl.png",
      alt: "Tata Communications Limited",
    },
  ];

  const carouselRef = useRef(null);

useEffect(() => {
  const carousel = carouselRef.current;
  let animationId;

  const scroll = () => {
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
      carousel.scrollLeft = 0;
    } else {
      carousel.scrollLeft += 0.5; // slower, smoother scroll
    }
    animationId = requestAnimationFrame(scroll);
  };

  animationId = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(animationId);
}, []);


  return (
    <section className="my-16 bg-bgLight dark:bg-bgDark">
      <div className="max-w-[90%] mx-auto px-4 md:px-10">
        <p className="text-sm text-textDark dark:text-Light mb-1 text-center">
          Research and Collaboration
        </p>
        <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center">
          Sponsored Projects
        </h2>
        <div className="relative mx-auto mt-3 h-1 w-64 rounded-full bg-gradient-to-r from-transparent via-[#389589] dark:via-[#A78BFA] to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#389589] dark:from-[#A78BFA] via-[#93C5FD] dark:via-[#8B5CF6] to-[#389589] dark:to-[#A78BFA] animate-slide" />
          </div>
        <div
          ref={carouselRef}
          className="mt-10 flex overflow-x-hidden gap-6"
          style={{ scrollBehavior: "smooth" }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-[#389589] dark:border-[#A78BFA]/30 text-center flex-shrink-0 transition-all duration-300 "
            >
              <img
                src={project.logo}
                alt={project.alt}
                className="rounded-full mx-auto mb-4"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold font-cool text-gray-900 dark:text-gray-100 mb-3">
                {project.title}
              </h3>
              <p className="text-sm font-body text-gray-600 dark:text-gray-400 mb-2">
                <strong>{project.duration} ({project.status})</strong>
              </p>
              <p className="text-sm font-body text-gray-600 dark:text-gray-400 mb-2">
                Sponsor: {project.sponsor}
              </p>
              <p className="text-sm font-body text-gray-600 dark:text-gray-400 mb-2">
                PI: {project.pi}
              </p>
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
      `}</style>
    </section>
  );
}

export default SponsoredProjects;
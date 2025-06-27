import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

// Example testimonials data (you can import or pass as prop)
const testimonials = [
  {
    name: "Dr. A. Sharma",
    title: "Professor, IIT Bombay",
    avatar: "/Professor_website/assets/testimonials/sharma.jpg",
    text: "Working with Dr. Addya was a pleasure. His dedication to research and teaching is truly inspiring.",
  },
  {
    name: "Ms. Priya S.",
    title: "Ph.D. Scholar, NITK",
    avatar: "/assets/testimonials/priya.jpg",
    text: "The mentorship and guidance I received were invaluable to my academic growth.",
  },
  {
    name: "Mr. John Doe",
    title: "Researcher, MIT",
    avatar: "/assets/testimonials/john.jpg",
    text: "Dr. Addya’s insights into machine learning helped me understand complex topics with ease.",
  },
  {
    name: "Dr. A. Sharma",
    title: "Professor, IIT Bombay",
    avatar: "/assets/testimonials/sharma.jpg",
    text: "Working with Dr. Addya was a pleasure. His dedication to research and teaching is truly inspiring.",
  },
  {
    name: "Ms. Priya S.",
    title: "Ph.D. Scholar, NITK",
    avatar: "/assets/testimonials/priya.jpg",
    text: "The mentorship and guidance I received were invaluable to my academic growth.",
  },
  {
    name: "Mr. John Doe",
    title: "Researcher, MIT",
    avatar: "/assets/testimonials/john.jpg",
    text: "Dr. Addya’s insights into machine learning helped me understand complex topics with ease.",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-bgLight dark:bg-bgDark">
          <p className="text-sm text-textDark dark:text-Light mb-1 text-center">
      What People Are Saying
    </p>
    <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center">
      Testimonials
    </h2>
    <div className="relative mx-auto mt-3 h-1 w-64 rounded-full bg-gradient-to-r from-transparent via-[#389589] dark:via-[#A78BFA] to-transparent overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#389589] dark:from-[#A78BFA] via-[#93C5FD] dark:via-[#8B5CF6] to-[#389589] dark:to-[#A78BFA] animate-slide" />
    </div>
      

      {/* Scrollable container with auto sliding */}
      <div className="max-w-7xl mt-10 py-6 overflow-hidden">
        <div className="flex gap-6 testimonials-container animate-slide-left">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex-shrink-0 w-64 min-w-[250px] text-center border-t-4 border-[#389589] dark:border-[#A78BFA] hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-4xl text-[#389589] dark:text-[#A78BFA] absolute left-6 top-6 opacity-20" />
              
              {/* Enlarged Avatar */}
              <img
                src={t.avatar}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#389589] dark:border-[#A78BFA] mb-4 shadow-lg mx-auto"
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}`; }}
              />
              
              {/* Testimonial Text */}
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-4 italic leading-relaxed">{`"${t.text}"`}</p>
              
              {/* Name and Title */}
              <div>
                <span className="block font-semibold text-[#389589] dark:text-[#A78BFA]">{t.name}</span>
                <span className="block text-xs text-gray-500 dark:text-gray-300">{t.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Keyframes for smooth sliding effect */
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .testimonials-container {
          animation: slide 20s linear infinite;
        }

        /* Ensure the content will scroll */
        .testimonials-container {
          display: flex;
        }

        /* Adding space between testimonials */
        .testimonials-container > div {
          margin-right: 20px;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;

// App.jsx (updated)

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import Groups from "./pages/Groups";
import Activity from "./pages/Activity";
import Gallery from "./pages/Gallery";
import PhotoCarousel from "./components/PhotoCarousel";
import RecentNews from "./components/RecentNews";
import Testimonial from "./components/Testimonial";
import SponsoredProjects from "./components/SponsoredProjects";
import ProfileNoticeBoard from "./components/ProfileNoticeBoard";
import ScholarStats from "./components/ScholarStats";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50 transition-colors duration-500">
          <div className="flex flex-col items-center">
            <svg
              className="animate-spin h-16 w-16 text-[#389589] dark:text-[#A78BFA] mb-4"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="25"
                cy="25"
                r="20"
                stroke="currentColor"
                strokeWidth="6"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M25 5a20 20 0 0 1 20 20h-6a14 14 0 1 0-14 14v6A20 20 0 0 1 25 5z"
              />
            </svg>
            <span className="text-[#389589] dark:text-[#A78BFA] text-lg font-semibold font-sans animate-fade-in">
              Loading, please wait...
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  PhotoCarousel={PhotoCarousel}
                  RecentNews={RecentNews}
                  SponsoredProjects={SponsoredProjects}
                  ProfileNoticeBoard={ProfileNoticeBoard}
                  ScholarStats={ScholarStats}
                  Testimonial={Testimonial}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/Teaching" element={<Teaching />} />
            <Route path="/Groups" element={<Groups />} />
            <Route path="/Activity" element={<Activity />} />
            <Route path="/Gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 w-12 h-12 bg-white rounded-md flex items-center justify-center scroll-to-top shadow-lg transition-all duration-300 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} className="text-teal dark:text-purple animate-spin-soft" />
        </button>
      </div>
    </>
  );
}

export default App;

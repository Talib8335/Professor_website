import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
//import ProfileStats from "./components/ProfileStats";
//import NoticeBoard from "./components/NoticeBoard";
//import OpenSourceContributions from "./components/OpenSourceContributions";
//import AlumniSection from "./components/AlumniSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simplified loader logic
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Fallback: hide loader after 4s
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    // Smooth scroll-to-top visibility
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
        <div className="fixed inset-0 bg-bgLight dark:bg-bgDark flex items-center justify-center z-50">
          <div className="orb-loader animate-orb-pulse"></div>
        </div>
      )}
      <Router>
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
                    //ProfileStats = {ProfileStats}
                    ProfileNoticeBoard = {ProfileNoticeBoard}
                    ScholarStats = {ScholarStats}
                    Testimonial ={Testimonial}
                    //NoticeBoard = {NoticeBoard}
                    //OpenSourceContributions={OpenSourceContributions}
                    //AlumniSection={AlumniSection}

                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/Teaching" element={<Teaching/>} />
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
      </Router>
    </>
  );
}

export default App;
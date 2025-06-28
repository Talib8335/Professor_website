import { useEffect } from 'react';
import React, { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { HiOutlineOfficeBuilding, HiOutlineMail, HiLink } from 'react-icons/hi';
import {
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaLink
} from 'react-icons/fa';



function Home({ PhotoCarousel, RecentNews, SponsoredProjects, ProfileNoticeBoard, ScholarStats, Testimonial,  ProfileStats, NoticeBoard,  OpenSourceContributions, AlumniSection }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark font-['Inter']">
      {/* Hero Section */}
      <section className="hero-section relative backdrop-blur-lg py-16 min-h-[80vh] overflow-hidden max-w-full">
  {/* --- Mobile: Dot Pattern SVG Background --- */}
  <div className="absolute inset-0 md:hidden z-0 overflow-x-hidden">
    <svg
      className="w-full h-full absolute inset-0"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ minHeight: 400 }}
    >
      <defs>
        <pattern id="dotPattern" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="2.5" fill="#b2ebf2" opacity="0.33" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotPattern)" />
    </svg>
  </div>

  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 relative z-10 max-w-full overflow-x-hidden">
    {/* --- Profile Image: Top on mobile, right on desktop --- */}
    <div className="w-full flex justify-center md:hidden mb-6">
      <div className="relative overflow-hidden w-64 h-85 bg-gradient-to-tr from-[#e0f2f1] via-[#b2ebf2] to-[#389589] shadow-xl border-4 border-white flex items-center justify-center rounded-[50%/60%]">
        <img
          src="/Professor_website/assets/skaddya.png"
          alt="Dr. Sourav Kaddya"
          className="w-full h-full object-cover"
          loading="eager"
          style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 60% 60%" }}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400'; }}
        />
      </div>
    </div>

    {/* --- Left Side - Text Content (mobile: below photo, desktop: left) --- */}
    <div className="w-full md:w-2/3 space-y-4 animate-fade-in-up animation-delay-200 text-center md:text-left">
      <h1 className="text-3xl md:text-6xl font-['Playfair_Display'] font-extrabold text-gray-800 dark:text-gray-100 drop-shadow-lg animate-pulse-slow">
        <span className="inline-block w-full">
          <Typewriter
            words={['Dr. Sourav Kanti Addya']}
            loop={true}
            cursor={false}
            typeSpeed={80}
            deleteSpeed={30}
            delaySpeed={2500}
          />
        </span>
      </h1>
      {/* Hide tagline on mobile, show on md+ */}
      <p className="hidden md:block text-3xl font-['Raleway'] font-semibold text-gray-700 dark:text-gray-200 tracking-wider tagline">
        <span className="inline-block w-full">
          <Typewriter
            words={['Advancing Knowledge Through Research & Teaching']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={3500}
          />
        </span>
      </p>

      {/* Info Panel and Social Links */}
      <div className="text-base md:text-lg leading-relaxed space-y-4 font-['Raleway'] p-8 rounded-xl ">
        <p className="space-y-1">
          <strong className="text-gray-800 dark:text-gray-100 font-semibold">Assistant Professor</strong><br />
          <span className="text-sm flex items-center gap-1 text-gray-600 dark:text-gray-300 justify-center md:justify-start">
            Department of Computer Science and Engineering
            <a
              href="#"
              className="text-[#389589] dark:text-purple hover:text-[#2b6f6a] dark:hover:text-purple-dark transition ml-1"
            >
              <HiLink size={16} />
            </a>
          </span>
          <span className="text-sm flex items-center gap-1 text-gray-600 dark:text-gray-300 justify-center md:justify-start">
            National Institute of Technology Karnataka
            <a
              href="#"
              className="text-[#389589] dark:text-purple hover:text-[#2b6f6a] dark:hover:text-purple-dark transition ml-1"
            >
              <HiLink size={16} />
            </a>
          </span>
          <span className="block text-gray-500 dark:text-gray-400">Surathkal, Mangalore – 575025</span>
        </p>

        <p className="flex items-start gap-2 text-gray-600 dark:text-gray-300 justify-center md:justify-start">
          <HiOutlineOfficeBuilding className="text-[#389589] dark:text-purple mt-1" size={20} />
          <span><strong className="text-gray-800 dark:text-gray-100">Office:</strong> Room No–314, Dept. of CSE, NITK, Surathkal.</span>
        </p>
        <p className="flex items-start gap-2 text-gray-600 dark:text-gray-300 justify-center md:justify-start">
          <FaPhoneAlt className="text-[#389589] dark:text-purple mt-1" size={16} />
          <span><strong className="text-gray-800 dark:text-gray-100">Phone:</strong> +91-824-247-3414</span>
        </p>
        <p className="flex items-start gap-2 text-gray-600 dark:text-gray-300 justify-center md:justify-start">
          <HiOutlineMail className="text-[#389589] dark:text-purple mt-1" size={20} />
          <span>
            <strong className="text-gray-800 dark:text-gray-100">Email:</strong>{' '}
            <a
              href="mailto:souravkaddya@nitk.edu.in"
              className="text-[#389589] dark:text-purple hover:text-[#2b6f6a] dark:hover:text-purple-dark underline transition"
            >
              souravkaddya[AT]nitk[DOT]edu[DOT]in
            </a>
          </span>
        </p>

        {/* Social/Research Links */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
          <a
            href="https://scholar.google.com/citations?user=4TxJGusAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 glass-light border border-gray-300 dark:glass-dark dark:border-none hover:scale-110 rounded-md transition-transform duration-300"
          >
            <FaGoogle className="mr-2 text-[#389589] dark:text-purple" />
            <span className="text-gray-800 dark:text-gray-200">Google Scholar</span>
          </a>
          <a
            href="https://dblp.org/pid/177/2106"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 glass-light border border-gray-300 dark:glass-dark dark:border-none hover:scale-110 rounded-md transition-transform duration-300"
          >
            <FaLink className="mr-2 text-[#389589] dark:text-purple" />
            <span className="text-gray-800 dark:text-gray-200">DBLP</span>
          </a>
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=56538204500"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 glass-light border border-gray-300 dark:glass-dark dark:border-none hover:scale-110 rounded-md transition-transform duration-300"
          >
            <FaLink className="mr-2 text-[#389589] dark:text-purple" />
            <span className="text-gray-800 dark:text-gray-200">Scopus</span>
          </a>
          <a
            href="https://orcid.org/0000-0001-8166-2847"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 glass-light border border-gray-300 dark:glass-dark dark:border-none hover:scale-110 rounded-md transition-transform duration-300"
          >
            <FaLink className="mr-2 text-[#389589] dark:text-purple" />
            <span className="text-gray-800 dark:text-gray-200">ORCID</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sourav-kanti-addya-ph-d-a5125b20/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 glass-light border border-gray-300 dark:glass-dark dark:border-none hover:scale-110 rounded-md transition-transform duration-300"
          >
            <FaLinkedin className="mr-2 text-[#389589] dark:text-purple" />
            <span className="text-gray-800 dark:text-gray-200">LinkedIn</span>
          </a>
          <a
            href="https://github.com/souravaddya/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 glass-light border border-gray-300 dark:glass-dark dark:border-none hover:scale-110 rounded-md transition-transform duration-300"
          >
            <FaGithub className="mr-2 text-[#389589] dark:text-purple" />
            <span className="text-gray-800 dark:text-gray-200">GitHub</span>
          </a>
        </div>
      </div>
    </div>

    {/* --- Profile Image: right side on desktop only --- */}
    <div className="hidden md:flex w-full md:w-1/4 mt-8 md:mt-0 flex justify-center">
      <div className="relative group overflow-hidden rounded-full">
        <img
          src="/Professor_website/assets/skaddya.png"
          alt="Dr. Sourav Kaddya"
          className="w-[440px] h-[460px] object-cover"
          loading="eager"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400'; }}
        />
      </div>
    </div>
  </div>

  {/* --- Desktop/Tablet: SVG polygon grid, hidden on mobile --- */}
  <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    {/* ...your SVG code here... */}
    {/* Enhanced 3D Hexagonal Grid with Advanced Effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <svg className="absolute w-full h-full opacity-30 dark:opacity-35" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#D1D5DB', stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: '#60A5FA', stopOpacity: 0.5 }} />
              </linearGradient>
              <linearGradient id="hex-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4B5563', stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: '#A78BFA', stopOpacity: 0.5 }} />
              </linearGradient>
              <linearGradient id="hex-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 0.7 }} />
                <stop offset="50%" style={{ stopColor: '#93C5FD', stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: '#60A5FA', stopOpacity: 0.7 }} />
              </linearGradient>
              <linearGradient id="hex-shimmer-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#A78BFA', stopOpacity: 0.7 }} />
                <stop offset="50%" style={{ stopColor: '#C4B5FD', stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: '#A78BFA', stopOpacity: 0.7 }} />
              </linearGradient>
              <filter id="sparkle" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="sparkleColor" />
                <feComposite in="SourceGraphic" in2="sparkleColor" operator="atop" />
              </filter>
            </defs>
            <g className="animate-hex-glow">
              <polygon points="100,80 150,40 200,80 200,160 150,200 100,160" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-0s', transformOrigin: 'center' }} />
              <polygon points="250,120 300,80 350,120 350,200 300,240 250,200" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-0.5s', transformOrigin: 'center' }} />
              <polygon points="400,60 450,20 500,60 500,140 450,180 400,140" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-1s', transformOrigin: 'center' }} />
              <polygon points="550,100 600,60 650,100 650,180 600,220 550,180" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-1.5s', transformOrigin: 'center' }} />
              <polygon points="700,80 750,40 800,80 800,160 750,200 700,160" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-2s', transformOrigin: 'center' }} />
              <polygon points="850,120 900,80 950,120 950,200 900,240 850,200" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-2.5s', transformOrigin: 'center' }} />
              <polygon points="1000,60 1050,20 1100,60 1100,140 1050,180 1000,140" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-3s', transformOrigin: 'center' }} />
              <polygon points="1150,100 1200,60 1250,100 1250,180 1200,220 1150,180" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-3.5s', transformOrigin: 'center' }} />
              <polygon points="1300,80 1350,40 1400,80 1400,160 1350,200 1300,160" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-4s', transformOrigin: 'center' }} />
              <polygon points="150,200 200,160 250,200 250,280 200,320 150,280" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-4.5s', transformOrigin: 'center' }} />
              <polygon points="300,240 350,200 400,240 400,320 350,360 300,320" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-5s', transformOrigin: 'center' }} />
              <polygon points="450,180 500,140 550,180 550,260 500,300 450,260" fill="url(#hex-gradient)" className="dark:fill-[url(#hex-gradient-dark)] animate-hex-spin animate-hex-pulse animate-hex-shimmer animate-hex-orbit group-hover:animate-hex-tilt" style={{ filter: 'contrast(1.2) url(#sparkle)', animationDelay: '-5.5s', transformOrigin: 'center' }} />
            </g>
          </svg>
        </div>
  </div>
</section>


      <PhotoCarousel />
      <RecentNews />
      <ProfileNoticeBoard/>
      <ScholarStats />
      <SponsoredProjects />
      <Testimonial/>
    
    </div>
  );
}

export default Home;
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaChalkboardTeacher, FaUsers, FaImages, FaCalendarAlt, FaBars, FaTimes, FaHome as FaHomeSolid, FaUser as FaUserSolid, FaChalkboardTeacher as FaChalkboardTeacherSolid, FaUsers as FaUsersSolid, FaImages as FaImagesSolid, FaCalendarAlt as FaCalendarAltSolid } from 'react-icons/fa';
import { MdMenuBook, MdMenuBook as MdMenuBookSolid } from 'react-icons/md';

function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { path: '/', label: 'Home', icon: FaHome, activeIcon: FaHomeSolid },
    { path: '/about', label: 'About', icon: FaUser, activeIcon: FaUserSolid },
    { path: '/research', label: 'Research', icon: MdMenuBook, activeIcon: MdMenuBookSolid },
    { path: '/teaching', label: 'Teaching', icon: FaChalkboardTeacher, activeIcon: FaChalkboardTeacherSolid },
    { path: '/groups', label: 'Groups', icon: FaUsers, activeIcon: FaUsersSolid },
    { path: '/gallery', label: 'Gallery', icon: FaImages, activeIcon: FaImagesSolid },
    { path: '/activity', label: 'Activity', icon: FaCalendarAlt, activeIcon: FaCalendarAltSolid },
  ];

  return (
    <nav className="sticky top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 text-white shadow-md z-50 hover:shadow-[0_0_15px_rgba(56,149,137,0.3)] transition-all duration-500">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={isDark ? "/Professor_website/assets/nitklogow.png" : "/Professor_website/assets/nitk.png"} // Logo changes based on dark mode
            alt="College Logo"
            className="h-16 transition-all duration-300 hover:scale-105"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/64'; }}
          />
          <div>
            <span className="text-xl font-semibold block grenze-gotisch-custom text-[#389589] dark:text-white animate-fade-in">
              Dr. Sourav Kanti Addya
            </span>
            <span className="text-base font-medium block grenze-gotisch-custom text-[#389589] dark:text-white animate-fade-in">
              Assistant Professor @NITK Surathkal, Karnataka
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-3 px-4">
          {menuItems.map(({ path, label, icon: Icon, activeIcon: ActiveIcon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#389589]/30 text-[#389589] dark:bg-[#A78BFA]/30 dark:text-white glow-soft'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-[#389589]/20 hover:text-[#2b6f6a] dark:hover:bg-[#A78BFA]/20 dark:hover:text-white'
                } animate-fade-in-up`}
                onClick={() => setMenuOpen(false)}
              >
                {isActive ? (
                  <ActiveIcon className="mr-2 text-base icon-gradient-teal-yellow" />
                ) : (
                  <Icon className="mr-1 text-base text-gray-600 dark:text-gray-400" />
                )}
                {label}
              </Link>
            );
          })}
          <label className="theme-toggle relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isDark}
              onChange={toggleTheme}
              className="sr-only"
            />
            <div className="w-12 h-6 bg-gray-300 dark:bg-light-600 rounded-full flex items-center px-1 transition-colors duration-300">
              <div className={`theme-toggle-slider w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isDark ? 'translate-x-6 bg-gradient-to-r' : 'translate-x-0'}`}></div>
            </div>
          </label>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#389589] dark:text-[#A78BFA] text-2xl focus:outline-none "
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md px-6 py-4 transition-all duration-300 ease-in-out space-y-2 border border-[#389589]/50 dark:border-[#A78BFA]/50">
          {menuItems.map(({ path, label, icon: Icon, activeIcon: ActiveIcon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#389589]/30 text-[#389589] dark:bg-[#A78BFA]/30 dark:text-[#A78BFA] glow-soft'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-[#389589]/20 hover:text-[#2b6f6a] dark:hover:bg-[#A78BFA]/20 dark:hover:text-[#8B5CF6]'
                } animate-fade-in-up`}
                onClick={toggleMenu}
              >
                {isActive ? (
                  <ActiveIcon className="mr-2 text-base" />
                ) : (
                  <Icon className="mr-2 text-base text-gray-600 dark:text-gray-400" />
                )}
                {label}
              </Link>
            );
          })}
          <label className="theme-toggle relative inline-flex items-center cursor-pointer w-full">
            <input
              type="checkbox"
              checked={isDark}
              onChange={toggleTheme}
              className="sr-only"
            />
            <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center px-1 transition-colors duration-300">
              <div className={`theme-toggle-slider w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isDark ? 'translate-x-6 bg-gradient-to-r from-[#0D9488] to-[#facc15]' : 'translate-x-0'}`}></div>
            </div>
          </label>
        </div>
      )}
    </nav>
  );
}

export default Header;

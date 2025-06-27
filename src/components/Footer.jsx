import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md py-10 text-center border-t border-[#389589]/50 dark:border-[#A78BFA]/50 shadow-[0_0_15px_rgba(56,149,137,0.08)] dark:shadow-[0_0_15px_rgba(167,139,250,0.12)] transition-all duration-500 animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        {/* Left: Copyright */}
        <p className="text-[#389589] dark:text-white font-sans text-sm animate-fade-in-up">
          © 2025 Dr. Sourav Kanti Addya. All rights reserved.
        </p>
        {/* Center: Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com/nitk_official"
            className="text-gray-600 dark:text-white hover:text-[#389589] dark:hover:text-[#A78BFA] transition-colors duration-300 animate-fade-in-up"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com/in/sourav-kaddya"
            className="text-gray-600 dark:text-white hover:text-[#389589] dark:hover:text-[#A78BFA] transition-colors duration-300 animate-fade-in-up"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:sourav.kaddya@nitk.edu.in"
            className="text-gray-600 dark:text-white hover:text-[#389589] dark:hover:text-[#A78BFA] transition-colors duration-300 animate-fade-in-up"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        {/* Right: Address shifted left a bit */}
        <div className="text-[#389589] dark:text-white text-sm font-sans text-left md:text-right animate-fade-in-up md:pr-10">
          <p>
            National Institute of Technology<br />
            Surathkal, Karnataka, India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

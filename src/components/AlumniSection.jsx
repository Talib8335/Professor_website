import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const alumniData = [
  {
    name: "Dummy",
    degree: "Ph.D.",
    year: "2025",
    current: "Assistant ",
    image: "src/assets/people/keerthan.jpeg",
    links: {
      github: "",
      linkedin: "",
      website: "",
    },
  },
  {
    name: "Dummy",
    degree: "Ph.D.",
    year: "2025",
    current: "Assistant ",
    image: "src/assets/people/keerthan.jpeg",
    links: {
      github: "",
      linkedin: "",
      website: "",
    },
  },
  {
    name: "Dummy",
    degree: "Ph.D.",
    year: "2025",
    current: "Assistant ",
    image: "src/assets/people/keerthan.jpeg",
    links: {
      github: "",
      linkedin: "",
      website: "",
    },
  },
  {
    name: "Keerthan Kumar TG",
    degree: "Ph.D.",
    year: "2025",
    current: "Assistant Professor @ SIT, Tumkur",
    image: "src/assets/people/keerthan.jpeg",
    links: {
      github: "https://github.com/Keerthankumar22",
      linkedin: "https://www.linkedin.com/in/dr-keerthan-kumar-t-g-2b553788/",
      website: "https://keerthankumar22.github.io/KeerthanKumar/",
    },
  },
  {
    name: "Kalash",
    degree: "M.Tech",
    year: "2024",
    current: "PGET @ TML- Corporate IT",
    image: "src/assets/people/kalash.jpeg",
    links: {
      github: null,
      linkedin: "https://www.linkedin.com/in/kalash-1a54791a7/",
      website: null,
    },
  },
  {
    name: "Omkar Chand Deshlahre",
    degree: "M.Tech",
    year: "2024",
    current: "Software Engineer @ Infobell IT",
    image: "src/assets/people/omkar-chand.jpeg",
    links: {
      github: null,
      linkedin: "https://www.linkedin.com/in/omkar96/",
      website: null,
    },
  },
  {
    name: "Chandra Shekhar Patel",
    degree: "M.Tech",
    year: "2024",
    current: "Area of work: Virtual Network Embedding",
    image: "src/assets/people/chandrashekhar.jpg",
    links: {
      github: null,
      linkedin: null,
      website: null,
    },
  },
  {
    name: "Madhunisha E",
    degree: "M.Tech",
    year: "2024",
    current: "Member Research Staff (MRS) @ BEL-CRL",
    image: "src/assets/people/madhunisha.jpeg",
    links: {
      github: null,
      linkedin: "https://www.linkedin.com/in/madhunisha-eswaramoorthy-80863714b/",
      website: null,
    },
  },
  {
    name: "Jui Viajy Morey",
    degree: "M.Tech (Research)",
    year: "2023",
    current: "Senior Engineer @ Western Digital",
    image: "src/assets/people/jui.jpeg",
    links: {
      github: null,
      linkedin: "https://www.linkedin.com/in/jui-morey-14a151159/",
      website: null,
    },
  },
  {
    name: "Rounak Saha",
    degree: "M.Tech (Research)",
    year: "2023",
    current: "AI Engineer @IDEMIA",
    image: "src/assets/people/rounak.jpeg",
    links: {
      github: null,
      linkedin: "https://www.linkedin.com/in/rounak-saha-8b2963133/",
      website: "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AJsN-F5-_ZiOCKzUFgH1b9IlOCX0P6jLe5FHlQpsfBdGJUGRoOmw5ntrUvhLKMEePmsmuyVRSWyCnEQAggNiPchWLm6O9ubuTA&user=g-5SjTIAAAAJ",
    },
  },
  {
    name: "Ankit Srivastava",
    degree: "M.Tech",
    year: "2023",
    current: "Application Developer @ Citi India",
    image: "src/assets/people/ankit.jpeg",
    links: {
      github: null,
      linkedin: "https://www.linkedin.com/in/ankit-srivastava-97zddb/",
      website: null,
    },
  },
  {
    name: "Manohar Anand",
    degree: "M.Tech",
    year: "2023",
    current: "Software Engineer 2 @ Dell",
    image: "src/assets/people/manohar.jpeg",
    links: {
      github: null,
      linkedin: "https://www.linkedin.com/in/manohar-anand-a063a4158/",
      website: null,
    },
  },
  {
    name: "Aastik Verma",
    degree: "M.Tech",
    year: "2023",
    current: "MTS @ Oracle",
    image: "src/assets/people/aastik.jpeg",
    links: {
      github: null,
      linkedin: "https://www.linkedin.com/in/aastik-verma-153791165/",
      website: null,
    },
  },
  {
    name: "Sachin Santoki",
    degree: "M.Tech",
    year: "2023",
    current: "ProServe @ Amazon Web Services",
    image: "src/assets/people/sachin.jpeg",
    links: {
      github: null,
      linkedin: "https://www.linkedin.com/in/sachin-santoki-7a724318b/",
      website: null,
    },
  },
  {
    name: "Ajay Gajanan Hajare",
    degree: "M.Tech",
    year: "2023",
    current: "Applications Developer 1 @Oracle (OFSS)",
    image: "src/assets/people/ajay.jpeg",
    links: {
      github: "https://github.com/AjayHajare",
      linkedin: "https://www.linkedin.com/in/ajay-hajare/",
      website: "https://ajayhajare.github.io",
    },
  },
  {
    name: "Milind Chauhan",
    degree: "M.Tech",
    year: "2023",
    current: "SWE @ Oracle",
    image: "src/assets/people/milind.jpeg",
    links: {
      github: null,
      linkedin: "https://www.linkedin.com/in/milindchauhan/",
      website: null,
    },
  },
];


function AlumniSection() {
  return (
    <section className="text-center my-20 px-4 pb-20">
      {/* Header */}
      <p className="text-sm text-textDark dark:text-Light mb-1 ">Meet Our Graduates</p>
      <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] mb-4">
        Alumni
      </h2>

      {/* Decorative Line */}
      <div className="relative mx-auto mt-3 h-1 w-64 rounded-full bg-gradient-to-r from-transparent via-[#389589] dark:via-[#A78BFA] to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#389589] dark:from-[#A78BFA] via-[#93C5FD] dark:via-[#8B5CF6] to-[#389589] dark:to-[#A78BFA] animate-slide" />
          </div>

      {/* Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4 md:px-10">
        <AnimatePresence>
          {alumniData.map((alumnus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-[0_0_25px_rgba(56,149,137,0.4)] transition-all duration-500 p-8 flex flex-col items-center text-center group overflow-hidden min-w-[280px]"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-gradient rounded-2xl transition-all duration-500 pointer-events-none" />

              {/* Image */}
              <div className="relative w-55 h-55 mb-8 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-600 shadow-xl transition-transform duration-500 group-hover:ring-4 group-hover:ring-[#389589]/30 dark:group-hover:ring-[#ffff1c]/30">
                <img
                  src={alumnus.image}
                  alt={`${alumnus.name}'s profile`}
                  className="w-full h-full object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => (e.target.src = "/src/assets/fallback.png")}
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:scale-105 transition-transform duration-300">
                <a
                  href={alumnus.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#389589] dark:after:bg-[#8B5CF6] after:transition-all after:duration-500 hover:after:w-full"
                  aria-label={`Visit ${alumnus.name}'s website`}
                >
                  {alumnus.name}
                </a>
              </h3>

              {/* Degree & Details */}
              <p className="text-base text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-1">
                <span className="text-[#389589]">🎓</span> {alumnus.degree} ({alumnus.year})
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 italic flex items-center gap-1">
                <span className="text-[#389589]">💼</span> {alumnus.current}
              </p>

              {/* Social Links */}
              <div className="mt-4 flex gap-4">
                <a
                  href={alumnus.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#389589] dark:hover:text-[#4ab8a1] transition-colors duration-300"
                  aria-label={`${alumnus.name}'s GitHub profile`}
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={alumnus.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#389589] dark:hover:text-[#4ab8a1] transition-colors duration-300"
                  aria-label={`${alumnus.name}'s LinkedIn profile`}
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={alumnus.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#389589] dark:hover:text-[#4ab8a1] transition-colors duration-300"
                  aria-label={`${alumnus.name}'s website`}
                >
                  <FaGlobe size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AlumniSection;
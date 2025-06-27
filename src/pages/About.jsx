import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaChevronDown, FaTrophy, FaGraduationCap, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect } from "react";


// Variants for alternating animation
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};




function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const education = [
    {
      title: "PostDoc, Computer Science & Engineering",
      institution: "IIT Kharagpur, India",
      year: "Dec 2019",
      desc: "Pioneered multi-cloud system architectures under Dr. Soumya Kanti Ghosh and Dr. Sandip Chakraborty, developing decentralized cloud markets.",
      researchArea: "Multi-Cloud System Architectures",
      logo: "/src/assets/iitkgp1.png", // Placeholder logo
      website: "https://www.iitkgp.ac.in/", // Institutional website
    },
    {
      title: "Ph.D., Computer Science & Engineering",
      institution: "NIT Rourkela, India",
      year: "Feb 2018",
      desc: "Optimized cloud resource allocation through innovative placement strategies.",
      thesis: "Virtual Machine Placement and Pricing on Cloud Data Centers",
      supervisor: "Dr. Ashok Kumar Turuk",
      logo: "/src/assets/nitrkl.png", // Placeholder logo
      website: "https://www.nitrkl.ac.in/", // Institutional website
    },
    {
      title: "M.Tech., Computer Science & Engineering",
      institution: "NIT Rourkela, India",
      year: "Jun 2010",
      desc: "Explored secure communication in wireless sensor networks, earning a GATE scholarship.",
      dissertation: "A Technique for Communication of Distance Node on Key Pre-distribution in Wireless Sensor Networks",
      logo: "/src/assets/nitrkl.png", // Placeholder logo
      website: "https://www.nitrkl.ac.in/", // Institutional website
    },
    {
      title: "B.Tech., Computer Science & Engineering",
      institution: "West Bengal University of Technology, India",
      year: "Jun 2007",
      desc: "Built a strong foundation in computer engineering, sparking a passion for technology.",
      logo: "/src/assets/wbu.png", // Placeholder logo
      website: "https://www.wbut.ac.in/", // Institutional website
    },
  ];

  const experience = [
    {
      title: "Assistant Professor (Gr-II)",
      institution: "NIT Karnataka, Surathkal, India",
      year: "Dec 2019 – Present",
      location: "Surathkal, Karnataka, India",
      logo: "/src/assets/nitk.png", // Replace with actual path or URL
      desc: "Leading courses like Cloud Computing and Next Generation Cloud Architecture, mentoring Ph.D./M.Tech. students in serverless and fog-edge research.",
    },
    {
      title: "Institute Post-Doctoral Fellow",
      institution: "IIT Kharagpur, India",
      year: "May 2018 – Dec 2019",
      location: "Kharagpur, West Bengal, India",
      logo: "/src/assets/iitkgp.png", // Replace with actual path or URL
      desc: "Developed decentralized cloud systems with Dr. Soumya Kanti Ghosh and Dr. Sandip Chakraborty, published at IEEE SCC 2019 (Core-A).",
    },
    {
      title: "Research Visitor",
      institution: "San Diego State University, CA, USA",
      year: "Jan – Mar 2015",
      location: "San Diego, California, USA",
      logo: "/src/assets/sdsu.png", // Replace with actual path or URL
      desc: "Explored networking solutions at the Wireless Networking Research Lab under Dr. Mahasweta Sarkar.",
    },
    {
      title: "Research Intern",
      institution: "Indian Statistical Institute, Kolkata, India",
      year: "May – Jul 2009",
      location: "Kolkata, West Bengal, India",
      logo: "/src/assets/isi.png", // Replace with actual path or URL
      desc: "Contributed to key pre-distribution in sensor networks under Prof. Bimal K. Roy.",
    },
    {
      title: "Assistant Professor",
      institution: "Silicon Institute of Technology, Sambalpur, Odisha, India",
      year: "Jul 2010 – Jan 2013",
      location: "Sambalpur, Odisha, India",
      logo: "/src/assets/silicon.png", // Replace with actual path or URL
      desc: "Taught foundational computer science courses, inspiring the next generation.",
    },
  ];
  

  const awards = [
    {
      title: "IEEE Senior Member",
      year: "2020",
      desc: "Recognized for significant contributions to cloud computing and IEEE activities.",
      image: "https://picsum.photos/200/150?random=1",
    },
    {
      title: "Indian Patent Filed",
      year: "Ongoing",
      desc: "Filed for 'A Stable Cloud-Alliance to Provide Uninterruptible Service,' under evaluation.",
      image: "https://picsum.photos/200/150?random=2",
    },
    {
      title: "Organizing Committee, STEERS 2021",
      year: "2021",
      desc: "Contributed to the success of an international research symposium.",
      image: "https://picsum.photos/200/150?random=3",
    },
       {
      title: "IEEE Senior Member",
      year: "2020",
      desc: "Recognized for significant contributions to cloud computing and IEEE activities.",
      image: "https://picsum.photos/200/150?random=1",
    },
    {
      title: "Indian Patent Filed",
      year: "Ongoing",
      desc: "Filed for 'A Stable Cloud-Alliance to Provide Uninterruptible Service,' under evaluation.",
      image: "https://picsum.photos/200/150?random=2",
    },
    {
      title: "Organizing Committee, STEERS 2021",
      year: "2021",
      desc: "Contributed to the success of an international research symposium.",
      image: "https://picsum.photos/200/150?random=3",
    },
  ];

  const publications = [
    {
      title: "Geo-distributed Multi-tier Workload Migration",
      journal: "IEEE Transactions on Services Computing (IF-11.019)",
      year: 2023,
      desc: "Explored workload migration strategies across geo-distributed cloud environments.",
      link: "#",
    },
    {
      title: "Decentralized Cloud Setup for Collaborative Markets",
      journal: "IEEE Service Computing Conference (Core-A)",
      year: 2019,
      desc: "Introduced a novel decentralized cloud architecture for collaborative markets.",
      link: "#",
    },
    {
      title: "Indian Patent",
      desc: "“A Stable Cloud-Alliance to Provide Uninterruptible Service” (Under Evaluation).",
    },
    {
      title: "Research Focus",
      desc: "Virtual Network Embedding, Cold Start Mitigation, Multi-Cloud Architectures.",
    },
  ];

  return (
    <section className="min-h-screen bg-bgLight dark:bg-bgDark text-textDark dark:text-textLight">
      
      {/* Hero Header */}
      <div className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: `url(https://picsum.photos/1920/1080?random=1)`,
        backgroundColor: 'dark:bg-gray-900',
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950 dark:from-purple-800 dark:via-purple-900 dark:to-purple-950 opacity-85"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold font-serifHeading text-white animate-fade-in-down">
            About Sourav Kanti Addya
          </h1>
          <p className="mt-4 text-lg font-bold font-sans text-white animate-middle-typewriter">
            Innovating Tomorrow’s Cloud Solutions
          </p>
          <a
            href="#about-content"
            className="mt-6 inline-block text-white animate-pulse"
          >
            <FaChevronDown className="text-3xl" />
          </a>
        </div>
      </div>

      {/* Content Sections */}
      <div id="about-content" className="max-w-[90%] mx-auto px-4 md:px-10 py-16 ">
        {/* Who I Am */}
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md border-2 border-secondary hover:border-accent transition-all duration-300 animate-slide-in-up">
          <div className="absolute inset-0 border-4 border-transparent group-hover:border-gradient rounded-2xl transition-all duration-500 pointer-events-none" />
          <button
            onClick={() => toggleSection("whoiam")}
            className="w-full flex justify-between items-center p-6 text-left bg-[#389589]  dark:bg-[#2e2e4f] text-white rounded-t-lg hover:bg-[#2a6f66] transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold">Who I Am</h2>
            <FaChevronDown
              className={`text-xl transform transition-transform duration-300 ${
                openSection === "whoiam" ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-y-auto transition-all duration-500 bg-gray-50 dark:bg-gray-900 ${
              openSection === "whoiam" ? "max-h-0" : "max-h-96"
            }`}
          >
            <div className="p-6 font-cool">
              <p className="text-xl leading-loose text-gray-900 dark:text-gray-100 mb-4">
                I’m <span className="font-bold text-[#389589]">Sourav Kanti Addya</span>, an Assistant Professor at <strong className="italic">NIT Karnataka, Surathkal</strong>, where I’ve been shaping minds and technologies since 2019. My journey in <span className="font-semibold">Computer Science and Engineering</span> began with a <em className="italic">Ph.D. from NIT Rourkela</em>, tackling the complexities of virtual machine placement in cloud data centers. This passion led me to a <strong>Post-Doctoral Fellowship at IIT Kharagpur</strong>, exploring decentralized cloud markets, and a stint as a <span className="font-semibold">Visiting Scholar at San Diego State University</span>, diving into wireless networking.
              </p>
              <p className="text-xl leading-loose text-gray-900 dark:text-gray-100 mb-4">
                With an <strong>M.Tech. from NIT Rourkela</strong> (earned with a GATE scholarship) and a <strong>B.Tech. from West Bengal University of Technology</strong>, my foundation is robust. For over eight years, I’ve been immersed in <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#389589] to-secondary">cloud computing, serverless architectures, and fog-edge systems</span>. My Ph.D. thesis, <em>“Virtual Machine Placement and Pricing on Cloud Data Centers”</em>, optimized multi-cloud systems, while my postdoc work pioneered a decentralized cloud setup, published in the <strong>IEEE Service Computing Conference (Core-A)</strong>.
              </p>
              <p className="text-xl leading-loose text-gray-900 dark:text-gray-100">
                At <strong>NITK</strong>, I lead a dynamic research team addressing virtual network embedding and cold start issues in serverless computing. I introduced <em>“Next Generation Cloud Architecture”</em>, served as a Teaching Assistant for NPTEL’s Cloud Computing course, and mentor Ph.D./M.Tech. students. My work appears in top venues like <strong>IEEE INFOCOM (Core-A*)</strong> and <strong>IEEE Transactions on Services Computing (IF-11.019)</strong>, and I hold an <span className="italic">Indian Patent</span> for a cloud-alliance system. As a <strong>Senior Member of IEEE</strong> and ACM member, I review for journals like <strong>IEEE Systems Journal</strong> and serve on committees like <strong>COMSNETS</strong>. My mission? To bridge innovation with impact, fostering a smarter, connected future.
              </p>
            </div>
          </div>
        </div>
        
        <div>
    
    </div>

        {/* Education */}
  
        <div className="py-16">
      <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center mb-14 animate-fade-in">
        Degrees Received
      </h2>

      <div className="space-y-16">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col md:flex-row items-start md:items-center bg-[#E6F0FA] dark:bg-[#2e2e4f] shadow-lg rounded-2xl overflow-hidden"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Brand Image with Rotation */}
            <div className="w-full md:w-32 md:min-w-32 flex justify-center md:justify-start p-6 md:p-4">
              <div className="w-24 h-24 bg-white dark:bg-purple-950 rounded-full shadow-md flex items-center justify-center border-4 border-white dark:border-purple-800">
                <motion.img
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain rounded-full p-2"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 w-full pr-6 py-6 md:py-4 relative ">
              <div className="bg-[#4B5563] dark:bg-purple-900 rounded-lg px-5 py-3 flex items-center justify-between mb-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-[#389589] p-2 rounded-full shadow">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{edu.institution}</p>
                    <p className="text-sm text-gray-200">{edu.title}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base font-medium text-gray-200">{edu.year}</p>
              </div>

              <ul className="text-base font-body text-gray-900 dark:text-white list-none space-y-2 pl-2">
                {[
                  edu.desc,
                  edu.researchArea && `Research Area: ${edu.researchArea}`,
                  edu.thesis && `Thesis: ${edu.thesis}`,
                  edu.supervisor && `Supervisor: ${edu.supervisor}`,
                  edu.dissertation && `Dissertation: ${edu.dissertation}`,
                ]
                  .filter(Boolean)
                  .map((item, i) => (
                    <li
                      key={i}
                      className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:text-yellow-400 before:content-['⚡️']"
                    >
                      {item}
                    </li>
                  ))}
              </ul>

              <div className="mt-6 flex justify-end">
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#389589] text-white text-sm px-4 py-2 rounded-full hover:bg-[#2f776c] transition-colors duration-300"
                >
                  Visit Website <FaArrowRight className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
        {/* Experience */}



        <div className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center mb-12"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="relative mb-14 flex items-start"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={index}
          >
            {/* Logo Column */}
            <div className="w-28 flex justify-end pr-2">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-300 flex items-center justify-center">
                <img
                  src={exp.logo}
                  alt={exp.institution}
                  className="w-8 h-8 object-contain rounded-full"
                />
              </div>
            </div>

            {/* Vertical Line + Dot */}
            <div className="relative w-6 flex justify-center">
              {/* Dot on Line */}
              <div className="w-3 h-3 rounded-full bg-[#389589] border-2 border-white z-10 mt-7"></div>
            </div>

            {/* Arrow + Content */}
            <div className="relative ml-4 bg-[#f0f6fa] dark:bg-[#2e2e4f] rounded-md shadow-md p-6 w-full max-w-4xl">
              {/* Arrow */}
              <div className="absolute left-[-8px] top-6 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#f0f6fa] dark:border-r-[#2e2e4f]"></div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-[#389589] dark:text-white">{exp.title}</h3>
                <div className="text-right text-sm text-gray-500 dark:text-gray-300">
                  <p>{exp.year}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{exp.institution}</p>
              <p className="text-sm text-gray-800 dark:text-gray-100">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>


{/* Awards */}
<div className="py-16">
  <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center mb-12 animate-fade-in">
    Awards & Recognitions
  </h2>
  <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#389589]/30 scrollbar-track-transparent snap-x snap-mandatory">
    {awards.map((award, index) => (
      <div
        key={index}
        className="min-w-[320px] max-w-xs bg-white dark:bg-gray-800 rounded-lg p-6 border border-secondary shadow-md hover:shadow-lg hover:border-accent hover:-translate-y-2 transition-all duration-300 snap-center animate-fade-in-up"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <img
          src={award.image}
          alt={award.title}
          className="w-full h-32 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300"
        />
        <div className="flex items-center mb-2">
          <FaTrophy className="text-[#389589] text-2xl mr-2 hover:text-accent" />
          <h3 className="text-lg font-semibold font-cool text-gray-900 dark:text-gray-100">{award.title}</h3>
        </div>
        <p className="text-base font-body text-secondary">{award.year}</p>
        <p className="mt-2 text-base font-body text-gray-600 dark:text-gray-400">{award.desc}</p>
      </div>
    ))}
  </div>
  {/* Optional: gradient fade on left/right for visual cue */}
  <div className="pointer-events-none absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent" />
  <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent" />
</div>


        {/* Get in Touch */}
       <div className="py-16">
      <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] text-center mb-12 animate-fade-in">
        Get in Touch
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border-2 border-[#389589] dark:border-[#A78BFA] shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-in">
        <p className="text-xl font-body text-gray-900 dark:text-gray-100 mb-6 text-center">
          Let’s collaborate on research, internships, or innovative ideas!
        </p>
        
        {/* Contact Details */}
        <div className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
          <p className="font-semibold text-xl mb-2">Dr. Sourav Kanti Addya</p>
          <p>Room 601, Second Floor,</p>
          <p>Dept. of CSE, NITK, Surathkal - 575025</p>
          <p className="mt-4">📞 +91-824-247-3414</p>
          <p>📧 <a href="mailto:souravkaddya@nitk.edu.in" className="text-[#389589] dark:text-[#A78BFA] hover:underline">souravkaddya[AT]nitk[DOT]edu[DOT]in</a></p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/souravaddya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#389589] dark:text-[#A78BFA] hover:text-accent hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sourav-kanti-addya/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#389589] dark:text-[#A78BFA] hover:text-accent hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/souravaddya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#389589] dark:text-[#A78BFA] hover:text-accent hover:scale-110 transition-all duration-300"
          >
            <FaXTwitter />
          </a>
        </div>
        
        {/* Google Map Embed */}
        <div className="w-full h-96 rounded-lg overflow-hidden">
          <iframe
            className="gmap_iframe"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=600&amp;height=200&amp;hl=en&amp;q=cloud%20and%20smart%20system%20services%20lab&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen=""
            loading="lazy"
          />
          <a href="https://embed-googlemap.com">embed-googlemap.com</a>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}

export default About;
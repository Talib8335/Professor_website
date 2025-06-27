import React, { useState } from "react";
import { useEffect } from 'react';
import { FaRegClock, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// Sample Timeline Data
const galleryTimeline = [
  {
    date: "June 02, 2025",
    title: "Wrapping Up with Brilliance - Final M.Tech Presentations for 2025 Batch",
    images: [
      "../src/assets/gallery/mtech-2025/1.jpeg",
      "../src/assets/gallery/mtech-2025/2.jpeg",
      "../src/assets/gallery/mtech-2025/3.jpeg",
      "../src/assets/gallery/mtech-2025/4.jpeg"
    ]
  },
  {
    date: "May 20, 2025",
    title: "Alma meet with Mr. Dipankar Sarma",
    images: [
      "../src/assets/gallery/interaction/interaction-dipanker.jpeg"
    ]
  },
  {
    date: "March 12, 2025",
    title: "Successfully defence of Ph.D. thesis by Keerthan Kumar",
    images: [
      "../src/assets/gallery/keerthan-defence/1.jpg",
      "../src/assets/gallery/keerthan-defence/2.jpg"
    ]
  },
  {
    date: "January 08, 2025",
    title: "Best Poster Award in 17th COMSNETS 2025",
    images: [
      "../src/assets/gallery/comsnet-2025/1.jpeg",
      "../src/assets/gallery/comsnet-2025/2.jpeg",
      "../src/assets/gallery/comsnet-2025/3.jpg"
    ]
  },
  {
    date: "January 07, 2025",
    title: "Our Students presented there work at 17th COMSNETS 2025",
    images: [
      "../src/assets/gallery/comsnets-2025/1.jpg",
      "../src/assets/gallery/comsnets-2025/2.jpg",
      "../src/assets/gallery/comsnets-2025/3.jpg"
    ]
  },
  {
    date: "January 04, 2025",
    title: "Our Students presented there work at 26th ICDCN 2025",
    images: [
      "../src/assets/gallery/icdcn-2025/1.jpeg",
      "../src/assets/gallery/icdcn-2025/2.jpeg",
      "../src/assets/gallery/icdcn-2025/3.jpeg"
    ]
  },
  {
    date: "November 23, 2024",
    title: "Our students of 24' Batch attended convocation and Kalash got institute gold medal",
    images: [
      "../src/assets/gallery/convocation-2024/1.jpeg",
      "../src/assets/gallery/convocation-2024/2.jpeg",
      "../src/assets/gallery/convocation-2024/3.jpeg"
    ]
  },
  {
    date: "March 11, 2024",
    title: "Dr. Addya attended 22nd Percom 2024 and also presented our work.",
    images: [
      "../src/assets/gallery/percom-2024/1.jpeg",
      "../src/assets/gallery/percom-2024/2.jpeg",
      "../src/assets/gallery/percom-2024/3.jpeg",
      "../src/assets/gallery/percom-2024/4.jpeg",
      "../src/assets/gallery/percom-2024/5.jpeg"
    ]
  },
  {
    date: "December 02, 2023",
    title: "Dr. Sourav Kanti Addya got Research Excellence Award 2023 by IEEE Computer Society Bangalore Chapter",
    images: [
      "../src/assets/gallery/icdds-2023/1.jpeg"
    ]
  },
  {
    date: "August 28, 2023",
    title: "Successfully defence of M.Tech(Research) thesis by Jui Vijay Morey",
    images: [
      "../src/assets/gallery/jui-defence/1.jpeg",
      "../src/assets/gallery/jui-defence/2.jpeg",
      "../src/assets/gallery/jui-defence/3.jpeg",
      "../src/assets/gallery/jui-defence/4.jpeg"
    ]
  },
  {
    date: "January 09, 2021",
    title: "Best Poster Award in 13th COMSNETS 2021",
    images: [
      "../src/assets/gallery/comsnet-2021/1.jpeg"
    ]
  },
  {
    date: "October 27, 2020",
    title: "Book written by Dr. Sourav Kanti Addya entitled \"Cloud Network Management: An IOT based Framework\" got published",
    images: [
      "../src/assets/gallery/books/cloud network management.jpeg"
    ]
  }
];



const PAGE_SIZE = 3; // Items per page


function Gallery() {


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const [openSection, setOpenSection] = useState(null);
  
    const toggleSection = (section) => {
      setOpenSection(openSection === section ? null : section);
    };
  
    
  const [currentPage, setCurrentPage] = useState(0);
  const [modal, setModal] = useState({ open: false, images: [], idx: 0 });

  const totalPages = Math.ceil(galleryTimeline.length / PAGE_SIZE);

  const openModal = (images, idx) => setModal({ open: true, images, idx });
  const closeModal = () => setModal({ open: false, images: [], idx: 0 });

  const prevImg = (e) => {
    e.stopPropagation();
    setModal((m) => ({ ...m, idx: (m.idx - 1 + m.images.length) % m.images.length }));
  };

  const nextImg = (e) => {
    e.stopPropagation();
    setModal((m) => ({ ...m, idx: (m.idx + 1) % m.images.length }));
  };

  const paginatedData = galleryTimeline.slice(
    currentPage * PAGE_SIZE,
    currentPage * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <section className="min-h-screen py-12 px-4 bg-[#f8fafc] dark:bg-[#181825] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 flex items-center gap-3 text-3xl font-bold text-[#389589] dark:text-[#A78BFA]">
          <FaRegClock className="text-2xl" />
          <h2>Highlights Timeline</h2>
        </header>

        <div className="relative border-l-2 border-dashed border-[#389589] dark:border-[#A78BFA] space-y-12">
          {paginatedData.map((event) => (
            <article key={event.date + event.title} className="relative pl-10 group">
              <div className="absolute -left-4 top-2 w-7 h-7 rounded-full bg-white dark:bg-[#23233a] border-4 border-[#389589] dark:border-[#A78BFA] flex items-center justify-center shadow">
                <FaRegClock className="text-[#389589] dark:text-[#A78BFA]" />
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 border-l-4 border-[#389589] dark:border-[#A78BFA] rounded-xl shadow-md group-hover:shadow-xl transition-transform duration-300 transform group-hover:scale-[1.02]">
                <time className="block text-xs font-semibold text-[#389589] dark:text-[#A78BFA] mb-1">
                  {event.date}
                </time>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {event.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {event.images.map((img, imgIdx) => (
                    <img
                      key={img}
                      src={img}
                      alt={`Event: ${event.title}`}
                      className="h-24 w-full object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-[#389589] dark:hover:border-[#A78BFA] transition-all duration-200"
                      onClick={() => openModal(event.images, imgIdx)}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`px-3 py-1 rounded ${currentPage === idx ? 'bg-[#389589] dark:bg-[#A78BFA] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {modal.open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={closeModal}>
          <button
            onClick={closeModal}
            className="absolute top-6 right-8 text-white text-3xl hover:text-red-400 transition"
          >
            <FaTimes />
          </button>

          <div className="flex items-center gap-6">
            <button onClick={prevImg} className="text-white text-4xl hover:text-gray-300 transition">
              <FaChevronLeft />
            </button>

            <img
              src={modal.images[modal.idx]}
              alt="Gallery item"
              className="max-h-[80vh] max-w-[80vw] rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button onClick={nextImg} className="text-white text-4xl hover:text-gray-300 transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;


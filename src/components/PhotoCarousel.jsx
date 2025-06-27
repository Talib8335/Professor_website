import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotoCarousel() {
  const carouselImages = [
    { src: "https://picsum.photos/1920/1080?random=1", alt: "Nature 1" },
    { src: "https://picsum.photos/1920/1080?random=2", alt: "City 2" },
    { src: "https://picsum.photos/1920/1080?random=3", alt: "Landscape 3" },
    { src: "https://picsum.photos/1920/1080?random=4", alt: "Travel 4" },
    { src: "https://picsum.photos/1920/1080?random=5", alt: "Travel 4" },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: true,
    pauseOnHover: true,
    appendDots: dots => (
      <div className="absolute bottom-4 left-0 w-full flex justify-center z-20">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 transition-all duration-300 group-dot" />
    ),
    prevArrow: (
      <button className="slick-prev bg-secondary/80 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors duration-300">
        ←
      </button>
    ),
    nextArrow: (
      <button className="slick-next bg-secondary/80 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors duration-300">
        →
      </button>
    ),
  };

  return (
    <section className="text-center my-16">
      <p className="text-sm text-textDark dark:text-Light mb-1 tracking-widest">
        Visual Highlights
      </p>
      <h2 className="text-4xl font-bold font-serifHeading text-[#389589] dark:text-[#A78BFA] mb-4">
        Moments
      </h2>
      <div className="relative mx-auto mt-3 h-1 w-64 rounded-full bg-gradient-to-r from-transparent via-[#389589] dark:via-[#A78BFA] to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#389589] dark:from-[#A78BFA] via-[#93C5FD] dark:via-[#8B5CF6] to-[#389589] dark:to-[#A78BFA] animate-slide" />
          </div>

      <div className="mt-10 px-2 md:px-6 max-w-4xl mx-auto relative">
        <Slider {...carouselSettings}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-zinc-900">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover object-center"
                  onError={e =>
                    (e.target.src = "https://source.unsplash.com/800x600/?placeholder")
                  }
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default PhotoCarousel;

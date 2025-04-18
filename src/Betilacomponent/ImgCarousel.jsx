import React, { useState } from 'react';
import { Grip } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function ImgCarousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const galleryImages = [
    { src: 'gallary1.png', caption: 'The Woods' },
    { src: 'gallary2.png', caption: 'Cinque Terre' },
    { src: 'gallary3.png', caption: 'Mountains and fjords' },
    { src: 'gallary4.png', caption: 'Northern Lights' },
    { src: 'gallary5.png', caption: 'Nature and sunrise' },
    { src: 'gallary5.png', caption: 'Snowy Mountains' },
   
  ];

  return (
    <>
      {/* Trigger Button */}
      <div className="flex justify-center mt-4">
        <div
          className="flex items-center gap-2 font-robot font-medium text-lg bg-white border w-[220px] rounded-full py-2 px-4 cursor-pointer shadow-sm hover:shadow-md transition"
          onClick={openModal}
        >
          <Grip className="w-6 h-5" />
          <button>View all {galleryImages.length} photos</button>
        </div>
      </div>

      {/* Modal Slideshow Gallery */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl max-w-5xl w-full relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl text-gray-500 hover:text-black"
            >
              &times;
            </button>

            {/* Title */}
            {/* <h2 className="text-2xl font-semibold mb-4 text-center font-lexend">
              Slideshow Gallery
            </h2> */}

            {/* Large Image Swiper */}
            <div className="relative">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                loop
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="mb-4"
              >
                {galleryImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative">
                      <span className="absolute top-2 left-2 text-white text-sm bg-black/50 px-2 py-1 rounded">
                        {index + 1} / {galleryImages.length}
                      </span>
                      <img
                        src={img.src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[500px] object-cover rounded-2xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            
            </div>

            {/* Thumbnail Swiper */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={6}
              watchSlidesProgress
              className="mt-4"
            >
              {galleryImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img.src}
                    alt={`Thumb ${index + 1}`}
                    className={`cursor-pointer rounded-md border-2 object-cover transition-all duration-200 ${
                      activeIndex === index ? 'border-blue-500 opacity-100' : 'border-transparent opacity-60'
                    }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}

export default ImgCarousel;
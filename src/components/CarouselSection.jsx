import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { MoveLeft, MoveRight } from 'lucide-react';

function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const slides = [
    { id: 1, title: "Fine Dining Experience", rating: "4.9" },
    { id: 2, title: "Casual Bistro", rating: "4.7" },
    { id: 3, title: "Seafood Special", rating: "4.8" },
    { id: 4, title: "Vegan Paradise", rating: "4.95" },
    { id: 5, title: "Italian Kitchen", rating: "4.85" },
    { id: 6, title: "Steak House", rating: "4.89" },
  ];

  // Determine how many cards to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCardsPerView(4);
      else if (width >= 640) setCardsPerView(2);
      else setCardsPerView(1);
    };

    handleResize(); // run initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, slides.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideWidth = 100 / cardsPerView;

  return (
    <div className='w-full max-w-[90%] xl:max-w-[1345px] min-h-[400px] md:min-h-[509px] bg-[#1677BD] mx-auto py-10 md:py-10 my-6 md:my-20 rounded-xl md:rounded-2xl'>
      <div className='relative w-full max-w-[95%] md:max-w-[1238px] h-auto mx-auto px-4'>
        <h1 className='text-2xl md:text-3xl pb-6 md:pb-9 text-white text-center md:text-left'>
          Find the best restaurant ratings below
        </h1>

        <div className='relative overflow-hidden'>
          <div 
            className='flex transition-transform duration-300 ease-out'
            style={{ width: `${(slides.length * 100) / cardsPerView}%`, transform: `translateX(-${currentIndex * slideWidth}%)` }}
          >
            {slides.map((slide) => (
              <div 
                key={slide.id}
                className='w-full sm:w-1/2 lg:w-1/4 p-2'
              >
                <Carousel 
                  title={slide.title}
                  rating={slide.rating}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className='absolute top-1/2 left-[-10px] -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white/50 transition-colors hidden md:block'
        >
          <MoveLeft className='w-6 h-6 text-black' />
        </button>
        <button 
          onClick={nextSlide}
          className='absolute top-1/2 right-[-10px] -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white/50 transition-colors hidden md:block'
        >
          <MoveRight className='w-6 h-6 text-black' />
        </button>
      </div>
    </div>
  );
}

export default CarouselSection;

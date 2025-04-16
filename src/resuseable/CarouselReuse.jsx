import React, { useState, useEffect } from 'react';

function CarouselReuse({
  images = [],
  interval = 5000,
  title = 'Title',
  description = 'Description goes here...',
  rating = '5.0',
  reviews = '0',
  starImage = 'star.png',
  width = 'w-[285px]',
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`${width} relative`}>
      {/* Image Container */}
      <div className="relative h-48 rounded-lg overflow-hidden">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out rounded-lg ${
              current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* Dot Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full ${
                current === idx ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#f9f7f7] rounded-b-2xl  px-2 py-1 ">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
          <img src={starImage} alt="star" className="h-4" />
          <span>{`${rating} (${reviews} reviews)`}</span>
        </div>
      </div>
    </div>
  );
}

export default CarouselReuse;

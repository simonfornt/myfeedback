import React, { useState, useEffect } from 'react';

const images = ['img1.png', 'img2.png', 'img3.png', 'img4.png'];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[285px] relative">
      {/* Image Container with Transition Effect */}
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

      {/* Static Content */}
      <div className=" bg-white rounded-b-2xl py-4 px-2">
        <h4 className="font-bold text-lg">Bottega</h4>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, iure.
        </p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
          <img src="star.png" alt="star" className="h-4" />
          <span>5.0 (876 reviews)</span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

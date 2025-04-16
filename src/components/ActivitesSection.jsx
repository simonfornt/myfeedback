import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ActiviteCard from '../resuseable/ActiviteCard';

const data = [
  {
    avatar: 'avatr.png',
    name: 'Leslie Sako',
    location: 'Toronto, Canada',
    date: '09/11/2023',
    ratingIcon: 'star.png',
    feedback: [
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      'Another short paragraph for demonstration.',
    ],
    images: ['sako1.png', 'sako2.png', 'sako3.png'],
  },
  {
    avatar: 'avatr.png',
    name: 'Chris Macari',
    location: 'Singapore',
    date: '14/09/2023',
    ratingIcon: 'star.png',
    feedback: [
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      'Another short paragraph for demonstration.',
    ],
    images: ['chris1.png', 'chris2.png', 'chris3.png'],
  },
  {
    avatar: 'avatr.png',
    name: 'Jojo Alba',
    location: 'Kuala Lumpur',
    date: '28/09/2023',
    ratingIcon: 'star.png',
    feedback: [
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      'Another short paragraph for demonstration.',
    ],
    images: ['jojo1.png', 'jojo2.png', 'jojo3.png'],
  },
  {
    avatar: 'avatr.png',
    name: 'Jojo Alba',
    location: 'Kuala Lumpur',
    date: '28/09/2023',
    ratingIcon: 'star.png',
    feedback: [
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      'Another short paragraph for demonstration.',
    ],
    images: ['jojo1.png', 'jojo2.png', 'jojo3.png'],
  },
  {
    avatar: 'avatr.png',
    name: 'Jojo Alba',
    location: 'Kuala Lumpur',
    date: '28/09/2023',
    ratingIcon: 'star.png',
    feedback: [
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      'Another short paragraph for demonstration.',
    ],
    images: ['jojo1.png', 'jojo2.png', 'jojo3.png'],
  },
  // Add more if needed
];

function ActivitesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  const next = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerView < data.length ? prev + cardsPerView : prev
    );
  };

  // const prev = () => {
  //   setCurrentIndex((prev) => (prev - cardsPerView >= 0 ? prev - cardsPerView : 0));
  // };

  // Adjust number of visible cards for responsiveness
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  return (
    <div className="w-full mb-20 px-4 md:px-10">
      <h4 className="text-2xl font-bold font-lexend py-8 pl-2 font">Recent Activities</h4>

      <div className="relative">
        {/* Navigation buttons */}
        {/* <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
        </button> */}

        <div className="flex overflow-hidden">
          <div className="flex gap-6 transition-transform duration-300 ease-in-out"
               style={{ transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`, width: `${(100 / cardsPerView) * data.length}%` }}>
            {data.map((item, idx) => (
              <div
                key={idx}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <ActiviteCard {...item} linkText="Discover" linkHref="#" />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

export default ActivitesSection;

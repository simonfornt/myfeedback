import React, { useState, useEffect } from 'react';
import DropDown from '../components/DropDown';
import MenuItem from '../components/MenuItem';
import CarouselReuse from '../resuseable/CarouselReuse';

// Custom hook to get current window width
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return width;
}

function Restaurants() {
  const width = useWindowWidth();
  // For instance, use row layout for medium and above, column for small screens.
  const layout = width >= 768 ? 'row' : 'column';

  // filter
   const [filter, setFilter] = useState('all');
   const filteredData = filter === 'all' ? data : data.filter((item) => item.rating === filter);

  return (
    <div className="pt-4">
      {/* Menu (conditionally rendered based on route if needed) */}
      <MenuItem />

      {/* Page Content */}
      <div className="flex flex-col md:flex-row justify-end-safe items-start gap-4 mt-6 mb-10 ml-4">
        <div className="md:mr-40">
          <div className="flex gap-1.5 items-center md:gap-3">
            <h2 className="text-lg md:text-3xl font-lexend font-bold">
              best restaurants in Singapore
            </h2>
            <DropDown onselect={setFilter} />
          </div>
          {/* Trends Section */}
          <div className="px-4 py-8">
            <div className="md:max-w-screen-2xl mx-auto">
              <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6">
                {filteredData.map((item, index) => (
                  <CarouselReuse
                    key={index}
                    layout={layout}
                    images={item.images}
                    interval={5000}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                    reviews={item.reviews}
                    starImage={item.starImage}
                  />
                ))}
              </div>
            </div>

            <div className="my-10">
              <button className="text-sm text-white bg-[#1677BD] py-3 px-8 rounded-full">
                Show more
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-gray-500">
          <img src="mapsingapur.png" alt="Singapore map" />
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    images: ['trend1.png', 'trend2.png', 'trend3.png'],
    title: 'Bottega Italia',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '4.8',
    reviews: '234',
    starImage: 'star4.8.png',
  },
  {
    images: ['trend2.png', 'trend4.png', 'trend5.png'],
    title: 'Little Shucker',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '254',
    starImage: 'star.png',
  },
  {
    images: ['trend3.png', 'trend2.png', 'trend5.png'],
    title: 'Marafuku Ramen',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '3.5',
    reviews: '87',
    starImage: 'star3.5.png',
  },
  {
    images: ['trend4.png', 'trend5.png', 'trend6.png'],
    title: 'Bottega',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '876',
    starImage: 'star.png',
  },
  {
    images: ['trend5.png', 'trend6.png', 'trend7.png'],
    title: 'Arabia Nights',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '3.5',
    reviews: '87',
    starImage: 'star3.5.png',
  },
  {
    images: ['trend6.png', 'trend7.png', 'trend8.png'],
    title: 'Lomkma',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '253',
    starImage: 'star.png',
  },
  {
    images: ['trend7.png', 'trend8.png', 'trend9.png'],
    title: 'The snug',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '4.5',
    reviews: '654',
    starImage: 'star4.5.png',
  },
  {
    images: ['trend8.png', 'trend4.png', 'trend6.png'],
    title: 'Starbelly',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '876',
    starImage: 'star.png',
  },
  {
    images: ['trend9.png', 'trend2.png', 'trend5.png'],
    title: 'Iori',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '3.5',
    reviews: '334',
    starImage: 'star3.5.png',
  },
  {
    images: ['trend10.png', 'trend11.png', 'trend5.png'],
    title: 'Ngalley',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '253',
    starImage: 'star.png',
  },
  {
    images: ['trend11.png', 'trend2.png', 'trend5.png'],
    title: 'Diogonal',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '4.5',
    reviews: '654',
    starImage: 'star4.5.png',
  },
  {
    images: ['trend12.png', 'trend2.png', 'trend5.png'],
    title: 'Kitoka',
    description:
      'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '876',
    starImage: 'star.png',
  },
];

export default Restaurants;

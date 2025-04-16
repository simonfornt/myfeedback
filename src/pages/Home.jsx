import React from 'react';
import CarouselReuse from '../resuseable/CarouselReuse';

function Home() {
  return (
    <div className="px-4 py-8">
      <div className="md:max-w-screen-2xl mx-auto">
        <h2 className="text-xl mx-10 sm:text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
          The latest trends
        </h2>

        <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-5">
            
          {data.map((item, index) => (
            <CarouselReuse
              key={index}
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
      <div className='text-center my-10'>
        <h4 className='text-2xl py-5'>Discover more cool restaurants</h4>
        <button className='text-lg text-white bg-[#1677BD] py-3 px-8 rounded-full'>Show more</button>
      </div>
    </div>
  );
}

const data = [
  {
    images: ['trend1.png', 'trend2.png', 'trend3.png'],
    title: 'Bottega Italia',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '4.8',
    reviews: '234',
    starImage: 'star4.8.png',
  },
  {
    images: ['trend2.png', 'trend4.png', 'trend5.png'],
    title: 'Little Shucker',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '254',
    starImage: 'star.png',
  },
  {
    images: ['trend3.png', 'trend2.png', 'trend5.png'],
    title: 'Marafuku Ramen',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '3.5',
    reviews: '87',
    starImage: 'star3.5.png',
  },
  {
    images: ['trend4.png', 'trend5.png', 'trend6.png'],
    title: 'Bottega',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '876',
    starImage: 'star.png',
  },
  {
    images: ['trend5.png', 'trend6.png', 'trend7.png'],
    title: 'Arabia Nights',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '3.5',
    reviews: '87',
    starImage: 'star3.5.png',
  },
  {
    images: ['trend6.png', 'trend7.png', 'trend8.png'],
    title: 'Lomkma',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '253',
    starImage: 'star.png',
  },
  {
    images: ['trend7.png', 'trend8.png', 'trend9.png'],
    title: 'The snug',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '4.5',
    reviews: '654',
    starImage: 'star4.5.png',
  },
  {
    images: ['trend8.png', 'trend4.png', 'trend6.png'],
    title: 'Starbelly',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '876',
    starImage: 'star.png',
  },
  {
    images: ['trend9.png', 'trend2.png', 'trend5.png'],
    title: 'Iori',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '3.5',
    reviews: '334',
    starImage: 'star3.5.png',
  },
  {
    images: ['trend10.png', 'trend11.png', 'trend5.png'],
    title: 'Ngalley',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '253',
    starImage: 'star.png',
  },
  {
    images: ['trend11.png', 'trend2.png', 'trend5.png'],
    title: 'Diogonal',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '4.5',
    reviews: '654',
    starImage: 'star4.5.png',
  },
  {
    images: ['trend12.png', 'trend2.png', 'trend5.png'],
    title: 'Kitoka',
    description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    rating: '5.0',
    reviews: '876',
    starImage: 'star.png',
  },
];

export default Home;

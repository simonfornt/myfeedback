import React from 'react'
import CarouselReuse from '../resuseable/CarouselReuse';


function Discover() {
  return (
    <>
        <div className='max-w-7xl w-full mx-auto'>
            <div>
                <p className='font-lexend text-3xl font-bold'>Also Discover . . .</p>
            </div>
            <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-6">
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
    </>
  )
}

const data = [
    {
      images: ['trend1.png', 'trend2.png', 'trend3.png'],
      title: 'The melt',
      description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      rating: '4.8',
      reviews: '234',
      starImage: 'star4.8.png',
    },
    {
      images: ['trend2.png', 'trend4.png', 'trend5.png'],
      title: 'Lokma',
      description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      rating: '5.0',
      reviews: '254',
      starImage: 'star.png',
    },
    {
      images: ['trend3.png', 'trend2.png', 'trend5.png'],
      title: 'The snug',
      description: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
      rating: '3.5',
      reviews: '87',
      starImage: 'star3.5.png',
    },
]
export default Discover;
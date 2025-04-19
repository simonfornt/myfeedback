import React, { useState } from 'react'

const reviewsData = [
  {
    id: 1,
    name: 'Wei jie',
    location: 'Singapore, Little India',
    date: '29/11/2023',
    review: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    avatar: 'avatr.png',
    stars: 'star.png'
  },
  {
    id: 2,
    name: 'Mei Ling',
    location: 'Singapore, Orchad boulevard',
    date: '29/05/2023',
    review: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    avatar: 'avatr.png',
    stars: 'star.png'
  },
  {
    id: 3,
    name: 'Wei Xiong',
    location: 'Singapore, Takashimaya',
    date: '01/05/2023',
    review: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    avatar: 'avatr.png',
    stars: 'star.png'
  },
  {
    id: 4,
    name: 'Ming Wei',
    location: 'Singapore, Little India',
    date: '31/04/2023',
    review: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    avatar: 'avatr.png',
    stars: 'star.png'
  },
  {
    id: 5,
    name: 'Xin Yi',
    location: 'Singapore, Zeb rooms',
    date: '30/04/2023',
    review: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    avatar: 'avatr.png',
    stars: 'star.png'
  },
  {
    id: 6,
    name: 'Zhi Hao',
    location: 'Singapore, Boon Keng',
    date: '27/03/2023',
    review: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    avatar: 'avatr.png',
    stars: 'star.png'
  },
  {
    id: 7,
    name: 'Li Hua',
    location: 'Singapore, DLLM Loklok',
    date: '24/03/2023',
    review: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    avatar: 'avatr.png',
    stars: 'star.png'
  },
  {
    id: 8,
    name: 'Si Ying',
    location: 'Singapore, Bedemmer',
    date: '11/03/2023',
    review: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    avatar: 'avatr.png',
    stars: 'star.png'
  },
  {
    id: 9,
    name: 'Wei Ting',
    location: 'Singapore, Toa Payoh',
    date: '07/03/2023',
    review: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    avatar: 'avatr.png',
    stars: 'star.png'
  },
]

function ReviewSection() {
  const [filtered, setFiltered] = useState(false)
  const [sortAsc, setSortAsc] = useState(true)

  const filteredReviews = filtered
    ? reviewsData.filter(review => review.location.toLowerCase().includes('little india'))
    : reviewsData

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-'))
    const dateB = new Date(b.date.split('/').reverse().join('-'))
    return sortAsc ? dateA - dateB : dateB - dateA
  })

  return (
    <div className='max-w-7xl w-full mx-auto my-10 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-wrap gap-4 mb-4'>
        <button
          onClick={() => setFiltered(prev => !prev)}
          className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm sm:text-base'
        >
          {filtered ? 'Show All' : 'Filter: Little India'}
        </button>
        <button
          onClick={() => setSortAsc(prev => !prev)}
          className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm sm:text-base'
        >
          Sort: {sortAsc ? 'Old → New' : 'New → Old'}
        </button>
      </div>

      {sortedReviews.map((review) => (
        <div key={review.id} className='my-6 w-full rounded-md flex flex-col sm:flex-row p-4 sm:p-6 gap-4 bg-[#F8F8F8]'>
          <div className='shrink-0'>
            <img src={review.avatar} alt={`${review.name} avatar`} className=' ' />
          </div>
          <div className='flex-1'>
            <h2 className='font-lexend font-bold text-xl sm:text-2xl'>{review.name}</h2>
            <p className='font-robot text-sm text-[#5E5E5E]'>{review.location}</p>
            <div className='flex items-center gap-3 mb-3 mt-1'>
              <img src={review.stars} alt="rating" className='w-20 h-auto' />
              <p className='font-robot text-sm text-[#5E5E5E]'>{review.date}</p>
            </div>
            <p className='font-robot text-sm text-[#5E5E5E] max-w-full sm:max-w-2xl'>
              {review.review}
            </p>
          </div>
        </div>
      ))}

      <div className='text-center mt-8'>
        <button className='bg-sky-600 text-white font-robot py-2 px-6 rounded-full text-base hover:bg-sky-700 transition'>
          Show more reviews
        </button>
      </div>
    </div>
  )
}

export default ReviewSection

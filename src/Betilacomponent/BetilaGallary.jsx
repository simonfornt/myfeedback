import React from 'react'
import ImgCarousel from './ImgCarousel';

function BetilaGallary() {
  return (
    <>
        <div className='max-w-[1164px] w-full mx-auto my-10'>
        <div className="px-4 md:px-0">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-lexend font-semibold py-3">
    Discover our magnificent place in photos
  </h2>
  <p className="text-sm font-robot text-[#5E5E5E] max-w-xl md:max-w-[510px] pb-4">
    The lorem ipsum is, in printing, a series of meaningless words used temporarily to
    calibrate a layout. The lorem ipsum is, in printing.
  </p>
</div>


            {/* gallary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-4">
  {/* Big image on the left, taking 2x2 space on medium and up */}
  <div className="md:row-span-2 md:col-span-2 relative">
    <img
      src="gallary1.png"
      alt="Gallery 1"
      className="w-full h-full object-cover rounded-lg"
    />
   <div className='absolute bottom-4 left-2'>
   <ImgCarousel/>
   </div>
  </div>

  {/* Other images */}
  <div>
    <img
      src="gallary2.png"
      alt="Gallery 2"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
  <div>
    <img
      src="gallary3.png"
      alt="Gallery 3"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
  <div>
    <img
      src="gallary4.png"
      alt="Gallery 4"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
  <div>
    <img
      src="gallary5.png"
      alt="Gallery 5"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>

        </div>
    </>
  )
}

export default BetilaGallary;
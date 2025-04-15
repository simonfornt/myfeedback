import React from 'react'
import Carousel from './Carousel';

function CarouselSection() {

    
  return (
   <>
    <div className='w-[1345px] h-[509px] bg-[#1677BD] mx-auto py-10 my-10 rounded-2xl'>
        <div className='w-[1238px] h-[363px] mx-auto items-center'>
            <h1 className='text-3xl pb-9 text-white'>Find the best restaurant ratings below</h1>
                <div className='flex gap-8 mx-auto'>
                
                <Carousel/>
                <Carousel/>
                <Carousel/>
                <Carousel/>
                </div>

        </div>
    </div>
   </>
  )
}

export default CarouselSection;
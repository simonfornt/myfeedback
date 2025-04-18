import React from 'react'

function BetilaGallary() {
  return (
    <>
        <div className='max-w-[1164px] w-full mx-auto my-10'>
            <div className=''>
                <h2 className='text-4xl font-lexend font-semibold py-3'>Discover our magnificent place in photos</h2>
                <p className='text-sm font-robot text-[#5E5E5E] w-[560px] pb-4'>
                The lorem ipsum is, in printing, a series of meaningless words used temporarily to
                 calibrate a layout.The lorem ipsum is, in printing.
                </p>
            </div>

            {/* gallary */}
            <div className='grid grid-cols-4 gap-2 items-center content-center '>
                <div className=' row-span-2 col-span-2'>
                    <img src="gallary1.png" alt="" />
                </div>

                
                <div className=''><img src="gallary2.png" alt="" /></div>
                <div className=''><img src="gallary3.png" alt="" /></div>
                <div className=''><img src="gallary4.png" alt="" /></div>
                <div className=''><img src="gallary5.png" alt="" /></div>
                
            </div>
        </div>
    </>
  )
}

export default BetilaGallary;
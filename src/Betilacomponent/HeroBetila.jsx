import React from 'react';
import BetilaModal from './BetilaModal';
import { MapPin, Clock } from 'lucide-react';

function HeroBetila() {
  return (
    <>
      <div className='bg-[url(betila-heroimg.png)] h-[500px] w-full bg-cover bg-no-repeat mb-20 relative'>

        {/* Centered text-content */}
        <div className='w-full md:w-[552px] h-full bg-linear-to-l  from-transparent to-black/70'>
          <div className=' pt-12 pl-5 md:pl-20'>
            <h2 className='font-lexend text-[52px] font-semibold text-[#FFFFFF] '>Bella italia</h2>
            <div className='flex gap-2 text-white py-3'>
              <img src="star.png" alt="" />
              <p className='font-robot text-sm'>5.0(834 reviews)</p>
            </div>
            <p className='text-[#FFFFFF] font-robot text-lg py-6'>
            The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
            The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
            </p>

            <div className='text-[#FFFFFF] space-y-7 space-x-3'>
                <p className='flex gap-3 font-robot'><MapPin className='bg-white text-black rounded-full'/>singapour, Bishan-Ang Mo Kio Park</p>
                <p className='flex gap-3 font-robot'><Clock className='bg-white text-black rounded-full'/>ji/7, 8:00 - 22:00</p>
            </div>
          </div>
        </div>

        <div className="absolute left-30 top-95 md:left-150 md:top-95 ">
          <BetilaModal/>
        </div>
      </div>
    </>
  );
}

export default HeroBetila;

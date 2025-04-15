import React from 'react';

function Nav() {
  return (
    < >
      <div className='border-b border-slate-200'>
      <div className='flex flex-col md:flex-row mx-5 justify-between items-center h-auto md:h-[120px] py-4 gap-4'>
        {/* Logo */}
        <div>
          <img src="logo.png" alt="Logo" className='h-10 w-auto' />
        </div>

        {/* Search */}
        <div className='w-full md:w-[400px] relative'>
          <input
            type="search"
            placeholder='restaurant, hotel, service,    |      Singapore'
            className='w-full px-4 py-2 pr-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300'
          />
          <img 
            src="search.png" 
            alt="Search Icon" 
            className='absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 bg-blue-800 p-1 rounded-full'
          />
        </div>

        {/* Right Side */}
        <div className='flex gap-3 items-center'>
          <img src="world.png" alt="World Icon" className='h-5 w-5' />
          <button className='text-white bg-black py-1 px-3 rounded-full text-sm whitespace-nowrap'>
            MyFeedback for business
          </button>
        </div>
        
      </div>
      </div>
    </>
  );
}

export default Nav;

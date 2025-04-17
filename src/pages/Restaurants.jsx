import React from 'react';
import DropDown from '../components/DropDown';
import MenuItem from '../components/MenuItem';

function Restaurants() {
  return (
    <div className="px-4 pt-4">
      {/* Menu (conditionally rendered based on route if needed) */}
      <MenuItem />

      {/* Page Content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6 ml-4">
        <div className='flex gap-3'>
          <h2 className="text-2xl font-lexend font-bold capitalize">Best restaurants in Singapore</h2>

          {/* Sort Dropdown */}
          
          <DropDown/>
        </div>

        {/* Right Section */}
        <div className="text-gray-500">Right content (e.g. filters, map toggle, etc.)</div>
      </div>
    </div>
  );
}

export default Restaurants;

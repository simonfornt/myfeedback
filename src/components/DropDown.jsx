import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/dropdown';
import { SortAscIcon } from 'lucide-react';

function DropDown({ onselect }) {
  const handleSelect = (value) => {
    onselect(value);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="flex font-robot border py-2 px-4 rounded-full">
          <SortAscIcon className="mr-1" />
          Sort
        </button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Sort Options"
        className="border py-3 px-2 bg-[#FFFFFF] border-[#E6E6E6]"
      >
        <DropdownItem
          key="all"
          onClick={() => handleSelect('all')}
          className="pb-2 font-robot text-[#5D5D5D] hover:text-blue-400 transition-all transition-color"
        >
          All feedbacks
        </DropdownItem>
        <DropdownItem
          key="5.0"
          onClick={() => handleSelect('5.0')}
          className="pb-2 font-robot text-[#5D5D5D] hover:text-blue-400 transition-all transition-color"
        >
          Highest rated
        </DropdownItem>
        <DropdownItem
          key="3.5"
          onClick={() => handleSelect('3.5')}
          className="font-robot text-[#5D5D5D] hover:text-blue-400 transition-all transition-color"
        >
          Lowest rated
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDown;

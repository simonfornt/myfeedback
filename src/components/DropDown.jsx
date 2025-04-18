import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@heroui/dropdown';
import { SortAscIcon } from 'lucide-react';

function DropDown({ onselect }) {
  const handleSelect = (key) => {
    if (onselect) onselect(key);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="flex font-robot border py-2 px-4 rounded-full">
          <SortAscIcon />
          Sort
        </button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="border py-3 px-2 bg-[#FFFFFF] border-[#E6E6E6]"
        onAction={handleSelect}
      >
        <DropdownItem key="all" className="pb-2 font-robot text-[#5D5D5D] hover:text-blue-400">
          All feedbacks
        </DropdownItem>
        <DropdownItem key="5.0" className="pb-2 font-robot text-[#5D5D5D] hover:text-blue-400">
          Highest rated
        </DropdownItem>
        <DropdownItem key="3.5" className="font-robot text-[#5D5D5D] hover:text-blue-400">
          Lowest rated
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDown;

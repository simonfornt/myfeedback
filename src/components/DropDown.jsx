import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown';
import { SortAscIcon } from 'lucide-react';


function DropDown() {
  return (
    <>
         <Dropdown>
      <DropdownTrigger>
        
        <button className='flex font-robot border py-2 px-4 rounded-full'><SortAscIcon/>Sort</button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </>
  )
}

export default DropDown;
'use client';

import { SeacrchManufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'

const SearcManufacturer = ({manufacture, setManufacture}:SeacrchManufactureProps) => {
  return (
    <div className='search-menu'>
      <Combobox>
        <div className='relative w-full'>
            <Combobox.Button cn>

            </Combobox.Button>
        </div>
      </Combobox>
    </div>
  )
}

export default SearcManufacturer
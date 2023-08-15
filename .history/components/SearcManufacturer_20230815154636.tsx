'use client';

import { SeacrchManufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'

const SearcManufacturer = ({manufacture, setManufacture}:SeacrchManufactureProps) => {
  return (
    <div className='search-menu'>
      <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className='absolute top-{14px)'>
                <Image></Image>
            </Combobox.Button>
        </div>
      </Combobox>
    </div>
  )
}

export default SearcManufacturer
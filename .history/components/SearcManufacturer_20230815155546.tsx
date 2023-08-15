'use client';

import { SeacrchManufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import {}

const SearcManufacturer = ({manufacture, setManufacture}:SeacrchManufactureProps) => {
  return (
    <div className='search-menu'>
      <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className='absolute top-{14px)'>
                <Image src="/logo.png" alt={'Logo'} width={20} height={20}></Image>
            </Combobox.Button>

            <Combobox.Input className='search-manufacturer__input' placeholder='Laptop'>

            </Combobox.Input>
        </div>
      </Combobox>
    </div>
  )
}

export default SearcManufacturer
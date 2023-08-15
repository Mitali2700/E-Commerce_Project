'use client';

import { SeacrchManufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { manufacture } from '@/constants';
import { Fragment, useState } from 'react';

const SearcManufacturer = ({manufacture, setManufacture}:SeacrchManufactureProps) => {
  const [query, Setquery] = useState('')
  const filteredManufacturer = query === ""  ? manufacture : m
  return (
    <div className='search-menu'>
      <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className='absolute top-{14px)'>
                
            </Combobox.Button>

            <Combobox.Input className='search-manufacturer__input' placeholder='Laptop' displayValue={(manufacture:string) => manufacture}>

            </Combobox.Input>

            <Transition as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              afterLeave={() => Setquery('')}
            >

            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearcManufacturer
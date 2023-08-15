'use client';

import { SeacrchManufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { manufactures } from '@/constants';
import { Fragment, useState } from 'react';

const SearcManufacturer = ({manufacture, setManufacture}:SeacrchManufactureProps) => {
  const [query, Setquery] = useState('')
  const filteredManufacturer = query === ""  ? manufactures : manufactures.filter((item) =>(
    item.toLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g, ""))

  ))
  return (
    <div className='search-menu'>
       <Combobox value={manufacture} onChange={setManufacture}>
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
                <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredManufacturer.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacture.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearcManufacturer
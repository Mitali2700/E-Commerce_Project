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
                <Combobox.Options>
                  {filteredManufactures.length === 0 && query !== "" && (
                    <Combobox.Option
                    value={query}
                    className="search-manufacture__option"
                    >
                        Create "{query}"
                    </Combobox.Option>
                  ): (
                    filteredManufacturer.map((item) => (
                      <Combobox.Option 
                      key={item}
                      className={({active}) => 
                    `relative search-manufacturer__option ${active ?'bg-primary-blue text-white' : 'text-gray-900'} `

                    }
                      value={item}
                      >
                            {item}
                      </Combobox.Option>
                    ) )
                  )
                  }
                </Combobox.Options>
            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearcManufacturer
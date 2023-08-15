"use client"
import { SearcManufacturer } from '.'

import { useState } from 'react'
const SearchBar = () => {
    const [manufacture, setManufecture] = useState('');
    const handleSearch = () => {}
  return (
    <form className='searchbar'
        onSubmit={handleSearch}>
            <div className='searchbar__item'>
            <SearcManufacturer
            manufacture={manufacture}
            setManufacture ={setManufecture}
            />
            </div>
    </form>
  )
}

export default SearchBar
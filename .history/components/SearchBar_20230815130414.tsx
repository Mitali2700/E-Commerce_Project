"use client"
import { SearcManufacturer } from '.'

import {use}
const SearchBar = () => {
    const handleSearch = () => {}
  return (
    <form className='searchbar'
        onSubmit={handleSearch}>
            <div className='searchbar__item'>
            <SearcManufacturer />
            </div>
    </form>
  )
}

export default SearchBar
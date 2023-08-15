import React from 'react'
import { SearcManufacturer } from '.'

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
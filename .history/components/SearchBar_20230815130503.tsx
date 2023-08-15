"use client"
import { SearcManufacturer } from '.'

import { useState } from 'react'
const SearchBar = () => {
    const [manufacture]
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
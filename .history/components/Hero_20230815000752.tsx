"use client"

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll =() =>{}
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>We deliver more than your expectations !!</h1>
        <p className='hero__subtitle'>Online shopping is the better way of buying several items of your own choice at one place and get it delivered wherever you do live itself. </p>
        <CustomButton 
        title="Shop Now"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick= {handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero'
      </div>
    </div>
  )
}

export default Hero
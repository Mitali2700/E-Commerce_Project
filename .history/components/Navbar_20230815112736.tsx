import Link from 'next/link';
import Image from 'next/image'
import { CustomButton } from '.';
const Navbar = () => {
  return (
  <header className='w-full absolute z-10'>
     <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
      <Link href={"/"} className='flex justify-center items-center'>
        <Image src="/logo.png" width={"150"} height={"40"} alt="E-Comm Logo"/>
      </Link>
      <CustomButton
      text="Sign In" 
      btnType = "button"
      containerStyles='text-primary-blue rounded-full bg-white'
      />
     </nav>
  </header>
   
  )
}

export default Navbar

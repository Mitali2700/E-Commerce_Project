import Link from 'next/link';
import Image from 'next/image'
const Navbar = () => {
  return (
  <header className='w-full absolute z-10'>
     <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
      <Link href={"/"} className='flex justify-center items-center'>
        <Image src="/logo.png" alt="E-Comm Logo"  width={118}/>

      </Link>
     </nav>
  </header>
   
  )
}

export default Navbar
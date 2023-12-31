import Image from "next/image";
import Link from "next/link"
import { footerLinks } from "@/constants"
const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
          <div className='flex flex-col justify-start items-start gap-6'>
          <Image src="/logo.png" width={"150"} height={"40"} alt="E-Comm Logo"/>
          <p className="text-base text-gray-700">Feel Free 2 Shop <br/> All rights reserved &copy;</p>
          </div>
          <div className="footer__links">
            {footerLinks.map((link) =>
            <div key={link.title} className="footer__link">
              <h3>{link.title}</h3>
              {link.links.map((item) =>(
                <Link
                key={item.title}
                href={item}
                />
              ))}
              </div>
              )}
          </div>
      </div>
    </footer>
  )
}

export default Footer
import Link from 'next/link'
import React from 'react'

const Header = () => {
   return (
      <div>
         <Link href={"/"}>Home</Link>
         <Link href={"/about"}>About</Link>
         <Link href={"/contact"}>Contact</Link>
         <Link href={"/contact/newsletter"}>newsletter</Link>
      </div>
   )
}

export default Header
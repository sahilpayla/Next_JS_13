"use client"; 

import Link from 'next/link'
import React from 'react'


const Header = () => {
   console.log('hello ')
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
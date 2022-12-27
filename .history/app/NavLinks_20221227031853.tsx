'use client'
import React from 'react'
import { categories } from '../constants'
import {usePathname} from "next/navigation"
import NavLink from './NavLink'
function NavLinks() {

     const pathname = usePathname();

     const isActive = (path)

  return (
    <nav>
   {categories.map((category) => (
    <NavLink key={category} category={category} isActive={true} />

   ))}
    </nav>
  )
}

export default NavLinks
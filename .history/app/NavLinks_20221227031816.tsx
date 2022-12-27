'use client'
import React from 'react'
import { categories } from '../constants'
import {usePathname} from "next/navigation"
import NavLink from './NavLink'
function NavLinks() {

     const pathna
  return (
    <nav>
   {categories.map((category) => (
    <NavLink key={category} category={category} isActive={true} />

   ))}
    </nav>
  )
}

export default NavLinks
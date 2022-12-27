import React from 'react'
import { categories } from '../constants'
function NavLinks() {
  return (
    <nav>
   {categories.map((category) => (
    <NavLink key={category} category
   ))}
    </nav>
  )
}

export default NavLinks
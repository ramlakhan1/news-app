import React from 'react'
import { categories } from '../constants'
function NavLinks() {
  return (
    <nav>
   {categories.map((category) => (
    <NavLink key={category} cate
   ))}
    </nav>
  )
}

export default NavLinks
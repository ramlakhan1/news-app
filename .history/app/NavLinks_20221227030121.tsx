import React from 'react'
import { categories } from '../constants'
function NavLinks() {
  return (
    <nav>
   {categories.map((category) => (
    <NavLin key={category} category={category} />

   ))}
    </nav>
  )
}

export default NavLinks
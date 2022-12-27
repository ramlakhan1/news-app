import React from 'react'
import { categories } from '../constants'
function NavLinks() {
  return (
    <nav>
   {categories.map((category) => (
    <NavLink key={cate}
   ))}
    </nav>
  )
}

export default NavLinks
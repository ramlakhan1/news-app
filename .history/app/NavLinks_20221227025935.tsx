import React from 'react'
import { categories } from '../constants'
function NavLinks() {
  return (
    <nav>
   {categories.map((cate))}
    </nav>
  )
}

export default NavLinks
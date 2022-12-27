import React from 'react'
import { categories } from '../constants'
function NavLinks() {
  return (
    <nav>
   {categories.map((ca))}
    </nav>
  )
}

export default NavLinks
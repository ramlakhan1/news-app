import React from 'react'
import {Bars3Icon} from '@heroicons/react/24/solid';

function Header() {
  return (
    <header>
    <div className='grid grid-cols-3'>
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
    </div>
    </header>
  )
}

export default Header;
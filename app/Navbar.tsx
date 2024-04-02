import React from 'react'
import Link from 'next/link'
import { link } from 'fs'

const Navbar = () => {
    const links = [
        {label:'Dashboard', href:"/"},
        {label:'Issues', href:"/issue"}
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/" className='font-bold'>LOGO</Link>
        <ul className='flex space-x-6'>
            {links.map(link => <Link key={link.href} href={link.href} className='text-zinc-300 hover:text-zinc-800 transition-colors'>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar

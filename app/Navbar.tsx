'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const Navbar = () => {
    const currentPath = usePathname();

    const links = [
        {label:'Dashboard', href:"/"},
        {label:'Issues', href:"/Issues"}
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/" className='font-bold'>LOGO</Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <Link 
                key={link.href} 
                href={link.href} 
                className={classNames({
                    "text-zinc-300" : link.href === currentPath,
                    "text-zinc-500" : link.href !== currentPath,
                    "hover:text-zinc-800 transition-colors": true
                })}
            >
            {link.label}
            </Link>)}
        </ul>
    </nav>
  )
}

export default Navbar

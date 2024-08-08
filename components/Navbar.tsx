import React from 'react'
import { NavbarMenu } from './NavbarMenu'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className=' bg-white dark:bg-black '>
        <div className=' container  flex items-center justify-between py-4 sticky top-0 z-50 '>
            <div>
                <span className='flex items-baseline'>
                    <Image src='/logo.png' alt='logo' width={100} height={100} className='w-8 h-8'/>
                    <h1 className='text-saltpan-700 font-bold'>Nara.ph</h1>
                </span>
            </div>
            <NavbarMenu/>
            <div className='flex gap-2 items-center justify-center'>
            <button className='  border border-gray-500 rounded-lg py-1 px-4'>Contact</button>
            <ThemeSwitch/>
            </div>  
        </div> 
    </div>
  )
}

export default Navbar
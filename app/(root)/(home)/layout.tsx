
import Navbar from '@/components/Navbar'
import React from 'react'

const HomeLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className='h-screen text-gray-600 dark:text-gray-500 '>
        <Navbar/>
        {children}
    </section>
  )
}

export default HomeLayout
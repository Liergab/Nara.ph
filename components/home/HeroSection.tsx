import React from 'react'
import { GlobeComp } from '../GlobeComp'

const HeroSection = () => {
  return (
    <div className="custom-height w-full dark:bg-black bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.08] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className='container flex flex-col  items-center  justify-center relative z-10  w-full'>
            <div className='flex  flex-col items-center justify-center'>
                <p className="text-3xl sm:text-5xl font-bold text-center  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 max-w-5xl mt-[-300px]">
                    Transforming Ideas into Digital Excellence: Your Expert in Web and Mobile Development
                </p>
                <p className='max-w-xl text-center'>At Nara.ph, we are dedicated to transforming your digital presence with our comprehensive web and mobile solutions.</p>
            </div>
            <div className='w-full'>
                <GlobeComp/>
            </div>
        </div>
  </div>
  )
}

export default HeroSection
import React from 'react'
import "./styles.css"
import { NumberTicker } from './magicui/number-ticker'
import Image from 'next/image'

const SymphonyOfExperiences = () => {
  return (
    <div className='symexp font-c py-4 sm:py-16 md:p-12 text-white flex flex-col items-center justify-center'>
        <h1 className='mb-4 text-wrap text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>Symphony Of Experiences</h1>
        <div className="w-full h-full flex flex-col sm:flex-row items-center justify-between">
            <div className="sm:w-[50vw] overflow-hidden flex flex-col items-center justify-center em ">
                <Image src="https://utfs.io/f/3d7e218e-f420-446b-b3ce-f66833b46a65-bles7u.png" alt="Five Elementals" width={500} height={500} className='spin p-10  sm:p-4 ' />
            </div>
            <div className="sm:w-[50vw] mt-[-38px] sm:mt-0 flex flex-wrap gap-6 sm:gap-10 items-center justify-between lg:pr-20 p-8 text-lg sm:text-2xl xl:text-3xl font-serif">
                <div className="flex flex-col justify-center">
                    <NumberTicker value={6} className='text-5xl lg:text-7xl xl:text-8xl font-c' /> Years
                </div>
                <div className="flex flex-col justify-center">
                    <NumberTicker value={50} className='text-5xl lg:text-7xl xl:text-8xl font-c' /> Events
                </div>
                <div className="flex flex-col justify-center">
                    <NumberTicker value={35} className='text-5xl lg:text-7xl xl:text-8xl font-c' /> Partners
                </div>
                <div className="flex flex-col justify-center">
                    <NumberTicker value={6000} className='text-5xl lg:text-7xl xl:text-8xl font-c' /> Participants
                </div>
                <div className="flex flex-col justify-center">
                    <NumberTicker value={10000} className='text-5xl lg:text-7xl xl:text-8xl font-c' /> Footfall
                </div>
            </div>
        </div>
    </div>
  )
}

export default SymphonyOfExperiences

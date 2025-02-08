import React from 'react'
import "./styles.css"
import { NumberTicker } from './magicui/number-ticker'
import Image from 'next/image'

const SymphonyOfExperiences = () => {
  return (
    <div className='symexp font-c text-8xl p-8 text-white flex flex-col items-center justify-center'>
        <h1>Symphony Of Experiences</h1>
        <div className="w-full h-full flex">
            <div className="w-[50vw] overflow-hidden flex flex-col items-center justify-center em">
                <Image src="https://utfs.io/f/3d7e218e-f420-446b-b3ce-f66833b46a65-bles7u.png" alt="Five Elementals" width={500} height={500} className='spin' />
            </div>
            <div className="w-[50vw] h-full flex flex-wrap gap-8 justify-between pr-20">
                <div className="flex flex-col justify-center text-3xl font-serif">
                    <NumberTicker value={6} className='text-[7rem] mb-10 font-c' /> Years
                </div>
                <div className="flex flex-col justify-center text-3xl font-serif">
                    <NumberTicker value={50} className='text-[7rem] mb-10 font-c' /> Events
                </div>
                <div className="flex flex-col justify-center text-3xl font-serif">
                    <NumberTicker value={35} className='text-[7rem] mb-10 font-c' /> Partners
                </div>
                <div className="flex flex-col justify-center text-3xl font-serif">
                    <NumberTicker value={6000} className='text-[7rem] mb-10 font-c' /> Participants
                </div>
                <div className="flex flex-col justify-center text-3xl font-serif">
                    <NumberTicker value={10000} className='text-[7rem] mb-10 font-c' /> Footfall
                </div>
            </div>
        </div>
    </div>
  )
}

export default SymphonyOfExperiences




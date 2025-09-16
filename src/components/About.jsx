import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <>
        <div id='about' className=' mx-auto max-w-7xl px-6 py-20'>
            <div className='grid gird-cols-1 md:grid-cols-2 gap-12 items-center'>
                {/* profile image */}
                <div className='reveal  justify-center'>
                    <div className='rounded-[36px] border border-white/50 bg-white/60 p-4 backdrop-blur-xl shadow-xl hover:shadow-2xl transition'>
                        <div className='blob-mask overflow-hidden rounded-[28px]'>
                            <img src={assets.profile} className='w-full h-[420px] object-cover transform hover:scale-105 transition duration-500' alt="about" />
                        </div>
                    </div>
                </div>
                <div className='reveal'>
                    <p className='text-sm font-semibold tracking-wide text-brand-700/90 uppercase'>ABOUT ME</p>
                    <h2 className='mt-3 font-display text-4xl md:text-5xl font-bold leading-tight'>Designer-developer <br/> hybrid with a love for micro-interactions</h2>
                    <p className='mt-4 text-gray-600'>
                        I craft interfaces that feel alibe but stay fast and accessible. My stack inlcude 
                        <span className='font-semibold'>React</span>,{""}
                        <span className='font-semibold'>TypeScript</span>,{""}
                        <span className='font-semibold'>Tailwind</span>,{""}
                        <span className='font-semibold'>Framer Motion</span>, and a sprinkle of Node.js for APIs.
                    </p>
                    {/* Badges */}
                    <div className='mt-8 flex flex-wrap gap-3 text-sm'>
                        <span className='rounded-full bg-emerald-100 px-4 py-1.5 text-emerald-600 font-medium shadow-sm'>Accessibility</span>
                        <span className='rounded-full bg-sky-100 px-4 py-1.5 text-sky-700 font-medium shadow-sm'>Performance</span>
                        <span className='rounded-full bg-amber-100 px-4 py-1.5 text-amber-700 font-medium shadow-sm'>Design Systems</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About

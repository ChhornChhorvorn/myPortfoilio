import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <>
        <div id='about' className='mx-auto max-w-7xl px-4 py-20'>
            <div className='grid gird-cols-1 md:grid-cols-2 pag-12 items-center'>
                <div className='reveal'>
                    <div className='rounded-[36px] border border-white/50 bg-white/60 p-4 backdrop-blur-xl shadow-xl'>
                        <div className='blob-mask overflow-hidden'>
                            <img src={assets.profile} className='w-full h-[420px] object-cover' alt="about" />
                        </div>
                    </div>
                </div>
                <div className='reveal'>
                    <p className='text-sm font-semibold tracking-wide text-brand-700/90'>ABOUT ME</p>
                    <h2 className='mt-2 font-display text-3xl md:text-4xl font-bold'>Designer-developer hybrid with a love for micro-interactions</h2>
                    <p className='mt-4 text-gray-600'>I craft interfaces that feel alibe but stay fast and accessible. My stack: React, TypeScript, Tailwind, Framer Motion, and a sprinkle of Node for APIS.</p>
                    <div className='mt-6 flex flex-wrap gap-2 text-xs'>
                        <span className='rounded-full bg-emerald-100 px-3 py-1 text-emerald-500'>Accessibility</span>
                        <span className='rounded-full bg-sky-100 px-3 py-1 text-sky-700'>Performance</span>
                        <span className='rounded-full bg-amber-100 px-3 py-1 text-amber-700'>Design Systems</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About

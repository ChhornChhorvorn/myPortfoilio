import React from 'react'
import { assets } from '../assets/assets'
const Hero = () => {
  return (
    <>
    <div className='relative mx-auto max-w-7xl px-4 pt-16 md:pt-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <div className='reveal'>
            <p className='text-sm font-semibold tracking-wide text-brand-700/90'>AVAILABLE FOR WORK</p>
            <h1 className='mt-3 font-display text-5xl md:text-6xl font-extrabold leading-tight'>
                Building delightful<span className='bg-gradient-to-r from-brand-600 to-fuchsia-500 bg-clip-text text-transparent'>Web experiences</span>
            </h1>
            <p className='mt-5 text-gray-600 text-lg max-w-xl'>I'm a Frontend developer & UI designer crafting performat, interfaces with React, Tailwind, and a taste for micro-interactions.</p>
            <div className='mt-8 flex flex-wrap items-center gap-3'>
                <a href="#projects" className='rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-500 px-6 py-3 text-white font-semibold shadow hover:translate-y-[-1px] transition'>View Projects</a>
                <a href="#contact" className='rounded-full border border-brand-500/40 bg-white/50 backdrop-blur px-6 py-3 font-semibold text-brand-700 hover:border-brand-600/60 transition'>Contact</a>
            </div>
            <div className='mt-8 flex items-center gap-6 text-sm text-gray-600'>
                <div className='flex items-center gap-2'><span className='inline-block h-2 w-2 rounded-full bg-emerald-500'></span>Available now</div>
                <div>Based in Phnom Penh</div>
            </div>
        </div>
        <div className='relative h-[420px] md:h-[520px] reveal'>
            {/* Glass card background */}
            <div className='absolute inset-0 rounded-[36px]'></div>
            <div className='relative z-10 flex h-full items-center justify-center p-6'>
                <div className='relative w-full max-w-sm aspect-[3/4] rounded-[40%] overflow-hidden shadow-2xl'>
                    {/* gradient border glow */}
                    <div className='absolute inset-0 rounded-[40%] blur-2xl'></div>
                    <img src={assets.profile} alt="profile" className='relative z-10 h-full w-full object-cover rounded-[40%] animate-float' />
                </div>
            </div>
            {/* floating chips */}
            {/* <div className='pointer-events-none absolute -top-3 -left-3 rounded-2xl bg-white/70 backdrop-blur py-1 text-xs font-semibold shadow'>React</div>
            <div className='pointer-events-none absolute top-6 -right-4 rounded-2xl bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold shadow'>Tailwind</div>
            <div className='pointer-events-none absolute -bottom-3 left-10 rounded-2xl bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold shadow'>Figma</div> */}
        </div>
      </div>
    </div>
    <div id='projects' className='mt-24'>
        <div className='mx-auto max-w-7xl px-4 py-16'>
            <div className='reveal flex items-end justify-between gap-6'>
                <div>
                    <h2 className='font-display '>Featured Projects</h2>
                    <p className='mt-2 text-gray-600'>A selection of recent work. More on request.</p>
                </div>
                <a href="#" className='hidden sm:inline-block rounded-full border border-brand-500/40 bg-white/50 px-4 py-2 text-sm font-semibold text-brand-700'>See all</a>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Card 1 */}
                <article className='reveal group rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow hover:shadow-2xl transition overflow-hidden'>
                    <div className='relative'>
                        <img src={assets.web_app} alt="Project 1" className='h-64 w-full object-cover'/>
                        <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition'></div>
                        <div className='absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition'>
                            <span className='inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold'>Web App</span>
                        </div>
                    </div>
                    <div className='p-6 md:p-8'>
                        <h3 className='font-semibold text-2xl'>Analytics Dashbboard</h3>
                        <p className='mt-2 text-gray-600'>Modular, responsive dashboard built with React + Tailwind, focusing on accessibility and performance.</p>
                        <div className='mt-4 flex flex-wrap gap-2 text-xs'>
                            <span className='rounded-full bg-brand-100 px-3 py-1 text-brand-700'>React</span>
                            <span className='rounded-full bg-brand-100 px-3 py-1 text-brand-700'>Tailwind</span>
                            <span className='rounded-full bg-brand-100 px-3 py-1 text-brand-700'>Vite</span>
                        </div>
                        <div className='mt-6 flex items-center gap-4'>
                            <a href="#" className='rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-500 px-5 py-2 text-white text-sm font-semibold'>Live Demo</a>
                            <a href="#" className='text-brand-700 font-semibold text-sm'>Case Study →</a>
                        </div>
                    </div>
                </article>
                {/* Card 2 */}
                <article className='reveal group rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow hover:shadow-2xl transition overflow-hidden'>
                    <div className='relative'>
                        <img src={assets.e_commerce } alt="project 2"  className='h-64 w-full object-cover'/>
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition'></div>
                        <div className='absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition'>
                            <span className='inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold'>E-commerce</span>
                        </div>
                    </div>
                    <div className='p-6 md:p-8'>
                        <h3 className='font-semibold text-2xl'>Minimal Storefront</h3>
                        <p className='mt-2 text-gray-600'>Headless storefront with cart, checkout flow, and CMS-driven product management</p>
                        <div className='mt-4 flex flex-wrap gap-2 text-xs'>
                            <span className='rounded-full bg-brand-100 px-3 py-1 text-brand-700'>Next.js</span>
                            <span className='rounded-full bg-brand-100 px-3 py-1 text-brand-700'>Stripe</span>
                            <span className='rounded-full bg-brand-100 px-3 py-1 text-brand-700'>CMS</span>
                        </div>
                        <div className='mt-6 flex items-center gap-4'>
                            <a href="#" className='rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-500 px-5 py-2 text-white text-sm font-semibold'>Live Demo</a>
                            <a href="#" className='text-brand-700 font-semibold text-sm'>Case Study →</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero

import React from 'react'
import vornlogo from'../assets/vornlogo.png'
const Navbar = () => {
  return (
    <div className="sticky top-4 z-40">
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex items-center justify-between rounded-2xl border border-white/30 bg-white/60 backdrop-blur-xl shadow-lg px-6 py-4'>
          <a href="#" className='flex items-center gap-2'>
            <div className='h-8 w-12 rounded-xl'><img src={vornlogo} /></div>
            {/* <span className='font-display text-xl font-bold bg-gradient-to-r from-brand-700 to-fuchsia-600 bg-clip-text text-transparent'>Chhorvorn</span> */}
          </a>
          <nav className='hidden md:flex items-center gap-6 text-sm font-medium'>
            <a href="#project" className='hover:text-brand-700'>Project</a>
            <a href="#about" className='hover:text-brand-700'>About</a>
            <a href="#skill" className='hover:text-brand-700'>Skills</a>
            <a href="#contact" className='hover:text-brand-700'>Contact</a>
          </nav>
        <a href="#contact" className='hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-500 px-4 py-2 text-white text-sm font-semibold shadow hover:opacity-95'>Hire Me</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

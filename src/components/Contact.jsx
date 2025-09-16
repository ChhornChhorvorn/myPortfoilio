import React from 'react'

const Contact = () => {
  return (
    <>
        <div id='contact' className='bg-gradient-to-b form-brand-50/60 to-transparent py-20'>
            <div className='mx-auto ma-w-7xl px-4'>
                <div className='reveal mx-auto max-w-xl rounded-[28px] border border-white/60 bg-white/70 p-8 backdrop-blur-xl shadow-xl'>
                    <h2 className='font-display text-3xl font-bold text-center'>Let's work together</h2>
                    <p className='mt-2 text-center text-gray-600'>Tell me about your project and timeline</p>
                    <form className='mt-8 grid grid-cols-1 gap-4'>
                        <input type="text" className='rounded-2xl border border-gray-200/70 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-400' placeholder='Your Name'/>
                        <input type="email" className='rounded-2xl border border-gray-200/70 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-400' placeholder='Email'/>
                        <textarea row="5" className='rounded-2xl border border-gray-200/70 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-400' placeholder='Project details'></textarea>
                        <button className='mt-2 rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-500 px-6 py-3 text-white font-semibold shadow'>Send Message</button>
                    </form>
                    <div className='mt-6 flex justify-center gap-4 text-sm text-gray-600'>
                        <a href="#" className='hover:text-brand-700'>GitHub</a>
                        <a href="#" className='hover:text-brand-700'>LinkedIn</a>
                        <a href="#" className='hover:text-brand-700'>Dribbble</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact

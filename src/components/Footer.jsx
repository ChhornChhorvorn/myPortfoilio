import React, { useEffect, useRef } from 'react'

const Footer = () => {
    const yearRef = useRef(null);
    useEffect(() =>{
        if(yearRef.current){
            yearRef.current.textContent = new Date().getFullYear();
        }
    }, []);
    const scrollTop = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };
    //intersection
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.12});
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return (
    <>
        <div className='bg-gray-900 text-gray-300'>
            <div className='mx-auto max-w-7xl px-4 py-8 flex items-center justify-between'>
                <p className='text-sm'>© <span ref={yearRef}></span> ChhornChhorvorn. All rights reserved.</p>
                <button id='toTop' className='h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center' onClick={scrollTop}>↑</button>
            </div>
        </div> 
    </>
  )
}

export default Footer

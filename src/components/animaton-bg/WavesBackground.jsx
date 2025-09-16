import React from 'react'
import'./animation_bgWave.css'
const WavesBackground = () => {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-blue-50 via-indigo-100 to-white'>
        {/* wave layer 1 */}
        <svg 
          className='absolute bottom-0 w-[200%] h-64 animate-wave-slow'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
        >
          <path 
            fill='#60A5FA'   
            fillOpacity="0.4"
            d='M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,101.3C672,96,768,128,864,160C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L0,320z'
          />
        </svg>
        {/* wave layer 2 */}
        <svg
          className='absolute bottom-0 w-[200%] h-64 animate-wave-medium'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
        >
          <path
            fill='#3B82F6' 
            fillOpacity="0.3"
            d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L0,320Z"
          />
        </svg>
        {/* wave layer 3 */}
        <svg
          className='absolute bottom-0 w-[200%] h-64 animate-wave-fast'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
        >
          <path
            fill='#2563EB' 
            fillOpacity="0.2"
            d="M0,256L60,245.3C120,235,240,213,360,208C480,203,600,213,720,224C840,235,960,245,1080,218.7C1200,192,1320,128,1380,96L1440,64L1440,320L0,320Z"
          />
        </svg>
    </div>
  )
}

export default WavesBackground

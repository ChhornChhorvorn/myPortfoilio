import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import useScrollReveal from './hooks/useScrollReveal';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import WavesBackground from'./components/animaton-bg/WavesBackground'
import ParticlesBackground from './components/animaton-bg/ParticlesBackground';
function App() {
  useScrollReveal('.reveal');
  return (
    <div className="bg-gradient-to-b from-white via-brand-50/50 to-white text-gray-900 font-inter selection:bg-brand-500/20">
      <div aria-hidden className='fixed inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-20 -left-20 w-[420px] h-[420px] bg-purple-400/30 rounded-full blur-3xl animate-glow'></div>
        <div className='absolute top-40 -right-10 w-[520px] h-[520px] bg-indigo-400/30 rounded-full blur-3xl animate-glow'></div>
        {/* <WavesBackground/> */}
        <ParticlesBackground/>
      </div>
          <Navbar/>
          <Hero/>
          <About/>
          <Skills/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
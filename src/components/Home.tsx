import { ChevronDown } from 'lucide-react';

interface HomeProps {
  isActive: boolean;
  setActiveSection: (section: string) => void;
}

export default function Home({ isActive, setActiveSection }: HomeProps) {
  if (!isActive) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <iframe
  className="absolute inset-0 w-full h-full opacity-80 transform scale-[1.18]"
  style={{ transformOrigin: 'center' }}
  src="https://www.youtube-nocookie.com/embed/fhNM9SN7ooE?autoplay=1&mute=1&playsinline=1&controls=0&modestbranding=1&rel=0&fs=0&loop=1&playlist=fhNM9SN7ooE&iv_load_policy=3&disablekb=1"
  title="YouTube background video"
  frameBorder="0"
  allow="autoplay"
  referrerPolicy="strict-origin-when-cross-origin"
/>

  <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/60 to-transparent" />
</div>


      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-12 animate-fadeIn flex flex-col items-center">
          <img
            src="/sri_logo-removebg.png"
            alt="Sakthi Forgetech Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain mb-8 drop-shadow-2xl"
          />
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        <h1
          className="text-6xl md:text-6xl font-extrabold mb-6 animate-slideUp 
                     bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 
                     bg-clip-text text-transparent font-serif tracking-wide drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
        >
          SRI SAKTHI FORGETECH
        </h1>

        <h2 className="text-3xl md:text-5xl text-blue-300 font-serif italic mb-8 animate-slideUp delay-200">
          Divine Temple Manufacturers
        </h2>

        <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn delay-400 font-light">
          Crafting sacred temple statues with devotion, precision, and traditional artistry for over decades
        </p>

        <div className="animate-fadeIn delay-600">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeIn delay-800">
          <button
            onClick={() => setActiveSection('gallery')}
            className="px-10 py-4 bg-blue-600 text-white font-bold tracking-wider border-2 border-blue-700 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            VIEW OUR WORK
          </button>
          <button
            onClick={() => setActiveSection('contact')}
            className="px-10 py-4 border-2 border-blue-500 text-blue-400 font-bold tracking-wider hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            GET IN TOUCH
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown size={40} className="text-blue-500 mx-auto" />
        </div>
      </div>
    </section>
  );
}

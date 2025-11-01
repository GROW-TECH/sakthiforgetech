import { ChevronDown } from 'lucide-react';

interface HomeProps {
  isActive: boolean;
}

export default function Home({ isActive }: HomeProps) {
  if (!isActive) return null;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-30"
        >
          <source
            src="/Mini Temple Gopuram Part-2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-12 animate-fadeIn flex flex-col items-center">
          <img
            src="/nnu.png"
            alt="Sakthi Forgetech Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain mb-8 drop-shadow-2xl"
          />
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-slideUp">
          SAKTHI FORGETECH
        </h1>

        <h2 className="text-3xl md:text-5xl text-blue-400 font-serif italic mb-8 animate-slideUp delay-200">
          Divine Temple Statue Manufacturers
        </h2>

        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn delay-400">
          Crafting sacred temple statues with devotion, precision, and traditional artistry for over decades
        </p>

        <div className="animate-fadeIn delay-600">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeIn delay-800">
          <button className="px-10 py-4 bg-blue-600 text-white font-bold tracking-wider border-2 border-blue-700 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
            VIEW OUR WORK
          </button>
          <button className="px-10 py-4 border-2 border-blue-500 text-blue-400 font-bold tracking-wider hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
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

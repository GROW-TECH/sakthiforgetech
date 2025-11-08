import React, { useState } from 'react';

interface GalleryProps {
  isActive: boolean;
  setActiveSection: (section: string) => void;
  setSelectedTitle: (title: string) => void;
}

export default function Gallery({ isActive, setActiveSection, setSelectedTitle }: GalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!isActive) return null;

  const galleryItems = [
    { title: "Temple Gopuram", image: "/gopuram/1.jpeg" },
    { title: "Temple Columns", image: "/columns/1.jpeg" },
    { title: "Temple Idols", image: "/idol/1.jpeg" },
    { title: "Crafted Excellence", image: "/crafted/2.jpeg" },
    { title: "Temple Architecture", image: "/architect/1.jpeg" },
    { title: "Temple Artworks", image: "/art/2.jpeg" },
    { title: "Concept Designs", image: "/concept/1.jpeg" },
  ];

  const videoSrc = '/crafted/1.mp4'; 
  const videoPoster = '/videos/temple-poster.jpg'; // optional poster image

  const handleImageClick = (title: string) => {
    setSelectedTitle(title);
    setActiveSection('Overview');
  };

  

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Gallery</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of divine temple statues, each crafted with devotion and precision
          </p>
        </div>

        <div className="mb-12">
          <div
            role="button"
            tabIndex={0}
            className="relative group cursor-pointer w-full rounded-2xl overflow-hidden border-4 border-blue-800/50 bg-slate-900"
          >
            <video
              src={videoSrc}
              poster={videoPoster}
              controls
              className="w-full h-[420px] md:h-[520px] object-cover bg-black"
            />

            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-6 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <h3 className="text-3xl md:text-4xl font-bold tracking-wide text-white"></h3>
              <p className="text-slate-200 mt-3"></p>
            </div>

            {/* Play icon in corner (purely decorative because we show controls) */}
            <div className="absolute bottom-4 right-4 bg-black/40 px-3 py-2 rounded-full text-white text-sm">Play</div>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleImageClick(item.title)}
            >
              <div className="relative h-96 overflow-hidden border-4 border-blue-800/50 bg-slate-900 hover:border-blue-500 transition-all duration-300 rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex flex-col items-center justify-end p-6 transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-80'
                  }`}
                >
                  <div className="mb-4 w-16 h-1 bg-blue-500"></div>
                  <h3 className="text-2xl font-bold tracking-wide mb-3 text-white">{item.title}</h3>
                  <div className="mt-4 w-16 h-1 bg-blue-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-300 text-lg mb-6">Each piece is a testament to our commitment to excellence</p>
          <button
            onClick={() => setActiveSection('contact')}
            className="px-10 py-4 bg-blue-600 text-white font-bold tracking-wider border-2 border-blue-700 hover:bg-blue-700 transition-all duration-300 rounded-md"
          >
            REQUEST CATALOG
          </button>
        </div>
      </div>
    </section>
  );
}

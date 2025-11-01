import { useState } from 'react';

interface GalleryProps {
  isActive: boolean;
}

export default function Gallery({ isActive }: GalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!isActive) return null;

  const galleryItems = [
    {
      title: 'Temple Gopuram',
      image: '/WhatsApp Image 2025-10-23 at 09.39.48.jpeg',
    },
    {
      title: 'Divine Sculpture',
      image: '/WhatsApp Image 2025-10-23 at 09.39.49.jpeg',
    },
    {
      title: 'Sacred Artwork',
      image: '/WhatsApp Image 2025-10-23 at 09.39.50.jpeg',
    },
    {
      title: 'Temple Architecture',
      image: '/WhatsApp Image 2025-10-23 at 09.39.50 (1).jpeg',
    },
    {
      title: 'Crafted Excellence',
      image: '/WhatsApp Image 2025-10-23 at 09.39.51 (1).jpeg',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-96 overflow-hidden border-4 border-blue-800/50 bg-slate-900 hover:border-blue-500 transition-all duration-300">
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
          <button className="px-10 py-4 bg-blue-600 text-white font-bold tracking-wider border-2 border-blue-700 hover:bg-blue-700 transition-all duration-300">
            REQUEST CATALOG
          </button>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Box, Layers, MapPin, Award } from 'lucide-react';

interface AboutUsProps {
  isActive: boolean;
}

export default function AboutUs({ isActive }: AboutUsProps) {
  if (!isActive) return null;

  // timeline items
  const items = [
    { year: '1989 – 1995', text: 'Began with temple and building construction using sand and bricks — establishing our foundation in traditional craftsmanship.' },
    { year: '1996 – 2005', text: 'Introduced granite, marble, and tiles for superior precision and quality.' },
    { year: '2006 – 2010', text: 'Expanded into sandstone, wood, and metal structures for artistic versatility.' },
    { year: '2011 – 2020', text: 'Integrated CNC machining, bringing automation and high accuracy to our work.' },
  ];

  // carousel state
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    autoplayRef.current = window.setInterval(() => {
      if (isHovering.current) return;
      setActive((s) => (s + 1) % items.length);
    }, 4000);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  useEffect(() => {
    const node = cardRefs.current[active];
    const container = containerRef.current;
    if (node && container) {
      const containerRect = container.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      const offset = nodeRect.left - containerRect.left - (containerRect.width / 2 - nodeRect.width / 2);
      container.scrollTo({ left: container.scrollLeft + offset, behavior: 'smooth' });
    }
  }, [active]);

  // tabs
  const tabs = [
    {
      id: 'vision',
      title: 'Vision & Mission',
      Icon: Award,
      content: (
        <>
          <h4 className="text-lg font-semibold text-amber-200">Our Vision</h4>
          <p className="text-slate-300 mt-2">
            To become a global leader in architectural customization, integrating ancient craftsmanship with cutting-edge technology, and setting new benchmarks in design quality, creativity, and sustainability.
          </p>

          <h4 className="text-lg font-semibold text-amber-200 mt-4">🎯 Our Mission</h4>
          <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
            <li>To preserve the beauty of traditional construction through modern techniques.</li>
            <li>To deliver customer-inspired designs that blend culture and innovation.</li>
            <li>To enhance our expertise through continuous learning and digital advancement.</li>
            <li>To ensure unmatched precision, quality, and client satisfaction in every project.</li>
          </ul>

          <h4 className="text-lg font-semibold text-amber-200 mt-4">🚀 Future Goals</h4>
          <p className="text-slate-300 mt-2">We are expanding toward advanced material applications — including composites and automated fabrication — to create the next generation of architectural and industrial masterpieces.</p>
        </>
      ),
    },
    {
      id: 'capabilities',
      title: 'Our Capabilities',
      Icon: Box,
      content: (
        <>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>3 & 4 Axis CNC Engraving Systems</li>
            <li>CAD/CAM Design and Simulation</li>
            <li>Surface Finishing and Polishing Expertise</li>
            <li>Digital Prototyping and 3D Visualization</li>
            <li>Structural and Aesthetic Integration</li>
          </ul>
          <p className="mt-3 text-slate-300">Our advanced setup allows us to deliver precision, consistency, and creative freedom for every client.</p>
        </>
      ),
    },
    {
      id: 'materials',
      title: 'Materials',
      Icon: Layers,
      content: (
        <>
          <p className="text-slate-300">We work with:</p>
          <p className="mt-2 font-semibold text-amber-200">Granite • Marble • Sandstone • Wood • Metal • Tiles</p>
          <p className="mt-3 text-slate-300">Each material is handled with deep expertise to achieve the perfect balance of strength, detail, and visual harmony.</p>
        </>
      ),
    },
    {
      id: 'signature',
      title: 'Signature Works',
      Icon: MapPin,
      content: (
        <>
          <p className="text-slate-300">Our craftsmanship can be found across South India — in temple towers, sculptures, and custom architectural spaces that blend divine design with modern technique.</p>
          <p className="mt-3 text-slate-300">We also undertake heritage restoration projects and customized engravings, each tailored to our client’s imagination and requirements.</p>
        </>
      ),
    },
    {
      id: 'why',
      title: 'Why Choose Us',
      Icon: MapPin,
      content: (
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>35+ Years of Proven Expertise</li>
          <li>Blend of Traditional Artistry & Modern Engineering</li>
          <li>Skilled Artisans, Designers & CNC Programmers</li>
          <li>100% Custom Design Approach</li>
          <li>Precision, Quality & Timely Delivery</li>
          <li>Transparent and Client-Centered Process</li>
        </ul>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeIndex = tabs.findIndex((t) => t.id === activeTab);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setActiveTab(tabs[(activeIndex + 1) % tabs.length].id);
      if (e.key === 'ArrowLeft') setActiveTab(tabs[(activeIndex - 1 + tabs.length) % tabs.length].id);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, tabs]);

  // Optionally allow user to pause/play video (local state)
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {}); // ignore play promise errors
      setIsPaused(false);
    } else {
      v.pause();
      setIsPaused(true);
    }
  };

  return (
    <section className="relative min-h-screen text-gray-100 px-6 py-20">
      {/* Background video (replace src & poster with your own files) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/about-poster.jpg" // optional fallback image (replace or remove)
      >
        {/* Replace this path with your actual video path or external URL */}
        <source src="/DJI_0007_2.mp4" type="video/mp4" />
        {/* You can add webm or other formats if needed */}
        Your browser does not support the video tag.
      </video>

      {/* dark overlay for better contrast */}
      <div aria-hidden className="absolute inset-0 -z-5 bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/70" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">ABOUT <span className="text-amber-400">US</span></h1>
          <p className="mt-3 text-lg text-slate-300">Blending Heritage with Technology for Over <span className="font-semibold">35 Years</span></p>
        </header>

        {/* Who We Are */}
        <article className="bg-slate-900/60 backdrop-blur-sm border border-amber-900/30 p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-amber-300 mb-3">🏛 Who We Are</h2>
          <p className="text-slate-200 leading-relaxed">
            For over three and a half decades, Sri Sakthi Forge Tech has been a trusted name in temple construction and architectural craftsmanship. From our humble beginnings, we have continuously evolved — transforming traditional artistry into a benchmark of precision, innovation, and quality. Today, we stand at the intersection of heritage and technology, blending timeless craftsmanship with modern engineering and advanced digital design. Our purpose is clear — to turn imagination into enduring creations, delivering structures that embody accuracy, durability, and timeless elegance.
          </p>
        </article>

        {/* What We Do */}
        <article className="bg-slate-900/60 backdrop-blur-sm border border-amber-900/30 p-8 rounded-xl mb-10">
          <h2 className="text-2xl font-bold text-amber-300 mb-3">⚒ What We Do</h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            We specialise in custom temple construction, stone engraving, and architectural design solutions that merge spiritual tradition with engineering excellence.
          </p>

          <ul className="grid sm:grid-cols-2 gap-2 list-none text-slate-300">
            <li>• Temple Towers & Sculptural Work</li>
            <li>• Granite, Marble, Sandstone, Wood, and Metal Fabrication</li>
            <li>• 3-Axis & 4-Axis CNC Machining for Precision Engraving</li>
            <li>• Customised CAD/CAM Design and 3D Modelling</li>
            <li>• Architectural Interiors & Restoration Projects</li>
          </ul>

          <p className="mt-4 text-slate-300 italic">We use cutting-edge tools like SolidWorks, Fusion 360, ArtCAM, and HongFa to ensure every detail aligns with your vision.</p>

          <p className="mt-4 text-slate-200 font-semibold">“What our customer thinks, we create.”</p>
        </article>

        {/* Tabs panel */}
        <section className="mb-10">
          <div className="bg-slate-900/60 backdrop-blur-sm border border-amber-900/30 p-6 rounded-xl">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* tabs list */}
              <nav className="w-full lg:w-1/4 flex lg:flex-col gap-3 overflow-x-auto" aria-label="About tabs">
                {tabs.map((t, i) => {
                  const Icon = t.Icon as any;
                  return (
                    <button
                      key={t.id}
                      ref={(el) => (tabRefs.current[i] = el)}
                      onClick={() => setActiveTab(t.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg w-full lg:w-auto transition-all duration-200 ${
                        activeTab === t.id ? 'bg-amber-500/10 ring-1 ring-amber-400' : 'hover:bg-slate-800/40'
                      }`}
                      aria-pressed={activeTab === t.id}
                    >
                      <span className={`p-2 rounded-full ${activeTab === t.id ? 'bg-amber-500 text-slate-900' : 'bg-amber-700/30 text-amber-200'}`}>
                        <Icon size={18} />
                      </span>
                      <span className="text-slate-200 font-medium">{t.title}</span>
                    </button>
                  );
                })}
              </nav>

              {/* tabs content */}
              <div className="flex-1 bg-gradient-to-b from-slate-800/50 to-slate-900/40 border border-amber-900/10 p-6 rounded-lg">
                <div className="animate-fadeIn">
                  {tabs.map((t) => (
                    <div key={t.id} className={`${activeTab === t.id ? 'block' : 'hidden'}`}>
                      <h3 className="text-xl font-bold text-amber-200 mb-3">{t.title}</h3>
                      <div className="text-slate-300 leading-relaxed">{t.content}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel-style horizontal timeline */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-amber-300 mb-6">🧱 Our Journey — 35 Years of Excellence</h3>

          <div className="w-full bg-slate-900/50 border border-amber-900/10 p-6 rounded-2xl">
            <div
              ref={containerRef}
              onMouseEnter={() => (isHovering.current = true)}
              onMouseLeave={() => (isHovering.current = false)}
              className="flex gap-6 overflow-x-auto no-scrollbar py-4 scroll-smooth"
              style={{ scrollbarWidth: 'none' as any }}
            >
              {items.map((it, idx) => (
                <div
                  ref={(el) => (cardRefs.current[idx] = el)}
                  key={it.year}
                  className={`min-w-[280px] md:min-w-[320px] lg:min-w-[340px] bg-gradient-to-b from-slate-800/60 to-slate-900/40 border ${active === idx ? 'border-amber-400 shadow-2xl scale-100' : 'border-amber-900/20 shadow-md scale-95'} p-6 rounded-2xl transform transition-all duration-500`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-semibold text-slate-900">{idx + 1}</div>
                    <div>
                      <div className="text-lg font-semibold text-amber-200">{it.year}</div>
                      <div className="text-xs text-amber-300 uppercase tracking-wide">Milestone</div>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{it.text}</p>
                </div>
              ))}
            </div>

            {/* Interactive dots */}
            <div className="mt-6 flex justify-center gap-3">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${active === i ? 'bg-amber-400 scale-110' : 'bg-amber-700/60'}`}
                />
              ))}
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-400 text-sm mt-6">
          © {new Date().getFullYear()} Sri Sakthi Forge Tech — Blending Heritage with Technology
        </footer>
      </div>

      
     

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 300ms ease both; }
      `}</style>
    </section>
  );
}

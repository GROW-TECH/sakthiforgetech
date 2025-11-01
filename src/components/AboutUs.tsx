import { Award, Heart, Hammer, Users } from 'lucide-react';

interface AboutUsProps {
  isActive: boolean;
}

export default function AboutUs({ isActive }: AboutUsProps) {
  if (!isActive) return null;

  const features = [
    {
      icon: Heart,
      title: 'Devotion',
      description: 'Each statue crafted with spiritual dedication and reverence',
    },
    {
      icon: Hammer,
      title: 'Craftsmanship',
      description: 'Traditional techniques passed down through generations',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Finest materials and meticulous attention to detail',
    },
    {
      icon: Users,
      title: 'Experience',
      description: 'Decades of expertise in temple statue manufacturing',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-blue-400">Us</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Sakthi Forgetech is a premier manufacturer of divine temple statues, combining traditional artistry with modern precision. Our skilled artisans create sacred idols that inspire devotion and bring spiritual beauty to temples across the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-slate-900/70 backdrop-blur-sm border border-blue-800/30 p-8 text-center hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-blue-500 rounded-full mb-6 group-hover:bg-blue-600 transition-all duration-300">
                <feature.icon size={32} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900/70 backdrop-blur-sm border border-blue-800/30 p-10 text-center">
          <h3 className="text-3xl font-bold text-blue-400 mb-4">Our Mission</h3>
          <p className="text-xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
            To preserve and advance the sacred art of temple statue making, creating divine sculptures that serve as focal points for worship and spiritual connection. Every piece we create carries the weight of tradition and the promise of devotion.
          </p>
        </div>
      </div>
    </section>
  );
}

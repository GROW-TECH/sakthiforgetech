import { Check } from 'lucide-react';

interface ProductsProps {
  isActive: boolean;
}

export default function Products({ isActive }: ProductsProps) {
  if (!isActive) return null;

  const products = [
    {
      title: 'Bronze Temple Statues',
      features: [
        'Traditional Panchaloha bronze',
        'Customizable sizes from 1ft to 20ft',
        'Intricate detailing and finishing',
        'Weather-resistant construction',
      ],
    },
    {
      title: 'Granite Deities',
      features: [
        'Premium granite material',
        'Hand-carved by master artisans',
        'Suitable for outdoor installation',
        'Traditional iconography',
      ],
    },
    {
      title: 'Marble Idols',
      features: [
        'Pure white marble',
        'Fine detail work',
        'Indoor and outdoor options',
        'Custom designs available',
      ],
    },
    {
      title: 'Brass Sculptures',
      features: [
        'High-quality brass',
        'Traditional temple designs',
        'Various deity options',
        'Polished to perfection',
      ],
    },
    {
      title: 'Composite Statues',
      features: [
        'Fiber reinforced polymer',
        'Lightweight yet durable',
        'Cost-effective solution',
        'Quick installation',
      ],
    },
    {
      title: 'Custom Commissions',
      features: [
        'Bespoke designs',
        'Any deity or size',
        'Collaborative design process',
        'Expert craftsmanship',
      ],
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
            Our <span className="text-blue-400">Products</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            We specialize in manufacturing divine temple statues in various materials and sizes, each crafted with devotion and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="bg-slate-900/70 backdrop-blur-sm border border-blue-800/30 p-8 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6 border-b border-blue-800/50 pb-4">
                {product.title}
              </h3>
              <ul className="space-y-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-200">
                    <Check size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-800/20 border border-blue-500 p-8 inline-block">
            <p className="text-2xl text-white font-bold mb-2">Need a Custom Design?</p>
            <p className="text-slate-300 mb-4">We bring your vision to life with our expert craftsmanship</p>
            <button className="px-8 py-3 bg-blue-600 text-white font-bold tracking-wider hover:bg-blue-700 transition-all duration-300">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

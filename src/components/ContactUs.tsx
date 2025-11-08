import { Mail, MapPin, Phone, Clock } from 'lucide-react';

interface ContactUsProps {
  isActive: boolean;
}

export default function ContactUs({ isActive }: ContactUsProps) {
  if (!isActive) return null;

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'Srisakthiforgetech@gmail.com',
      subDetail: 'For all inquiries',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: 'Mech Sri Sri Sirpakalai',
      subDetail: '+91 8610746655',
    },
    {
      icon: MapPin,
      title: 'Workshop',
      detail: 'Sri Sakthi Forgetech',
      subDetail: 'Tamil Nadu, India',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      detail: 'Monday - Saturday',
      subDetail: '9:00 AM - 6:00 PM',
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
            Contact <span className="text-blue-400">Us</span>
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us to discuss your temple statue requirements. We're here to help bring your divine vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-slate-900/70 backdrop-blur-sm border border-blue-800/30 p-6 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">{item.title}</h3>
                    <p className="text-white font-medium">{item.detail}</p>
                    <p className="text-slate-300">{item.subDetail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/70 backdrop-blur-sm border border-blue-800/30 p-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full bg-slate-800/50 border border-blue-800/30 px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full bg-slate-800/50 border border-blue-800/30 px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full bg-slate-800/50 border border-blue-800/30 px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-slate-800/50 border border-blue-800/30 px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold tracking-wider py-4 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-400 border-t border-blue-800/30 pt-8">
          <p className="text-sm">© 2025 Sakthi Forgetech. All rights reserved. Crafting divine beauty since establishment.</p>
        </div>
      </div>
    </section>
  );
}

import { Home, Info, Image, Package, Mail, Menu, X, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface SideNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function SideNavigation({ activeSection, setActiveSection }: SideNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: Info, label: 'About Us' },
    { id: 'gallery', icon: Image, label: 'Gallery' },
    { id: 'products', icon: Package, label: 'Products' },
    { id: 'contact', icon: Mail, label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918610746655', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:Srisakthiforgetech@gmail.com';
  };

  return (
    <>
      <button
        className="fixed top-6 left-6 z-50 md:hidden bg-blue-600 text-white p-3 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`fixed left-0 top-0 h-full bg-slate-900/95 backdrop-blur-sm border-r border-blue-500/50 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } w-64 md:w-20`}
      >
        <div className="flex flex-col h-full py-8">
          <div className="mb-8 flex justify-center">
            <img src="/nnu.png" alt="Sakthi Forgetech Logo" className="w-16 h-16 object-contain" />
          </div>

          <div className="flex-1 flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-blue-500 hover:bg-slate-800'
                }`}
              >
                <item.icon size={24} />
                <span className="absolute left-20 bg-slate-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                  {item.label}
                </span>
                <span className="md:hidden ml-4 text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="border-t border-blue-500/30 pt-6 flex flex-col items-center space-y-4">
            <div className="flex flex-col md:flex-col items-center gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>

            <button
              onClick={handleWhatsApp}
              className="group relative flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full transition-all duration-300 shadow-lg"
              title="WhatsApp"
            >
              <MessageCircle size={24} className="text-white" />
              <span className="absolute left-20 bg-slate-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                WhatsApp
              </span>
            </button>

            <button
              onClick={handleEmail}
              className="group relative flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 shadow-lg"
              title="Email"
            >
              <Mail size={24} className="text-white" />
              <span className="absolute left-20 bg-slate-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                Email
              </span>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

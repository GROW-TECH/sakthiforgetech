import { Mail, Menu, X, Facebook, Instagram, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GiTempleGate, GiChisel, GiStoneBust, GiStoneStack } from 'react-icons/gi';

interface SideNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function SideNavigation({ activeSection, setActiveSection }: SideNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

const navItems = [
  { id: 'home', icon: GiTempleGate, label: 'Home' },
  { id: 'about', icon: GiStoneBust, label: 'About Us' },
  { id: 'gallery', icon: GiStoneStack, label: 'Gallery' }, 
  { id: 'products', icon: GiChisel, label: 'Our Works' },
  { id: 'contact', icon: PhoneCall, label: 'Contact Us' },
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
      {/* Mobile Menu Toggle */}
      <button
        className="fixed top-6 left-6 z-50 md:hidden bg-blue-600 text-white p-3 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-full bg-slate-900/95 backdrop-blur-sm border-r border-blue-500/50 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } w-64 md:w-20`}
      >
        <div className="flex flex-col h-full py-8">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/sri_logo-removebg.png"
              alt="Sakthi Forgetech Logo"
              className="w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]"
            />
          </div>

          {/* Navigation Items */}
          <div className="flex-1 flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300
                  ${
                    activeSection === item.id
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_0_15px_rgba(30,64,175,0.7)]'
                      : 'text-slate-400 hover:text-yellow-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]'
                  }`}
              >
                <item.icon size={26} className="transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute left-20 bg-slate-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                  {item.label}
                </span>
                <span className="md:hidden ml-4 text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Social Links + Contact */}
          <div className="border-t border-blue-500/30 pt-6 flex flex-col items-center space-y-4">
            <div className="flex flex-col md:flex-col items-center gap-3 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/srisakthi_forgetech?igsh=MTh0Nmx4aW9sZ3BpZg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>

            <button
              onClick={handleWhatsApp}
              className="group relative flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-green-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]"
              title="WhatsApp"
            >
              <FaWhatsapp size={24} className="text-white group-hover:text-slate-900 transition-colors duration-300" />
              <span className="absolute left-20 bg-slate-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                WhatsApp
              </span>
            </button>

            <button
              onClick={handleEmail}
              className="group relative flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-blue-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]"
              title="Email"
            >
              <Mail size={24} className="text-white group-hover:text-slate-900 transition-colors duration-300" />
              <span className="absolute left-20 bg-slate-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                Email
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

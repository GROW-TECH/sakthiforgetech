import { useState } from 'react';
import SideNavigation from './components/SideNavigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Products from './components/Products';
import ContactUs from './components/ContactUs';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://videos.pexels.com/video-files/3015492/3015492-uhd_2560_1440_24fps.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/70 via-slate-900/70 to-blue-950/80 z-0"></div>

      <SideNavigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="relative z-10 ml-0 md:ml-20">
        <Home isActive={activeSection === 'home'} />
        <AboutUs isActive={activeSection === 'about'} />
        <Gallery isActive={activeSection === 'gallery'} />
        <Products isActive={activeSection === 'products'} />
        <ContactUs isActive={activeSection === 'contact'} />
      </div>
    </div>
  );
}

export default App;

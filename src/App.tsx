import { useState } from 'react';
import SideNavigation from './components/SideNavigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Overview from './components/Overview';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTitle, setSelectedTitle] = useState('');

  // 🎥 Choose background video based on section
  const getBackgroundVideo = () => {
    switch (activeSection) {
      case 'gallery':
        return '/DJI_0002_2.mp4';
      case 'about':
        return '/edited_video2.mp4'; 
      case 'products':
        return'/edited_video.mp4';
      case 'contact':
        return '/crafted/1.mp4';
      
      default:
        return ''; 
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🎬 Dynamic Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        key={activeSection} // ensures smooth reload when section changes
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src={getBackgroundVideo()} type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/70 via-slate-900/70 to-blue-950/80 z-0"></div>

      <SideNavigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="relative z-10 ml-0 md:ml-20">
<Home
  isActive={activeSection === 'home'}
  setActiveSection={setActiveSection}
/>
        <AboutUs isActive={activeSection === 'about'} />
        <Gallery
          isActive={activeSection === 'gallery'}
          setActiveSection={setActiveSection}
          setSelectedTitle={setSelectedTitle}
        />
        <Overview
          isActive={activeSection === 'Overview'}
          title={selectedTitle}
        />
        <Products isActive={activeSection === 'products'} />
        <ContactUs isActive={activeSection === 'contact'} />
      </div>
    </div>
  );
}

export default App;

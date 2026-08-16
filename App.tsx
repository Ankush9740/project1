import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroCanvas } from './components/HeroCanvas';
import { DesignSection } from './components/DesignSection';
import { PerformanceSection } from './components/PerformanceSection';
import { TechnologySection } from './components/TechnologySection';
import { InteriorSection } from './components/InteriorSection';
import { ConfiguratorSection } from './components/ConfiguratorSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { TestDriveModal } from './components/TestDriveModal';
import { preloadFrames } from './utils/frameLoader';

export function App() {
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [frameImages, setFrameImages] = useState<HTMLImageElement[]>([]);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState<boolean>(false);

  useEffect(() => {
    // Intelligent progressive frame preloader
    preloadFrames((percent) => {
      setLoadProgress(percent);
    }).then((images) => {
      setFrameImages(images);
      // Brief pause at 100% for smooth cinematic transition
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    });
  }, []);

  const handleExplore = () => {
    const designSection = document.getElementById('design');
    if (designSection) {
      designSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTestDrive = () => {
    setIsTestDriveOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060608] text-white selection:bg-[#E31837] selection:text-white relative">
      {/* Cinematic Minimal Preloader */}
      <Preloader progress={loadProgress} isReady={isLoaded} />

      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenTestDrive={handleBookTestDrive} />

      {/* Main Hero Viewport with Scroll-Driven Frame Animation */}
      <HeroCanvas
        images={frameImages}
        onExplore={handleExplore}
        onBookTestDrive={handleBookTestDrive}
      />

      {/* Section 1: Sculpted Automotive Design */}
      <DesignSection />

      {/* Section 2: Electrified INGLO Performance & Drive Modes */}
      <PerformanceSection />

      {/* Section 3: Neural Intelligence & ADAS Radar Suite */}
      <TechnologySection />

      {/* Section 4: Luxurious Interior Sanctuary & Ambient Theme Control */}
      <InteriorSection />

      {/* Section 5: Interactive 3D Studio Configurator */}
      <ConfiguratorSection onBookTestDrive={handleBookTestDrive} />

      {/* Final Grand Automotive Call to Action */}
      <FinalCTA
        onBookTestDrive={handleBookTestDrive}
        onExploreModels={handleExplore}
      />

      {/* Global Luxury Footer */}
      <Footer />

      {/* Interactive Test Drive VIP Modal */}
      <TestDriveModal
        isOpen={isTestDriveOpen}
        onClose={() => setIsTestDriveOpen(false)}
      />
    </div>
  );
}

export default App;

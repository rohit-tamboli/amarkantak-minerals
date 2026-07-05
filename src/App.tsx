/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import About from './components/About';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Distributor from './components/Distributor';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans antialiased text-dark bg-light selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <TrustBanner />
        <About />
        <Features />
        <ProductShowcase />
        <Process />
        <Gallery />
        <Distributor />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

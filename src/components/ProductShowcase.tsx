import { motion } from 'motion/react';
import { Plane, Droplet, PackageCheck, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { title: 'Travel Friendly', desc: 'Compact 250ml size, perfect for journeys.', icon: Plane },
  { title: 'Leak Proof', desc: 'Secure cap design prevents any spills.', icon: Droplet },
  { title: 'Hygienic Packaging', desc: 'Untouched by human hands during packing.', icon: PackageCheck },
  { title: 'Convenient Size', desc: 'Easy to carry in small bags or pockets.', icon: Zap },
];

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const bottleRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on the bottle as you scroll
      gsap.to(bottleRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-24 bg-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      
      {/* Cinematic Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4"
          >
            Featured Product
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-display font-bold tracking-tight"
          >
            Amarkantak 250ml
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Benefits */}
          <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors backdrop-blur-md group"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-primary/20 group-hover:text-primary transition-colors border border-white/10 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-display mb-3 tracking-wide">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right - Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative flex justify-center items-center h-[500px] lg:h-[700px] w-full"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-[85%] h-[85%] lg:w-[80%] lg:h-[80%] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
            >
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-80 z-10" />

              <img 
                ref={bottleRef}
                src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179206/ChatGPT_Image_Jul_4_2026_08_54_15_PM_bzvnmv.png" 
                alt="250ml Premium Bottle" 
                className="w-full h-full object-cover relative z-20"
              />
            </motion.div>

            {/* Dynamic Shadow underneath */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black/80 blur-2xl rounded-[100%] z-10"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

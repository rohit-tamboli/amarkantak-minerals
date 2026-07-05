import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, HandCoins, Truck, Megaphone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { title: 'Strong Market Demand', icon: TrendingUp },
  { title: 'Attractive Margins', icon: HandCoins },
  { title: 'Reliable Supply', icon: Truck },
  { title: 'Marketing Support', icon: Megaphone },
];

export default function Distributor() {
  const containerRef = useRef<HTMLElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(graphicRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="distributor" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left - Text */}
          <div className="text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-white/80"
            >
              Partner With Us
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Become a Distributor
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-white/90 mb-12 max-w-lg leading-relaxed font-light"
            >
              Join the Amarkantak Minerals family. We are expanding our network and looking for driven partners to grow with us.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20 group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-sm sm:text-base tracking-wide">{benefit.title}</span>
                  </motion.div>
                )
              })}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full text-base font-bold transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 group"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Right - Image/Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center h-full"
          >
            <div ref={graphicRef} className="aspect-square w-full max-w-[550px] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative border-4 border-white/20 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-xl flex items-center justify-center group">
               {/* Glass Reflection */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-80 z-10" />
               
              <motion.img 
                animate={{ y: [-15, 15, -15], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179204/ChatGPT_Image_Jul_4_2026_08_54_01_PM_fzrc9m.png" 
                alt="Business partnership with Amarkantak Minerals" 
                className="object-cover w-full h-full z-20 scale-120"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none z-10"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-4 md:-left-12 bg-[#111] text-white p-6 md:p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center gap-5 border border-white/10 z-30 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold font-display tracking-tight">Fastest</div>
                <div className="text-gray-400 text-sm md:text-base font-medium">Growing Brand</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

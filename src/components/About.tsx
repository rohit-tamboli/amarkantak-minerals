import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -15,
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
    <section ref={containerRef} id="about" className="py-32 bg-[#F8F9FA] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Story */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark leading-[1.1] tracking-tight">
                Committed to pure, safe, and hygienic hydration.
              </h3>
            </div>
            
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              Amarkantak Minerals is committed to providing safe, hygienic, and premium packaged drinking water. We believe that access to clean water is a fundamental right, and we strive to deliver perfection in every drop.
            </p>
            
            <p className="text-lg text-gray-500 leading-relaxed font-light">
              Through modern purification technology, strict quality control processes, and food-grade packaging, we ensure that the water you consume meets the highest global standards of purity.
            </p>

            <ul className="space-y-5 pt-6">
              {['State-of-the-art purification facility', 'Stringent 7-step filtration process', 'Uncompromising hygienic standards'].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-dark font-medium text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Cinematic Image Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center h-full"
          >
            <div ref={imageRef} className="aspect-[4/5] w-full rounded-[3rem] overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.12)] bg-gradient-to-tr from-gray-100 to-white flex justify-center items-center group">
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-80 z-10" />
              
              <motion.img 
                animate={{ y: [-15, 15, -15], scale: [1, 1.02, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179207/ChatGPT_Image_Jul_4_2026_08_53_28_PM_wemfci.png" 
                alt="Amarkantak Premium Bottle" 
                className="object-cover w-full h-full transform scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10"></div>
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="glass-panel p-6 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-primary rounded-[1.2rem] flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-lg shadow-primary/30">
                      10+
                    </div>
                    <div>
                      <h4 className="text-dark font-display font-bold text-xl tracking-tight">Years of Trust</h4>
                      <p className="text-gray-600 font-medium">Delivering purity since inception.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 translate-y-[-50%]"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/15 rounded-full blur-[80px] -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

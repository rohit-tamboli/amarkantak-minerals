import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bottleX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const bottleY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);

  const splashX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const splashY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP ScrollTrigger for text fade out on scroll
      gsap.to(textRef.current, {
        opacity: 1,
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-light"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#00A3E0]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full pt-10 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center h-full pb-10">
          {/* Left Content */}
          <div ref={textRef} className="flex flex-col items-start text-left max-w-2xl relative z-20 pb-0 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-white/50 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,163,224,0.8)]" />
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-[0.2em]">Premium Quality Guaranteed</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold font-display leading-[1.05] text-[#111] mb-6 tracking-tight"
            >
               Pure by Nature, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600">
                Perfect for Life.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-xl text-gray-500 mb-10 max-w-lg leading-relaxed font-light"
            >
              Premium packaged drinking water sourced and purified to deliver freshness, safety, and uncompromising quality in every drop.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#products"
                className="flex items-center gap-3 bg-black hover:bg-black text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 group"
              >
                Order Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#distributor"
                className="flex items-center gap-2 bg-white/50 backdrop-blur-md hover:bg-white text-dark border border-gray-200/50 px-8 py-4 rounded-full text-base font-medium transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1"
              >
                Become Distributor
              </a>
            </motion.div>
          </div>

          {/* Right Content - Cinematic Apple-style 3D Stage */}
          <div className="relative h-[500px] lg:h-[800px] w-full flex justify-center items-center ">
            {/* Glassmorphism Container Frame */}
            <motion.div 
              style={{ x: splashX, y: splashY }}
              className="absolute inset-0 flex items-center justify-center -z-10"
            >
              <div className="w-[85%] lg:w-[80%] h-[85%] lg:h-[80%] rounded-[3rem] bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-2xl border border-white/60 shadow-[0_40px_80px_rgba(0,0,0,0.08)] relative overflow-hidden">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-60" />
                {/* Abstract Water Splash Gradients */}
                <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-blue-300/30 blur-3xl mix-blend-overlay" />
                <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary/20 blur-3xl mix-blend-overlay" />
              </div>
            </motion.div>

            {/* Bottle with Floating Animation and Mouse Parallax */}
            <motion.div
              style={{ x: bottleX, y: bottleY }}
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 group"
            >
              {/* Dynamic Shadow */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 lg:-bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-6 lg:h-8 bg-black/25 blur-xl rounded-[100%]"
              />

              {/* The Bottle Image */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179891/ChatGPT_Image_Jul_4_2026_09_14_42_PM_xwfuhv.png"
                  alt="Amarkantak Premium Water Bottle"
                  className="h-[400px] sm:h-[500px] lg:h-[700px] object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.25)] relative z-10"
                />
                
                {/* Label Shine Sweep */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-20 rounded-[4rem]" style={{ clipPath: 'inset(20% 25% 20% 25%)' }}>
                  <motion.div 
                    animate={{ x: ['-250%', '250%'] }}
                    transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[30deg]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

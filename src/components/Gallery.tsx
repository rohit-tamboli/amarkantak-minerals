import { motion } from 'motion/react';

export default function Gallery() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Visual Excellence
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-dark"
          >
            Premium Collection
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 md:gap-6 h-auto md:h-[800px]">
          {/* Splash Image - Large */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group h-[400px] md:h-auto"
          >
            <img 
              src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179207/ChatGPT_Image_Jul_4_2026_08_53_28_PM_wemfci.png" 
              alt="Amarkantak Water Splash" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-bold font-display text-2xl tracking-tight">Pure Refreshment</p>
              </div>
            </div>
          </motion.div>

          {/* Nature Setting */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group h-[300px] md:h-auto"
          >
            <img 
              src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179206/ChatGPT_Image_Jul_4_2026_08_54_15_PM_bzvnmv.png" 
              alt="Amarkantak in Nature" 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold font-display text-lg">Natural Source</p>
              </div>
            </div>
          </motion.div>

          {/* Close up cap */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group h-[300px] md:h-auto"
          >
            <img 
              src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179206/ChatGPT_Image_Jul_4_2026_08_53_45_PM_betc0a.png" 
              alt="Amarkantak Cap Detail" 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold font-display text-lg">Sealed Safety</p>
              </div>
            </div>
          </motion.div>
          
          {/* Office Setting */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group h-[300px] md:h-auto"
          >
            <img 
              src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179204/ChatGPT_Image_Jul_4_2026_08_54_18_PM_wrpa2n.png" 
              alt="Amarkantak Office Desk" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold font-display text-lg">Everyday Hydration</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second row of gallery images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:gap-6 md:mt-6 h-auto md:h-[400px]">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative rounded-3xl overflow-hidden group h-[300px] md:h-auto"
          >
            <img 
              src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179206/ChatGPT_Image_Jul_4_2026_08_53_44_PM_omdfl4.png" 
              alt="Amarkantak Premium Bottle Tilted" 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative rounded-3xl overflow-hidden group h-[300px] md:h-auto"
          >
            <img 
              src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179204/ChatGPT_Image_Jul_4_2026_08_53_11_PM_jf9lhb.png" 
              alt="Amarkantak Horizontal" 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative rounded-3xl overflow-hidden group h-[300px] md:h-auto"
          >
            <img 
              src="https://res.cloudinary.com/dmnmpn69n/image/upload/v1783179206/ChatGPT_Image_Jul_4_2026_08_53_44_PM_omdfl4.png" 
              alt="Amarkantak Label Close Up" 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Our Location
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-dark mb-6"
          >
            Find Us
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Visit us in the heart of Amarkantak to witness the source of our pristine natural mineral water.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-gray-100"
        >
          {/* Map Embed */}
          <iframe 
            src="https://maps.google.com/maps?q=Amarkantak,+Madhya+Pradesh,+India&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full border-0" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Floating Card */}
          <div className="absolute top-6 left-6 right-6 md:right-auto md:w-80 bg-white/95 p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-dark text-lg mb-1">Amarkantak Minerals</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Amarkantak, Madhya Pradesh, India
                </p>
                <a 
                  href="https://maps.app.goo.gl/frr4D7JggJoCp9Y86?g_st=iw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-light text-white text-sm font-bold py-3 px-4 rounded-xl transition-colors w-full text-center shadow-lg hover:shadow-primary/30"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

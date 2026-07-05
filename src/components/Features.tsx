import { motion } from 'motion/react';
import { Droplet, Shield, Package, HeartHandshake } from 'lucide-react';

const features = [
  {
    title: 'Natural Purity',
    description: 'Water processed with advanced, multi-stage purification systems to retain essential goodness.',
    icon: Droplet,
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing stages and continuous monitoring before final packaging.',
    icon: Shield,
  },
  {
    title: 'Safe Packaging',
    description: 'Food-grade, BPA-free bottles ensuring maximum hygiene and preservation.',
    icon: Package,
  },
  {
    title: 'Trusted Brand',
    description: 'Reliable quality, consistent taste, and unparalleled customer satisfaction.',
    icon: HeartHandshake,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-dark"
          >
            The Gold Standard in <br/> Hydration
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-24 h-24 text-primary" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-dark mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

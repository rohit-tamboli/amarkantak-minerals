import { ShieldCheck, Droplet, Sparkles, Beaker, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { id: 1, name: '100% Purified Water', icon: Droplet },
  { id: 2, name: 'BIS Certified', icon: ShieldCheck },
  { id: 3, name: 'FSSAI Approved', icon: BadgeCheck },
  { id: 4, name: 'Advanced Purification', icon: Sparkles },
  { id: 5, name: 'Quality Tested', icon: Beaker },
];

export default function TrustBanner() {
  return (
    <div className="bg-dark text-white py-12 relative overflow-hidden border-t-4 border-primary">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center space-y-3 group"
              >
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-medium text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                  {stat.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

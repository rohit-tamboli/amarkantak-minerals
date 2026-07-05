import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const steps = [
  { id: 1, title: 'Source Water', desc: 'Carefully selected underground sources.' },
  { id: 2, title: 'Purification', desc: 'Multi-stage RO purification.' },
  { id: 3, title: 'Filtration', desc: 'Micron filtration for clarity.' },
  { id: 4, title: 'UV Treatment', desc: 'Eliminates harmful microorganisms.' },
  { id: 5, title: 'Quality Testing', desc: 'Rigorous lab testing per batch.' },
  { id: 6, title: 'Packaging', desc: 'Hygienic bottling and sealing.' },
  { id: 7, title: 'Distribution', desc: 'Dispatched to our network.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Manufacturing Process
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-dark"
          >
            Journey of Purity
          </motion.h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`flex items-center relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="bg-light p-6 rounded-3xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-display font-bold text-dark mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>

                {/* Node */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-primary flex items-center justify-center shadow-lg z-10">
                  <span className="font-bold text-primary text-lg">{step.id}</span>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

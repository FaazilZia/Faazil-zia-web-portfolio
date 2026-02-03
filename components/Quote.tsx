import React from 'react';
import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';

const Quote: React.FC = () => {
  return (
    <div className="relative py-32 bg-neutral-900 overflow-hidden flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <QuoteIcon size={48} className="text-crimson mx-auto mb-8 opacity-80" />
            
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-white max-w-4xl mx-auto mb-8">
                “Do more than is required. What separates consistent achievers from the rest is the willingness to go the extra mile.”
            </blockquote>
            
            <div className="w-16 h-1 bg-crimson mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quote;
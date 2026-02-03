import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center z-10">
          <motion.div
            style={{ y: textY, opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-crimson font-bold tracking-widest text-sm uppercase mb-4">
              I Build Scalable & Intelligent Digital Products
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-6 text-white">
              FULL STACK<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                DEVELOPER
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide mb-8 max-w-lg">
              Tech Enthusiast <span className="text-crimson mx-2">•</span> Web <span className="text-crimson mx-2">•</span> AI <span className="text-crimson mx-2">•</span> UI/UX
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 font-medium uppercase tracking-wider border-l-2 border-crimson pl-6">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-crimson" />
                <span>India — Chandigarh University</span>
              </div>
            </div>
            
            <div className="mt-4 pl-6">
               <span className="text-xs text-gray-600 uppercase tracking-widest">Open to Remote & Global Opportunities</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Cinematic Portrait */}
        <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] w-full flex items-center justify-center">
            <motion.div
                style={{ y: imageY }}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="relative w-full h-full"
            >
                {/* Image */}
                <img 
                    src="https://i.postimg.cc/0QgTLj7g/IMG-20240315-113436.jpg" 
                    alt="Faazil Zia Mohammad" 
                    className="w-full h-full object-cover object-center grayscale brightness-110 contrast-125 relative z-0"
                    style={{ 
                        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                    }}
                />

                {/* Overlays for cinematic blending */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-neutral-950 h-full w-full pointer-events-none"></div>
                <div className="absolute inset-y-0 left-0 z-10 bg-gradient-to-r from-neutral-950 to-transparent w-32 pointer-events-none opacity-60"></div>
            </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a 
        href="#about"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-white cursor-pointer z-20"
      >
        <ArrowDown size={24} className="text-crimson" />
      </motion.a>
    </div>
  );
};

export default Hero;
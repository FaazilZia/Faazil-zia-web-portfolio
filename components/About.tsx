import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-neutral-950 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 relative inline-block">
                About Me
                <span className="absolute bottom-2 right-0 translate-x-full w-12 h-1 bg-crimson ml-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-12 text-lg text-gray-400 font-light leading-relaxed">
                <div>
                    <p className="mb-6">
                        I am <span className="text-white font-medium">Faazil Zia Mohammad</span>, a passionate tech enthusiast and Full Stack Developer. Currently pursuing my Computer Science degree, I bridge the gap between complex engineering and elegant user experiences.
                    </p>
                    <p>
                        My journey is driven by an obsession with <span className="text-white font-medium">scalability, performance, and clean code</span>. I don't just write software; I craft digital ecosystems that solve real-world problems.
                    </p>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-0.5 h-full bg-gradient-to-b from-crimson via-gray-800 to-transparent"></div>

                <div>
                    <p className="mb-6">
                        I specialize in <span className="text-crimson">MERN Stack</span> and modern frontend frameworks like React and Next.js, while constantly exploring the frontiers of <span className="text-crimson">Generative AI</span> to build intelligent applications.
                    </p>
                    <p>
                        Whether it's hacking together a prototype in 24 hours or architecting a robust platform, I bring a <span className="text-white font-medium">"go the extra mile"</span> attitude to every challenge.
                    </p>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
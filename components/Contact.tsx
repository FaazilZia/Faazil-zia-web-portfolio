import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-neutral-950 relative overflow-hidden">
       {/* Ambient Glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-crimson/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                    Let's Build the <span className="text-crimson">Future.</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12">
                    I am currently open to internship opportunities, hackathon collaborations, and freelance projects. If you have an idea that needs a tech visionary, let's talk.
                </p>

                <a 
                    href="mailto:faazilzia01@gmail.com" 
                    className="inline-block bg-crimson hover:bg-red-700 text-white font-bold py-4 px-10 rounded-none transition-all duration-300 transform hover:-translate-y-1 mb-16 shadow-[0_0_20px_rgba(255,43,43,0.3)] hover:shadow-[0_0_30px_rgba(255,43,43,0.6)]"
                >
                    INITIATE CONVERSATION
                </a>

                <div className="flex justify-center space-x-12">
                    <SocialLink 
                      href="https://github.com/FaazilZia" 
                      icon={<Github size={24} />} 
                      label="GitHub" 
                      target="_blank" 
                    />
                    <SocialLink 
                      href="https://www.linkedin.com/in/faazil-zia-mohammad-8611a4285" 
                      icon={<Linkedin size={24} />} 
                      label="LinkedIn" 
                      target="_blank" 
                    />
                    <SocialLink 
                      href="mailto:faazilzia01@gmail.com" 
                      icon={<Mail size={24} />} 
                      label="Email" 
                    />
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string; target?: string }> = ({ href, icon, label, target }) => (
    <a 
        href={href} 
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="text-gray-500 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2 group"
    >
        <div className="p-4 border border-gray-800 rounded-full group-hover:border-crimson group-hover:bg-crimson/10 group-hover:scale-110 transition-all duration-300">
            {icon}
        </div>
        <span className="text-xs uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">{label}</span>
    </a>
);

export default Contact;
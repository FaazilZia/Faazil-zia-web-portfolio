import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Agents Intensive – AI Recipe Planner",
    category: "AI & Intelligent Agents",
    description: "An AI-powered recipe planning system built using intelligent agents that helps users generate meal plans based on preferences, constraints, and ingredients.",
    stack: ["Python", "AI Agents", "LLMs", "Prompt Engineering"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop&grayscale",
    link: "https://github.com/FaazilZia/agents-intensive-recipe-planner"
  },
  {
    title: "Hoot – AI Assistant",
    category: "Conversational AI",
    description: "A smart AI assistant designed to automate tasks, answer queries, and enhance productivity using conversational AI.",
    stack: ["JavaScript", "AI APIs", "LLMs", "Frontend Integration"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop&grayscale",
    link: "https://github.com/FaazilZia/Hoot-ai-assistant"
  },
  {
    title: "Aura AI",
    category: "Generative AI",
    description: "An AI-driven application focused on intelligent interactions and automation, showcasing modern generative AI capabilities.",
    stack: ["AI", "JavaScript", "APIs", "Full Stack Concepts"],
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop&grayscale",
    link: "https://github.com/FaazilZia/Aura-AI-"
  },
  {
    title: "Procrastinator’s Panic Button",
    category: "Productivity Tool",
    description: "A fun yet practical productivity tool designed to help users instantly refocus and beat procrastination during critical moments.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?q=80&w=1000&auto=format&fit=crop&grayscale",
    link: "https://github.com/FaazilZia/Procrastinator-s-Panic-Button"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">Selected Works</h2>
                <p className="text-gray-500 uppercase tracking-widest text-sm">Innovating one build at a time</p>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="hidden md:block"
            >
                <span className="h-[1px] w-32 bg-crimson inline-block mb-4"></span>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[450px] w-full overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-crimson/50 transition-colors duration-500"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-crimson text-xs font-bold tracking-widest uppercase mb-2 block">
                        {project.category}
                    </span>
                    <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-crimson transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center text-sm font-bold uppercase tracking-wider hover:text-crimson transition-colors"
                        >
                            View on GitHub <Github size={16} className="ml-2" />
                        </a>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "HTML / CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React / Next.js", percentage: 88 },
  { name: "Backend / APIs", percentage: 85 },
  { name: "AI / GenAI", percentage: 80 },
];

const CircularProgress: React.FC<{ percentage: number; label: string }> = ({ percentage, label }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            className="text-neutral-800"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-crimson drop-shadow-[0_0_8px_rgba(255,43,43,0.5)]"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold font-display text-white">
            {percentage}%
          </span>
        </div>
      </div>
      <h3 className="mt-4 text-sm font-bold uppercase tracking-widest text-gray-400">{label}</h3>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            My expertise spans across the entire development lifecycle, from intuitive frontend interfaces to robust backend architectures and AI integration.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12">
          {skills.map((skill, index) => (
            <CircularProgress key={index} percentage={skill.percentage} label={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
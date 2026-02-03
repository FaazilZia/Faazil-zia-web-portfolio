import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Faazil Zia Mohammad. All Rights Reserved.
        </p>
        <p className="text-gray-700 text-xs mt-2 uppercase tracking-widest">
            Designed & Engineered with React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
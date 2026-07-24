import React from 'react';

interface FooterProps {
  onOpenContact?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-gradient-to-b from-canvas to-pastel-yellow px-6 md:px-12 lg:px-24 py-32 border-t border-neutral-200/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
        <h2 className="font-display text-7xl uppercase text-ink max-w-5xl leading-tight">
          LET'S BUILD SOMETHING <span className="font-serif italic lowercase normal-case">reliable</span> TOGETHER.
        </h2>
        <button 
          onClick={onOpenContact} 
          className="bg-ink text-white px-10 py-4 rounded-full font-sans text-lg hover:bg-blue-600 hover:shadow-xl transition-all cursor-pointer"
        >
          Let's talk
        </button>
      </div>
    </footer>
  );
};

export default Footer;

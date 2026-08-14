import React from 'react';

interface HeroProps {
  onOpenContact?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="bg-canvas mt-24 px-6 md:px-12 lg:px-24 py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top center greeting with profile photo avatar */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-accent rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-canvas shadow-2xl bg-white">
              <img 
                src="/anh_the.png" 
                alt="Tran Thanh Quan" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
              />
            </div>
            {/* Active Status Badge */}
            <div className="absolute bottom-2 right-2 bg-emerald-500 w-5 h-5 rounded-full border-2 border-canvas shadow-md flex items-center justify-center" title="Available for backend engineering opportunities">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            </div>
          </div>
          <h1 className="font-serif italic text-4xl md:text-6xl text-ink/60 text-center">
            Hi, I'm <span className="font-display not-italic text-ink">Tran Thanh Quan</span>
          </h1>
        </div>
        
        {/* 3-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-24">
          {/* Left column */}
          <div className="flex flex-col">
            <div className="w-12 h-1 bg-blue-600 mb-6"></div>
            <h2 className="font-display text-7xl uppercase leading-none text-ink">
              I BUILD RELIABLE SYSTEMS
            </h2>
          </div>
          
          {/* Middle column (Terminal) */}
          <div className="bg-surface-dark text-green-400 font-mono text-sm p-6 rounded-2xl aspect-square flex flex-col justify-start overflow-hidden shadow-2xl relative shadow-blue-500/10">
            <div className="flex gap-2 absolute top-4 left-4">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mt-8 flex flex-col gap-2 opacity-80 leading-relaxed">
              <p>{">"} Initialize core services...</p>
              <p className="text-blue-400">[OK] Vijaco Doc-Mgmt System (30+ staff active)</p>
              <p className="text-blue-400">[OK] Redis Lua Stock Gate active</p>
              <p className="text-blue-400">[OK] Transactional Outbox worker ready</p>
              <p>{">"} Graph RAG Medical Engine initialized</p>
              <p className="text-blue-400">[OK] 95.2% Citation Score verified</p>
              <p className="mt-2 text-white font-bold">{">"} System operational.</p>
              <p className="animate-pulse">{">"} Ready for production traffic<span className="animate-ping">_</span></p>
            </div>
          </div>
          
          {/* Right column */}
          <div className="flex flex-col lg:items-end text-right">
            <h2 className="font-display text-4xl uppercase text-ink mb-8 text-right">
              SOFTWARE ENGINEER
            </h2>
            <div className="flex flex-col gap-3 lg:items-end w-full lg:w-auto">
              <a href="https://github.com/qwan30" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white w-full lg:w-48 px-6 py-4 rounded-full font-sans text-sm tracking-wide font-medium hover:bg-blue-700 hover:shadow-[0_4px_14px_0_rgba(0,82,255,0.39)] hover:-translate-y-0.5 transition-all duration-300 text-center">
                View GitHub
              </a>
              <a href="https://www.linkedin.com/in/tran-thanh-quan-eric-78842b326/" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-ink/20 text-ink w-full lg:w-48 px-6 py-4 rounded-full font-sans text-sm tracking-wide font-medium hover:bg-ink hover:text-white transition-all duration-300 text-center">
                LinkedIn Profile
              </a>
              <button 
                onClick={onOpenContact} 
                className="bg-transparent border border-ink/20 text-ink w-full lg:w-48 px-6 py-4 rounded-full font-sans text-sm tracking-wide font-medium hover:bg-blue-600 hover:border-transparent hover:text-white transition-all duration-300 text-center cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom of Hero */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-200/50 pt-12">
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl text-ink">30+ STAFF</span>
            <span className="text-blue-500 text-sm font-sans mt-2 font-medium">Vijaco Daily Active Users</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl text-ink">0 OVERSELLS</span>
            <span className="text-blue-500 text-sm font-sans mt-2 font-medium">Flash Sale Concurrency Integrity</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl text-ink">95.2% ACCURACY</span>
            <span className="text-blue-500 text-sm font-sans mt-2 font-medium">RAG Clinical Citation Score</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

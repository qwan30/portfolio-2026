import React from 'react';
import { ExternalLink, FileText, ArrowDown, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { personal } = portfolioData;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-canvas pt-32 md:pt-36 pb-20 px-6 md:px-12 lg:px-20 min-h-[92vh] flex flex-col justify-between border-b border-black/5">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-14 md:gap-16">
        
        {/* Top Eyebrow & Status Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/5 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink/70">
              {personal.eyebrow}
            </span>
          </div>
          <span className="font-mono text-xs text-ink/60 font-medium">
            Based in Ho Chi Minh City, Vietnam
          </span>
        </div>

        {/* Hero Main Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (5 Cols): Identity & Primary Statement */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-5 sm:gap-6">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-3 border-black/10 shadow-lg flex-shrink-0 bg-white group">
                <img
                  src="/anh_the.png"
                  alt="Tran Thanh Quan"
                  width={160}
                  height={160}
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight">
                  {personal.name}
                </h1>
                <span className="font-mono text-xs sm:text-sm text-blue-700 font-semibold uppercase tracking-wider block mt-1">
                  {personal.title}
                </span>
              </div>
            </div>

            <div>
              <div className="w-12 h-1 bg-blue-600 mb-4 rounded-full"></div>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.95] text-ink tracking-tight">
                {personal.heroStatement}
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-ink/75 leading-relaxed font-normal max-w-xl">
              {personal.heroSubstatement}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToProjects}
                className="h-12 px-7 rounded-full bg-ink hover:bg-blue-600 text-white font-sans text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer group"
              >
                <span>View Engineering Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-full bg-white hover:bg-gray-100 text-ink border border-black/15 font-sans text-sm font-semibold transition-all flex items-center gap-2 shadow-xs"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-4 rounded-full text-ink/70 hover:text-ink font-mono text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Center Column (4 Cols): Decorative Engineering Status Terminal */}
          <div className="lg:col-span-4">
            <div className="bg-[#14161b] text-green-400 font-mono text-xs p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
                  <Terminal className="w-3 h-3 text-blue-400" />
                  <span>runtime.telemetry</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 leading-relaxed">
                {personal.heroTerminalLines.map((line, idx) => (
                  <p
                    key={idx}
                    className={
                      line.startsWith('[OK]')
                        ? 'text-blue-400'
                        : line.includes('operational')
                        ? 'text-emerald-400 font-bold'
                        : 'text-gray-300'
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                <span>STATUS: HEALTHY</span>
                <span className="animate-pulse text-emerald-400">● LIVE</span>
              </div>
            </div>
          </div>

          {/* Right Column (3 Cols): Quick Connect & Direct Action */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6 p-6 rounded-2xl bg-white/70 border border-black/8 backdrop-blur-xs">
            <div>
              <span className="font-mono text-[11px] uppercase font-bold text-blue-700 tracking-wider block mb-2">
                ENGINEERING PROFILE
              </span>
              <h3 className="font-display text-2xl uppercase text-ink leading-tight">
                BACKEND & SYSTEMS ENGINEER
              </h3>
              <p className="font-sans text-xs text-ink/75 mt-2 leading-relaxed">
                Focused on scalable APIs, distributed state consistency, fail-closed security, and rigorous automated testing.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-black/5">
              <button
                onClick={onOpenContact}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-semibold transition-colors shadow-xs cursor-pointer text-center"
              >
                Get In Touch
              </button>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-ink font-sans text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Hero Proof Strip (Max 3 Evidence Items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-black/10">
          {personal.heroProofMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-black/8 shadow-xs flex flex-col justify-between gap-3 group hover:border-blue-500/40 hover:shadow-md transition-all"
            >
              <div>
                <div className="font-display text-3xl sm:text-4xl text-blue-600 tracking-tight">
                  {item.metric}
                </div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-ink mt-1 leading-snug">
                  {item.context}
                </div>
              </div>
              <div className="font-mono text-[11px] font-bold text-ink/50 uppercase tracking-wider flex items-center gap-1.5 pt-2 border-t border-black/5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>{item.source}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;

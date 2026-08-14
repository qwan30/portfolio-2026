import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Server, Zap, Container, BrainCircuit, ArrowUpRight } from 'lucide-react';

const icons = [
  <Server className="w-6 h-6 text-blue-600" key="1" />,
  <Zap className="w-6 h-6 text-amber-600" key="2" />,
  <Container className="w-6 h-6 text-emerald-600" key="3" />,
  <BrainCircuit className="w-6 h-6 text-purple-600" key="4" />
];

export const EngineeringFocus: React.FC = () => {
  const { engineeringFocus } = portfolioData.personal;

  const handleScrollToProject = (id: string) => {
    const el = document.getElementById(`featured-project-${id}`) || document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="engineering" className="bg-canvas text-ink py-20 md:py-28 px-6 md:px-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
              CORE CAPABILITIES
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink">
            ENGINEERING FOCUS
          </h2>
          <p className="mt-2 font-sans text-ink/75 text-base md:text-lg leading-relaxed">
            Practical software engineering disciplines grounded in verified implementation, concurrency controls, fail-closed security, and automated testing.
          </p>
        </div>

        {/* 4 Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringFocus.map((focus, index) => (
            <div
              key={index}
              onClick={() => handleScrollToProject(focus.linkedProjectId)}
              className="group rounded-3xl p-7 bg-white border border-black/10 shadow-xs hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-black/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icons[index % icons.length]}
                  </div>
                  <span className="font-mono text-xs font-bold text-ink/40">
                    {focus.number}
                  </span>
                </div>

                <h3 className="font-display uppercase text-2xl mb-3 text-ink group-hover:text-blue-600 transition-colors">
                  {focus.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm leading-relaxed text-ink/75">
                  {focus.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-mono font-semibold text-blue-700 group-hover:text-blue-800">
                <span className="truncate pr-2">{focus.linkedProject}</span>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngineeringFocus;

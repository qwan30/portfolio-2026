import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle } from 'lucide-react';
import TechIcon from './TechIcon';

export const Skills: React.FC = () => {
  const { technicalSkills } = portfolioData.personal;

  return (
    <section id="skills" className="bg-canvas py-20 md:py-28 px-6 md:px-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
              TECHNICAL PROFICIENCY
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink">
            TECHNICAL SKILLS MATRIX
          </h2>
          <p className="mt-2 font-sans text-ink/75 text-base md:text-lg leading-relaxed">
            Curated software stack organized into three core engineering tiers: backend runtime & persistence, delivery infrastructure, and applied AI retrieval.
          </p>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(technicalSkills).map(([tier, skills], tIdx) => (
            <div
              key={tIdx}
              className="p-7 rounded-3xl bg-white border border-black/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <h3 className="font-display text-xl uppercase tracking-wider text-ink">
                      {tier}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-ink/40">
                    {skills.length} Items
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2.5 bg-[#fbf9f5] px-3.5 py-2.5 rounded-xl border border-black/8 hover:border-blue-500/50 hover:bg-blue-50/40 hover:shadow-xs transition-all group"
                    >
                      <TechIcon name={skill} className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-sans text-xs sm:text-sm font-semibold text-ink">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-mono text-ink/50">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Production & Benchmark Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

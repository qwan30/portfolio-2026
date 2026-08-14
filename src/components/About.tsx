import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import type { LightboxData } from './ImageLightbox';

interface AboutProps {
  onExpandImage: (data: LightboxData) => void;
}

export const About: React.FC<AboutProps> = ({ onExpandImage }) => {
  const { summary, education, certifications } = portfolioData.personal;

  return (
    <section id="about" className="bg-canvas py-20 md:py-28 px-6 md:px-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
              BACKGROUND & CREDENTIALS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink">
            ABOUT & EXPERIENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (6 Cols): Professional Summary */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-xs flex flex-col gap-5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
                PROFESSIONAL SUMMARY
              </span>
              <p className="font-sans text-base sm:text-lg leading-relaxed text-ink/80 font-normal">
                {summary}
              </p>
              <div className="pt-4 border-t border-black/5 flex flex-wrap gap-4 text-xs font-mono text-ink/60">
                <span>📍 Ho Chi Minh City, Vietnam</span>
                <span>•</span>
                <span>🎓 Software Engineering (FPT University)</span>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-xs flex flex-col gap-4">
              <div className="flex items-center gap-2.5 text-blue-700">
                <GraduationCap className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">
                  EDUCATION
                </span>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className="font-display text-2xl uppercase text-ink">
                    {edu.institution}
                  </h3>
                  <p className="font-sans text-sm font-semibold text-ink/80">
                    {edu.degree}
                  </p>
                  <div className="flex items-center gap-3 font-mono text-xs text-ink/60 pt-2">
                    <span>{edu.duration}</span>
                    <span>•</span>
                    <span className="font-bold text-blue-700">GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (6 Cols): Compact Certifications List */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-xs flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-black/5 pb-4">
                <div className="flex items-center gap-2.5 text-blue-700">
                  <Award className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest">
                    CERTIFICATIONS & CREDENTIALS
                  </span>
                </div>
                <span className="font-mono text-xs text-ink/50">Verified</span>
              </div>

              <div className="flex flex-col gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#fbf9f5] border border-black/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-400 hover:shadow-xs transition-all group"
                  >
                    <div>
                      <h4 className="font-sans text-sm sm:text-base font-bold text-ink group-hover:text-blue-700 transition-colors">
                        {cert.name}
                      </h4>
                      <div className="flex items-center gap-2 font-mono text-xs text-ink/60 mt-1">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.year}</span>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        onExpandImage({
                          url: cert.image,
                          title: cert.name,
                          badge: `${cert.issuer} • ${cert.year}`,
                        })
                      }
                      className="px-4 py-2 rounded-xl bg-white border border-black/10 hover:bg-blue-600 hover:text-white text-ink font-sans text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs whitespace-nowrap self-start sm:self-center"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

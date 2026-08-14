import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { summary, education, certifications } = portfolioData.personal;
  const [selectedCert, setSelectedCert] = useState<{ name: string; image: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="about" className="bg-white py-24 border-t border-black/5">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Profile Card + Summary */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-display text-4xl md:text-5xl uppercase text-ink mb-8">
              BACKGROUND
            </h2>
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <div className="w-36 h-48 md:w-44 md:h-56 rounded-2xl overflow-hidden border border-black/10 shadow-md flex-shrink-0 bg-slate-100 group relative">
                <img 
                  src="/anh_the.png" 
                  alt="Tran Thanh Quan Profile Photo" 
                  loading="lazy"
                  decoding="async"
                  width={176}
                  height={224}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">Tran Thanh Quan</span>
                </div>
              </div>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-ink/80 font-light flex-1">
                {summary}
              </p>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            {/* Education */}
            <div>
              <h3 className="font-mono text-sm font-bold tracking-widest text-blue-600 uppercase mb-8 flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                Education
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} className="mb-6 last:mb-0 p-6 rounded-2xl bg-canvas border border-black/5 shadow-sm">
                  <div className="font-display text-2xl text-ink mb-2">{edu.institution}</div>
                  <div className="font-sans text-ink/80 font-medium mb-4">{edu.degree}</div>
                  <div className="flex gap-4 font-mono text-xs text-ink/50 uppercase tracking-wider">
                    <span>{edu.duration}</span>
                    <span>•</span>
                    <span className="font-bold text-blue-600">GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-mono text-sm font-bold tracking-widest text-blue-600 uppercase mb-8 flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                Certifications
              </h3>
              <div className="flex flex-col gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex flex-col gap-4 p-5 rounded-2xl border border-black/5 bg-canvas hover:shadow-md transition-shadow group">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 text-blue-500 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <span className="font-sans text-ink/80 text-sm md:text-base leading-relaxed font-medium">{cert.name}</span>
                    </div>
                    {cert.image && (
                      <div 
                        onClick={() => setSelectedCert({ name: cert.name, image: cert.image })}
                        className="rounded-xl overflow-hidden border border-black/5 cursor-zoom-in relative group/cert"
                      >
                        <img 
                          src={cert.image} 
                          alt={cert.name} 
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto object-cover group-hover/cert:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-mono px-2.5 py-1 rounded-full opacity-80 group-hover/cert:opacity-100 transition-opacity">
                          🔍 Phóng to
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Certificate Lightbox */}
      {selectedCert && (
        <div 
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out animate-fadeIn select-none"
        >
          <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
            <span className="font-mono text-xs text-gray-400 hidden sm:inline">Click bất kỳ đâu hoặc nhấn Esc để đóng</span>
            <button 
              onClick={() => setSelectedCert(null)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-xl transition-colors backdrop-blur-sm"
            >
              ✕
            </button>
          </div>
          <div className="relative max-h-[88vh] max-w-[96vw] flex flex-col items-center justify-center">
            <img 
              src={selectedCert.image} 
              alt={selectedCert.name} 
              className="max-h-[82vh] max-w-[95vw] w-auto h-auto object-contain rounded-2xl border border-white/10 shadow-2xl" 
            />
            <div className="mt-4 text-center">
              <h4 className="font-sans text-lg text-white font-medium">{selectedCert.name}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;

import { portfolioData } from '../data/portfolioData';

const Activities = () => {
  const activities = portfolioData.activities;

  if (!activities || activities.length === 0) return null;

  return (
    <section id="activities" className="bg-canvas py-24 px-6 md:px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl uppercase tracking-tight mb-16 text-ink">
          SOCIAL PROJECTS & ACTIVITIES
        </h2>
        
        <div className="flex flex-col gap-24">
          {activities.map((activity) => (
            <div key={activity.id} className="flex flex-col gap-12">
              
              {/* Header Info */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-4xl md:text-5xl text-ink">{activity.title}</h3>
                <div className="font-mono text-sm tracking-widest text-blue-600 uppercase font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {activity.role}
                </div>
              </div>

              {/* Description & Metrics Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <p className="text-xl leading-relaxed text-ink/80 font-light">
                    {activity.description}
                  </p>
                </div>
                
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {activity.metrics.map((metric, idx) => (
                    <div key={idx} className="p-6 rounded-2xl border border-black/5 bg-white shadow-sm flex items-center justify-center text-center hover:border-blue-500/30 transition-colors h-full">
                      <span className="font-sans text-ink/90 font-medium text-sm md:text-base">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Images Grid */}
              {activity.images && activity.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  {activity.images.map((img, idx) => (
                    <div key={idx} className="rounded-3xl overflow-hidden border border-black/5 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                      <img 
                        src={img} 
                        alt={`${activity.title} image ${idx + 1}`} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  ))}
                </div>
              )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;

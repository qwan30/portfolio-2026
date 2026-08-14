import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Copy, Check, Send, X, ExternalLink } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 300;
          setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsContactOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-blue-200 selection:text-ink relative">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full p-4 md:p-6 flex justify-between items-center z-40 text-ink bg-canvas/90 backdrop-blur-md border-b border-hairline">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-semibold text-xl tracking-tight hover:text-blue-600 transition-colors cursor-pointer"
        >
          QUAN.DEV
        </button>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#expertise" className="hover:text-blue-600 transition-colors">Expertise</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#activities" className="hover:text-blue-600 transition-colors">Activities</a>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsContactOpen(true)} 
            className="bg-ink text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-blue-600 hover:shadow-lg transition-all cursor-pointer"
          >
            Contact Me
          </button>
        </div>
      </nav>

      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <About />
        <Projects />
        <Expertise />
        <Skills />
        <Activities />
      </main>
      
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Floating Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,82,255,0.39)] hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title="Scroll to Top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Contact Me Warm Luxury Sleek Modal */}
      {isContactOpen && (
        <div 
          onClick={() => setIsContactOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#fcfaf7] text-ink rounded-3xl max-w-lg w-full p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] border border-black/10 relative animate-scaleUp"
          >
            {/* Close button */}
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 text-ink flex items-center justify-center transition-colors cursor-pointer"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
                  CONTACT INFORMATION
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-ink tracking-tight">
                Tran Thanh Quan
              </h3>
              <p className="font-sans text-xs md:text-sm text-ink/70 mt-1 font-medium">
                Backend Software Engineer • Ho Chi Minh City, Vietnam
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="flex flex-col gap-4 mb-8">
              {/* Email Card */}
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-black/8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-500/40 hover:shadow-md transition-all group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] uppercase font-bold text-blue-700 tracking-wider block">Email</span>
                    <span className="font-mono text-xs md:text-sm font-bold text-ink select-all truncate block">tranthanhquan09@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                  <button 
                    onClick={() => handleCopy('tranthanhquan09@gmail.com', 'email')}
                    className="h-9 px-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 font-sans text-xs font-semibold text-ink border border-black/5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-ink/60" />}
                    <span>{copiedEmail ? 'Đã chép' : 'Sao chép'}</span>
                  </button>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=tranthanhquan09@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Gửi Mail</span>
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-black/8 shadow-sm flex items-center gap-3 hover:border-emerald-500/40 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-emerald-700 tracking-wider block">Địa điểm / Location</span>
                  <span className="font-sans text-xs md:text-sm font-bold text-ink">Ho Chi Minh City, Vietnam</span>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 md:p-5 rounded-2xl bg-white border border-black/8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-500/40 hover:shadow-md transition-all group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] uppercase font-bold text-amber-700 tracking-wider block">Số điện thoại / Phone</span>
                    <span className="font-mono text-xs md:text-sm font-bold text-ink select-all truncate block">0974426058</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                  <button 
                    onClick={() => handleCopy('0974426058', 'phone')}
                    className="h-9 px-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 font-sans text-xs font-semibold text-ink border border-black/5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-ink/60" />}
                    <span>{copiedPhone ? 'Đã chép' : 'Sao chép'}</span>
                  </button>
                  <a 
                    href="tel:0974426058" 
                    className="h-9 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-sans text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Gọi ngay</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-black/10 flex items-center justify-between">
              <span className="font-mono text-xs text-ink/60 font-medium">Mạng xã hội:</span>
              <div className="flex items-center gap-4">
                <a href="https://github.com/qwan30" target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-bold text-ink hover:text-blue-600 transition-colors flex items-center gap-1">
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://www.linkedin.com/in/tran-thanh-quan-eric-78842b326/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-bold text-ink hover:text-blue-600 transition-colors flex items-center gap-1">
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a href="https://www.facebook.com/tran.quan.182591/?locale=vi_VN" target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-bold text-ink hover:text-blue-600 transition-colors flex items-center gap-1">
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;

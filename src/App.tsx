import { useCallback, useEffect, useRef, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import type { FeaturedProjectItem, SecondaryProjectItem } from './data/portfolioData';
import { subscribeScrollFrame } from './hooks/useScrollEngine';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import KineticTunnel from './components/KineticTunnel';
import EngineeringFocus from './components/EngineeringFocus';
import Skills from './components/Skills';
import MetricsBars from './components/MetricsBars';
import Credentials from './components/Credentials';
import ArchitectureWireframes from './components/ArchitectureWireframes';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ImageLightbox, { type LightboxData } from './components/ImageLightbox';
import ContactModal from './components/ContactModal';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'engineering', label: 'Focus' },
  { id: 'skills', label: 'Stack' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
] as const;

function App() {
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('light');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    FeaturedProjectItem | SecondaryProjectItem | null
  >(null);
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const headerThemeRef = useRef<'light' | 'dark'>('light');

  const { personal } = portfolioData;

  useEffect(() => {
    const supportsNativeScrollProgress =
      typeof CSS !== 'undefined' && CSS.supports('animation-timeline', 'scroll()');

    return subscribeScrollFrame(() => {
      const bands = document.querySelectorAll<HTMLElement>('[data-theme-band]');
      let nextTheme: 'light' | 'dark' = 'light';
      for (const band of bands) {
        const rect = band.getBoundingClientRect();
        if (rect.top <= 48 && rect.bottom > 48) {
          nextTheme = band.dataset.themeBand === 'dark' ? 'dark' : 'light';
          break;
        }
      }
      if (nextTheme !== headerThemeRef.current) {
        headerThemeRef.current = nextTheme;
        setHeaderTheme(nextTheme);
      }

      if (
        !supportsNativeScrollProgress &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
        progressBarRef.current
      ) {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
        progressBarRef.current.style.transform = `scaleX(${ratio})`;
      }
    });
  }, []);

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    const supportsScrollTargetGroup =
      typeof CSS !== 'undefined' && CSS.supports('scroll-target-group: auto');

    if (supportsScrollTargetGroup) {
      const syncAriaCurrent = () => {
        const currentLink = navEl.querySelector<HTMLAnchorElement>('a:target-current');
        navEl.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
          link.setAttribute('aria-current', link === currentLink ? 'true' : 'false');
        });
      };

      syncAriaCurrent();
      document.addEventListener('scrollend', syncAriaCurrent);
      return () => document.removeEventListener('scrollend', syncAriaCurrent);
    }

    const links = Array.from(navEl.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            for (const link of links) {
              const isActive = link.getAttribute('href') === `#${id}`;
              link.classList.toggle('target-current', isActive);
              link.setAttribute('aria-current', String(isActive));
            }
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleOpenContact = useCallback(() => setIsContactOpen(true), []);
  const handleCloseContact = useCallback(() => setIsContactOpen(false), []);
  const handleCloseProject = useCallback(() => setSelectedProject(null), []);
  const handleCloseLightbox = useCallback(() => setLightboxData(null), []);

  const isDarkHeader = headerTheme === 'dark';

  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-cobalt/20 selection:text-ink relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-obsidian focus:text-light-ink focus:font-mono focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      <header
        data-header-theme={headerTheme}
        className="adaptive-header fixed top-0 inset-x-0 z-40 backdrop-blur-md border-b"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 h-16 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 font-display font-extrabold text-sm sm:text-base tracking-tight uppercase cursor-pointer py-2"
          >
            <span
              className={`w-6 h-6 rounded-md inline-flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                isDarkHeader ? 'bg-light-ink text-obsidian' : 'bg-ink text-cream'
              }`}
              aria-hidden="true"
            >
              Q
            </span>
            <span>QUAN.DEV</span>
          </button>

          <nav
            ref={navRef}
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 lg:gap-7 font-mono text-[11px] uppercase tracking-[0.14em] font-medium nav-scrollspy"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="py-1 opacity-70 hover:opacity-100 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-1.5 h-9 px-3 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wider border transition-colors ${
                isDarkHeader
                  ? 'border-obsidian-hairline-strong text-light-secondary hover:text-light-ink hover:border-light-ink'
                  : 'border-cream-hairline text-ink-secondary hover:text-ink hover:border-ink'
              }`}
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </a>

            <button
              type="button"
              onClick={handleOpenContact}
              className={`h-10 px-5 rounded-full font-sans text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                isDarkHeader
                  ? 'bg-light-ink hover:bg-sand-gold text-obsidian'
                  : 'bg-ink hover:bg-cobalt text-cream'
              }`}
            >
              Contact
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={`md:hidden w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition-colors ${
                isDarkHeader
                  ? 'border-obsidian-hairline-strong text-light-ink'
                  : 'border-cream-hairline text-ink'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div
          ref={progressBarRef}
          aria-hidden="true"
          className={`scroll-progress-bar absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none ${
            isDarkHeader ? 'bg-sand-gold' : 'bg-cobalt'
          }`}
        />
      </header>

      {isMobileMenuOpen ? (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/55 backdrop-blur-xs md:hidden pt-16"
        >
          <nav
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
            className="bg-obsidian text-light-ink border-b border-obsidian-hairline px-6 py-6 flex flex-col gap-1 font-mono text-sm uppercase tracking-wider shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="min-h-11 flex items-center px-2 rounded-lg text-light-ink hover:bg-obsidian-elevated transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="min-h-11 flex items-center gap-2 px-2 rounded-lg text-sand-gold hover:bg-obsidian-elevated transition-colors mt-2 pt-2 border-t border-obsidian-hairline"
            >
              <FileText className="w-4 h-4" />
              <span>Resume (PDF)</span>
            </a>
          </nav>
        </div>
      ) : null}

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects
          onExpandImage={setLightboxData}
          onSelectProject={setSelectedProject}
        />
        <KineticTunnel />
        <EngineeringFocus />
        <Skills />
        <MetricsBars />
        <Credentials onExpandImage={setLightboxData} />
        <ArchitectureWireframes />
      </main>

      <Footer onOpenContact={handleOpenContact} />

      <CaseStudyModal
        project={selectedProject}
        onClose={handleCloseProject}
        onExpandImage={setLightboxData}
      />

      <ImageLightbox data={lightboxData} onClose={handleCloseLightbox} />

      <ContactModal open={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}

export default App;

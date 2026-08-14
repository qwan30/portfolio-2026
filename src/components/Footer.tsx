import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, ExternalLink, FileText } from 'lucide-react';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { personal } = portfolioData;

  return (
    <footer className="bg-[#111317] text-white pt-24 pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* High-Contrast Final Contact Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-white/10">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 block mb-3">
              AVAILABLE FOR SOFTWARE ENGINEERING ROLES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
              LET'S BUILD SOMETHING <span className="text-blue-400">RELIABLE</span> TOGETHER.
            </h2>
          </div>

          <button
            onClick={onOpenContact}
            className="h-14 px-9 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-sans text-base font-bold transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 cursor-pointer flex-shrink-0 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </button>
        </div>

        {/* Quick Links & Identity Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-gray-400">
          <div className="flex flex-col gap-1">
            <span className="font-sans font-bold text-white text-base">
              {personal.name}
            </span>
            <span className="font-mono text-xs text-gray-500">
              {personal.title} • {personal.location}
            </span>
          </div>

          {/* Direct Secondary Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs font-semibold">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </a>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600">
          <span>© {new Date().getFullYear()} Tran Thanh Quan. Built for engineering reliability.</span>
          <span>Designed with warm beige canvas & Anton typography.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

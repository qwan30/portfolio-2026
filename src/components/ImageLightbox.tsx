import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface LightboxData {
  url: string;
  title: string;
  badge?: string;
  description?: string;
}

interface ImageLightboxProps {
  data: LightboxData | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ data, onClose }) => {
  useEffect(() => {
    if (!data) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out animate-fadeIn select-none"
      role="dialog"
      aria-modal="true"
      aria-label="High-Resolution Image Viewer"
    >
      {/* Top Bar */}
      <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
        <span className="font-mono text-xs text-gray-400 hidden sm:inline">
          Click anywhere or press Esc to close
        </span>
        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-lg transition-colors backdrop-blur-sm cursor-pointer"
          title="Close viewer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Centered Image Container */}
      <div
        className="relative max-h-[88vh] max-w-[96vw] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-slate-950">
          <img
            src={data.url}
            alt={data.title}
            className="max-h-[78vh] max-w-[92vw] w-auto h-auto object-contain"
            decoding="async"
          />
        </div>

        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            {data.badge && (
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white">
                {data.badge}
              </span>
            )}
            <h4 className="font-display text-lg sm:text-xl text-white tracking-wide">
              {data.title}
            </h4>
          </div>
          {data.description && (
            <p className="font-sans text-xs text-gray-400 mt-1">{data.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;

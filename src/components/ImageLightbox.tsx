import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { DIALOG_LIGHT_DISMISS, useNativeModal } from '../hooks/useNativeModal';

export interface LightboxImage {
  url: string;
  title: string;
  badge?: string;
  description?: string;
}

export interface LightboxData extends LightboxImage {
  images?: LightboxImage[];
  initialIndex?: number;
}

interface ImageLightboxProps {
  data: LightboxData | null;
  onClose: () => void;
}

export function ImageLightbox({ data, onClose }: ImageLightboxProps) {
  const dialogRef = useNativeModal({ open: data !== null, onClose });
  const images: LightboxImage[] = data
    ? data.images && data.images.length > 0
      ? data.images
      : [data]
    : [];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!data) return;
    const nextIndex = data.initialIndex ?? 0;
    setActiveIndex(nextIndex >= 0 && nextIndex < images.length ? nextIndex : 0);
  }, [data, images.length]);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!data || images.length <= 1) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [data, images.length, showNext, showPrev]);

  const current = images[activeIndex] ?? data;
  const isSvg = current ? current.url.toLowerCase().endsWith('.svg') : false;

  return (
    <dialog
      ref={dialogRef}
      {...DIALOG_LIGHT_DISMISS}
      aria-label="High-resolution evidence viewer"
      className="native-modal native-lightbox w-[min(72rem,calc(100vw-1.5rem))]"
    >
      {current ? (
        <div className="flex flex-col items-center gap-4 w-full px-2 sm:px-4">
          <div className="w-full flex items-center justify-between gap-4 text-light-ink">
            <div className="flex items-center gap-2.5 min-w-0">
              {current.badge ? (
                <span className="font-mono text-[11px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-md bg-cobalt text-white shrink-0">
                  {current.badge}
                </span>
              ) : null}
              <h2 className="font-sans text-sm sm:text-base font-semibold text-light-ink truncate">
                {current.title}
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {images.length > 1 ? (
                <span className="font-mono text-xs text-light-muted tabular-nums">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
              ) : null}
              <button
                type="button"
                onClick={onClose}
                autoFocus
                className="w-11 h-11 rounded-full bg-obsidian-elevated hover:bg-white/15 border border-obsidian-hairline-strong text-light-ink flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative w-full flex items-center justify-center">
            {images.length > 1 ? (
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-2 sm:left-4 z-10 w-11 h-11 rounded-full bg-obsidian/90 hover:bg-cobalt border border-obsidian-hairline-strong text-light-ink flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            ) : null}

            <div
              className={`rounded-xl overflow-hidden border border-obsidian-hairline-strong shadow-2xl max-w-full flex items-center justify-center p-2 sm:p-3 ${
                isSvg ? 'bg-[#f6f3ec]' : 'bg-obsidian'
              }`}
            >
              <img
                src={current.url}
                alt={current.title}
                className="max-h-[74dvh] max-w-[86vw] w-auto h-auto object-contain rounded-lg"
                decoding="async"
              />
            </div>

            {images.length > 1 ? (
              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 sm:right-4 z-10 w-11 h-11 rounded-full bg-obsidian/90 hover:bg-cobalt border border-obsidian-hairline-strong text-light-ink flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : null}
          </div>

          <div className="text-center max-w-2xl px-2">
            {current.description ? (
              <p className="font-sans text-xs sm:text-sm text-light-secondary leading-relaxed">
                {current.description}
              </p>
            ) : null}
            <p className="font-mono text-[11px] text-light-muted mt-1">
              {images.length > 1
                ? 'Use arrow keys to navigate · Esc or click outside to close'
                : 'Press Esc or click outside to close'}
            </p>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}

export default ImageLightbox;

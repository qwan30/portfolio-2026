import { useEffect, useRef, type RefObject } from 'react';

type ScrollListener = () => void;

const listeners = new Set<ScrollListener>();
let rafId: number | null = null;
let attached = false;

function flush() {
  rafId = null;
  for (const fn of listeners) {
    fn();
  }
}

function scheduleFlush() {
  if (rafId === null) {
    rafId = window.requestAnimationFrame(flush);
  }
}

function attachGlobalListeners() {
  if (attached) return;
  attached = true;
  window.addEventListener('scroll', scheduleFlush, { passive: true });
  window.addEventListener('resize', scheduleFlush, { passive: true });
}

function detachGlobalListenersIfIdle() {
  if (!attached || listeners.size > 0) return;
  attached = false;
  window.removeEventListener('scroll', scheduleFlush);
  window.removeEventListener('resize', scheduleFlush);
  if (rafId !== null) {
    window.cancelAnimationFrame(rafId);
    rafId = null;
  }
}

export function subscribeScrollFrame(listener: ScrollListener): () => void {
  listeners.add(listener);
  attachGlobalListeners();
  listener();
  return () => {
    listeners.delete(listener);
    detachGlobalListenersIfIdle();
  };
}

export function clamp01(value: number): number {
  return value <= 0 ? 0 : value >= 1 ? 1 : value;
}

export function rangeProgress(p: number, start: number, end: number): number {
  if (end <= start) return p >= end ? 1 : 0;
  return clamp01((p - start) / (end - start));
}

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - clamp01(t), 3);
}

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export type ScrollMode = 'sticky' | 'reveal';

export function useScrollDriver(
  containerRef: RefObject<HTMLElement | null>,
  onUpdate: (progress: number, reducedMotion: boolean) => void,
  mode: ScrollMode = 'sticky'
): void {
  const callbackRef = useRef(onUpdate);
  useEffect(() => {
    callbackRef.current = onUpdate;
  }, [onUpdate]);

  useEffect(() => {
    const compute = () => {
      const el = containerRef.current;
      if (!el) return;
      const reduced = prefersReducedMotion();
      if (reduced) {
        callbackRef.current(1, true);
        return;
      }

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      let p: number;

      if (mode === 'sticky') {
        const travel = Math.max(1, rect.height - vh);
        p = clamp01(-rect.top / travel);
      } else {
        const travel = Math.max(1, rect.height + vh * 0.45);
        p = clamp01((vh - rect.top) / travel);
      }

      callbackRef.current(p, false);
    };

    return subscribeScrollFrame(compute);
  }, [containerRef, mode]);
}

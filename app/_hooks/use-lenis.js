'use client';

import { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis();

    // Expose Lenis instance so other components (e.g. dialog) can stop/start it
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(raf);
      window.__lenis = null;
    };
  }, []);
}

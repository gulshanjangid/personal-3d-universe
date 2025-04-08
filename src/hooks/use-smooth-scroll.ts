
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true, // Changed from 'smooth' to 'smoothWheel'
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Create a function to handle the RAF animation loop
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    return () => {
      // Clean up when component unmounts
      lenisRef.current?.destroy();
    };
  }, []);

  return lenisRef;
}

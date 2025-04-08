
import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-in' | 'none';
  threshold?: number; // 0-1, percentage of element visible to trigger
  start?: string; // Custom start position
  end?: string; // Custom end position
  markers?: boolean; // Debug markers (only for development)
  delay?: number; // Animation delay in seconds
  duration?: number; // Animation duration in seconds
  className?: string;
  id?: string;
}

export function AnimatedSection({
  children,
  animation = 'fade-up',
  threshold = 0.2,
  start = 'top bottom',
  end = 'bottom top',
  markers = false,
  delay = 0,
  duration = 0.8,
  className = '',
  id,
}: ScrollTriggerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: start || `top bottom-=${threshold * 100}%`,
        end: end,
        markers: markers,
        toggleActions: 'play none none none',
      },
    });

    // Different animation types
    if (animation === 'fade-up' && !triggered.current) {
      tl.fromTo(
        section,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: duration, delay: delay, ease: 'power3.out' }
      );
    } else if (animation === 'fade-in' && !triggered.current) {
      tl.fromTo(
        section,
        { opacity: 0 },
        { opacity: 1, duration: duration, delay: delay, ease: 'power2.out' }
      );
    } else if (animation === 'scale-in' && !triggered.current) {
      tl.fromTo(
        section,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: duration, delay: delay, ease: 'back.out(1.7)' }
      );
    } else if (animation === 'slide-in' && !triggered.current) {
      tl.fromTo(
        section,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: duration, delay: delay, ease: 'power3.out' }
      );
    }

    triggered.current = true;

    return () => {
      // Clean up ScrollTrigger
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [animation, delay, duration, end, markers, start, threshold]);

  return (
    <div ref={sectionRef} className={className} id={id}>
      {children}
    </div>
  );
}

export default AnimatedSection;

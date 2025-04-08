
import { Scene } from '@/components/three/Scene';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Suspense, useEffect, useState } from 'react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import AnimatedSection from '@/components/animations/ScrollTrigger';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Initialize smooth scrolling
  const lenisRef = useSmoothScroll();

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gradient">Loading Portfolio</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" data-scroll-container>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <div className="content">
        <Navbar />
        <main>
          <Hero />
          <AnimatedSection animation="fade-up">
            <About />
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={0.2}>
            <Skills />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" threshold={0.1}>
            <Projects />
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={0.1}>
            <Contact />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

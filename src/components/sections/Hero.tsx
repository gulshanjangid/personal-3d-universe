
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="section relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <motion.div 
          className="max-w-5xl mx-auto md:mx-0 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex-1">
            <motion.p 
              className="text-lg text-primary font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-gradient">Gulshan Jangid</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-4xl font-semibold mb-6 text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Crafting modern web applications with MongoDB, Express, React, and Node.js. Passionate about building seamless user experiences and powerful backends.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button size="lg" className="text-lg px-6">View Projects</Button>
              <Button size="lg" variant="outline" className="text-lg px-6">Contact Me</Button>
            </motion.div>
          </div>
          
          <motion.div
            className="flex-1 h-[400px] w-full max-w-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-full h-full relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20">
              <img 
                src="/public/gulshan.jpeg" 
                alt="Professional developer" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.a 
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary/80 hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}


import { Layers3, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold mb-2">
              <Layers3 size={24} className="text-primary" />
              <span className="text-gradient">DEV PORTFOLIO</span>
            </a>
            <p className="text-muted-foreground text-center md:text-left">
              Crafting modern web experiences with the MERN stack
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="mailto:contact@example.com" className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center md:flex md:justify-between">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with ♥ and React Three Fiber
          </p>
        </div>
      </div>
    </footer>
  );
}

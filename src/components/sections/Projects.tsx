
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A real-time messaging application with user authentication, private chats, group chats, and notifications.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Task Management System',
    description: 'A task management application with user authentication, task creation, assignment, status tracking, and notifications.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    demoLink: '#',
    codeLink: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent work using the MERN stack
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-white/5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

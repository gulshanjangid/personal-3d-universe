
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="glass rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <User className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              I'm a passionate MERN stack developer with a strong focus on creating responsive and user-friendly web applications. With a background in computer science and years of practical experience, I love solving complex problems and turning ideas into reality.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white/5">Team Player</Badge>
              <Badge variant="outline" className="bg-white/5">Problem Solver</Badge>
              <Badge variant="outline" className="bg-white/5">Quick Learner</Badge>
              <Badge variant="outline" className="bg-white/5">Detail-Oriented</Badge>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div>
                <p className="font-medium">Senior Web Developer</p>
                <p className="text-sm text-muted-foreground">Tech Company • 2020 - Present</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <GraduationCap className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div>
                <p className="font-medium">BSc in Computer Science</p>
                <p className="text-sm text-muted-foreground">University Name • 2016 - 2020</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Award className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Awards</h3>
              </div>
              <div>
                <p className="font-medium">Best Web Application</p>
                <p className="text-sm text-muted-foreground">Tech Hackathon • 2022</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

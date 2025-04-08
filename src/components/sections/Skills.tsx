
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CubeTextScene } from '@/components/three/CubeTextScene';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
}

function SkillCategory({ title, skills, delay }: SkillCategoryProps) {
  return (
    <motion.div 
      className="glass rounded-xl p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="bg-white/5 py-1.5 px-3">
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const frontendSkills = [
    'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 
    'Redux', 'Next.js', 'Tailwind CSS', 'Material UI', 'Framer Motion'
  ];
  
  const backendSkills = [
    'Node.js', 'Express', 'MongoDB', 'Mongoose', 
    'RESTful API', 'GraphQL', 'JWT', 'Passport', 'Socket.IO'
  ];
  
  const otherSkills = [
    'Git', 'GitHub', 'Docker', 'AWS', 'Firebase', 
    'Jest', 'Cypress', 'CI/CD', 'Figma', 'Adobe XD'
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in the MERN stack and related technologies for building modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-6 order-2 md:order-1">
            <SkillCategory title="Frontend Development" skills={frontendSkills} delay={1} />
            <SkillCategory title="Backend Development" skills={backendSkills} delay={2} />
            <SkillCategory title="Tools & Technologies" skills={otherSkills} delay={3} />
          </div>
          
          <motion.div 
            className="h-[400px] order-1 md:order-2 glass rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CubeTextScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

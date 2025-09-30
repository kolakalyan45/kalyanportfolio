import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Backend',
    skills: [
      'Core Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Microservices',
      'REST APIs',
      'JWT',
      'JUnit 5'
    ]
  },
  {
    title: 'Frontend',
    skills: [
      'JavaScript',
      'React.js',
      'Redux Toolkit',
      'Context API',
      'HTML',
      'CSS',
      'Tailwind'
    ]
  },
  {
    title: 'Database',
    skills: [
      'SQL',
      'MySQL',
      'Mongodb'
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      'Docker (Basics)',
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
      'Eclipse IDE'
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 md:px-12 surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-secondary text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My toolkit spans modern frontend frameworks, robust backend development,
            and essential DevOps tools to deliver scalable, secure applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover-lift hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="heading-tertiary text-primary mb-4 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

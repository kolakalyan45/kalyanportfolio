import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy } from 'lucide-react';
import { Download, GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';
import resumePDF from '../assets/KalyanResume.pdf';
const education = [

  {
    degree: 'B.Tech in Mechanical Engineering',
    institution: 'Sri Vasavi Engineering College',
    period: '2021 – 2025',
    gpa: '7.85/10',
  },
  {
    degree: 'Intermediate',
    institution: 'St. Francis De Sales Junior College',
    period: '2019 – 2021',
    gpa: '7.92/10',
  },
  {
    degree: 'SSC',
    institution: 'Z.P.H. School',
    period: '2018 – 2019',
    gpa: '8.2/10',
  }
];


const experience = [
  {
    position: 'IoT Intern',
    company: 'NIT Andhra Pradesh',
    period: 'May 2024 – Jul 2024',
    responsibilities: [
      'Built an IoT Fish Pond Monitoring System with live sensor data collection.',
      'Developed a responsive React.js dashboard visualizing key parameters (temperature, pH, etc.)',
    ]
  },
];



export const ResumeSection = () => {
const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = resumePDF;
  link.download = 'Kaveri_Tammineni_Resume.pdf';
  link.click();
};

  return (
    <section id="resume" className="min-h-screen py-20 px-6 md:px-12 surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-secondary text-gradient mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Showcasing my educational background, professional experience, and continuous learning journey 
            in software development and data analysis.
          </p>
          <Button 
            size="lg" 
            className="hover-lift animate-glow"
            onClick={handleDownloadResume}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </Button>
        </div>

        <div className="space-y-16">
          {/* Education */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-tertiary">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover-lift hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <Badge variant="secondary">CGPA: {edu.gpa}</Badge>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    
                 
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-tertiary">InternShip</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover-lift hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{exp.position}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-2 md:mt-0">
                     
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-2 mt-1">▶</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        <div className="animate-slide-up">
  <div className="flex items-center gap-3 mb-8">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Award className="h-6 w-6 text-primary" />
    </div>
    <h3 className="heading-tertiary">Certifications & Achievements</h3>
  </div>
  
  <Card className="bg-card border-border hover-lift hover:border-primary/30 transition-all duration-300">
    <CardContent className="p-6">
      <p className="text-muted-foreground mb-4">
        Highlighting my professional certifications and achievements demonstrating continuous learning, problem-solving skills, and hands-on experience.
      </p>
      <div className="grid md:grid-cols-1 gap-3">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5">
          <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <span className="font-medium">
            Solved 350+ problems on LeetCode and GeeksforGeeks to improve DSA and problem-solving skills –{' '}
            <a 
              href="https://leetcode.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 underline"
            >
              LeetCode Profile
            </a>
          </span>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5">
          <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <span className="font-medium">NPTEL Professional Certification in Java Programming (Jan–Apr 2024)</span>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5">
          <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <span className="font-medium">Front-End Development Virtual Internship – NEAT & Palo Alto Networks (Sep–Dec 2024)</span>
        </div>
      </div>
    </CardContent>
  </Card>
</div>

        </div>
      </div>
    </section>
  );
};
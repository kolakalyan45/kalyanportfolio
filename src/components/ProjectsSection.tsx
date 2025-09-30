import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import MovieBookingImg from '../assets/bookyourshow.png';
import LetterboxdImg from '../assets/letterboxclone.png';
import EcommerceImg from '../assets/eccomerce.png';
import ProductMgmtImg from '../assets/crud.png';
import BookFinderImg from '../assets/bookfinder.png';

const projects = [
  {
    id: 2,
    title: 'Letterboxd Clone',
    description: 'Built a scalable Letterboxd Clone using Spring Boot microservices (10+ services) with Eureka, Feign Client, API Gateway, Enhanced reliability with Resilience4j, containerized services with Docker, and integrated Zipkin for distributed tracing.',
    technologies: ['React.js', 'Redux Toolkit', 'Spring Boot', 'Spring Cloud', 'Docker', 'Zipkin'],
    category: 'Full Stack',
    image: LetterboxdImg,
    githubUrl: 'https://github.com/kolakalyan45/letterboxclone',
    liveUrl: null,
  },
  {
    id: 1,
    title: 'Movie Ticket Booking System',
    description: 'Interactive movie ticket booking platform with dynamic seat layout, Razorpay integration, admin and theatre manager dashboards, and JWT-based authentication.',
    technologies: ['React.js', 'Redux Toolkit', 'JWT', 'Axios', 'MySQL', 'Context API', 'Spring Boot'],
    category: 'Full Stack',
    image: MovieBookingImg,
    githubUrl: 'https://github.com/kaveri3tammineni/Movie-Ticket-Booking-System',
    liveUrl: null,
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Scalable e-commerce platform with admin dashboard, OAuth authentication, payment gateway, and smooth shopping experience.',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'OAuth', 'JWT', 'Payment Gateway'],
    category: 'Full Stack',
    image: EcommerceImg,
    githubUrl: 'https://github.com/kaveri3tammineni/E-Commerce-Platform',
    liveUrl: null,
  },
 
  {
    id: 4,
    title: 'Product Management System',
    description: 'Full-stack application implementing CRUD operations for products using React, Axios, Spring Boot, and MySQL.',
    technologies: ['React.js', 'Axios', 'Spring Boot', 'MySQL'],
    category: 'Full Stack',
    image: ProductMgmtImg,
    githubUrl: 'https://github.com/kaveri3tammineni/Product-Management-System',
    liveUrl: null,
  },
  {
    id: 5,
    title: 'BookFinderMine',
    description: 'A responsive web app for discovering and finding books online.',
    technologies: ['React.js'],
    category: 'Web Development',
    image: BookFinderImg,
    githubUrl: 'https://github.com/kaveri3tammineni/BookFinderMine',
    
  },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  // Always display the first 5 projects
  const displayedProjects = filteredProjects.slice(0, 5);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-secondary text-gradient mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my categorized projects showcasing practical skills in problem-solving, 
            analytics, and turning complex requirements into clear, impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="surface border-border hover-lift hover:border-primary/30 transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="w-full h-48 bg-muted/50 flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

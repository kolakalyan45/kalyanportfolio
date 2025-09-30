import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Lightbulb, Target ,Server,Layout} from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Building end-to-end applications with modern technologies and best practices'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Creative approach to complex challenges with innovative solutions'
  },
  {
    icon: Server,
    title: 'Scalable Backend Systems',
    description: 'Designing secure REST APIs and microservices using Java, Spring Boot, and MySQL'
  },
  {
    icon: Layout,
    title: 'Advanced Frontend',
    description: 'Crafting responsive React UIs with Redux Toolkit and Context API for seamless experiences'
  }
];
export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 md:px-12  anime">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up anime ">
          <h2 className="heading-secondary text-gradient mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          An Entry-level Full-Stack Developer skilled in Core Java, Spring Boot, Microservices, React.js, and MySQL. Passionate about web development, real-time data tracking, and building secure, scalable applications. Strong problem-solving abilities with hands-on project experience and a drive to contribute to innovative, real-world software solutions while growing as a develope
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center anime">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h3 className="heading-tertiary mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
             I’m a passionate and results-driven Full-Stack Developer with a strong foundation in React.js and Java Spring Boot. Coming from a mechanical-engineering background, my curiosity about technology led me to master modern web development and scalable backend systems. </p>
              <p>
          Through hands-on projects like a Movie Ticket Booking System and a microservices-based Letterboxd clone, I’ve built intuitive UIs with React, Redux Toolkit, and Tailwind, while architecting secure REST APIs with Spring Boot, Microservices, and MySQL. I enjoy designing clean, responsive interfaces as much as writing robust backend code and implementing JWT-based authentication.    </p>
              <p>
                Solved 350+ coding problems and gained IoT experience through an internship at NIT Andhra Pradesh.
             </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Here's how I create impact:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▶</span>
                 Build scalable web apps using React.js, Redux Toolkit, Spring Boot, and MySQL.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▶</span>
                Develop secure, efficient APIs with Java, Microservices, and JWT.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▶</span>
                  Craft responsive, user-friendly interfaces with Tailwind CSS and modern JavaScript.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▶</span>
                Ensure code quality and smooth deployments with Docker, Git, GitHub, and Postman.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={index} 
                  className="surface border-border hover-lift hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
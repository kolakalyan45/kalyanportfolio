import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/myphoto.jpeg';
import { SiLeetcode } from 'react-icons/si' 
import resumepdf from '../assets/Kalyan_Fullstack.pdf';
const roles = [
  
  'Full Stack Developer',
  'Problem Solver'
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
const [toastMessage, setToastMessage] = useState("");
  const [openLink, setOpenLink] = useState("");

  useEffect(() => {
    const role = roles[currentRole];
    let currentIndex = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex <= role.length) {
          setDisplayText(role.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(false);
            setTimeout(() => {
              setCurrentRole((prev) => (prev + 1) % roles.length);
              setDisplayText('');
              setIsTyping(true);
            }, 1000);
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [currentRole, isTyping]);

   const handleDownloadResume = async () => {
    try {
      setToastMessage("Downloading started...");
      setOpenLink("");

      const response = await fetch(resumepdf);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

     
      const link = document.createElement("a");
      link.href = url;
      link.download = "Kalyan_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      setToastMessage("File downloaded!");
      setOpenLink(url);

     
      setTimeout(() => {
        setToastMessage("");
        setOpenLink("");
      }, 5000);
    } catch (error) {
      setToastMessage("Download failed!");
      console.error(error);
      setTimeout(() => setToastMessage(""), 5000);
    }
  };
  

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <h3 className="heading-primary mb-6">
              <span className="block text-foreground">Kalyan Kola</span>
              <span className="block text-gradient" >
                I'm a {displayText}
                <span className={`inline-block w-0.5 h-8 bg-primary ml-1 ${isTyping ? 'animate-pulse' : ''}`} />
              </span>
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            A Passionate Full-Stack Developer skilled in Core Java, Spring Boot, Microservices, React.js, and MySQL.
Experienced in building real-world applications with strong problem-solving abilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="hover-lift animate-glow"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="hover-lift border-primary/50 hover:border-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 hover-lift hover-glow"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/kalyan-kola/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 hover-lift hover-glow"
                asChild
              >
                <a 
                  href="https://github.com/kolakalyan45" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
                 <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 hover-lift hover-glow"
                asChild
              >
                <a 
                  href="https://leetcode.com/u/Kalyan__45/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >   <SiLeetcode className="h-5 w-5" />
                 
                </a>
              </Button>
             
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 hover-lift animate-glow">
                <img
                  src={profileImage}
                  alt="Kaveri Tammineni - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
         {toastMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded shadow-lg">
          {toastMessage}
          {openLink && (
            <a 
              href={openLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-3 text-blue-400 underline"
            >
              [Open]
            </a>
          )}
        </div>
      )}
    </section>

    
  );
};
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin } from 'lucide-react';

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with product management, cart functionality, and secure checkout.",
      image: "/img/project1.png",
      technologies: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
      image: "/img/project2.png",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description: "A mobile-responsive application for tracking workouts, nutrition, and fitness progress over time.",
      image: "/img/project3.png",
      technologies: ["React Native", "GraphQL", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "An interactive weather forecasting tool with location-based data and visualization components.",
      image: "/img/project4.png",
      technologies: ["JavaScript", "Weather API", "Chart.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "A dashboard for tracking and analyzing social media performance across multiple platforms.",
      image: "/img/project5.png",
      technologies: ["React", "Python", "D3.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 6,
      title: "Recipe Collection App",
      description: "A digital cookbook application for saving, categorizing, and sharing favorite recipes.",
      image: "/img/project6.png",
      technologies: ["Next.js", "Supabase", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Showcasing my work and projects in web development and design
        </p>
      </header>

      {/* Projects section */}
      <section id="projects" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="overflow-hidden h-48 bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 pt-2">
                <Button variant="default" size="sm" className="flex-1" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile carousel view */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <Card className="flex flex-col h-full">
                    <div className="overflow-hidden h-48 bg-muted">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-sm mb-4">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-3 pt-2">
                      <Button variant="default" size="sm" className="flex-1" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
              <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col items-center md:items-start space-y-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                <p className="text-muted-foreground max-w-md">
                  Ready to start your next project with me? Send me a message or connect with me through social media!
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 w-full max-w-md">
                <a 
                  href="mailto:romilpatel2007@gmail.com" 
                  className="flex items-center space-x-3 p-3 rounded-lg transition-all hover:bg-accent group"
                >
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">romilpatel2007@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/Techy2419" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg transition-all hover:bg-accent group"
                >
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Github size={24} className="text-primary" />
                  </div>
                   <div>
                    <p className="font-semibold text-foreground">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/Techy2419</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/romil-patel-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg transition-all hover:bg-accent group"
                >
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Linkedin size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/romil-patel-</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-card p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left text-card-foreground">
                Send me a message
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="user_name" className="mb-1 block text-sm font-medium text-foreground">Name</Label>
                  <Input 
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    placeholder="Your Name" 
                    required 
                    className="bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="user_email" className="mb-1 block text-sm font-medium text-foreground">Email</Label>
                  <Input 
                    type="email" 
                    name="user_email" 
                    id="user_email" 
                    placeholder="Your Email" 
                    required 
                    className="bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">Message</Label>
                  <Textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    placeholder="Your Message" 
                    required 
                    className="bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-[#1ecbe1] transition-colors">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

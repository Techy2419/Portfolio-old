import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ContactForm from "@/components/ContactForm";
import { Mail } from 'lucide-react'; // Add this import

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

  return (
    <div className="min-h-screen bg-background">
      <header className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Showcasing my work and projects in web development and design
        </p>
      </header>

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
      
      {/* Updated Contact Section with the new Contact Form */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project with me? Send me a message or connect with me through social media!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center md:items-start space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out! I'd love to hear from you about potential collaborations or opportunities.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 w-full">
                <a 
                  href="mailto:romilpatel2007@gmail.com" 
                  className="flex items-center space-x-3 p-3 rounded-lg transition-all hover:bg-accent"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <span>romilpatel2007@gmail.com</span>
                </a>
                
                <a 
                  href="https://github.com/Techy2419" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg transition-all hover:bg-accent"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>
                  <span>github.com/Techy2419</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/romil-patel-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg transition-all hover:bg-accent"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878 1.216.08 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </div>
                  <span>linkedin.com/in/romil-patel-</span>
                </a>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

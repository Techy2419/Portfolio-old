
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ContactForm from "@/components/ContactForm";

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
      <header className="py-8 text-center lg:py-6">
        <h1 className="text-2xl font-bold mb-2 lg:text-3xl">My Portfolio</h1>
        <p className="text-base text-muted-foreground max-w-xl mx-auto lg:text-lg">
          Showcasing my work and projects in web development and design
        </p>
      </header>

      {/* Projects section */}
      <section id="projects" className="py-8 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto lg:py-6">
        <h2 className="text-xl font-bold text-center mb-6 lg:text-2xl lg:mb-8">Projects</h2>
        
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:max-w-xs">
              <div className="overflow-hidden h-32 bg-muted lg:h-28">
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
      <section className="py-8 px-4 md:px-6 lg:px-8 bg-muted lg:py-6" id="contact">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-xl font-bold mb-2 lg:text-2xl lg:mb-3">Let's Connect</h2>
            <hr className="divider my-4 mx-auto" />
            <p className="text-muted-foreground max-w-md mx-auto">
              Ready to start your next project with me? Connect with me through social media!
            </p>
          </div>
          
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

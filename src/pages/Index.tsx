
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Welcome to Your Portfolio</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Showcase your projects and skills with this customizable portfolio template.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Adapted to work with both light and dark modes */}
      <section id="contact" className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg mb-12">
            Ready to start your next project with me? Send me a message or connect with me through social media!
          </p>
          
          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/Techy2419" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/romil-patel-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:romilpatel2007@gmail.com"
              className="p-4 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground">
        <p>© 2025 Romil Patel. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Index;

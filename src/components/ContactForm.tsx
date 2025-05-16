
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center space-y-6">
        <a 
          href="https://github.com/Techy2419" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-3 rounded-lg transition-all hover:text-cyan-500 group"
        >
          <Github size={24} className="text-primary" />
          <div>
            <p className="font-semibold text-foreground">GitHub</p>
            <p className="text-sm text-muted-foreground">github.com/Techy2419</p>
          </div>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/romil-patel-" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-3 rounded-lg transition-all hover:text-cyan-500 group"
        >
          <Linkedin size={24} className="text-primary" />
          <div>
            <p className="font-semibold text-foreground">LinkedIn</p>
            <p className="text-sm text-muted-foreground">linkedin.com/in/romil-patel-</p>
          </div>
        </a>
        
        <a 
          href="mailto:romilpatel2007@gmail.com" 
          className="flex items-center space-x-3 p-3 rounded-lg transition-all hover:text-cyan-500 group"
        >
          <Mail size={24} className="text-primary" />
          <div>
            <p className="font-semibold text-foreground">Email</p>
            <p className="text-sm text-muted-foreground">romilpatel2007@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactForm;

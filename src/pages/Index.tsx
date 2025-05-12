
import React from 'react';
import ContactForm from '../components/ContactForm';

const Index = () => {
  return (
    <div>
      {/* This div will hold the contact form section */}
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Let's Connect</h1>
            <p className="text-xl text-gray-300">Fill out the form below to send me a message</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Index;

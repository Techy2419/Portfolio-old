
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, User, Send } from 'lucide-react';

// Update the interface to extend Record<string, unknown>
interface FormValues extends Record<string, unknown> {
  user_name: string;
  user_email: string;
  message: string;
}

interface FormState {
  values: FormValues;
  isSubmitting: boolean;
  status: 'idle' | 'success' | 'error';
}

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
    values: {
      user_name: '',
      user_email: '',
      message: '',
    },
    isSubmitting: false,
    status: 'idle',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, isSubmitting: true }));

    emailjs
      .send(
        'service_hr5fel7',
        'template_3y8l8dn',
        formState.values,
        'b-uNk6s2WC-8hJ1WN'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormState({
            values: {
              user_name: '',
              user_email: '',
              message: '',
            },
            isSubmitting: false,
            status: 'success',
          });
          
          // Reset form status after 5 seconds
          setTimeout(() => {
            setFormState(prev => ({
              ...prev,
              status: 'idle'
            }));
          }, 5000);
        },
        (err) => {
          console.error('FAILED...', err);
          setFormState(prev => ({
            ...prev,
            isSubmitting: false,
            status: 'error',
          }));
          
          // Reset form status after 5 seconds
          setTimeout(() => {
            setFormState(prev => ({
              ...prev,
              status: 'idle'
            }));
          }, 5000);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group mb-4">
          <label htmlFor="user_name" className="mb-2 flex items-center">
            <User className="mr-2" size={18} />
            <span>Your Name</span>
          </label>
          <Input
            type="text"
            name="user_name"
            id="user_name"
            value={formState.values.user_name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="form-input"
          />
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="user_email" className="mb-2 flex items-center">
            <Mail className="mr-2" size={18} />
            <span>Your Email</span>
          </label>
          <Input
            type="email"
            name="user_email"
            id="user_email"
            value={formState.values.user_email}
            onChange={handleChange}
            required
            placeholder="johndoe@example.com"
            className="form-input"
          />
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="message" className="mb-2">Your Message</label>
          <Textarea
            name="message"
            id="message"
            value={formState.values.message}
            onChange={handleChange}
            required
            placeholder="Hello, I'd like to discuss a project with you..."
            className="form-textarea"
            rows={6}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={formState.isSubmitting}
          className="w-full submit-button"
        >
          {formState.isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <Send className="mr-2" size={18} />
              Send Message
            </>
          )}
        </Button>
        
        {formState.status === 'success' && (
          <div className="mt-4 text-center p-3 success-message">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        
        {formState.status === 'error' && (
          <div className="mt-4 text-center p-3 error-message">
            Oops! Something went wrong. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

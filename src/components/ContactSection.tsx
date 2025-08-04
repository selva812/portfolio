// components/sections/ContactSection.tsx
import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';


const ContactSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mt-1 mr-3 p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p>selva8121999@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-3 p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400">
                <FaPhone size={20} />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p>9943882575</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-3 p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400">
                <FaGithub size={20} />
              </div>
              <div>
                <h4 className="font-medium">GitHub</h4>
                <p>https://github.com/selva812</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mt-1 mr-3 p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Address</h4>
                <p>63/Yegova Illam, Ramaiaha 4th Cross Street, Jaihindpuram, Madurai-625011</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-700" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-700" 
                placeholder="Your Email" 
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-700" 
                placeholder="Subject" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-700" 
                placeholder="Your Message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
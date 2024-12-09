import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="contact" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-400">Let's discuss how we can help with your next project</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-white" 
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-white" 
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-white"
                required
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
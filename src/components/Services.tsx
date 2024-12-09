import React from 'react';
import { Server, Cloud, Lock, GitBranch } from 'lucide-react';

const services = [
  {
    title: 'Backend Development',
    description: 'Robust and scalable backend solutions using modern technologies and best practices.',
    icon: Server
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Automated deployment pipelines and infrastructure management for optimal performance.',
    icon: Cloud
  },
  {
    title: 'Security Implementation',
    description: 'Implementing secure systems and following security best practices to protect your data.',
    icon: Lock
  },
  {
    title: 'System Architecture',
    description: 'Designing scalable and maintainable system architectures for complex applications.',
    icon: GitBranch
  }
];

export function Services() {
  return (
    <div id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Services</h2>
          <p className="mt-4 text-xl text-gray-400">Comprehensive solutions for your technical needs</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <service.icon className="h-12 w-12 text-emerald-500" />
              <h3 className="mt-5 text-lg font-medium text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
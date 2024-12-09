import React from 'react';
import { Terminal, Server, Cloud, Database } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-black pt-16 pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-12 md:pt-40 md:pb-20">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Connecting Ideas.</span>
                <span className="block text-emerald-500">Empowering Innovation.</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Backend development and DevOps solutions that power the modern web. Building robust, scalable systems that drive your success.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="https://github.com/gustavorh/"
                    target='_blank'
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-emerald-500 hover:bg-emerald-600 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-8 text-emerald-500">
            <Terminal className="w-8 h-8 animate-float" style={{ animationDelay: '0s' }} />
            <Server className="w-8 h-8 animate-float" style={{ animationDelay: '0.5s' }} />
            <Cloud className="w-8 h-8 animate-float" style={{ animationDelay: '1s' }} />
            <Database className="w-8 h-8 animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
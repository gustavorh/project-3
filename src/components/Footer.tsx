import React from 'react';
import { Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Terminal className="h-6 w-6 text-emerald-500" />
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PivotNode.net. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
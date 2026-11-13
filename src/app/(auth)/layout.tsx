import Link from 'next/link';
import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-8">
      <div className="w-full max-w-5xl">
        {/* Bouton Retour clairement stylisé pour être visible */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-bold text-gray-800 hover:text-sky-600 mb-6 transition-colors"
        >
          ← Retour
        </Link>
        {children}
      </div>
    </div>
  );
}
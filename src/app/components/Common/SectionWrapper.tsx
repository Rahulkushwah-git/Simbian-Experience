'use client';
import { ReactNode } from 'react';


export default function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <main className='bgImage'>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>

  );
}


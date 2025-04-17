'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Simbian Security</h1>
      <div className="space-x-4">
        <Link href="#without" className="hover:text-gray-300">Without Simbian</Link>
        <Link href="#with" className="hover:text-gray-300">With Simbian</Link>
      </div>
    </nav>
  );
}

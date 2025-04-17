// File: /components/Common/Icon.tsx
'use client';
import { ReactNode } from 'react';

export default function Icon({ children }: { children: ReactNode }) {
  return <div className="text-2xl text-gray-600">{children}</div>;
}
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCardProps } from './AlertCardProps';

export default function AlertCard({ title, count, icon, alerts }: AlertCardProps) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [currentAlerts, setCurrentAlerts] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedCount((prev) => (prev < count ? prev + 1 : prev));
      setCurrentAlerts((prev) => {
        const nextAlert = alerts[Math.floor(Math.random() * alerts.length)];
        return [nextAlert, ...prev].slice(0, 5);
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [count, alerts]);

  return (
    <motion.div
      className="bg-red-100 p-4 rounded-2xl shadow-md w-full max-w-sm"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3">
        <div className="text-3xl text-red-500">{icon}</div>
        <h3 className="text-xl font-bold text-red-800">{title}</h3>
      </div>
      <motion.div className="text-4xl font-extrabold text-red-600 mt-2">
        {displayedCount}
      </motion.div>
      <ul className="mt-3 text-sm text-red-700 space-y-1">
        {currentAlerts.map((alert, index) => (
          <motion.li
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            ⚠️ {alert}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

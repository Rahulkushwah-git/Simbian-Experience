'use client';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface StatProps {
  title: string;
}

export default function FinalStatsCard({ title }: StatProps) {
  return (
    <motion.div
      className="bg-green-50 p-5 rounded-2xl w-full max-w-sm text-center shadow"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-green-500 text-4xl mb-2">
        <FaCheck />
      </div>
      <h3 className="text-xl font-bold text-green-700 mb-2">{title}</h3>
      <motion.p className="text-3xl font-extrabold text-green-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        0
      </motion.p>
    </motion.div>
  );
}

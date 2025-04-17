'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const steps = [
  'Triaged & Reported – SOC Agent handled investigation and reporting',
  'Automated Response – Incident automatically contained',
  'Comprehensive Analysis – AI recognized patterns',
  'Accurate Detection – Zero false positives',
  '24/7 Coverage – No analyst fatigue'
];

export default function StepFlow() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="bg-green-100 p-4 rounded-xl text-green-800 shadow-md w-full max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3 }}
        >
          <div className="flex items-start gap-2">
            <FaCheckCircle className="text-green-500 mt-1" />
            <p>{step}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

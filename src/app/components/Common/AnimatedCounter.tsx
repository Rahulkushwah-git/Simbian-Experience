'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export default function AnimatedCounter({ from = 0, to = 100 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, to, { duration: 1.5 });
    return controls.stop;
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
}
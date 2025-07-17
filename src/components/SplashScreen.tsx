'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set up timer to hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#08A045]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Logo with smooth entrance */}
          <motion.div
            className="relative z-[9999] text-4xl font-semibold tracking-wide text-white md:text-6xl"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              De.Sma.Re.
            </motion.div>
          </motion.div>

          {/* Elegant horizontal line with smooth expansion */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-0.5 origin-center bg-white"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '60vw', opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: 'easeInOut' }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />

          {/* Smooth curtain reveal - Left panel */}
          <motion.div
            className="absolute left-0 top-0 z-40 h-full w-1/2 bg-[#08A045]"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 0.8, delay: 1.5, ease: 'easeInOut' }}
          />

          {/* Smooth curtain reveal - Right panel */}
          <motion.div
            className="absolute right-0 top-0 z-40 h-full w-1/2 bg-[#08A045]"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.8, delay: 1.5, ease: 'easeInOut' }}
          />

          {/* Subtle background gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#08A045] via-[#0A8A42] to-[#08A045]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
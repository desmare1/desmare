'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set up timer to hide splash screen after animation
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('desmare-splash-seen', 'true');
      onComplete?.();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#08A045]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 5 }}
        >
          {/* Logo with focus animation */}
          <motion.div
            className="relative z-[9999] text-4xl font-semibold tracking-wide text-white md:text-6xl"
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              De.Sma.Re.
            </motion.div>
          </motion.div>

          {/* Horizontal divider line */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-0.5 origin-center bg-white"
            initial={{ width: 0 }}
            animate={{ width: '100vw' }}
            transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />

          {/* Left panel */}
          <motion.div
            className="absolute left-0 top-0 z-40 h-full w-[55%] bg-[#08A045]"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 1.2, delay: 1.8, ease: 'easeInOut' }}
          />

          {/* Right panel */}
          <motion.div
            className="absolute right-0 top-0 z-40 h-full w-[45%] bg-[#08A045]"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, delay: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

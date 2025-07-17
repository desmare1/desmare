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
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Split logo into individual letters for staggered animation
  const logoText = 'De.Sma.Re.';
  const letters = logoText.split('');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#08A045]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Subtle animated background particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-white opacity-10"
                style={{
                  left: `${15 + i * 7}%`,
                  top: `${20 + i * 5}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Main logo container */}
          <motion.div
            className="relative z-20 text-5xl font-bold tracking-wider md:text-7xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
          >
            <div className="flex">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-white"
                  style={{ color: '#ffffff' }}
                  initial={{
                    opacity: 0,
                    y: 30,
                    rotateX: 90,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: 'backOut',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtle breathing effect */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-lg bg-white/5"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Circular reveal transition */}
          <motion.div
            className="absolute inset-0 origin-center rounded-full bg-[#08A045]"
            initial={{ scale: 0 }}
            animate={{ scale: 0 }}
            exit={{ scale: 15 }}
            transition={{
              duration: 0.8,
              ease: 'circOut',
            }}
            style={{
              clipPath: 'circle(0% at 50% 50%)',
            }}
          />

          {/* Smooth fade overlay for seamless transition */}
          <motion.div
            className="absolute inset-0 bg-[#08A045]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: 'easeOut',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

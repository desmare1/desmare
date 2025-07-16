'use client';

import { motion } from 'framer-motion';
import { PiGearSixFill } from 'react-icons/pi';

export default function UnderConstruction() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Perfectly looped gear animations
  const gear1Animation = {
    rotate: [0, 360],
    transition: {
      times: [0, 1],
      duration: 10,
      ease: 'linear',
      repeat: Infinity,
      repeatDelay: 0,
    },
  };

  const gear2Animation = {
    rotate: [0, -360],
    transition: {
      times: [0, 1],
      duration: 15,
      ease: 'linear',
      repeat: Infinity,
      repeatDelay: 0,
    },
  };

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-construction-bg">
      <div className="container-custom">
        <motion.div
          className="mx-auto max-w-xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo placeholder */}
          <motion.div
            className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-construction-accent-transparent"
            variants={itemVariants}
          >
            <div className="text-3xl font-bold text-construction-text">D</div>
          </motion.div>

          {/* Company name */}
          <motion.div className="mb-5" variants={itemVariants}>
            <h1 className="text-3xl font-bold tracking-tight text-construction-text">
              De.Sma.Re
            </h1>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            className="mb-4 text-4xl font-bold text-construction-text md:text-5xl"
            variants={itemVariants}
          >
            Sito in costruzione
          </motion.h2>

          {/* Subheading */}
          <motion.h3
            className="mb-10 text-xl text-construction-text-secondary md:text-2xl"
            variants={itemVariants}
          >
            De.Sma.Re sarà presto online!
          </motion.h3>

          {/* Animated construction graphic */}
          <motion.div
            className="relative mx-auto mb-10 h-44 w-44"
            variants={itemVariants}
          >
            {/* Gear animations */}
            <motion.div
              className="absolute left-4 top-4 text-construction-accent"
              animate={gear1Animation}
              style={{ originX: 'center', originY: 'center' }}
            >
              <PiGearSixFill size={72} />
            </motion.div>

            <motion.div
              className="absolute bottom-4 right-4 text-construction-accent"
              animate={gear2Animation}
              style={{ originX: 'center', originY: 'center' }}
            >
              <PiGearSixFill size={72} />
            </motion.div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants}>
            <div className="inline-block rounded-lg border-2 border-construction-border px-6 py-4 shadow-sm">
              <h3 className="text-lg font-medium text-construction-text md:text-xl">
                Per maggiori informazioni:{' '}
                <a
                  href="mailto:info@desmare.it"
                  className="text-construction-accent hover:underline"
                >
                  info@desmare.it
                </a>
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

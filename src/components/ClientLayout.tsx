'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './SplashScreen';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showSplash, setShowSplash] = useState(false);
  const [isBodyLocked, setIsBodyLocked] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Mark component as hydrated
    setIsHydrated(true);
    
    // Only show splash on the home page
    if (pathname === '/') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check if this is a fresh page load (first visit or refresh)
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      const navigationType = navigationEntries.length > 0 ? navigationEntries[0].type : 'navigate';
      
      // Show splash on:
      // 1. Page refresh (reload)
      // 2. First visit (navigate with empty referrer or different domain)
      const isRefresh = navigationType === 'reload';
      const isFirstVisit = navigationType === 'navigate' && 
        (!document.referrer || !document.referrer.includes(window.location.host));
      
      const shouldShowSplash = (isRefresh || isFirstVisit) && !prefersReducedMotion;
      
      if (shouldShowSplash) {
        setShowSplash(true);
        setIsBodyLocked(true);
        setShowContent(false);
        
        // Lock body scroll
        document.body.style.overflow = 'hidden';
      } else {
        setShowSplash(false);
        setShowContent(true);
      }
    } else {
      setShowSplash(false);
      setShowContent(true);
    }
  }, [pathname]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsBodyLocked(false);
    
    // Unlock body scroll
    document.body.style.overflow = '';
    
    // Show content with a slight delay for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {isHydrated && showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className={isBodyLocked ? 'overflow-hidden' : ''}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
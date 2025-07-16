'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SplashScreen from './SplashScreen';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showSplash, setShowSplash] = useState(false);
  const [isBodyLocked, setIsBodyLocked] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Mark component as hydrated
    setIsHydrated(true);
    
    // Only show splash on the home page
    if (pathname === '/') {
      const hasSeenSplash = sessionStorage.getItem('desmare-splash-seen');
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (!hasSeenSplash && !prefersReducedMotion) {
        setShowSplash(true);
        setIsBodyLocked(true);
        
        // Lock body scroll
        document.body.style.overflow = 'hidden';
      } else {
        setShowSplash(false);
      }
    } else {
      setShowSplash(false);
    }
  }, [pathname]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsBodyLocked(false);
    
    // Unlock body scroll
    document.body.style.overflow = '';
  };

  return (
    <>
      {isHydrated && showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={isBodyLocked ? 'overflow-hidden' : ''}>
        {children}
      </div>
    </>
  );
}
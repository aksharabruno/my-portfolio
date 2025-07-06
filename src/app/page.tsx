'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from './components/dashboard'; 
import ArrowDownward from './components/arrowDownward';
import About from './components/about';

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showWebsite, setShowWebsite] = useState(false);

  const router = useRouter();

  const goToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, '', '/#about');
    }
  };

  useEffect(() => {
    const handleHashNavigation = () => {
      if (window.location.hash === '#about') {
        setTimeout(() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    handleHashNavigation();

    // Listen for hash changes (back/forward browser buttons)
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setShowWebsite(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-custom">
      {showWelcome && (
        <div className="absolute inset-0 flex items-center justify-center bg-custom z-20">
          <h1 className="text-6xl font-bold text-body welcome-text text-header">
            welcome
          </h1>
        </div>
      )}

      {showWebsite && (
        <div className="fade-in-website w-full">
          <Dashboard />
          
          <div className="h-[30vh] md:h-[90vh] lg:h-[90vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-header home-content">
              Hey! I am Akshara Bruno
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-body p-4">
              MSc Computer Science student | Frontend Developer | Singer | Writer | list goes on...
            </p>
            <button className="cursor-pointer arrow-down animate-bounce" onClick={goToAbout}>
              <ArrowDownward />
            </button>
          </div>

          <div id='about'>
            <About />
          </div>
        </div>
      )}
    </div>
  );
}
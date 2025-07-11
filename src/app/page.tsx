"use client";

import { useState, useEffect } from "react";
import Dashboard from "./components/dashboard";
import ArrowDownward from "./components/downwardArrow";
import About from "./components/about";
import { CyclicTypewriter } from "./components/typewriter";
import Timeline from "./components/timeline";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import { BasicTypewriter } from "./components/typewriter";

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showWebsite, setShowWebsite] = useState(false);

  const goToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleHashNavigation = () => {
      if (window.location.hash === "#about") {
        setTimeout(() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    };

    handleHashNavigation();

    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setShowWebsite(true);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-custom">
      {showWelcome && (
        <div className="absolute inset-0 flex items-center justify-center bg-custom z-20">
          <h1 className="text-6xl font-bold text-body welcome-text text-header">
            <BasicTypewriter text="welcome" />
          </h1>
        </div>
      )}

      {showWebsite && (
        <div className="fade-in-website w-full p-4">
          <Dashboard />

          <div className="h-[30vh] md:h-[90vh] lg:h-[90vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-header home-content p-2">
              Hey! I am Akshara Bruno
            </h1>

            <CyclicTypewriter />

            <button
              className="arrow-down animate-bounce md:p-8 hidden md:block"
              onClick={goToAbout}
            >
              <ArrowDownward />
            </button>
          </div>

          <div id="about" className="items-center justify-center flex flex-col">
            <About />
          </div>
          <Timeline />
          <Blogs />

          <div id="contact">
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

"use client"

import { useState, useEffect } from "react";
import About from "../components/about";
import Dot from "../components/animata/background/dot";
import BlogGrid from "../components/blogs";
import Dashboard from "../components/dashboard";
import Timeline from "../components/timeline";
import { CyclicTypewriter } from "../components/typewriter";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Contact from "../components/contact";

export default function HomePage() {
  const [isSmallWindow, setIsSmallWindow] = useState(false);

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
    const width = window.innerWidth;
    if (width <= 430) {
      setIsSmallWindow(true);
    }
  }, []);

  return (
    <Dot
      children={
        <div className="fade-in-website w-full p-4">
          <Dashboard />

          <div className="h-[30vh] md:h-[90vh] lg:h-[90vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-header home-content p-2">
              Hey! I am Akshara Bruno
            </h1>

            <CyclicTypewriter />

            <button
              className="arrow-down animate-bounce md:p-8 hidden md:block cursor-pointer"
              onClick={goToAbout}
            >
              <ArrowDownIcon className="w-8 h-8 text-body" />
            </button>
          </div>

          <div id="about" className="items-center justify-center flex flex-col">
            <About />
          </div>
          <Timeline />
          <BlogGrid isSmallWindow={isSmallWindow} />

          <div id="contact">
            <Contact />
          </div>
        </div>
      }
    />
  );
}

import React from "react";
import "../globals.css";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiJest,
  SiExpress,
  SiFlask,
  SiTailwindcss,
} from "react-icons/si";
import { FaGit, FaDocker } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const TechStack = () => {
  const technologies = [
    { name: "JavaScript", icon: <SiJavascript color="#22c55e" />, delay: 0 },
    { name: "TypeScript", icon: <SiTypescript color="#22c55e" />, delay: 0.5 },
    { name: "Python", icon: <SiPython color="#22c55e" />, delay: 1 },
    { name: "React", icon: <SiReact color="#22c55e" />, delay: 2.5 },
    { name: "Redux", icon: <SiRedux color="#22c55e" />, delay: 3 },
    { name: "Jest", icon: <SiJest color="#22c55e" />, delay: 3.5 },
    { name: "Node.js", icon: <SiNodedotjs color="#22c55e" />, delay: 4 },
    { name: "Express", icon: <SiExpress color="#22c55e" />, delay: 4.5 },
    { name: "Flask", icon: <SiFlask color="#22c55e" />, delay: 4 },
    { name: "Git", icon: <FaGit color="#22c55e" />, delay: 4.5 },
    { name: "Docker", icon: <FaDocker color="#22c55e" />, delay: 5 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss color="#22c55e" />,
      delay: 5.5,
    },
    { name: "Next.js", icon: <RiNextjsLine color="#22c55e" />, delay: 6 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-4 gap-8 place-items-center">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-3 group cursor-pointer"
            style={{
              animation: `float 3s ease-in-out infinite`,
              animationDelay: `${tech.delay * 0.2}s`,
            }}
          >
            <div className="text-5xl transform transition-transform duration-300 group-hover:scale-110">
              {tech.icon}
            </div>
            <span className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

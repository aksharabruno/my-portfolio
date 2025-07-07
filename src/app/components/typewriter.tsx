import React, { useState, useEffect } from "react";
import "../globals.css";

export default function Typewriter() {
  const words = [
    "MSc Computer Science student",
    "Frontend Developer",
    "Volunteer",
    "Writer",
    "(bathroom) Singer :)",
  ];
  const prefix = "I am a ";

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className="text-xl ">
      <span className="text-body">{prefix}</span>
      <span className="text-highlight">{currentText}</span>
      <span className="animate-pulse text-body">|</span>
    </div>
  );
}

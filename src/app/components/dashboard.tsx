"use client";

import "../globals.css";

export default function Dashboard() {
  const goToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 color-background shadow">
      <button className="text-xl font-bold text-body name" onClick={goToAbout}>
        aksharabruno
      </button>
      <button
        className="text-body px-4 py-2 contact-button"
        onClick={goToContact}
      >
        contact
      </button>
    </div>
  );
}

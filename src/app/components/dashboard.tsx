"use client";

import "../styles/dashboard.css";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const goToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", "/#about");
    }
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 color-background shadow">
      <button
        className="text-xl font-bold text-body name cursor-pointer"
        onClick={goToAbout}
      >
        aksharabruno
      </button>
      <button className="text-body px-4 py-2 contact-button cursor-pointer">
        contact
      </button>
    </div>
  );
}

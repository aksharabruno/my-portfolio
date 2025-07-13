"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BasicTypewriter } from "./components/typewriter";

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-custom">
      <div className="absolute inset-0 flex items-center justify-center bg-custom z-20">
        <h1 className="text-6xl font-bold text-body welcome-text text-header">
          <BasicTypewriter text="welcome" showCursor={false} />
        </h1>
      </div>
    </div>
  );
}

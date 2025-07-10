import React, { useState } from "react";
import Image from "next/image";
import {myEmailID, myLinkedIn, myInstagram, myGithub, myPhone} from "../data/contact";
import linkedInIcon from "../images/linkedin.svg";
import instagramIcon from "../images/instagram.svg";
import githubIcon from "../images/github.svg";
import phoneIcon from "../images/phone.svg";

type ContactProps = {
  emailID: string;
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailID = myEmailID;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailID);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-background pt-20 mb-5">
      <div className="flex flex-row items-center">
        <span className="text-sm md:text-lg text-header">Are you a recruiter? </span>
        {"/ "}
        <span className="text-sm md:text-lg text-highlight">Let's schedule a call :)</span>
      </div>
      <div
        className="font-bold text-header contact-email mt-2 cursor-pointer text-2xl md:text-4xl"
        onClick={copyToClipboard}
      >
        aksharabruno0119@gmail.com
      </div>
      {copied && <span className="ml-2 text-highlight">✓ Copied!</span>}
      <div className="flex flex-row items-center mb-20 mt-5">
        <Image
          priority
          src={linkedInIcon}
          alt="Find me on LinkedIn"
          className="cursor-pointer hover:scale-120 mx-2"
          onClick={() => window.open(myLinkedIn, "_blank")}
        />
        <Image
          priority
          src={instagramIcon}
          alt="Find me on Instagram"
          className="cursor-pointer hover:scale-120 mx-2"
          onClick={() => window.open(myInstagram, "_blank")}
        />
        <Image
          priority
          src={githubIcon}
          alt="Find me on Github"
          className="cursor-pointer hover:scale-120 mx-2"
          onClick={() => window.open(myGithub, "_blank")}
        />
        <Image
          priority
          src={phoneIcon}
          alt="Reach out to me via Phone"
          className="cursor-pointer hover:scale-120 mx-2"
          onClick={copyToClipboard}
        />
      </div>
      <p className="text-header">designed & built by yours truly</p>
    </div>
  );
}

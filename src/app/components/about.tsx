import Image from "next/image";
import profileImage from "../images/profile.jpg";
import { FadeUpElement } from "./fadeUpElement";
import "../globals.css";

export default function About() {
  return (
    <FadeUpElement
      children={
        <>
          <div className="lg:max-w-4xl flex flex-col md:flex-row lg:flex-row items-center justify-center border border-white m-8 p-8 gap-6">
            <Image
              src={profileImage}
              alt="Profile picture"
              width={300}
              height={300}
            />
            <p className="text-body text-center md:text-left">
              Dear viewer, <br /> <br />
              Welcome to my little corner in the Internet. <br />
              I’m Akshara, and I write "things". Sometimes that means code. And
              on the other times its dramatic internal monologues fueled by my
              cry for caffeine. I’m a Computer Science grad student specialising
              in Software Engineering and Green IT— which means yes, I do a lot
              of academic deep dives, but I also believe creativity is a human
              necessity. <br />
              And so, here I am — trying to make sense of the world, one blank
              page and blinking cursor at a time.
            </p>
          </div>
        </>
      }
    />
  );
}

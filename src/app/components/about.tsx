import Image from "next/image";
import profileImage from "../images/profile.jpg";
import { FadeUpElement } from "./fadeUpElement";

export default function About() {
  return (
    <FadeUpElement
      children={
        <>
          <div className="lg:min-w-4xl flex flex-col md:flex-row lg:flex-row items-center justify-center border border-white rounded-lg m-8 p-8 gap-6">
            <Image
              src={profileImage}
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-body text-center lg:text-left">
              Just an amateur embracing her interests.
            </h2>
          </div>
        </>
      }
    />
  );
}

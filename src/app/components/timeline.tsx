import { useState } from "react";
import timelineData from "../data/timelineData";
import "../globals.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { BasicTypewriter } from "./typewriter";
import { FadeUpElement } from "./fadeUpElement";
import TechStack from "./techStack";

type TimelineItemProps = {
  year: string | number;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
};

function TimelineItem({
  year,
  title,
  description,
  isSelected,
  onClick,
}: TimelineItemProps) {
  return (
    <FadeUpElement
      children={
        <>
          <div className="flex flex-col items-start justify-start mb-8">
            <div className="flex items-center mb-4 md:px-4" onClick={onClick}>
              {isSelected ? (
                <>
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-green-500 animate-pulse timeline-icon">
                    <ArrowRightIcon className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex flex-col items-start justify center px-4">
                    <h3 className="text-highlight text-3xl font-semibold ">
                      {title}
                    </h3>
                    <h4 className="text-body text-lg font-semibold ">{year}</h4>
                  </div>
                </>
              ) : (
                <>
                  <ArrowRightIcon className="w-4 h-6 text-body" />
                  <div className="flex flex-col items-start justify center px-4">
                    <h3 className="text-header text-xl timeline-item">
                      {title}
                    </h3>
                    <h4 className="text-body text-lg">{year}</h4>
                  </div>
                </>
              )}
            </div>
            {isSelected && (
              <div>
                <p className="text-body pl-9 md:pl-13.5 lg:max-w-3xl">
                  {description}
                </p>
              </div>
            )}
          </div>
        </>
      }
    />
  );
}

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  return (
    <div className="md:flex md:flex-row">
      <div className="flex flex-col justify-center px-6 md:m-8 lg:max-w-3xl">
        <h1 className="text-xl text-body text-left py-6">
          <BasicTypewriter text="What have I been upto?" />
        </h1>
        {timelineData.map(
          (
            item: { year: string; title: string; description: string },
            index: number
          ) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              isSelected={selectedIndex === index}
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
            />
          )
        )}
        <FadeUpElement
          children={
            <>
              <div className="flex items-center justify-center mt-4 mb-8 lg:max-w-3xl">
                <span className="text-header">Download my resume here</span>
                <span>  
                  <a
                    href="../files/AksharaBruno_Resume.pdf"
                    download
                    className="download-cv mx-4 px-6 py-2"
                  >
                    Resume
                  </a>
                </span>
              </div>
            </>
          }
        />
      </div>
      <TechStack />
    </div>
  );
}

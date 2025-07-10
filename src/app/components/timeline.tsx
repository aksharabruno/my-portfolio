import { useState } from "react";
import timelineData from "../data/timelineData";
import "../globals.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

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
    <div className="flex flex-col items-start justify-start mb-8">
      <div
        className="flex items-center mb-4 px-4 cursor-pointer"
        onClick={onClick}
      >
        {isSelected ? (
          <>
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-green-500 animate-pulse timeline-icon">
              <ArrowRightIcon className="w-4 h-4 text-green-500" />
            </div>

            <h4 className="text-body text-lg font-semibold px-4">{year}</h4>
            <h3 className="text-highlight text-2xl font-semibold px-4">
              {title}
            </h3>
          </>
        ) : (
          <>
            <ArrowRightIcon className="w-4 h-6 text-body" />
            <h4 className="text-body text-lg font-semibold pl-6">{year}</h4>
            <h3 className="text-header text-xl pl-7.5 timeline-item">
              {title}
            </h3>
          </>
        )}
      </div>
      {isSelected && (
        <div>
          <p className="text-body pl-11 md:pl-13.5 lg:pl-13.5 lg:max-w-3xl">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(3);

  return (
    <div className="flex flex-col justify-center px-6 mb-8">
      <h1 className="text-2xl font-bold text-body text-left py-4">
        What have I been up to?
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
    </div>
  );
}

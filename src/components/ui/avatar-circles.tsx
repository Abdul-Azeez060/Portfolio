"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

interface Avatar {
  imageUrl?: string | StaticImageData;
  profileUrl?: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div
      className={cn(
        "z-10 flex -space-x-1 md:-space-x-2 rtl:space-x-reverse",
        className
      )}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer">
          <img
            key={index}
            className="h-4 w-4 md:h-6 md:w-6 rounded-full border-2 border-white dark:border-gray-800"
            src={url.imageUrl as string}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
    </div>
  );
};

export default AvatarCircles;

"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  if (typeof window !== 'undefined') {
    console.log("there is no second best");
  }

  return (
    <div className="relative h-screen bg-[#301f13] flex justify-center items-center">
      {/* Apollo Image Container */}
      <div className="relative w-full h-0 pb-[56.25%]">
        <Image
          src="https://i.nostr.build/LeVgQ.png"
          alt="Apollo"
          layout="fill"
          objectFit="contain"
          className="z-0"
          width={undefined}
          height={undefined}
        />
      </div>

      {/* Overlay content */}
      <div className="absolute mb-32 inset-0 flex flex-col items-center justify-center z-10">
        {/* Spacer div to push content to the bottom */}
        <div className="flex-grow" />

        {/* Enter Button */}
        <Link href="/donors">
          <p
            className="enter-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Enter
          </p>
        </Link>
      </div>
    </div>
  );
}

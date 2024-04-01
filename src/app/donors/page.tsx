"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="h-screen bg-[#301f13] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/footprint.png" // Ensure the image is in the `public` directory.
          alt="Footprint"
          layout="fill"
          objectFit="contain" // Use contain to ensure the image is not stretched.
          className="opacity-75" // Adjust opacity if needed to match the design.
        />
      </div>

      {/* Apollo Text */}
      <h1 className="text-white font-bold text-[150px] leading-none z-10 relative">Apollo</h1>
      <p className="text-white text-4xl z-10 relative">829,388</p>

      {/* Enter Button */}
      <Link href="/abstract">
        <button 
            className={`enter-button ${isHovered ? 'hover-effect' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Continue
          </button>
      </Link>
    </div>
  );
}

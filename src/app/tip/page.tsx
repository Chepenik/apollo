'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const logoImage = "https://i.nostr.build/AaKv6.png";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen bg-[#301f13] flex justify-center items-center">
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Top donors heading */}
        <h2 className="text-white text-3xl mb-8">Got Value From This Protocol? Consider Returning Some Value Back :)</h2>
              <Image
                src={logoImage}
                alt={"tip image"}
                width={400}
                height={400}
                className="object-contain p-2"
              />

        <div className="flex flex-row items-center justify-center space-x-32">
          <Link href="/">
            <p
              className={`enter-button text-white px-4 py-2 rounded-md transition-colors duration-300 ${
                isHovered ? '' : ''
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
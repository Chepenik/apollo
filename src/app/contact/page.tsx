'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const donorLogos = Array.from({ length: 21 }, (_, i) => `/logo-${i + 1}.png`);

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen bg-[#301f13] flex justify-center items-center">
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Top donors heading */}
        <h2 className="text-white text-3xl mb-8">Top donors</h2>

        {/* Grid of donor logos */}
        <div className="grid grid-cols-7 gap-4 mb-8">
          {donorLogos.map((logo, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden">
              <Image
                src={logo}
                alt={`Donor ${index + 1}`}
                width={80}
                height={80}
                className="object-contain p-2"
              />
              <p className="text-center text-sm text-gray-600">
                Donor {index + 1} <br /> Logo (link)
              </p>
            </div>
          ))}
        </div>

        {/* Bottom buttons and text */}
        <div className="flex flex-row items-center justify-center space-x-32">
          <p className="text-white">NOSTR</p>
          <Link href="/">
            <p
              className={`enter-button text-white px-4 py-2 rounded-md transition-colors duration-300 ${
                isHovered ? '' : ''
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Continue
            </p>
          </Link>
          <p className="text-white flex items-center">
            Support with Sats{' '}
            <span className="ml-2 text-yellow-400">&#9889;</span>{' '}
            <span className="ml-2 text-orange-500">&#9679;</span>
          </p>
        </div>
      </div>
    </div>
  );
}
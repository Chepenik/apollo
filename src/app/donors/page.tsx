'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Array of example donor names
const donorNames = ['Nike', 'Apple', 'Google', 'Microsoft', 'Amazon', 'Facebook', 'Tesla', 'Netflix', 'Adobe', 'Airbnb', 'Samsung', 'Intel', 'Sony', 'Visa', 'Coca-Cola', 'McDonald\'s', 'Toyota', 'IBM', 'Pepsi', 'Twitter', 'Nostr'];

// Using a single image for all logos
const logoImage = "https://i.nostr.build/6G4ya.jpg";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen bg-[#301f13] flex justify-center items-center">
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Top donors heading */}
        <h2 className="text-white text-3xl mb-8">Top donors</h2>

        {/* Grid of donor logos and names */}
        <div className="grid grid-cols-7 gap-4 mb-8">
          {donorNames.map((name, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden">
              <Image
                src={logoImage}
                alt={`${name} Logo`}
                width={80}
                height={80}
                className="object-contain p-2"
              />
              <p className="text-center text-sm text-gray-600">
                {name} <br /> Logo
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center space-x-32">
          <Link href="https://primal.net/p/npub1pegapre6vcqs22a9ccrq730gmutz2ee40ytwslt7lna8w0uw4cjsumgv6t">
          <p className="text-white">NOSTR</p>
          </Link>
          <Link href="/abstract">
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
          <Link href="/tip">
            <p className="text-white flex items-center">
              Support with Sats{' '}
              <span className="ml-2 text-yellow-400">&#9889;</span>{' '}
              <span className="ml-2 text-orange-500">&#x20BF;</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
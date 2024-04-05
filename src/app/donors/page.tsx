'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Array of example donor names and their respective image URLs
const donors = [
  { name: 'Sole Freedom', imageUrl: 'https://i.nostr.build/PO2q4.png', link: 'https://solefreedom.ca/' },
  { name: 'Obiwan Satoshi', imageUrl: 'https://i.nostr.build/WGDyV.png', link: 'https://obiwan-satoshi.github.io/ObiwanSatoshi.com/' },
  { name: 'Finney21', imageUrl: 'https://i.nostr.build/Q724Y.png', link: 'https://www.finney21.com/' },
  { name: 'Open', imageUrl: 'https://i.nostr.build/6GVnz.png' },
  { name: 'Open', imageUrl: 'https://i.nostr.build/6GVnz.png' },
  { name: 'Open', imageUrl: 'https://i.nostr.build/6GVnz.png' },
  { name: 'Open', imageUrl: 'https://i.nostr.build/6GVnz.png' },
  { name: 'Open', imageUrl: 'https://i.nostr.build/6GVnz.png' },
  { name: 'Open', imageUrl: 'https://i.nostr.build/6GVnz.png' },
  { name: 'Open', imageUrl: 'https://i.nostr.build/6GVnz.png' },
];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen bg-[#301f13] flex justify-center items-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h2 className="text-white text-3xl mb-8">Top donors</h2>

        {/* Grid of donor logos and names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {donors.map((donor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden flex flex-col items-center justify-center p-4"
            >
              <Link href={donor.link ?? ''} target="_blank">
                <Image
                  src={donor.imageUrl}
                  alt={`${donor.name} Logo`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                  {donor.name}
                </p>
              </Link> 
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-row items-center justify-center space-x-8 w-full">
          <Link href="https://primal.net/p/npub1pegapre6vcqs22a9ccrq730gmutz2ee40ytwslt7lna8w0uw4cjsumgv6t" target="_blank">
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
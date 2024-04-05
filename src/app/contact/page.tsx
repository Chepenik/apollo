'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-between bg-[#301f13] text-white font-sans">
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-6 px-4">
      <Image
          src="/Apollo transparent.png"
          alt="Apollo"
          width={200}
          height={200}
          className="mb-6"
        />
        {/* Navigation Options */}
        <div className="flex flex-col items-center space-y-3">
          <Link href="https://github.com/FootHealthProtocol/Building_Apollo/blob/main/README.md">
            <p className="hover:underline">Read the whitepaper</p>
          </Link>
          <Link href="https://github.com/FootHealthProtocol/Building_Apollo/blob/main/README.md">
            <p className="hover:underline">View GitHub repo</p>
          </Link>
          <Link href="https://github.com/FootHealthProtocol/Building_Apollo/blob/main/README.md">
            <p className="hover:underline">Propose a change</p>
          </Link>
          <Link href="/">
            <p className="hover:underline">Listen to council meetings (podcast)</p>
          </Link>
          <Link href="/">
            <p className="hover:underline">Connect with a developer with vida</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-32 mb-8">
          <Link href="https://primal.net/p/npub1pegapre6vcqs22a9ccrq730gmutz2ee40ytwslt7lna8w0uw4cjsumgv6t" target="_blank">
          <p className="text-white">NOSTR</p>
          </Link>
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
          <Link href="/tip">
            <p className="text-white flex items-center">
              Support with Sats{' '}
              <span className="ml-2 text-yellow-400">&#9889;</span>{' '}
              <span className="ml-2 text-orange-500">&#x20BF;</span>
            </p>
          </Link>
        </div>
      </div>
  );
}
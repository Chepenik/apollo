'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#301f13] text-white">
      <div className="flex-1 flex flex-col justify-center items-center space-y-6 px-4">
        <Image
          src="/Apollo transparent.png"
          alt="Apollo"
          width={200}
          height={200}
        />
        <div className="text-left">
          <Link href="https://github.com/FootHealthProtocol/Building_Apollo/blob/main/_WP_00_index">
            <p className="hover:underline text-2xl">Read the whitepaper</p>
          </Link>
          <br />
          <Link href="https://github.com/FootHealthProtocol/Building_Apollo/blob/main/README.md">
            <p className="hover:underline">View GitHub repo</p>
          </Link>
          <br />
          <Link href="https://github.com/FootHealthProtocol/Building_Apollo/pulls">
            <p className="hover:underline">Propose a change</p>
          </Link>
          <br />
          <Link href="/">
            <p className="hover:underline text-gray-400">Listen to council meetings (podcast)</p>
          </Link>
          <br />
          <Link href="/">
            <p className="hover:underline text-gray-400">Connect with a developer with vida</p>
          </Link>
        </div>
      </div>

      <div className="pb-8 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Link href="https://primal.net/p/npub1pegapre6vcqs22a9ccrq730gmutz2ee40ytwslt7lna8w0uw4cjsumgv6t" target="_blank">
            <p className="hover:underline">NOSTR</p>
          </Link>
          <Link href="/">
          <p
            className={`enter-button text-white px-4 py-2 rounded-md transition-colors duration-300 ${
              isHovered ? 'bg-transparent' : 'bg-transparent'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Home
          </p>
        </Link>
          <Link href="/tip">
            <p className="hover:underline flex items-center">
              Support with Sats <span className="ml-2 text-yellow-400">&#9889;</span> <span className="ml-2 text-orange-500">&#x20BF;</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}


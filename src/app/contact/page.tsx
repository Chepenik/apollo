'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#301f13]">
      <div className="flex-1 flex flex-col ml-20 mt-24 space-y-6 px-4">
        <div className="text-left">
          <Link href="/whitepaper">
            <p className="hover:underline text-green-500 text-4xl lg:text-6xl">
              Read the whitepaper
            </p>
          </Link>
          <br />
          <Link target='_blank' href="https://github.com/FootHealthProtocol/Building_Apollo/blob/main/README.md">
            <p className="hover:underline text-white lg:text-3xl">
              View GitHub repository
            </p>
          </Link>
          <br />
          <p className="text-white lg:text-3xl">
            To offer feedback or propose a change DM us on nostr
          </p>
        </div>
      </div>
      <div className="pb-8 px-4 text-white">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 ml-20 mt-7">
            <Link
              href="https://primal.net/p/npub1pegapre6vcqs22a9ccrq730gmutz2ee40ytwslt7lna8w0uw4cjsumgv6t"
              target="_blank"
            >
              <p className="hover:underline lg:text-2xl">NOSTR</p>
            </Link>
            <Link href="/tip">
              <p className="hover:underline flex items-center lg:text-2xl">
                Support with Sats{' '}
                <span className="ml-2 text-yellow-400">&#9889;</span>{' '}
                <span className="ml-2 text-orange-500">&#x20BF;</span>
              </p>
            </Link>
          </div>
          <div>
            <Image src="/Apollo grey foot.png" alt="Apollo" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}
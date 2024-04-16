'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Array of example donor names and their respective image URLs
const donors = [
  { name: 'Sole Freedom', imageUrl: 'https://i.nostr.build/6Gd22.png', link: 'https://solefreedom.ca/' },
  { name: 'Obiwan Satoshi', imageUrl: 'https://i.nostr.build/WGDyV.png', link: 'https://obiwan-satoshi.github.io/ObiwanSatoshi.com/' },
  { name: 'Finney21', imageUrl: 'https://i.nostr.build/Q724Y.png', link: 'https://www.finney21.com/' },
  { name: 'The Foot Collective', imageUrl: 'https://i.nostr.build/0jejX.png', link: 'https://thefootcollective.com/' },

];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#301f13] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center z-10 w-full px-4">
        <h2 className="text-white text-3xl my-8">Top donors</h2>
        {/* Grid of donor logos and names */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {donors.map((donor, index) => (
            <div key={index} className="rounded-xl overflow-hidden flex flex-col items-center justify-center p-4">
              <Link href={donor.link ?? ''} target="_blank">
                <Image
                  src={donor.imageUrl}
                  alt={`${donor.name} Logo`}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 space-y-4 sm:space-y-0 sm:space-x-8 ml-0 md:ml-28 mb-4">
          <Link href="https://primal.net/p/npub1pegapre6vcqs22a9ccrq730gmutz2ee40ytwslt7lna8w0uw4cjsumgv6t" target="_blank">
            <p className="text-white hover:underline">NOSTR</p>
          </Link>
          <Link href="/abstract">
            <p className={`enter-button text-white px-4 py-2 rounded-md transition-colors duration-300 ${isHovered ? 'transparent' : 'transparent'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              Continue
            </p>
          </Link>
          <Link href="/tip">
            <p className="text-white flex items-center hover:underline">
              Support with Sats{' '}
              <span className="ml-2 text-yellow-400">⚡</span>{' '}
              <span className="ml-2 text-orange-500">₿</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const logoImage = "https://i.nostr.build/AaKv6.png";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='bg-[#301f13] min-h-screen'>
      <div className="relative flex flex-col justify-center items-center px-4 sm:px-0">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-8">
          <h2 className="text-white text-lg sm:text-xl md:text-3xl text-center mt-4 sm:mt-8">
            Got Value From This Protocol? Consider Returning Some Value Back :)
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex flex-col items-center">
              <p className="text-yellow-400 text-3xl sm:text-4xl md:text-6xl mb-1">⚡</p>
              <Image src={logoImage} alt="Logo image" width={250} height={250} className="object-contain" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-orange-500 text-3xl sm:text-4xl md:text-6xl mb-1">₿</p>
              <Image src="/mainchain.jpg" alt="Main Chain image" width={325} height={325} className="object-contain" />
            </div>
          </div>
          <h6 className="text-gray-400 text-sm sm:text-md md:text-xl">
            Main Chain: 
            <br />
            bc1q6cmz2s3a4gm2pzkn5u59hlecy0xwtfq8mvrvxk
          </h6>
          <Link href="/">
            <p
              className={`mb-4 sm:mb-8 enter-button text-white px-4 py-2 rounded-md transition-colors duration-300 ${isHovered ? 'bg-transparent' : 'bg-transparent'}`}
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

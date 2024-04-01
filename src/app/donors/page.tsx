"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign, faBolt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  // State for hover interactions
  const [isHovered, setIsHovered] = useState(false);

  // Replace these with your actual donor logos and links
  const donors = [
    { logoSrc: '/path-to-donor-logo.png', link: '/donor-link' },
    // Add more donor objects here
  ];

  return (
    <div className="relative h-screen bg-[#301f13] flex flex-col justify-between">
      {/* Top Donors Section */}
      <div className="text-center pt-8">
        <h2 className="text-white text-3xl mb-6">Top donors</h2>
        <div className="grid grid-cols-7 gap-4 justify-center">
          {donors.map((donor, index) => (
            <Link href={donor.link} key={index}>
              <div
                className="p-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={donor.logoSrc}
                  alt={`Donor ${index + 1}`}
                  width={100}
                  height={100}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Apollo Logo */}
      <div className="text-center my-8">
        <Image
          src="/apollo.png"
          alt="Apollo Logo"
          width={200}
          height={200}
        />
      </div>

      {/* NOSTR and Continue Section */}
      <div className="flex justify-center items-center p-4">
        <div className="text-white text-xl mr-4">NOSTR</div>
        <Link href="/continue">
          <p className="text-white text-xl underline">continue</p>
        </Link>
      </div>

      {/* Support with Sats Button */}
      <div className="text-white text-center pb-8">
        <Link href="/support">
          <div className="inline-block bg-[#6B4226] px-6 py-2 rounded-full text-lg font-bold hover:bg-[#7A5030] transition flex items-center">
            Support with Sats
            <span className="ml-2 flex">
              <FontAwesomeIcon icon={faBitcoinSign} className="mr-2" />
              <FontAwesomeIcon icon={faBolt} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
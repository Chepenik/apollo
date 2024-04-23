'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleDownload = () => {
    const filePath = '/apollo/public/Apollo Protocol v0.97_840,000.pdf';
    const fileName = 'Apollo Protocol v0.97_840,000.pdf';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;

    // Append the link to the document and trigger a click event
    document.body.appendChild(link);
    link.click();

    // Clean up the temporary link element
    document.body.removeChild(link);
  };

  const slides = [
    'https://i.nostr.build/RmQdZ.jpg',
    'https://i.nostr.build/DjGZ9.jpg',
    'https://i.nostr.build/EndeP.jpg',
    'https://i.nostr.build/mlGdj.jpg',
    'https://i.nostr.build/XV5dB.jpg',
    'https://i.nostr.build/rokdV.jpg',
    'https://i.nostr.build/J6dZW.jpg',
    'https://i.nostr.build/Z5EY8.jpg',
    'https://i.nostr.build/GerZk.jpg',
  ];

  return (
    <div className="relative min-h-screen bg-[#301f13] overflow-hidden flex flex-col justify-center items-center md:px-4 sm:px-2">
      <div className="mb-8 w-full md:max-w-4xl">
        {isMobile ? (
          <div className="flex flex-col">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto mb-4"
              />
            ))}
          </div>
        ) : (
          <object
            data="/Apollo Protocol v0.97_840,000.pdf"
            type="application/pdf"
            width="100%"
            height="600"
            className="border-none"
          >
            <p className="text-white">
              Your browser does not support PDF rendering. Please try viewing
              this via a laptop or desktop or different browser.
            </p>
          </object>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-32 w-full mb-4 ml-0 md:ml-24">
        <Link
          href="https://primal.net/p/npub1pegapre6vcqs22a9ccrq730gmutz2ee40ytwslt7lna8w0uw4cjsumgv6t"
          target="_blank"
        >
          <p className="text-white hover:underline">Nostr</p>
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
          <p className="text-white flex hover:underline items-center">
            Support with Sats{' '}
            <span className="ml-2 text-yellow-400">&#9889;</span>{' '}
            <span className="ml-2 text-orange-500">&#x20BF;</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
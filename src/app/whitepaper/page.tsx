'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

const PDF_URL = '/Apollo Protocol v0.97_840,000.pdf';
const TWITTER_SHARE_URL = 'https://www.runningapollo.com/whitepaper';

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

const MobileSlides = () => (
  <div className="flex flex-col">
    {slides.map((slide, index) => (
      <Image
        key={index}
        src={slide}
        alt={`Slide ${index + 1}`}
        width={500}
        height={300}
        className="w-full h-auto mb-4"
      />
    ))}
  </div>
);

const PDFViewer = () => (
  <object
    data={PDF_URL}
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
);

const ActionButtons = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = PDF_URL;
    link.download = 'Apollo Protocol v0.97_840,000.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const shareOnTwitter = useCallback(() => {
    const whitepaperUrl = encodeURIComponent(TWITTER_SHARE_URL);
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${whitepaperUrl}&text=Treat%20your%20body%20how%20it%20deserves%20to%20be%20treated%20by%20running%20Apollo`;
    window.open(twitterShareUrl, '_blank');
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 w-full mb-4">
      <button onClick={shareOnTwitter} className="text-white hover:underline">
        Share
      </button>
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
  );
};

export default function Whitepaper() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="relative min-h-screen bg-[#301f13] overflow-hidden flex flex-col justify-center items-center md:px-4 sm:px-2">
      <div className="mb-8 w-full md:max-w-4xl">
        {isMobile ? <MobileSlides /> : <PDFViewer />}
      </div>
      <ActionButtons />
    </div>
  );
}

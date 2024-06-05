'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownload = () => {
    const filePath = '/Users/conorchepenik/Desktop/apollo/public/LE best practices [v1.11_845097].pdf';
    const fileName = 'Consensus best practices for lower extremity health professionals';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const slides = [
    { src: 'https://i.nostr.build/gZ6vY.jpg', width: 600, height: 400 },
    { src: 'https://i.nostr.build/VwMdv.jpg', width: 600, height: 400 },
  ];

  return (
    <div className="relative min-h-screen bg-[#301f13] overflow-hidden flex flex-col justify-center items-center md:px-4 sm:px-2">
      <div className="mb-8 w-full md:max-w-4xl">
        {isMobile ? (
          <div className="flex flex-col">
            {slides.map((slide, index) => (
              <Image
                key={index}
                src={slide.src}
                alt={`Slide ${index + 1}`}
                width={slide.width}
                height={slide.height}
                className="w-full h-auto mb-4"
              />
            ))}
          </div>
        ) : (
          <object
            data="/LE best practices [v1.11_845097].pdf"
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
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 w-full mb-4">
        <Link href="/endorse">
          <p className="text-white hover:underline px-4 py-2 rounded-md transition-colors duration-300 bg-transparent">
            Endorse
          </p>
        </Link>
        <Link href="/feedback">
          <p className="text-white hover:underline px-4 py-2 rounded-md transition-colors duration-300 bg-transparent">
            Offer Feedback
          </p>
        </Link>
      </div>
    </div>
  );
}
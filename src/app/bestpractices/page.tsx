'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

const slides = [
  { src: 'https://i.nostr.build/gZ6vY.jpg', width: 600, height: 400 },
  { src: 'https://i.nostr.build/VwMdv.jpg', width: 600, height: 400 },
];

const PDF_URL = '/LE best practices [v1.11_845097].pdf';

const MobileSlides = () => (
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
      Your browser does not support PDF rendering. Please try viewing this via a laptop or desktop or different browser.
    </p>
  </object>
);

const ActionButtons = () => (
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
);

export default function Home() {
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

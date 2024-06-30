'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ChevronLeft, ChevronRight, Download, Share2, Home, Zap, Bitcoin } from 'lucide-react';

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

const MobileSlides: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      <Image
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        width={500}
        height={300}
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={goToPrevSlide} className="p-2 bg-black bg-opacity-50 text-white rounded-full">
          <ChevronLeft size={24} />
        </button>
        <button onClick={goToNextSlide} className="p-2 bg-black bg-opacity-50 text-white rounded-full">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const PDFViewer: React.FC = () => (
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

interface ActionButtonProps {
  onClick?: () => void;
  icon: React.ElementType;
  text: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, icon: Icon, text }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center space-x-2 bg-[#4a3425] hover:bg-[#5a4435] text-white px-4 py-2 rounded-md transition-colors duration-300"
  >
    <Icon size={18} />
    <span>{text}</span>
  </button>
);

const ActionButtons: React.FC = () => {
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
    <div className="flex flex-wrap justify-center gap-4 w-full mb-4">
      <ActionButton onClick={handleDownload} icon={Download} text="Download" />
      <ActionButton onClick={shareOnTwitter} icon={Share2} text="Share" />
      <Link href="/" passHref>
        <ActionButton icon={Home} text="Home" />
      </Link>
      <Link href="/tip" passHref>
        <ActionButton icon={Zap} text={<>Support with Sats <Bitcoin className="inline ml-1 text-orange-500" /></>} />
      </Link>
    </div>
  );
};

const Whitepaper: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="min-h-screen bg-[#301f13] flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-[#4a3425] rounded-lg overflow-hidden shadow-xl">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-white mb-4">Apollo Protocol Whitepaper</h1>
          <div className="mb-8">
            {isMobile ? <MobileSlides /> : <PDFViewer />}
          </div>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
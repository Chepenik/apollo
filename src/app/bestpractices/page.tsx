'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ChevronLeft, ChevronRight, ThumbsUp, MessageSquare } from 'lucide-react';

const slides = [
  { src: 'https://i.nostr.build/6g9LymtU3XKMpALD.png', width: 600, height: 400 },
  { src: 'https://i.nostr.build/yTakxiFbFA6EvdmY.png', width: 600, height: 400 },
];

const PDF_URL = '/LE best practices [v1.12_856641].pdf';

interface SlideProps {
  src: string;
  width: number;
  height: number;
}

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
        src={slides[currentSlide].src}
        alt={`Slide ${currentSlide + 1}`}
        width={slides[currentSlide].width}
        height={slides[currentSlide].height}
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
      Your browser does not support PDF rendering. Please try viewing this via a laptop or desktop or different browser.
    </p>
  </object>
);

interface ActionButtonProps {
  href: string;
  icon: React.ElementType;
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ href, icon: Icon, text }) => (
  <Link href={href} passHref>
    <button className="flex items-center justify-center space-x-2 bg-[#4a3425] hover:bg-[#5a4435] text-white px-4 py-2 rounded-md transition-colors duration-300">
      <Icon size={18} />
      <span>{text}</span>
    </button>
  </Link>
);

const ActionButtons: React.FC = () => (
  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 w-full mb-4">
    <ActionButton href="/endorse" icon={ThumbsUp} text="Endorse" />
    <ActionButton href="/feedback" icon={MessageSquare} text="Offer Feedback" />
  </div>
);

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="min-h-screen bg-[#301f13] flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-[#4a3425] rounded-lg overflow-hidden shadow-xl">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-white mb-4">Best Practices</h1>
          <div className="mb-8">
            {isMobile ? <MobileSlides /> : <PDFViewer />}
          </div>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default Home;
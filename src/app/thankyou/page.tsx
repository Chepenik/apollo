"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from 'react';

const ThankYou: React.FC = () => {
  const hasLogged = useRef(false);

  useEffect(() => {
    if (!hasLogged.current) {
      console.log('Bitcoin will separate money from state');
      hasLogged.current = true;
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#301f13] text-white text-2xl p-4">
      <h1 className="text-4xl mb-4 text-center">Thanks for your feedback and helping us continue to evolve best practices</h1>
      <div className="mb-4">
        <Image 
          src="https://i.nostr.build/BRlKZ.png"
          alt="Thank You Heart"
          height={200}
          width={200}
        />
      </div>
      <Link href="/whitepaper">
        <p>Click here to return to the whitepaper</p>
      </Link>
    </div>
  );
};

export default ThankYou;

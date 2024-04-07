'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#301f13] overflow-hidden flex flex-col justify-center items-center md:px-4 sm:px-2">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/Apollo transparent.png"
          alt="Apollo"
          width={240}
          height={240}
          className="mb-4 md:mb-6"
        />
        <div className="text-justify text-white max-w-2xl mx-auto px-4 sm:px-2">
          <p className="mb-4"><span className='font-bold'>Abstract: </span>
             95% of humans currently wear shoes that literally
            deform, disable and damage their feet. Simply look around and you
            can confirm this to be true. With that fact considered, it&apos;s
            unsurprising that roughly 75% of people develop foot problems at
            some point in their lives. This paper seeks to upgrade our
            collective understanding of human feet and presents a radical
            approach to preventing and resolving foot dysfunction. The framework
            is grounded in first principles and serves as an effective
            alternative to the current status quo which treats symptoms of
            dysfunction without addressing the root cause. A paradigm shift is
            currently underway in how we think of health broadly and foot health
            specifically. Instead of simply diagnosing problems and treating
            symptoms (disease care), professionals are beginning to help their
            patients and clients take better care of themselves (healthcare).
            This shift is a much needed change to help us move towards better
            health. Optimal health is the output of exposing our bodies to
            natural behaviours that align with our biology. Within the domain of
            foot health, it is the duty of care and responsibility of health
            professionals to protect those they serve from the harmful effects
            of unnatural footwear. By increasing awareness, respecting first
            principles, focusing on the essentials and designing aligned
            incentives, we have an opportunity to prevent and resolve the vast
            majority of foot dysfunction.
            <br />
            <br />
            <span className='font-bold'>[v 1.0_840,000]</span>
          </p>
          <p className="mb-4"></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-32 w-full  mb-4">
        <Link
          href="https://primal.net/p/npub1pegapre6vcqs22a9ccrq730gmutz2ee40ytwslt7lna8w0uw4cjsumgv6t"
          target="_blank"
        >
          <p className="text-white">NOSTR</p>
        </Link>
        <Link href="/contact">
          <p
            className={`enter-button text-white px-4 py-2 rounded-md transition-colors duration-300 ${
              isHovered ? 'bg-transparent' : 'bg-transparent'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Continue
          </p>
        </Link>
        <Link href="/tip">
          <p className="text-white flex items-center">
            Support with Sats{' '}
            <span className="ml-2 text-yellow-400">&#9889;</span>{' '}
            <span className="ml-2 text-orange-500">&#x20BF;</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
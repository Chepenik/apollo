'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen bg-[#301f13] overflow-hidden">
      {/* Full-screen background image */}
      <div className="flex flex-col justify-center mt-12 md:mt-20">
        <Image
          src="/Apollo transparent.png"
          alt="Apollo"
          width={200}
          height={200}
        />
          <p>
            Abstract. 95% of shod humans currently wear shoes that literally deform, disable and damage their feet. 
            Simply look around and you can confirm this to be true. With that fact considered, it’s unsurprising that 
            roughly 75% of people develop foot problems at some point in their lives. This paper seeks to upgrade our 
            collective understanding of human feet and presents a radical approach to preventing and resolving foot 
            dysfunction. The framework is grounded in first principles and serves as an effective alternative to the 
            current status quo which treats symptoms of dysfunction without addressing the root cause. A paradigm shift 
            is currently underway in how we think of health broadly and foot health specifically. Instead of simply 
            diagnosing problems and treating symptoms (disease care), professionals are beginning to help their 
            patients and clients take better care of themselves (healthcare). This shift is a much needed change to 
            help us move towards better health. Optimal health is the output of exposing our bodies to natural 
            behaviours that align with our biology. Within the domain of foot health, it is the duty of care and 
            responsibility of health professionals to protect those they serve from the harmful effects of unnatural 
            footwear. By increasing awareness, respecting first principles, focusing on the essentials and designing 
            aligned incentives, we have an opportunity to prevent and resolve the vast majority of foot dysfunction.
          </p>
          <p>[v 1.0_840,000 ]</p>
      </div>

      {/* Bottom buttons and text */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-8">
        <div className="w-full max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-white">NOSTR</p>
          <Link href="/contact">
            <p
              className={`enter-button text-white px-4 py-2 rounded-md transition-colors duration-300 ${
                isHovered ? 'opacity-75' : 'opacity-100'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Continue
            </p>
          </Link>
          <div className="text-white">
            Support with Sats
            <div className="flex justify-center mt-2">
              <span className="text-yellow-400 text-2xl">&#9889;</span>
              <span className="text-orange-500 text-2xl ml-2">&#9679;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

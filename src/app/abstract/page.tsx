'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#301f13] overflow-hidden flex flex-col justify-center items-center md:px-4 sm:px-2">
      <div className="flex flex-col items-center justify-center">
        <h1 className='text-white text-2xl mx-8 mt-8'>Apollo: A Radical Lower Extremity Health Protocol</h1>
        <span className='font-bold text-gray-500'>[v 1.0_840,000]</span>
        {/* <Image src="/Apollo transparent.png" alt="Apollo" width={240} height={240} className="mb-4 md:mb-6" /> */}
        <p className='text-white my-8'>Created by Bitcoiners</p>
        <div className="text-justify text-white max-w-4xl mx-auto px-4 sm:px-2">
          <p className="mb-4">
            <span className='font-bold'>Abstract: </span> A simple and effective lower extremity health protocol would allow individuals to
prevent and resolve injury without relying on professionals who treat symptoms of dysfunction
without addressing the root causes. By lowering time preference and viewing pain as feedback
to be respected, individuals are able to make lifestyle choices today that lead to a healthier
tomorrow. By understanding how human biology adapts, individuals can achieve better health
by reducing unnatural inputs and increasing natural inputs. Protocol consensus is achieved
through peer validation and primitives could be created to offer context specific application
templates. Health professionals can validate the protocol and integrate principles into their
practice in order to deliver effective guidance to those they serve. In a world of abundant
information, determining what is true and useful is a major problem. We propose a solution to
the problem with proof of work behavioural software grounded in first principles that can be
easily applied by any human. This protocol seeks to upgrade our collective understanding of
lower extremity health and presents a radical approach to prevent and resolve dysfunction. We
assert that the ultimate form of healthcare occurs when individuals accept responsibility to care
for their biology by applying essential principles in their daily lives. In order to reclaim
responsibility for health, individuals require truthful and effective information which they can
apply experientially in their lives. Through peer validation, protocol consensus will create
social and financial incentives for the development of products and services that support better
health. Each individual will have their own optimal application of the protocol but the
fundamentals must be respected in order to achieve effectiveness.
          </p>
          <p className="mb-4"></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-32 w-full mb-4 ml-0 md:ml-24">
        <Link
          href="https://primal.net/p/npub1pegapre6vcqs22a9ccrq730gmutz2ee40ytwslt7lna8w0uw4cjsumgv6t"
          target="_blank"
        >
          <p className="text-white hover:underline">NOSTR</p>
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
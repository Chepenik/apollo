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
          A simple and effective lower extremity health protocol would allow individuals to prevent and resolve injury without relying on disease care professionals who are trained to offer palliative interventions. By lowering time preference, individuals can view pain as important feedback and become capable of making lifestyle choices today that lead to a healthier tomorrow. By understanding how our biology adapts, individuals become empowered to achieve better health by reducing exposure to unnatural inputs and increasing exposure to natural inputs. Protocol consensus is achieved through peer validation and primitives could be created to offer templates for application. Disease care providers who wish to become health professionals can integrate the protocol into their approach in order to deliver effective guidance to those they serve.  We propose a solution to the problem with effective peer validated proof of work behavioural software grounded in first principles that can be easily applied by any human. This protocol seeks to upgrade our collective understanding of human health and presents a radical approach for preventing and resolving lower extremity dysfunction. We assert that the ultimate form of healthcare occurs when individuals accept responsibility for understanding fundamentals laws of biology and applying essential principles in their daily lives. In order to reclaim responsibility for health, individuals require truthful and effective behavioural software which they can apply and validate experientially. Through peer validation, protocol effectiveness will create social and financial incentives for the development of products and services that support successful application. Each individual will have their own optimal application of the protocol but the fundamentals must be respected in order to achieve effectiveness.
            <br />
            <br />
            <span className='font-bold'>[v 1.0_840,000]</span>
          </p>
          <p className="mb-4"></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-32 w-full mb-4">
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
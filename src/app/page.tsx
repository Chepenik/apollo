import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apollo Project</title>
        <meta name="description" content="Apollo Project Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        {/* Introduction Slide */}
        <section className="h-screen bg-blue-100 flex items-center justify-center">
          <div>
            <h1 className="text-5xl font-bold">Apollo Project</h1>
            <p className="mt-3">Improving foot health through innovative footwear technology.</p>
          </div>
        </section>

        {/* Donors Slide */}
        <section className="h-screen bg-green-100 flex items-center justify-center">
          <div>
            <h2 className="text-4xl font-bold">Our Top Donors</h2>
            {/* Donor logos and links would go here */}
          </div>
        </section>

        {/* Information Slide */}
        <section className="h-screen bg-yellow-100 flex items-center justify-center">
          <div>
            <h2 className="text-4xl font-bold">The Apollo Mission</h2>
            <p className="mt-3">95% of shod humans currently wear shoes that deform, disable, and damage their feet...</p>
          </div>
        </section>

        {/* Engagement Slide */}
        <section className="h-screen bg-red-100 flex items-center justify-center">
          <div>
            <h2 className="text-4xl font-bold">Get Involved</h2>
            {/* Links to whitepaper, GitHub, etc. */}
          </div>
        </section>
      </main>
    </div>
  );
}

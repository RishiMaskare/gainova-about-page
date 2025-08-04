// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gainova | Home</title>
      </Head>
      <main className="bg-gradient-to-br from-[#2563EB] to-[#8B5CF6] min-h-screen text-white">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering Future Innovators</h1>
            <p className="text-lg md:text-xl mb-6">
              Gainova is a global student-led AI community helping learners explore technology, innovation, and industry trends.
            </p>
            <div className="flex gap-4">
              <Link href="/about">
                <button className="bg-white text-[#2563EB] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                  Learn More
                </button>
              </Link>
              <Link href="/industry-movement">
                <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#2563EB] transition">
                  Industry Movement
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/images/aiImage.jpg"
              alt="AI Illustration"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </section>

        {/* Offerings Section */}
        <section className="bg-white text-[#0F172A] py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-[#F9FAFB] rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <Image src="/hackathon.svg" alt="Hackathons" width={80} height={80} />
              <h3 className="text-xl font-semibold mt-4 mb-2">Hackathons</h3>
              <p>Competitive tech events that encourage innovation and hands-on learning with peers.</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <Image src="/workshop.svg" alt="Workshops" width={80} height={80} />
              <h3 className="text-xl font-semibold mt-4 mb-2">Workshops</h3>
              <p>Interactive sessions by industry experts on AI, web dev, cloud, and more.</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <Image src="/podcast.svg" alt="Podcasts" width={80} height={80} />
              <h3 className="text-xl font-semibold mt-4 mb-2">Tech Podcasts</h3>
              <p>Real stories and discussions with pioneers, entrepreneurs, and young changemakers.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-[#1E40AF] text-white text-center py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Gainova's Global Movement</h2>
          <p className="max-w-xl mx-auto text-lg mb-8">
            Whether you're a student, mentor, or tech enthusiast – there's a place for you to grow and contribute at Gainova.
          </p>
          <Link href="/about">
            <button className="bg-white text-[#1E40AF] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Get Involved
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function IndustryMovement() {
  return (
    <>
      <Head>
        <title>Gainova | Industry Movement</title>
      </Head>

      {/* HERO */}
      <section className="bg-[#2563EB] text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Gainova Industry Movement</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Empowering students to collaborate, innovate, and impact the real world with AI-driven tech.
        </p>
      </section>

      {/* MISSION */}
      <section className="bg-white text-[#1E40AF] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Mission in Action</h2>
        <p className="max-w-4xl mx-auto text-base leading-loose">
          Through hands-on projects, expert mentoring, and tech-first events, we’re turning campus innovation into industry transformation.
        </p>
      </section>

      {/* FEATURED CARDS */}
      <section className="bg-[#F9FAFB] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center text-[#1E40AF]">
          <h2 className="text-3xl font-bold mb-12">What We’re Driving</h2>
          <div className="grid md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <Image
                src="/project.svg"
                alt="Collaboration"
                width={300}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Student–Industry Collaboration</h3>
              <p>Real-time collaboration with companies to build proof-of-concept tech.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <Image
                src="/research.svg"
                alt="AI Research"
                width={300}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">AI Research & Labs</h3>
              <p>We conduct live prototyping and contribute to open-source AI ecosystems.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <Image
                src="/hackathon.svg"
                alt="Hackathon Event"
                width={300}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Hackathons & Ideathons</h3>
              <p>High-impact, time-boxed events for solving partner-led use cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <span className="text-4xl font-bold text-[#2563EB]">100+</span>
            <p className="text-[#0F172A]">Projects Completed</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-[#2563EB]">5000+</span>
            <p className="text-[#0F172A]">Students Impacted</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-[#2563EB]">30+</span>
            <p className="text-[#0F172A]">Partners Onboarded</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563EB] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Be Part of the Movement</h2>
        <p className="max-w-3xl mx-auto mb-8 text-base leading-relaxed">
          Join forces with mentors, tech partners, and future innovators across the globe.
        </p>
        <Link href="/about">
          <button className="bg-white text-[#1E40AF] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Learn More About Gainova
          </button>
        </Link>
      </section>
    </>
  );
}

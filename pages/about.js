// pages/about.js
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Gainova - Unix AI</title>
      </Head>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#2563EB] via-[#8B5CF6] to-[#1E40AF] text-white py-20 px-4 text-center dark:from-[#0F172A] dark:via-[#1E40AF] dark:to-[#2563EB]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Gainova</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Gainova is a global AI initiative and community-driven startup under
          the Global AI Association. We empower college students and learners to
          explore AI, computer science, and future technologies through events,
          workshops, podcasts, and hackathons.
        </p>
      </section>

      {/* OUR MISSION SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center dark:text-[#F9FAFB]">
        <h2 className="text-3xl font-semibold text-[#4C78BF] mb-6 dark:text-[#8EE0AD]">
          Our Mission
        </h2>
        <p className="text-gray-700 dark:text-[#8EE0AD] text-lg">
          We aim to bridge the gap between academia and industry by creating
          hands-on opportunities in AI, software development, and cutting-edge
          tech. Our mission is to inspire innovation, learning, and
          collaboration.
        </p>
      </section>

      {/* OUR OFFERINGS SECTION */}
      <section className="bg-[#F9FAFB] dark:bg-[#0F172A] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#4C78BF] text-center mb-10 dark:text-[#22C55E]">
            Our Offerings
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-800 dark:text-[#F9FAFB]">
            <div className="bg-white dark:bg-[#1E40AF] p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Hackathons</h3>
              <p>
                Organizing exciting and competitive coding events to boost
                creativity and collaboration.
              </p>
            </div>
            <div className="bg-white dark:bg-[#1E40AF] p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Workshops</h3>
              <p>
                Hands-on sessions on AI, Data Science, Web Dev, and other tech
                skills for all levels.
              </p>
            </div>
            <div className="bg-white dark:bg-[#1E40AF] p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Tech Podcasts</h3>
              <p>
                Conversations with industry leaders, founders, and developers on
                trending technologies.
              </p>
            </div>
            <div className="bg-white dark:bg-[#1E40AF] p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">AI Bootcamps</h3>
              <p>
                Immersive programs designed to guide learners into the world of
                Artificial Intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE & TEXT SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold text-[#4C78BF] mb-8 dark:text-[#22C55E]">
          Explore Technology with Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <img src="/images/ai.jpg" alt="AI Illustration" className="rounded-lg shadow mb-4" />
            <h3 className="text-xl font-semibold text-[#2563EB] dark:text-[#8EE0AD]">Artificial Intelligence</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Building smart, ethical AI solutions for real-world problems.
            </p>
          </div>
          <div>
            <img src="/images/image.png" alt="Students Working on Laptops" className="rounded-lg shadow mb-4" />
            <h3 className="text-xl font-semibold text-[#2563EB] dark:text-[#8EE0AD]">Computer Science</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Coding, designing, and deploying scalable software systems.
            </p>
          </div>
          <div>
            <img src="/images/cse.jpg" alt="Team Collaboration" className="rounded-lg shadow mb-4" />
            <h3 className="text-xl font-semibold text-[#2563EB] dark:text-[#8EE0AD]">Machine Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Hands-on ML training and competitions for future innovators.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-[#F9FAFB] dark:bg-[#0F172A] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#4C78BF] mb-6 dark:text-[#8EE0AD]">
            Contact Us
          </h2>
          <ul className="text-gray-700 dark:text-[#F9FAFB] space-y-2 text-lg">
            <li>
              <strong>Email:</strong> contact@gainova.org
            </li>
            <li>
              <strong>Events:</strong> events@gainova.org
            </li>
            <li>
              <strong>Partnerships:</strong> connect@gainova.org
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1E40AF] dark:bg-[#0F172A] text-white text-sm py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <p>©2025 Gainova. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

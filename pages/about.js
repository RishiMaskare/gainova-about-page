import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | GAINOVA</title>
      </Head>

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About GAINOVA</h1>
        <p className="max-w-2xl mx-auto text-lg">
          GAINOVA is a student-powered initiative under the Global AI Association, 
          aimed at democratizing knowledge in Artificial Intelligence, Computer Science, 
          and emerging technologies through community-led learning, events, and content.
        </p>
      </section>

      {/* MISSION SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          We empower college students and early professionals to explore AI, machine learning, 
          software engineering, and tech innovation through practical workshops, open learning, 
          podcasts, and global hackathons.
        </p>
      </section>

      {/* IMAGE SHOWCASE SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">What We Do</h2>
          <p className="text-gray-700 text-lg mb-10">
            Fueling curiosity and careers through hands-on AI and tech learning experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="rounded overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img src="/images/ai.jpg" alt="Artificial Intelligence" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-1">Artificial Intelligence</h3>
                <p className="text-sm text-gray-600">Building smart, ethical AI solutions for real-world problems.</p>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img src="/images/cse.jpg" alt="Computer Science" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-1">Computer Science</h3>
                <p className="text-sm text-gray-600">Coding, designing, and deploying scalable software systems.</p>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img src="/images/ml.jpg" alt="Machine Learning" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-1">Machine Learning</h3>
                <p className="text-sm text-gray-600">Hands-on ML training and competitions for future innovators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 text-center mb-10">
            Our Core Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Hackathons & Events</h3>
              <p>Global and campus-level hackathons to solve real problems and build networks.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Workshops & Bootcamps</h3>
              <p>Weekend tech sessions and bootcamps on AI, web dev, data science, and more.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Podcasts & Stories</h3>
              <p>Weekly tech podcast featuring industry experts, students, and founders.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Open Community & Mentorship</h3>
              <p>A strong peer-led network to learn, grow, and build tech careers together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Join Our Global Community
        </h2>
        <p className="text-lg text-gray-700">
          GAINOVA reaches 10,000+ learners across 50+ colleges and institutions,
          and collaborates with tech partners to deliver real impact in education.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Contact Us</h2>
          <ul className="text-gray-700 space-y-2 text-lg">
            <li><strong>Email:</strong> hello@gainova.org</li>
            <li><strong>Collaboration:</strong> partners@gainova.org</li>
            <li><strong>Work with us:</strong> careers@gainova.org</li>
            <li><strong>Media:</strong> media@gainova.org</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white text-sm py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          <p>©2025 GAINOVA. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

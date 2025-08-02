// pages/about.js
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Gainova - Unix AI</title>
      </Head>

      {/* HERO */}
      <section className="relative bg-[#0052CC] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Empowering the Future with AI</h1>
          <p className="text-xl leading-relaxed">
            Gainova is a global initiative under the Global AI Association helping students and tech enthusiasts explore the frontier of Artificial Intelligence and Computer Science.
          </p>
        </div>
        {/* Background Pattern (optional) */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-light.svg')] bg-center bg-cover z-0"></div>
      </section>

      {/* OUR MISSION */}
      <section className="bg-white text-[#0052CC] py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-loose">
            We bridge the gap between academia and industry by offering hands-on learning, innovation platforms, and meaningful connections across AI, software development, and emerging tech.
          </p>
        </div>
      </section>

      {/* OUR OFFERINGS */}
      <section className="bg-[#F5F9FF] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center text-[#0052CC]">
          <h2 className="text-4xl font-bold mb-14">Our Offerings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["💡", "Hackathons", "Fueling innovation with high-energy, team-based coding events."],
              ["🛠️", "Workshops", "In-depth training on AI, web dev, and industry technologies."],
              ["🎙️", "Tech Podcasts", "Interviews with tech leaders to spark ideas and share journeys."],
              ["🤖", "AI Bootcamps", "Immersive learning paths to dive into the world of AI."]
            ].map(([emoji, title, desc], idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-[#0052CC] hover:shadow-md transition">
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="bg-white py-20 px-6 text-[#0052CC] text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Explore Technology with Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["ai.jpg", "Artificial Intelligence", "Creating smart, ethical solutions."],
              ["image.png", "Computer Science", "Building scalable, impactful software."],
              ["ml.jpg", "Machine Learning", "Train with real-world data and challenges."]
            ].map(([src, title, desc], idx) => (
              <div key={idx}>
                <img src={`/images/${src}`} alt={title} className="rounded-xl h-52 w-full object-cover mb-4 shadow" />
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-[#F5F9FF] text-[#0052CC] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8">
            Whether you're a student, developer, or partner – we’d love to hear from you.
          </p>
          <ul className="space-y-2 text-md">
            <li><strong>Email:</strong> contact@gainova.org</li>
            <li><strong>Events:</strong> events@gainova.org</li>
            <li><strong>Partnerships:</strong> connect@gainova.org</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0052CC] text-white text-sm py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>©2025 Gainova. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    title: "AI & CSE",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "Data Science",
    ],
  },
  {
    title: "Learn",
    items: [
      "Workshops & Bootcamps",
      "Online Sessions",
      "Open Learning Materials",
    ],
  },
  {
    title: "Community",
    items: [
      "College Chapters",
      "Mentorship Program",
      "Student Ambassadors",
    ],
  },
  {
    title: "Events",
    items: [
      "Hackathons",
      "Tech Talks",
      "AI Summits",
    ],
  },
  {
    title: "Media",
    items: [
      "Podcasts",
      "Blog Posts",
      "Success Stories",
    ],
  },
  {
    title: "About",
    items: [
      "Our Story",
      "Global AI Association",
      "Join GAINOVA",
    ],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          GAINOVA
        </Link>
        <div className="hidden md:flex space-x-6">
          {menuItems.map((menu, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button className="text-gray-700 hover:text-blue-700 font-medium">
                {menu.title}
              </button>
              {openIndex === idx && (
                <div className="absolute top-full left-0 bg-white border mt-2 rounded shadow-lg z-50 min-w-[200px]">
                  <ul className="text-sm text-gray-800">
                    {menu.items.map((item, subIdx) => (
                      <li key={subIdx} className="px-4 py-2 hover:bg-blue-50">
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

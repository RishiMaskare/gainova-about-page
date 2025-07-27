import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    title: "Industry Missions",
    items: [
      "Join the industry movement",
      "Composable IT and Ecosystems",
      "Autonomous Networks",
      "AI and Data Innovation",
    ],
  },
  {
    title: "Open Digital Architecture (ODA)",
    items: [
      "About ODA",
      "How to apply ODA",
      "Conformance",
      "Member assets",
      "Open APIs",
      "ODA component directory",
      "Canvas",
    ],
  },
  {
    title: "Member Projects",
    items: [
      "Collaboration projects",
      "Catalysts",
      "Innovation Hub",
    ],
  },
  {
    title: "Learn",
    items: [
      "Education programs",
      "Certification",
    ],
  },
  {
    title: "News and Insight",
    items: [
      "Newsroom",
      "Industry insight",
    ],
  },
  {
    title: "Events",
    items: [
      "All events",
      "DTW Ignite",
      "Innovate Americas",
      "Innovate Asia",
    ],
  },
  {
    title: "About",
    items: [
      "About GAINOVA",
      "Membership",
      "Sponsorship and exhibitors",
      "Careers",
    ],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-700">
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

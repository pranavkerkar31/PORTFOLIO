"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <header className="py-4">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Centered Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-lg font-semibold">
                {["about", "skills", "projects", "contact"].map((item) => (
                  <li key={item}>
                    <button
                      className="text-gray-500 transition hover:text-gray-300 dark:text-white dark:hover:text-white/75 text-xl"
                      onClick={() => handleScroll(item)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button (Right Side) */}
          <div className="md:hidden flex justify-end w-full">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-800 p-4 mt-2 rounded-lg">
            <ul className="flex flex-col gap-4 text-center text-2xl font-bold">
              {["about", "skills", "projects", "contact"].map((item) => (
                <li key={item}>
                  <button
                    className="text-white transition hover:text-gray-300"
                    onClick={() => handleScroll(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

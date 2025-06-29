import React, { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home", from: "blue-400", to: "blue-500" },
    { label: "About", href: "#about", from: "green-400", to: "teal-500" },
    { label: "Projects", href: "#project", from: "green-400", to: "purple-500" },
    { label: "Contact", href: "#contact", from: "green-400", to: "red-500" },
  ];
  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white shadow-md fixed w-full top-0 left-0 z-50 transition-colors duration-500">
      <div className="flex justify-between items-center px-6 py-4 lg:px-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
          Muzamil Khan
        </h1>
        {/* Desktop menu - show only on large (1024px+) screens */}
        <ul className="hidden lg:flex space-x-6 text-sm">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="group relative px-2 py-1 text-lg font-bold"
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-${link.from} to-${link.to} transition-all duration-500 group-hover:w-full`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-cyan-500 hover:to-emerald-400 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40"
          >
            Connect Me
          </a>
        </div>

        {/* Hamburger menu for <1024px */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu for <1024px */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-4 bg-white dark:bg-black transition-all duration-300">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block text-lg font-semibold hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center mt-2 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white font-semibold py-2 px-5 rounded-full hover:from-cyan-500 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40"
            onClick={() => setMenuOpen(false)}
          >
            Connect Me
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;

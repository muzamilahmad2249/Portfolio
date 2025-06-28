import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="bg-white  text-black dark:bg-black dark:text-white transition-colors duration-500">
      {/* Floating Toggle Icon */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-14   mt-7 right-12 z-50 bg-gray-200 dark:bg-gray-800 p-3 rounded-full shadow-md hover:scale-110 transition"
        aria-label="Toggle Theme"
      >
        {darkMode ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-blue-500 text-xl" />
        )}
      </button>

      {/* Page Sections */}
      <Navbar />
      <Hero />
      <About/>
      {/* <Service /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

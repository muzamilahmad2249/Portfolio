import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-8 transition-colors duration-500">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-6">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Muzamil</h3>
            <p className="text-gray-700 dark:text-gray-400">
              ReactJs Developer based in the Pakistan, specializing in frontend web 
              development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 dark:text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Muzamil. All rights reserved.
          </p>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition">
              <FaGithub />
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

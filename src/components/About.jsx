import React from "react";
import AboutImage from "../assets/aboutme.jpg";

const About = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white py-20 transition-colors duration-500" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About"
            className="w-72 h-90 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300  text-justify">
             I'm Muzamil Khan, a BSIT graduate from the class of 2024 with a strong passion for front-end web development. Over the past year, I have been building my skills through self-driven projects using HTML, CSS, JavaScript, and React.js. I also have hands-on experience with WordPress, allowing me to create responsive and user-friendly websites. I am now actively seeking an internship or entry-level position where I can contribute, learn from industry professionals, and grow as a web developer.
            </p>
            <div className="space-y-4">
              {/* Skill: HTML & CSS */}
              <div className="flex items-center">
                <label className="w-2/12">HTML & CSS</label>
                <div className="grow bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              {/* Skill: React */}
              <div className="flex items-center">
                <label className="w-2/12">React JS</label>
                <div className="grow bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

              {/* Skill: Node */}
              <div className="flex items-center">
                <label className="w-2/12">Node JS</label>
                <div className="grow bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label className="w-2/12">MongoDB</label>
                <div className="grow bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

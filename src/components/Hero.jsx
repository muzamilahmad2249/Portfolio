import React from 'react'
import HeroImage from '../assets/aboutme.jpg'
const Hero = () => {
  return (
    <section className="py-16  mt-8  text-center bg-white dark:bg-black transition-colors duration-500">

       <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-49 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
      <h2 className="text-4xl mt-6 font-extrabold text-black dark:text-white">
        I'm{' '}
        <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Muzamil Khan
        </span>{' '}
        -{' '}
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Frontend Developer
        </span>
      </h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
        I design and code beautifully simple things, and I love what I do.
      </p>

       <div class="flex justify-center space-x-4 mt-6">
     <a href="#contact" class="bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-cyan-500 hover:to-emerald-400 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 cursor-pointer">
       Contact With Me
     </a>
     <a  href='/Muzamil_Ahmad.pdf' class="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-400/40 cursor-pointer">
      Resume
     </a>
    </div>
    </section>
  );
};

export default Hero;

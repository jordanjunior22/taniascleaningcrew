"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImage from '@/public/hero.jpg'; // Replace with your hero image path

const HeroSection = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation for each letter
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }, // Delay based on index
    }),
  };

  const headingText = "Tania's Cleaning Crew";

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-lightTeal p-6">
      {/* Text Section */}
      <motion.div 
        className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {headingText.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={index} // Pass the index to control delay
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Experience a spotless space with our professional cleaning services tailored to your needs. 
          Let us make your environment shine!
        </p>
        <a href="/get-a-quote" className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-black transition duration-300">
          Get a Quote
        </a>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="md:w-1/2 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }} // Delay for the image
      >
        <Image 
          src={heroImage} 
          alt="Evershine Cleaning" 
          className="object-cover rounded-lg shadow-lg w-full" 
          width={600} 
          height={200} 
          draggable={false}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;

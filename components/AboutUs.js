"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import teamImage from '@/public/caroline/caroline.jpg'; // Replace with your team image

const AboutUs = () => {
  // Define animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <section id="about" className="bg-white p-5 md:p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <motion.div 
          className="md:w-1/2 md:pr-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="p-6 bg-primary rounded-lg shadow-md mb-6">
            <h2 className="text-4xl font-bold text-white mb-4">About Tania&apos;s Cleaning Crew</h2>
            <p className="text-lg text-white mb-4">
              At Tania&apos;s Cleaning Crew, we believe that a clean space is a happy space. Our journey began with a passion for cleanliness and a commitment to enhancing the lives of our clients.
            </p>
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-2">Our Mission</h3>
          <motion.p variants={textVariants} initial="hidden" animate="visible" className="text-lg text-gray-700 mb-4">
            To provide high-quality, eco-friendly cleaning solutions tailored to your unique needs.
          </motion.p>
          <h3 className="text-2xl font-semibold text-primary mb-2">Our Values</h3>
          <motion.ul 
            variants={textVariants} 
            initial="hidden" 
            animate="visible" 
            className="list-disc list-inside mb-4 text-lg text-gray-700"
          >
            <li>Integrity: Honest and transparent service.</li>
            <li>Quality: Exceptional service every time.</li>
            <li>Respect: Valuing our clients and their spaces.</li>
            <li>Sustainability: Eco-friendly practices to protect our planet.</li>
          </motion.ul>
          <h3 className="text-2xl font-semibold text-primary mb-2">Why Choose Us?</h3>
          <motion.p 
            variants={textVariants} 
            initial="hidden" 
            animate="visible" 
            className="text-lg text-gray-700"
          >
            Choosing Tania's Cleaning Crew means a partner who cares about your needs. Our customized services fit your schedule and requirements.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="md:w-1/2 md:mt-0 mt-8"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img 
            src={teamImage.src} 
            alt="Our Team" 
            className="rounded-lg shadow-lg" 
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

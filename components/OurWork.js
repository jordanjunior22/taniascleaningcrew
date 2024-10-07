"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import project1 from '@/public/after/image1.jpg'; // Replace with your actual project images
import project2 from '@/public/after/image2.jpg';
import project3 from '@/public/after/image3.jpg';  

const OurWork = () => {
  const projects = [
    {
      title: "Residential Cleaning",
      description: "A complete cleaning service for a cozy home, focusing on kitchens and living rooms.",
      image: project1,
    },
    {
      title: "Office Space Revamp",
      description: "Transforming an office space into a clean, productive environment for staff.",
      image: project2,
    },
    {
      title: "Deep Cleaning Service",
      description: "Comprehensive deep cleaning for a move-in/move-out service, ensuring every corner is spotless.",
      image: project3,
    },
  ];

  // Define animation variants
  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -50 : 50, // Slide in from left or right
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="our-work" className="bg-white p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">Our Work</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Check out some of our completed projects that showcase our commitment to quality and detail.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
              custom={index % 2 === 0 ? 'left' : 'right'} // Alternate directions
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the card is in view
            >
              <img src={project.image.src} alt={project.title} className="w-full h-48 object-cover" draggable={false} />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;

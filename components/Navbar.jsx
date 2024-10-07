"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '@/public/logo.png';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define animation variants
  const variants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <nav className="bg-lightTeal text-primary shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center w-[100px]">
          <Image src={logo} alt="Evershine Logo" className="h-auto w-full mr-2" draggable={false}/>
        </div>
        <div className="hidden md:flex space-x-4 md:items-center">
          <a href="/" className="hover:text-goldenYellow">Home</a>
          <a href="#services" className="hover:text-goldenYellow">Services</a>
          <a href="#about" className="hover:text-goldenYellow">About Us</a>
          <a href="#portfolio" className="hover:text-goldenYellow">Our Work</a>
          <a href="#contact" className="hover:text-goldenYellow">Contact</a>
          <a href="#testimonials" className="hover:text-goldenYellow">Testimonials</a>
          <a href="/get-a-quote" className="bg-primary text-white px-4 py-2 rounded hover:bg-black">Get a Quote</a>
        </div>
        <div className="md:hidden">
          <button 
            id="navbar-toggle" 
            className="focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes className="w-6 h-6" color="white" /> : <FaBars className="w-6 h-6" color="white" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="md:hidden overflow-hidden"
          >
            <a href="#services" className="block text-primary p-2">Services</a>
            <a href="#about" className="block text-primary p-2">About Us</a>
            <a href="#portfolio" className="block text-primary p-2">Our Work</a>
            <a href="#contact" className="block text-primary p-2">Contact</a>
            <a href="#testimonials" className="block text-primary p-2">Testimonials</a>
            <a href="#quote" className="block bg-primary text-white p-2 rounded hover:bg-goldenYellow">Get a Quote</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

"use client";
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
        
        {/* Company Info Section */}
        <div className="mb-6 md:mb-0 w-full md:w-1/4">
          <h3 className="text-lg font-bold mb-2">Tania's Cleaning Crew</h3>
          <p className="text-sm mb-4">Your satisfaction is our priority. <br/>We provide exceptional cleaning services tailored to your needs.</p>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <span className="text-sm">123 Clean St, Sparkle City, SC 12345</span>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />
            <span className="text-sm">info@TaniasCleaningCrew.com</span>
          </div>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2" />
            <span className="text-sm">(123) 456-7890</span>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0 w-full md:w-1/4">
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#services" className="hover:text-lightTeal">Services</a></li>
            <li><a href="#about" className="hover:text-lightTeal">About Us</a></li>
            <li><a href="#blog" className="hover:text-lightTeal">Blog</a></li>
            <li><a href="#contact" className="hover:text-lightTeal">Contact Us</a></li>
            <li><a href="#faq" className="hover:text-lightTeal">FAQs</a></li>
            <li><a href="#privacy-policy" className="hover:text-lightTeal">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="mb-6 md:mb-0 w-full md:w-1/4">
          <h4 className="text-md font-semibold mb-2">Our Services</h4>
          <ul className="space-y-1">
            <li><a href="#home-cleaning" className="hover:text-lightTeal">Home Cleaning</a></li>
            <li><a href="#office-cleaning" className="hover:text-lightTeal">Office Cleaning</a></li>
            <li><a href="#deep-cleaning" className="hover:text-lightTeal">Deep Cleaning</a></li>
            <li><a href="#move-in-out-cleaning" className="hover:text-lightTeal">Move In/Out Cleaning</a></li>
            <li><a href="#specialty-cleaning" className="hover:text-lightTeal">Specialty Cleaning</a></li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="mb-6 md:mb-0 w-full md:w-1/4">
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-lightTeal" aria-label="Facebook"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-lightTeal" aria-label="Twitter"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-lightTeal" aria-label="Instagram"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-lightTeal" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
          </div>
          <h4 className="text-md font-semibold mb-2">Subscribe to Our Newsletter</h4>
          <form className="flex">
            <input type="email" placeholder="Your Email" className="p-2 rounded-l-lg border-2 border-lightTeal focus:outline-none" />
            <button className="bg-black text-white p-2 rounded-r-lg hover:bg-lightTeal-dark">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-lightTeal mt-10 pt-4 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Tania's Cleaning Crew. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

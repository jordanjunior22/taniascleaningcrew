"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to server)
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  // Define animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="bg-white p-10 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">Contact Us</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions or would like to request more information, feel free to contact us.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> info@TaniasCleaningCrew.com
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Location</h3>
            <div className="overflow-hidden mb-4">
              <iframe 
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091586!2d144.95373631531807!3d-37.81720997975146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11e3c3%3A0xd63c4e008f53d61d!2sYour%20Business%20Location!5e0!3m2!1sen!2sau!4v1627229345667!5m2!1sen!2sau" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-lightTeal p-6 rounded shadow">
              <motion.div variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="mb-4">
                <label className="block mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="border rounded w-full p-2"
                />
              </motion.div>
              <motion.div variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="mb-4">
                <label className="block mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="border rounded w-full p-2"
                />
              </motion.div>
              <motion.div variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="mb-4">
                <label className="block mb-2">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="border rounded w-full p-2"
                />
              </motion.div>
              <motion.button 
                type="submit" 
                className="bg-primary text-white px-4 py-2 rounded hover:bg-black transition duration-300"
                whileHover={{ scale: 1.05 }} // Scale effect on hover
              >
                Send Message
              </motion.button>
            </form>
            {submitted && (
              <div className="mt-4 text-green-600 text-center">
                <p>Thank you for contacting us! We'll get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

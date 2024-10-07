"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import quoteImage from '@/public/quote2.jpg'; // Replace with your image path

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    areaSize: '',
    preferredDate: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server or email)
    console.log(formData);
  };

  return (
    <div className="relative w-full h-screen ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={quoteImage} 
          alt="Cleaning Service Background" 
          className="absolute inset-0 object-cover w-full h-full blur-md" 
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row p-6 relative z-10">
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image 
            src={quoteImage} 
            alt="Cleaning Service" 
            className="shadow-lg w-full h-full object-cover" 
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-3xl font-bold text-white mb-4">Get a Quote</h1>
          <p className="text-white mb-4">Fill out the form below to request a customized quote for our cleaning services.</p>
          <form onSubmit={handleSubmit} className="bg-lightTeal bg-opacity-80 backdrop-blur-lg p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2 text-white">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="border rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="border rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                className="border rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Type of Cleaning Service</label>
              <select 
                name="serviceType" 
                value={formData.serviceType} 
                onChange={handleChange} 
                required 
                className="border rounded w-full p-2"
              >
                <option value="">Select...</option>
                <option value="home">Home Cleaning</option>
                <option value="office">Office Cleaning</option>
                <option value="deep">Deep Cleaning</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Size of Area to be Cleaned</label>
              <input 
                type="text" 
                name="areaSize" 
                value={formData.areaSize} 
                onChange={handleChange} 
                required 
                className="border rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Preferred Date/Time</label>
              <input 
                type="datetime-local" 
                name="preferredDate" 
                value={formData.preferredDate} 
                onChange={handleChange} 
                className="border rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Additional Comments</label>
              <textarea 
                name="comments" 
                value={formData.comments} 
                onChange={handleChange} 
                className="border rounded w-full p-2"
              />
            </div>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-goldenYellow">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;

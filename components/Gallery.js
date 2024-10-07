"use client";
import React,{useState} from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Gallery() {

    const images = [
        '/after/image1.jpg',
        '/after/image2.jpg',
        '/after/image3.jpg',
        '/after/image4.jpg',
        '/after/image5.jpg',
    ]; 
    const [currentIndex, setCurrentIndex] = useState(3);

    const nextImage = () => {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };
    return (
        <div>
            <h2>Afters And Befores</h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-around w-full bg-gray-200">
      <div className="flex gap-3 pb-2 pt-2">
        <motion.button 
          onClick={prevImage} 
          className={` px-4 py-2 rounded-sm  ${currentIndex === 0 ? 'bg-gray-300 text-gray-500' : 'bg-gray-700 text-white'}`}
          disabled={currentIndex === 0}
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
        >
          <FaArrowLeft className='text-sm'/>
        </motion.button>
        <motion.button 
          onClick={nextImage} 
          className={`px-4 py-2 rounded-sm ${currentIndex === images.length - 1 ? 'bg-gray-300 text-gray-500' : 'bg-gray-700 text-white'}`}
          disabled={currentIndex === images.length - 1}
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.9 }} // Scale down on tap
        >
          <FaArrowRight className='text-sm'/>
        </motion.button>
      </div>
      <div className="flex-col flex md:flex-row md:items-center md:relative md:w-[500px] md:h-[500px]">
        {currentIndex > 0 && (
          <div className="hidden md:flex md:absolute w-full h-[100px] md:-ml-10">
            <img className='w-full h-full object-cover rounded-md' src={images[currentIndex - 1]} alt="Previous Image 1" />
          </div>
        )}
        {currentIndex > 1 && (
          <div className="hidden md:flex md:absolute w-full h-[200px] md:-ml-5">
            <img className='w-full h-full object-cover rounded-md' src={images[currentIndex - 2]} alt="Previous Image 2" />
          </div>
        )}
            <img className='md:absolute w-full max-h-[300px] object-cover rounded-md' src={images[currentIndex]} alt="Current Image" />
        </div>
    </div>
        </div>
    );
}

export default Gallery;

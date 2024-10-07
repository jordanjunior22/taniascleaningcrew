"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, and specialized cleaning services."
    },
    {
      question: "Are your cleaning products eco-friendly?",
      answer: "Yes, we prioritize using eco-friendly cleaning products that are safe for your family and pets."
    },
    {
      question: "How can I schedule a cleaning?",
      answer: "You can schedule a cleaning by contacting us through our website or calling our customer service."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "It's up to you! Many clients choose to be at home, but some give us access to their property when they're away."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Your satisfaction is our priority. If you're not satisfied, let us know within 24 hours and we will address your concerns."
    }
  ];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hiddenRight: { opacity: 0, x: 50 },
    visibleRight: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="faq" className="bg-gray-100 p-10 overflow-x-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow p-4"
              initial={index % 2 === 0 ? 'hidden' : 'hiddenRight'}
              whileInView={index % 2 === 0 ? 'visible' : 'visibleRight'}
              variants={variants} // Use the variants here
              viewport={{ once: false, amount: 0.2 }} // You can adjust this as needed
            >
              <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

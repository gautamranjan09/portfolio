import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-r from-gray-900 to-purple-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="max-w-md mx-auto space-y-6"
          variants={containerVariants}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            variants={itemVariants}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
            variants={itemVariants}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
            variants={itemVariants}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;


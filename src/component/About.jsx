import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      id="about"
      className="py-20 bg-gradient-to-r from-gray-800 to-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <motion.div
              className="relative w-64 h-64 mx-auto md:mx-0"
              initial={{ rotate: -5 }}
              whileHover={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500"
                style={{ rotate: -3 }}
                animate={{
                  rotate: [0, -3, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="absolute inset-1 rounded-2xl bg-gray-900 flex items-center justify-center">
                <svg className="w-32 h-32 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="md:w-1/2 space-y-6" variants={containerVariants}>
            <motion.h2
              className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p className="text-gray-300" variants={itemVariants}>
              Hello! I'm [Your Name], a passionate web developer with a keen eye for design and a love for creating
              seamless user experiences. With a background in [Your Background], I bring a unique perspective to every project I work on.
            </motion.p>
            <motion.p className="text-gray-300" variants={itemVariants}>
              When I'm not coding, you can find me [Your Hobbies/Interests]. I believe in continuous learning and am always
              excited to take on new challenges in the ever-evolving world of web development.
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://drive.google.com/your-resume-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;


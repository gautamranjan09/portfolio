import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

const Header = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Web Developer", "React Developer", "Frontend Developer", "JavaScript Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header
      className="fixed bg-[#00000048]  text-white border rounded-3xl border-opacity-10 w-[98%] top-6 left-[1%] z-10 bg-opacity-40 backdrop-filter backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <nav className=" mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Code size={24} className="text-purple-400" />
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600"
            >
              Your Name
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-6" // Reduced height
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-purple-300 font-semibold"
                >
                  {roles[currentRole]}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6 ">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(item)}
                className="group relative"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-white block  transition-colors ${
                    activeTab === item
                      ? 'text-transparent bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text'
                      : 'hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500 hover:bg-clip-text'
                  }`}
                >
                  {item}
                </a>
                {/* Animated bottom border */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-500 transition-all duration-300 ${
                    activeTab === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </motion.li>
            ))}
          </ul>
        </div>


      </nav>
       {/* Mobile Navigation */}
       <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden top-full left-0 right-0 backdrop-filter backdrop-blur-md"
            >

              <ul className="flex flex-col space-y-4 p-4">
                {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                    onClick={() => {
                      setActiveTab(item);
                      // setIsOpen(false);
                    }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-white block w-full transition-colors relative ${
                        activeTab === item
                          ? 'text-transparent bg-gradient-to-t from-pink-400 to-pink-500 bg-clip-text'
                          : 'hover:text-transparent hover:bg-gradient-to-t hover:from-pink-400 hover:to-pink-500 hover:bg-clip-text'
                      }`}
                    >
                      {item}
                    </a>
                    
                    {/* Animated bottom border */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-500 transition-all duration-300 ${
                      activeTab === item ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.header>
  );
};

export default Header;


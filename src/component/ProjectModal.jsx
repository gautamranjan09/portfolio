import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-opacity-10 backdrop-blur backdrop-filter flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-[#00000090] backdrop-blur backdrop-filter rounded-lg p-2 sm:p-8 max-w-2xl md:max-w-6xl w-full mx-4 overflow-y-auto max-h-[75vh] custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-between'>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className=" text-gray-400 mb-4 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className='flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-2 md:space-y-0'>
              <div className='flex flex-col md:w-8/12'>
                <img src={project.image} alt={project.title} className="w-full h-40 sm:h-72 md:h-96 object-fit rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-pink-400">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center bg-gray-800 rounded-full px-3 py-1">
                      {tech.icon}
                      <span className="ml-2 text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex flex-col md:w-4/12'>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4 mb-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                    whileHover={{ scale: 1.10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded transition-colors"
                    whileHover={{ scale: 1.10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;


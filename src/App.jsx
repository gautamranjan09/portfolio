import React from 'react';
import { motion } from 'framer-motion';
import Header from './component/Header';
import About from './component/about';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './component/Header';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('About');

  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'contact'];
    const sectionElements = sectionIds.map(id => document.getElementById(id));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to change when the section is considered "in view"
    );

    sectionElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
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


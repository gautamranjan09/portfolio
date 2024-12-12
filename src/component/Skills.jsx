import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
          <path d="M12 21.35a2.06 2.06 0 0 1-1-.2c-.83-.42-1.63-1.48-2.27-3.06a20.12 20.12 0 0 1-.95-3.02A19.75 19.75 0 0 1 7 12c0-1.09.14-2.1.37-3.07.2-1.09.52-2.11.95-3.02.64-1.58 1.44-2.64 2.27-3.06.3-.15.64-.2 1-.2.35 0 .69.05.98.2.84.42 1.64 1.48 2.28 3.06.43.91.75 1.93.95 3.02.23.97.37 1.98.37 3.07a19.75 19.75 0 0 1-.78 3.07 20.12 20.12 0 0 1-.95 3.02c-.64 1.58-1.44 2.64-2.28 3.06-.29.15-.63.2-.98.2Z"/>
          <path d="M19.45 16.89a1.94 1.94 0 0 1-.7-.13 13.48 13.48 0 0 1-2.74-1.57 20.01 20.01 0 0 1-2.67-2.12 19.75 19.75 0 0 1-2.14-2.12 13.68 13.68 0 0 1-1.7-2.26c-.62-1.1-.77-2.06-.45-2.7.2-.37.52-.63.96-.77.35-.11.74-.11 1.15 0 .84.24 1.83.9 2.85 1.96.74.77 1.48 1.69 2.14 2.72.66-.99 1.4-1.91 2.14-2.72 1.02-1.06 2-1.72 2.85-1.96.41-.11.8-.11 1.15 0 .44.14.76.4.96.77.32.64.17 1.6-.45 2.7a13.68 13.68 0 0 1-1.7 2.26 19.75 19.75 0 0 1-2.14 2.12 20.01 20.01 0 0 1-2.67 2.12 13.48 13.48 0 0 1-2.74 1.57c-.23.09-.47.13-.7.13Z"/>
        </svg>
      )
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
        </svg>
      )
    },
    {
      name: "TypeScript",
      icon: (<svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M3 3h18v18H3V3zm14.385 13.836c.226-.82.14-1.995-.219-2.533-.363-.539-1.463-.939-2.927-.939h-.002l-1.743.001-.273.001h-2.482v7.296h2.482V18.25h.273c.48 0 .952-.048 1.406-.143.455-.094.873-.24 1.252-.436.379-.196.704-.458.973-.784.269-.326.47-.723.602-1.189l.001-.002.657 2.966h2.242l-1.096-4.326h-1.85l.704.5zm-4.384-1.836h1.743c.633 0 1.106.096 1.417.29.311.193.467.512.467.956 0 .444-.156.774-.467.989-.311.215-.784.323-1.417.323h-1.743v-2.558z"/>
        </svg>
      )
    },
    {
      name: "HTML",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M3 2h18l-1.623 18L12 22l-7.377-2L3 2zm4.5 7l-.25-2.995h9.5L17 4H7l.75 8.996h6.375L13.75 15.5l-1.75.5-1.75-.5-.125-1.5H7.5l.25 3 4.25 1 4.25-1 .5-6H8.5l-.25-3h7.5l.25 3h-3z"/>
        </svg>
      )
    },
    {
      name: "CSS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M3 2h18l-1.623 18L12 22l-7.377-2L3 2zm14.5 4H7l.25 3h9.75l-.5 5.5-4.5 1.5-4.5-1.5-.25-3h3l.125 1.5 1.625.5 1.625-.5.125-1.5h-6.5L7 5h10l-.25 3h-7.5l-.25-2h7.5z"/>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180,},
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
  };


  return (
    <motion.section
      id="skills"
      className="py-20 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center space-y-4"
              variants={itemVariants}
            >
              <motion.div
                className="w-20 h-20 rounded-xl bg-gray-800 flex items-center justify-center text-purple-400"
                variants={iconVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}}
              >
                {skill.icon}
              </motion.div>
              <motion.span
                className="text-white font-medium"
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;


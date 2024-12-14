import React from 'react';
import { motion } from 'framer-motion';
import dsaImg from "../assets/dsa.png"

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: "https://gyandors.com/_next/image?url=%2Fimages%2Freact.png&w=64&q=75"
    },
    {
      name: "JavaScript",
      icon: "https://gyandors.com/_next/image?url=%2Fimages%2Fjavascript.png&w=64&q=75"
    },
    {
      name: "Redux",
      icon: "https://gyandors.com/_next/image?url=%2Fimages%2Fredux.png&w=64&q=75"
    },
    {
      name: "HTML",
      icon: "https://gyandors.com/_next/image?url=%2Fimages%2Fhtml.png&w=64&q=75"
    },
    {
      name: "CSS",
      icon: "https://gyandors.com/_next/image?url=%2Fimages%2Fcss.png&w=64&q=75"
    },
    {
      name: "Tailwind CSS",
      icon: "https://gyandors.com/_next/image?url=%2Fimages%2Ftailwind.png&w=64&q=75"
    },
    {
      name: "Router",
      icon: "https://gyandors.com/_next/image?url=%2Fimages%2Frouter.png&w=64&q=75"
    },
    {
      name: "Bootstrap",
      icon: "https://gyandors.com/_next/image?url=%2Fimages%2Fbootstrap.png&w=64&q=75"
    },
    {
      name: "Git",
      icon: "https://gyandors.com/_next/image?url=%2Fimages%2Fgit.png&w=64&q=75"
    },
    {
      name: "GitHub",
      icon: "https://gyandors.com/_next/image?url=%2Fimages%2Fgithub.png&w=64&q=75"
    },
    {
      name: "Firebase",
      icon: "https://www.svgrepo.com/show/353735/firebase.svg"
    },
    {
      name: "Ant Design",
      icon: "https://www.svgrepo.com/show/353401/ant-design.svg"
    },
    {
      name: "Motion",
      icon: "https://framerusercontent.com/images/FEF0Xp0qllCZsG1uilpmdZAzD8.png"
    },
    {
      name: "DSA",
      icon: dsaImg
    },
    {
      name: "Java",
      icon: "https://www.svgrepo.com/show/184143/java.svg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
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
      className="pt-20 bg-gradient-to-b from-sky-950 via-gray-950 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.07 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl  border-b pb-3 font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text"
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
              <motion.img
                className="w-[5.5rem] h-[5.5rem] rounded-xl border p-3 flex items-center justify-center"
                variants={iconVariants}
                src={skill.icon}
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}}
              >
              </motion.img>
              <motion.span
                className="text-white font-medium text-xl"
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


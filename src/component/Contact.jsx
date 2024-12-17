import React, { useRef, useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {
  const yourName = useRef();
  const yourEmail = useRef();
  const yourPhoneNumber = useRef();
  const yourMessage = useRef();

  const [scope, animate] = useAnimate();
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 1 },
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

  const contactFormSubmitHandler = async(event) => {
    event.preventDefault();

    console.log("submit");
    const name = yourName.current.value;
    const email = yourEmail.current.value;
    const phoneNumber = yourPhoneNumber.current.value;
    const message = yourMessage.current.value;

    if(!name.trim() || !email.trim() || !phoneNumber.trim() || !message.trim()) {
      const newErrors = {
        name: !name.trim() && "Name is required.",
        email: (!email.trim() && "Email is required.") || (!email.includes("@") && "Email should contain @"),
        phoneNumber: (!phoneNumber && "Phone number is required.") ||
        (phoneNumber.length !== 10 && "Phone number must be exactly 10 digits."),
        message: !message.trim() && "Message is required."
      };
      setError(newErrors);
      animate (
        [
          newErrors.name && ".inputName",
          newErrors.email && ".inputEmail",
          newErrors.phoneNumber && ".inputPhoneNumber",
          newErrors.message && ".inputMessage",
        ]
          .filter(Boolean) // Removes false/undefined/null from the array
          .join(", "), // Combines valid selectors into a single string
        { x: [-10, 0, 10 , 0]},
        { type: 'spring', stiffness: 400, duration: 0.5, delay: stagger(0.05)}
      )
      return
    }
    setIsLoading(true);
    const loadingToast = toast.loading("Sending Message...");
    const formData = new FormData(event.target);

    formData.append("access_key", "2fbfb457-b83f-46f1-8ad8-1550aa423064");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      // Update the loading toast with success message
      toast.update(loadingToast, {
        render: `Message sent successfully!`,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    }
    setError({});
    setIsLoading(false);
    yourName.current.value = "";
    yourEmail.current.value = "";
    yourPhoneNumber.current.value = "";
    yourMessage.current.value = "";
  }

  return (
    <motion.section
      id="contact"
      className="pt-20 bg-gradient-to-b from-cyan-950 via-gray-950 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl border-b pb-3 font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="max-w-md mx-auto space-y-6"
          ref={scope}
          variants={containerVariants}
          onSubmit={contactFormSubmitHandler}
        >
          <motion.div variants={itemVariants}>
          <motion.input
            type="text"
            placeholder="Your Name"
            onFocus={() => {setError({...error, name: ''})}}
            ref={yourName}
            name='name'
            className={`inputName w-full px-4 py-2 bg-gradient-to-b from-gray-950/90 to-cyan-800 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 ${error.name && `placeholder:text-red-500 border-red-500`}`}
            whileFocus={{ scale: 1.1 }}
            transition={{duration:0.5}}
          />
          {error.name && <span className="text-red-500 text-sm mt-1">{error.name}</span>}
          </motion.div>
          <motion.div variants={itemVariants}>
          <motion.input
            type="email"
            placeholder="Your Email"
            onFocus={() => {setError({...error, email: ''})}}
            ref={yourEmail}
            name='email'
            className={`inputEmail w-full px-4 py-2 bg-gradient-to-b from-gray-950/90 to-cyan-800 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 ${error.email && `placeholder:text-red-500 border-red-500`}`}
            whileFocus={{ scale: 1.1 }}
            transition={{duration:0.5}}
          />
          {error.email && <span className="text-red-500 text-sm mt-1">{error.email}</span>}
          </motion.div>
          <motion.div variants={itemVariants}>
           <motion.input
            type="number"
            placeholder="Your Phone Number"
            onFocus={() => {setError({...error, phoneNumber: ''})}}
            ref={yourPhoneNumber}
            name='number'
            className={`inputPhoneNumber w-full px-4 py-2 bg-gradient-to-b from-gray-950/90 to-cyan-800 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 ${error.phoneNumber && `placeholder:text-red-500 border-red-500`}`}
            whileFocus={{ scale: 1.1 }}
            transition={{duration:0.5}}
          />
          {error.phoneNumber && <span className="text-red-500 text-sm mt-1">{error.phoneNumber}</span>}
          </motion.div>
          <motion.div variants={itemVariants}>
          <motion.textarea
            placeholder="Your Message"
            ref={yourMessage}
            name='message'
            onFocus={() => {setError({...error, message: ''})}}
            className={`inputMessage w-full px-4 py-2 bg-gradient-to-b from-gray-950/90 to-cyan-800 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 h-32 ${error.message && `placeholder:text-red-500 border-red-500`}`}
            whileFocus={{ scale: 1.1 }}
            transition={{duration:0.5}}
          />
          {error.message && <span className="text-red-500 text-sm mt-1">{error.message}</span>}
          </motion.div>
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors disabled:bg-purple-400 disabled:cursor-not-allowed"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{type: 'spring', stiffness: 200}}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;


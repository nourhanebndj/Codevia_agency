import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ryhyq6n',
      'template_wnq9pat',
      { ...formData, time: new Date().toLocaleString() },
      '8L4xz1T5Snaui1sLo'
    )
    .then(() => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    })
    .catch(() => {
      toast.error('Failed to send message.');
    });
  };

  return (
    <section id="contact" className="section-container px-4 md:px-0">
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-purple-600 rounded-2xl overflow-hidden"
      >
        <div className="relative md:px-16 px-6 py-16 md:py-24">
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="absolute top-0 right-0 w-1/2 h-full bg-purple-600 clip-path-slant hidden md:block"
          ></motion.div>

          <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12">
            {/* Left text */}
            <motion.div 
              variants={fadeIn('right', 0.5)}
              className="w-full lg:w-[30%] text-white max-w-lg text-center md:text-left"
            >
              <motion.h2 
                variants={textVariant(0.3)}
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4"
              >
                Contact Us
              </motion.h2>
              <motion.p 
                variants={fadeIn('up', 0.6)}
                className="text-white text-sm sm:text-base"
              >
                Best cooks and best delivery guys all at your service. Hot tasty food.
              </motion.p>
            </motion.div>

            {/* Contact form */}
            <motion.form 
              onSubmit={handleSubmit}
              variants={fadeIn('left', 0.5)}
              className="w-full lg:w-[70%] grid gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-600"
              >
                <option value="" disabled>Select a Service</option>
                <option>Full-Stack Web & Mobile Development</option>
                <option>E-commerce Solutions</option>
                <option>UI/UX & Brand Identity</option>
                <option>Data Analytics & Dashboards</option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
              ></textarea>

              <motion.button 
                type="submit"
                variants={fadeIn('up', 0.6)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-700 px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Send</span>
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" autoClose={3000} />

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  );
};

export default ContactFormSection;

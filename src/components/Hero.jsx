import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from '../assets/hero-image.jpg'
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          {/* Star badge */}
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-purple-600 group-hover:scale-110 transition-transform">★</span>
            <span className="text-sm font-medium">Empower Your Brand with Next-Level Digital Experiences</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          From Code to Conversion:{' '}
          <span className="text-purple-700 relative inline-block">
            Your Growth Engine Starts Here.
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-200/60"></span>
          </span>
        </motion.h1>

        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
        We turn bold ideas into high-performing digital experiences that drive measurable growth.
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
        </motion.div>
      </div>

      {/* Right Column - Images */}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Team meeting"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
import React from 'react'
import { BsLayers }            from 'react-icons/bs'; 
import { FiShoppingCart }      from 'react-icons/fi';  
import { HiOutlinePencilAlt }  from 'react-icons/hi';
import { BiBarChartAlt2 }      from 'react-icons/bi';  
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsLayers className="w-8 h-8 text-purple-700" />,
      title: "Full-Stack Web & Mobile Development",
      description: "O From concept to launch, we craft fast, secure apps that scale with your user base.",
      link: "#contact"
    },
    {
      icon: <FiShoppingCart className="w-8 h-8 text-amber-400" />,
      title: "E-commerce Solutions", 
      description: "Custom storefronts and checkout flows optimized to boost conversions and repeat sales.",
      link: "#contact"
    },
    {
      icon: <HiOutlinePencilAlt className="w-8 h-8 text-red-400" />,
      title: "UI/UX & Brand Identity",
      description: "Human-centred design that aligns visuals, interactions, and messaging for lasting impact.",
      link: "#contact"
    },
    {
      icon: <BiBarChartAlt2 className="w-8 h-8 text-cyan-400" />,
      title: "Data Analytics & Dashboards",
      description: " Real-time insights that turn raw data into clear decisions and measurable ROI.",
      link: "#contact"
    }
  ]

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
     <motion.div 
      variants={fadeIn('up', 0.3)}
      className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
     >
       {/* Header */}
       <motion.div 
        variants={fadeIn('right', 0.4)}
        className="md:w-1/3"
       >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
        >
          Our Core Services
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.5)}
          className="text-gray-600 text-lg mb-4 md:w-4/5"
        >
          Discuss your goals, determine success metrics, identify problems
        </motion.p>
        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="space-y-3"
        >
          <motion.div 
            variants={fadeIn('right', 0.7)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-700"></div>
            </div>
            <span className="text-gray-600">UX design content strategy</span>
          </motion.div>
          <motion.div 
            variants={fadeIn('right', 0.8)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-700"></div>
            </div>
            <span className="text-gray-600">Development bring</span>
          </motion.div>
        </motion.div>
        <a href="#contact">
  <motion.button 
    variants={fadeIn('up', 0.9)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-8 bg-purple-700 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-purple-700 transition-colors"
  >
    Get started
  </motion.button>
</a>

      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={fadeIn('left', 0.4)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            whileHover={{ scale: 1.05 }}
            className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="mb-4"
            >
              {service.icon}
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="text-xl font-semibold mb-2"
            >
              {service.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.5 * (index + 1))}
              className="text-gray-600 mb-4"
            >
              {service.description}
            </motion.p>
            <motion.a 
              variants={fadeIn('up', 0.6 * (index + 1))}
              href={service.link}
              className="text-purple-700 font-medium hover:text-purple-700 transition-colors"
            >
              LEARN MORE
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
     </motion.div>
    </section>
  )
}

export default ServicesSection 
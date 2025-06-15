import scheduleImage from '../assets/stats.jpg'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ScheduleSection = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
      id='aboutus'
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left side - Image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.img 
            variants={fadeIn('up', 0.4)}
            src={scheduleImage} 
            alt="Statistics dashboard" 
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div 
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span 
            variants={fadeIn('up', 0.4)}
            className="text-gray-500 font-semibold"
          >
            Who We Are
          </motion.span>
          <motion.h2 
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6"
          >
            About Us <br />
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 mb-8"
          >
            Codevia was founded in 2019 out of a passion for clean, modern web development and a desire to deliver reliable digital solutions.
            What began as a small independent initiative quickly grew into a trusted agency known for custom WordPress sites and scalable web applications.
            Over the years, we’ve earned the confidence of clients across industries by focusing on quality, responsiveness, and transparency.
            As digital needs evolved, so did we — expanding our services and expertise while staying true to our core values.
            Today, Codevia proudly supports businesses in their digital growth with creativity, precision, and code that delivers.
                </motion.p>
          <motion.a 
            variants={fadeIn('up', 0.7)}
            href="#contact" 
            className="text-purple-700 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Meet the Team
            <motion.svg 
              variants={fadeIn('left', 0.8)}
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ScheduleSection
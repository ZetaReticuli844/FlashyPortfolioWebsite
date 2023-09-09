import React from 'react'
import  {styles} from '../styles'
import { motion } from "framer-motion";
import { FaChevronDown } from 'react-icons/fa';
import Lottie from  "lottie-react"
import laptop from "./animations/laptop.json";



const Hero = () => {
  return (

    <section className="relative w-full h-screen mx-auto">


      <div className="absolute inset-0 w-full h-full object-cover">

     
  <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        

        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>
           Greetings fellow humans, My name is <span className=' text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600'>Yogesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am Computer Engineering student in my 4th year, <br className='sm:block hidden' />
       currently looking for internship opportunities.
          </p>
        </div>
        <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full ">
       <Lottie animationData={laptop} className="w-[500px] h-[500px] sm:w-[500px] sm:h-[500px]" />
       </div> 
      </div>
     
      </div>
 
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
        <a href="#about">
      
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          
          >
            <FaChevronDown className="text-secondary text-3xl" />
          </motion.div>
      
        </a>
    
      </div>

      </section>
   
  )
}

export default Hero
import React from 'react'
import  {styles} from '../styles'
import {ComputersCanvas} from './canvas'
import { motion } from "framer-motion";
import ParticlesBackground from './backgrounds/ParticlesBackground';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 w-full h-full object-cover">
      <ParticlesBackground />
  <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
           Greetings fellow humans, My name is <span className='text-[#915EFF]'>Yogesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am Computer Engineering student in my 4th year, <br className='sm:block hidden' />
       currently looking for internship opportunities.
          </p>
        </div>
      </div>
     
      <div className="absolute xs:bottom-10 bottom-32
      w-full  flex justify-center items-center">
<a href="#about">
<div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
</a>
      </div>
      </div>
      </section>
  )
}

export default Hero
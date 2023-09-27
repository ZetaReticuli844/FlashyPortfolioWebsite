import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, staggerContainer, textVariant } from '../utils/motion'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'

import { Icon } from "react-3d-icons";

const TechCard = ({ technologies }) => {
    return (
   
        <Tilt className="xs:w-[170px] w-full">
        <motion.div
        variants={fadeIn("right","spring",0.5,0.75)}
        className="w-full rounded-[10px] shadow-card bg-white dark:bg-gray-900 bg-opacity-50 backdrop-blur-sm" >
        <div 
        className=" rounded-[10px] py-5 px-5 min-h-[150px]
        flex justify-evenly items-center ">
        <img src={technologies.icon} alt={technologies.name} className="w-20 h-20 object-contain"/>
       
        </div>
        </motion.div>
            </Tilt>
            
    )
}


const TechStack = () => {

    const frameworks = technologies.filter((tech) => tech.type === 'framework');
    const languages = technologies.filter((tech) => tech.type === 'language');
    const tools = technologies.filter((tech) => tech.type === 'tool');
   
  return (
    
    <div className=''>
    <motion.div variants={staggerContainer()} className={`mt-12 bg-primary place-content-center`}>
        <h1 className={`${styles.sectionHeadText} text-center`}>My Tech Stack</h1>
        </motion.div>
        <motion.div variants={staggerContainer()} className={`flex flex-col gap-5 `}>
            
          
            <h1 className={`${styles.heroSubText} text-center`}>Languages</h1>
            <div className="flex flex-row flex-wrap justify-center gap-10">
            {languages.map((tech, index) => (
                <TechCard key={index} technologies={tech} />
            ))}

            </div>
            <h1 className={`${styles.heroSubText} text-center`}>Frameworks</h1>
            <div className="flex flex-row flex-wrap justify-center  gap-10">
            {frameworks.map((tech, index) => (
                <TechCard key={index} technologies={tech} />
            ))}
            </div>
            <h1 className={`${styles.heroSubText} text-center`}>Tools</h1>
            <div className="flex flex-row flex-wrap justify-center  gap-10">
            {tools.map((tech, index) => (
                <TechCard key={index} technologies={tech} />
            ))}
            </div>  
           
            </motion.div>

            
</div>
        


  
  )
}

export default SectionWrapper(TechStack, "techstack")

import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { fadeIn, staggerContainer,textVariant } from '../utils/motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {education} from '../constants'
import { SectionWrapper } from '../hoc';
import {Tilt} from "react-tilt"


const EducationCard = ({education}) => {
    return (
      <div className="bg-tertiary rounded-2xl w-full sm:w-[600px] h-[200px] sm:h-[200px] flex flex-col justify-center items-center p-4">
      <div className="flex justify-center items-center mb-4 ">
        <img src={education.logo} alt="" className="w-[50px] h-[50px] object-cover rounded-full border-purple-400" />
        <h2 className="text-2xl font-bold text-white ml-4">{education.name}</h2>
      </div>
      <p className="text-white text-center mb-4">{education.college}</p>
      <small className="text-white text-center italic ">{education.date}</small>
    </div>



      
    );
}

const Education = () => {
    return (<div className={`mt-12 bg-black`}>
      <motion.div variants={textVariant()} className={` text-center  bg-black`} >
            
            <h2 className={styles.sectionHeadText}>Education</h2>
          </motion.div>
          <motion.div variants={staggerContainer()}>

{education.map((education,index)=>(
  <EducationCard key={index} education={education}/>
))}

</motion.div>
        </div>
    )
}

export default SectionWrapper(Education)





// {education.map((education,index)=>(
//     <EducationCard key={index} education={education}/>
// ))}
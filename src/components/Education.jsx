import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {education} from '../constants'
import { SectionWrapper } from '../hoc';

const EducationCard = ({education}) => {
    return (
        <VerticalTimelineElement
        contentStyle={{
            background: "#1d1836",
            color: "#fff",
            borderBottom:"5px solid red",
    

        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={education.date}
        iconStyle={{ background: education.logo }}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
            <img
                src={education.icon}
                alt={education.college}
                className='w-[60%] h-[60%] object-contain'
            />
            </div>
        }
        >
        <div>
      <img
  src={education.logo}
  alt={education.name}
  className="w-[20%] h-[20%] object-contain rounded-full ml-auto filter drop-shadow-[0 0 5px #ff0000]"
/>
            <h3 className='text-white text-[24px] font-bold'>{education.name}</h3>
            <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
            >
            {education.college}
            </p>
        </div>
    
        </VerticalTimelineElement>
    );
}

const Education = () => {
    return (
        <motion.div variants={staggerContainer()} className="mt-20">
     
          <p className={`${styles.sectionSubText} text-center`}>
            My Education
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Education
          </h2>
     
        <VerticalTimeline>
        {education.map((education,index)=>(
            <EducationCard key={index} education={education}/>
        ))}
        </VerticalTimeline>
      </motion.div>
    )
}

export default SectionWrapper(Education)






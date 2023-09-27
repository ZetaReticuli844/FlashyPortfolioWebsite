import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, staggerContainer, textVariant,slideIn } from '../utils/motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';

const EducationCard = ({ education }) => {
  return (
<VerticalTimelineElement
   contentStyle={{
    background:'transparent',
    
  }}
  
  date={<div className="italic">
    {education.date}
    </div>
}
iconStyle={{background: 'linear-gradient(to right, #d53f8c, #ec4899)',color:'transparent', borderColor:'transparent' }}  
  contentArrowStyle={{display:'none' }}
  icon={
    <div className='flex justify-center  items-center w-full h-full'>
      <img
        src={education.logo}
        alt={education.name}
        className='w-[100%] h-[100%] object-contain rounded-full'
      />
    </div> }>
    <div>

      <h1 className="text-2xl font-bold  ml-4">{education.name}</h1>
    </div>
    <p className=" text-center mb-4">{education.college}</p>
    
  </VerticalTimelineElement>

  );
};

const Education = () => {
  return (
    
    <div className={`mt-12 pl-10 w-full  place-content-center pt-10 pb-10 `}>
      <motion.div variants={textVariant()} className={`text-center  pb-8`}>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        
    <VerticalTimeline>
        
          {education.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
    
 </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Education);
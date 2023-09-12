import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { github } from '../assets'
import { projects } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'


const ProjectCard = ({index, name, description, image,source_code_link,tags}) => {

  return(
   <motion.div variants={fadeIn("","",0.5*index,0.75)} className="shadow-card  bg-gray-900  backdrop-blur-sm bg-opacity-50 p-5 rounded-2xl sm:w-[360px] w-full">
    <Tilt options={{
      max:25,
      scale:1,
      speed:450,
      glare:true,
      "max-glare":0.5
    }} className=" ">
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover  "/>

        </div>
<div className="absolute inset-0 flex flex-justify-end m-3 card_img_hover">
  <div onClick={()=>window.open(source_code_link,"blank")}
  className='bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 w-10 h-10 flex justify-center items-center cursor-pointer rounded-full'>
    <img src={github} alt="github" className="w-5 h-5 object-contain"/></div>
  </div>
<div className='mt-5'>
<h3 className='text-white font-bold text-[24px]'>{name}</h3>
<p className="text-secondary text-[14px] leading-[20px] mt-2">{description}</p>
<div className="mt-5 flex flex-row ">
 {tags.map((tag)=>(
  <h3 key={tag.name} className={`w-[50px]`}>{<tag.icon className=""/>}</h3>))}</div>
</div>
    </Tilt>
   </motion.div>
  )
}

const Works = () => {
  return (
  <>
   <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects
        </h2>
      </motion.div>
      <div className="w-full flex">
<motion.p variants={fadeIn("","",0.1,1)}
className="mt-3 text-secondary text-[17px]leading-[30px] max-w-3xl text-center ">
These projects show my skills in different areas of Web development.
</motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        </div>
     
  </>
  )
}

export default SectionWrapper(Works, "works")
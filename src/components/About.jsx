import React from "react";
import {Tilt} from "react-tilt"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Lottie from "lottie-react";

const ServiceCard = ({ index,title, icon }) => {
  return (
   <Tilt className="xs:w-[250px] w-full ">
<motion.div
variants={fadeIn("right","spring",0.5*index,0.75)}
className="w-full backdrop-blur p-[1px] rounded-[20px] shadow-card">
<div options={{max:45 , scale:1 ,speed:450 }}
className=" rounded-[20px] py-5 px-12 min-h-[250px]
flex justify-evenly items-center flex-col">
<Lottie animationData={icon} className="w-[100px] h-[100px]"/>
<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
</div>
</motion.div>
    </Tilt>
  );
}


const About = () => {
  return (
  <div className="">
  <motion.div variants={textVariant()}>
  
<h2 className={styles.sectionHeadText}>Who am I ?</h2>
  </motion.div>
  <motion.p variants={fadeIn("","",0.5,1)} className="mt-4 text-secondary max-w-3xl
  ">
Hi there! I'm currently in my final year of computer engineering at BBDITM.

When it comes to programming, I consider myself fluent in multiple programming languages and frameworks. While I have a broad skill set, my specialization lies in developing web applications. Working with languages like Python, Javascript, and Ruby, and frameworks such as React, Django,Next and Rails, has allowed me to build a strong foundation and tackle various projects with ease.

Aside from my programming endeavors, I also have a facination with Japnese culture. In fact, I'm currently taking up Japanese on the side.

One thing I can proudly say about myself is that I'm a fast learner. Whether it's grasping a new concept or solving a challenging problem, I'm always eager to dive right in with enthusiasm. The thrill of acquiring new skills and expanding my knowledge is what keeps me motivated in this ever-evolving field.


  </motion.p>
  <div className="mt-20 flex flex-wrap gap-10">
{services.map((service,index) => (
  <ServiceCard key={index} service={service}  {...service}/>
))}
  </div>
  </div>

  )
}

export default SectionWrapper(About, "about");
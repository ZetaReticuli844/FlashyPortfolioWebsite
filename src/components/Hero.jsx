import React from 'react'
import  {styles} from '../styles'
import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
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
      <ComputersCanvas />
      </section>
  )
}

export default Hero
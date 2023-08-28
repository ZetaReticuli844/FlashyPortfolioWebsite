import React from 'react'
import {BallCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className="flex flex-row justify-center gap-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-28 h-28 flex flex-auto">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")
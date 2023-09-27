import { BrowserRouter as Router} from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar,
Tech, Works,Education,TechStack} from './components'
import Lotie from 'lottie-react'

import space from './components/animations/space.json'

const App = () => {
  return (
    <div className="App">
      <Router>
    
        < div className="  @apply bg-[#d9d9d9] bg-[linear-gradient(315deg,#d9d9d9_0%,#f6f2f2_74%)] text-black-200
        dark:bg-[#130f40] dark:bg-[linear-gradient(315deg,#130f40_0%,#000000_74%)]  dark:text-white">
      
   
    
        <div className="relative z-0 bg-primary">
  
          
            <Navbar />
            
            <Hero />
    
       
          <About />
          <TechStack />
          <Education />
      
           
          <Works />
       
       

            <Contact />
     
         
          </div>
        
        </div>
      </Router>
      </div>
  )
}
export default App

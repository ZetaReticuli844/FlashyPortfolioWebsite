import { BrowserRouter as Router} from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar,
Tech, Works,Education,TechStack} from './components'
import Lotie from 'lottie-react'

import space from './components/animations/space.json'

const App = () => {
  return (
    <div className="App">
      <Router>
    
        < div className=" bg-gradient-to-r from-green-50 to-amber-50 text-black-200
        dark:bg-gradient-to-r dark:from-gray-900 dark:to-slate-800  dark:text-white">
      
   
    
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

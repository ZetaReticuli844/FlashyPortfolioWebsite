import { BrowserRouter as Router} from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar,
Tech, Works,Education,TechStack} from './components'
import Lotie from 'lottie-react'

import space from './components/animations/space.json'

const App = () => {
  return (
    <div className="App">
      <Router>
    
        < div className="bg-gradient-to-r from-rose-500 via-violet-900 to-purple-800">
      
   
    
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

import { BrowserRouter as Router} from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar,
Tech, Works, StarsCanvas,Education} from './components'


const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-no-center">
            <Navbar />
            <Hero />
       
          </div>
          <About />
<Education />
          {/* <Experience /> */}
          <Tech />  
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>


        </div>
      </Router>
      </div>
  )
}
export default App

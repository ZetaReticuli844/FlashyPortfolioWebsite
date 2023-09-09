import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'

import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


//template_1eaqwxq
//service_1xprkz8
//OWejy6i-qqNfm7bzA

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message:"",
   })
const [isSending, setIsSending] = useState(false)
const handleChange=(e)=>{
  const {name, value} = e.target
  setForm({...form, [name]: value})

}
const handleSubmit=(e)=>{
  e.preventDefailt()
  setLoading(true)
  emailjs.sendForm('service_1xprkz8', 'template_1eaqwxq', {
    from_name: form.name,
    to_name: 'Yogesh',
    from_email: form.email,
    to_email: 'awesomeyogi10@gmail.com',
    message: form.message,

  },'OWejy6i-qqNfm7bzA')
.then(()=>{
  setLoading(false)
  alert("Thank you for your message. I'll get back to you soon.")
  setForm({
    name: "",
    email: "",
    message:"",
  })
},(error)=>{
  setLoading(false)
  console.log(error)
  alert("Something went wrong. Please try again.")
})
}
  return (
    
  <div className=" xl:mt-12 xl:flex-row-reverse flex-col-reverse flex gap-10 
  overflow-hidden">

<motion.div variants={slideIn("right","tween",0.2,1)}
 className='flex-[0.75] bg-gray-900 bg-opacity-50 backdrop-blur-lg shadow-card p-8 rounded-2xl  '>
  <h2 className={`${styles.sectionHeadText} text-white`}>Hit me up!</h2>
  <form  ref={formRef} onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
    <label htmlFor="name" className="text-white text-[16px]">Name</label>
    <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="your name here"
              className='bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
    <label htmlFor="email" className="text-white text-[16px]">Email</label>
    <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
    <label htmlFor="message" className="text-white text-[16px]">Message</label>
    <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-black  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
    <button type="submit" className="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 w-[150px] h-[50px] rounded-2xl text-white-100 text-[16px] font-bold flex justify-center items-center hover:from-purple-800 hover:via-purple-400 hover:to-purple-200 transition-all duration-300 ease-in-out">
      {isSending ? "Sending..." : "Send"}
    </button>


    </form>
</motion.div>
<motion.div
variants={slideIn("right","tween",0.2,1)}
className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
<h1 className={`${styles.heroHeadText} italic`}>
My inbox is lonely and in need of some good company.
  </h1>
</motion.div>

</div>

 
  )
}

export default SectionWrapper(Contact, "contact")
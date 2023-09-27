import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'
import {BsLinkedin} from 'react-icons/bs'
import {CgDarkMode} from 'react-icons/cg'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const handleDarkModeToggle = () => {
    document.body.classList.toggle('dark');
  };
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)


  return (
    <nav className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20  backdrop-blur-xl`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={()=>{setActive(""); window.scroll(0,0);}}>
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className='text-[18px] font-bold cursor-pointer flex '>
            YOGESH &nbsp;
          
          </p>


        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
        <li>
          <button className="w-10" onClick={handleDarkModeToggle}>
           <CgDarkMode className="w-7 h-7"/>
           </button>
          </li>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active===link.title ? "text-white" : "text-black dark:text-white"}
            hover:text-white text-[18px]
            font-medium cursor-pointer`}
            onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
          <BsLinkedin className="text-black dark:text-white text-[28px] cursor-pointer" onClick={()=>window.open("https://www.linkedin.com/in/yogesh-shekhawat-5a8014224/", "_blank")} />
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          className="text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={() => setToggle(!toggle)}
        >
          <AiOutlineMenu
            className={`w-6 h-6 toggle-menu ${toggle ? 'hidden' : 'block'}`}
          />
          <AiOutlineClose
            className={`w-6 h-6 toggle-menu ${toggle ? 'block' : 'hidden'}`}
          />
        </button>
 
<div className={`${!toggle?'hidden':'flex'} p-6 black-gradiant backdrop-blur-lg bg-white text-black dark:bg-gray-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
<ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active===link.title ? "text-white " : "text-black dark:text-white"}
          font-poppins font-medium cursor-pointer text-[16px]`}
            onClick={()=>{
              setToggle(!toggle)
              setActive(link.title)}}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
          <BsLinkedin className="text-black dark:text-white text-[28px] cursor-pointer" onClick={()=>window.open("https://www.linkedin.com/in/yogesh-shekhawat-5a8014224/", "_blank")} />
          </li>
          <li>
          <button className="w-10" onClick={handleDarkModeToggle}>
           <CgDarkMode className="w-7 h-7 text-black dark:text-white"/>
           </button>
          </li>
         
        </ul>

</div>
        </div>
        

      </div>
      </nav>  
  )
}

export default Navbar
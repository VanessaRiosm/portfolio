import React from 'react'
import { motion } from 'framer-motion'


function NavBar() {
  return (

        <div>
            <nav className="grid justify-items-center py-9 gap-6 text-fuchsia-500 md:flex md:justify-between md:px-20">

                <motion.h1 
                    animate={{ scale:1.035 }}
                    transition={{ ease: "easeInOut", duration:3, repeat:Infinity, repeatType:'reverse' }}
                className="text-2xl text-fuchsia-500 font-bold">
                    <div className='font-semibold'>{"<Web Developer/>"}</div>
                </motion.h1>

                <div className="flex items-center text-lg font-bold">
                   
                    <ul className="flex items-center space-x-6">

                    <li className="hover:underline hover:underline-offset-8 hover:shadow-xl hover:scale-105 cursor-pointer select-none" onClick={()=> document.getElementById('about').scrollIntoView({ behavior: "smooth"})}>About</li>

                    <li className="hover:underline hover:underline-offset-8 hover:shadow-xl hover:scale-105 cursor-pointer select-none" onClick={()=> document.getElementById('skills').scrollIntoView({ behavior: "smooth"})}>Skills</li>

                    <li className="hover:underline hover:underline-offset-8 hover:shadow-xl hover:scale-105 cursor-pointer select-none" onClick={()=> document.getElementById('projects').scrollIntoView({ behavior: "smooth"})}>Projects</li>

                    <li className="hover:underline hover:underline-offset-8 hover:shadow-xl hover:scale-105 cursor-pointer select-none" onClick={()=> document.getElementById('contact').scrollIntoView({ behavior: "smooth"})}>Contact</li>
        
                    </ul>
                </div>
            </nav>
        </div>

  )
}

export default NavBar
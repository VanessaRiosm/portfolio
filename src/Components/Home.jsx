import React from 'react'
import About from './About'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { MyInfo } from './MyInfo'
import NavBar from './NavBar'
import { Projects } from './Projects'
import Skills from './Skills'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

function Home() {
  return (
    <div >
        <NavBar/>
        <About/>
        <MyInfo/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        <div className="fixed bottom-0 right-0 mr-3 mb-10 cursor-pointer">
        <BsFillArrowUpCircleFill size={30} color={"fuchsia"} onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}/>
      </div>
    </div>
  )
}

export default Home
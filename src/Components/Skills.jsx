import React, { useEffect } from "react";
import rc from "../Assets/reactImg.png"
import bs from "../Assets/bs.png"
import ck from "../Assets/ck.png"
import cs from "../Assets/cs.png"
import ex from "../Assets/ex.png"
import fg from "../Assets/fg.png"
import gh from "../Assets/gh.png"
import gi from "../Assets/gi.png"
import ht from "../Assets/ht.png"
import js from "../Assets/js.png"
import nd from "../Assets/nd.png"
import pg from "../Assets/pg.png"
import rx from "../Assets/rx.png"
import sl from "../Assets/sl.png"
import sq from "../Assets/sq.png"
import tl from "../Assets/tl.png"
import tr from "../Assets/tr.png"
import vs from "../Assets/vs.png"
import au from "../Assets/au.png"
import st from "../Assets/st.png"
import style from "../Styles/Skills.module.css";
import AOS from 'aos'
import 'aos/dist/aos.css';

const front = [
  {name: "JavaScript", image: js},
  {name: "HTML", image: ht},
  {name: "CSS", image: cs},
  {name: "React", image: rc},
  {name: "Redux", image: rx},
  {name: "Bootstrap", image: bs},
  {name: "Chakra.ui", image: ck},
  {name: "Tailwind", image: tl},
]

const back = [
  {name: "Node", image: nd},
  {name: "Express", image: ex},
  {name: "PostgreSQL", image: pg},
  {name: "Sequelize", image: sq},
  {name: "Socket io", image: st},
  {name: "Auth0", image: au}
]

const tools = [
  {name: "Slack", image: sl},
  {name: "Visual Studio", image: vs},
  {name: "Git", image: gi},
  {name: "GitHub", image: gh},
  {name: "Trello", image: tr},
  {name: "Figma", image: fg},
]



export default function Skills() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="grid justify-items-center mt-16 pt-10 md:mt-24">


      {/* TITULO */}
      <div data-aos="fade-down" data-aos-duration="2000" id="skills" className="m-10">
          <h3 style={{textAlign: "left", fontFamily: "Arial", fontSize: "70px", color: "#D946EF", textShadow: "0px 0px 5px #ffffff" }}>Skills</h3>
      </div>


      {/* Parte Front end  */}
    <div className="mt-8 p-5"> 
      <div>
        <h2 data-aos="fade-right" data-aos-duration="1000" className={style.subtitle}>Front end</h2>
      </div>

      <div className="mt-5 mb-10 flex flex-wrap justify-center max-w-2xl gap-4">
            
            {front.map(e => 
            
              <div key={e.name} className="text-white grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2xl font-semibold hover:scale-110" style={{backgroundColor: 'rgba(255, 253, 253, 0.218)'}}>
                <img src={e.image} className={"h-20"} width={80} height={80}/>
                <h4>{e.name}</h4>
            </div>
                    
            )}
      </div>
    </div>
     
    
    {/* Parte Back end */}
    <div className="p-5"> 
        <div>
            <h2 data-aos="fade-right" data-aos-duration="1000" className={style.subtitle}>Back end</h2>
        </div>

        <div className="mt-5 mb-10 flex flex-wrap justify-center max-w-2xl gap-4 ">
          {back.map(e => 
                
                <div key={e.name} className="text-white grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2xl font-semibold hover:scale-110" style={{backgroundColor: 'rgba(255, 253, 253, 0.218)'}}>
                  <img src={e.image} className={"h-20"} width={80} height={80}/>
                  <h4>{e.name}</h4>
              </div>
                      
              )}
          </div>
    </div>


  {/* Parte Tools  */}
      
      <div className="p-5">
        <div>
          <h2 data-aos="fade-right" data-aos-duration="1000" className={style.subtitle}>Tools</h2>
        </div>

      
            <div className="mt-5 mb-10 flex flex-wrap justify-center max-w-2xl gap-4">
              
            {tools.map(e => 
                
                <div key={e.name} className="text-white grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2xl font-semibold hover:scale-110" style={{backgroundColor: 'rgba(255, 253, 253, 0.218)'}}>
                  <img src={e.image} className={"h-20"} width={80} height={80}/>
                  <h4>{e.name}</h4>
              </div>
                      
              )}
            </div>
      </div>
  
  
  </div>
  );
}

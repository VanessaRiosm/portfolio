import React, {useEffect} from 'react'
import ck from '../assets/ck.png'
import rc from '../assets/reactImg.png'
import cs from '../assets/cs.png'
import ex from '../assets/ex.png'
import fg from '../assets/fg.png'
import gh from '../assets/gh.png'
import gi from '../assets/gi.png'
import js from '../assets/js.png'
import nd from '../assets/nd.png'
import pg from '../assets/pg.png'
import mo from '../assets/mo.png'
import md from '../assets/md.png'
import rx from '../assets/rx.png'
import sl from '../assets/sl.png'
import sq from '../assets/sq.png'
import tl from '../assets/tl.png'
import mu from '../assets/mu.png'
import tr from '../assets/tr.png'
import vt from '../assets/vt.png'
import ts from '../assets/ts.png'
import vs from '../assets/vs.png'
import ht from '../assets/ht.png'
import au from '../assets/au.png'
import st from '../assets/st.png'
import style from '../Styles/Skills.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const front = [
  {name: 'JavaScript', image: js},
  {name: 'Typescript', image: ts},
  {name: 'HTML', image: ht},
  {name: 'CSS', image: cs},
  {name: 'React', image: rc},
  {name: 'Vite', image: vt},
  {name: 'Redux', image: rx},
  {name: 'Chakra UI', image: ck},
  {name: 'Tailwind', image: tl},
  {name: 'Material UI', image: mu},
]

const back = [
  {name: 'Node', image: nd},
  {name: 'Express', image: ex},
  {name: 'PostgreSQL', image: pg},
  {name: 'Sequelize', image: sq},
  {name: 'Socket io', image: st},
  {name: 'Auth0', image: au},
  {name: 'MongoDB', image: md},
  {name: 'Mongoose', image: mo},
]

const tools = [
  {name: 'Slack', image: sl},
  {name: 'Visual Studio', image: vs},
  {name: 'Git', image: gi},
  {name: 'GitHub', image: gh},
  {name: 'Trello', image: tr},
  {name: 'Figma', image: fg},
]

export default function Skills() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='grid justify-items-center mt-16 pt-10 md:mt-24'>
      {/* TITULO */}
      <div
        data-aos='fade-down'
        data-aos-duration='1000'
        id='skills'
        className='m-10'
      >
        <h3
          style={{
            textAlign: 'left',
            fontFamily: 'Arial',
            fontSize: '70px',
            color: '#D946EF',
            textShadow: '0px 0px 5px #ffffff',
          }}
        >
          Skills
        </h3>
      </div>

      {/* Parte Front end  */}
      <div className='mt-8 p-5'>
        <div>
          <h2
            data-aos='fade-right'
            data-aos-duration='1000'
            className={style.subtitle}
          >
            Front end
          </h2>
        </div>

        <div className='mt-5 mb-10 flex flex-wrap justify-center max-w-2xl gap-4'>
          {front.map((e) => (
            <div
              key={e.name}
              className='text-white grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2xl font-semibold hover:scale-110'
              style={{backgroundColor: 'rgba(255, 253, 253, 0.218)'}}
            >
              <img src={e.image} className={'h-20'} width={80} height={80} />
              <h4>{e.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Parte Back end */}
      <div className='p-5'>
        <div>
          <h2
            data-aos='fade-right'
            data-aos-duration='1000'
            className={style.subtitle}
          >
            Back end
          </h2>
        </div>

        <div className='mt-5 mb-10 flex flex-wrap justify-center max-w-2xl gap-4 '>
          {back.map((e) => (
            <div
              key={e.name}
              className='text-white grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2xl font-semibold hover:scale-110'
              style={{backgroundColor: 'rgba(255, 253, 253, 0.218)'}}
            >
              <img src={e.image} className={'h-20'} width={80} height={80} />
              <h4>{e.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Parte Tools  */}

      <div className='p-5'>
        <div>
          <h2
            data-aos='fade-right'
            data-aos-duration='1000'
            className={style.subtitle}
          >
            Tools
          </h2>
        </div>

        <div className='mt-5 mb-10 flex flex-wrap justify-center max-w-2xl gap-4'>
          {tools.map((e) => (
            <div
              key={e.name}
              className='text-white grid gap-2 justify-items-center cursor-grab border rounded-lg p-3 shadow-2xl font-semibold hover:scale-110'
              style={{backgroundColor: 'rgba(255, 253, 253, 0.218)'}}
            >
              <img src={e.image} className={'h-20'} width={80} height={80} />
              <h4>{e.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import React, {useEffect} from 'react'
import pc from '../assets/pcimg.png'
import {BsWhatsapp} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const MyInfo = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='mt-32'>
      <div
        data-aos='fade-down'
        data-aos-duration='1000'
        id='about'
        className='flex justify-center'
      >
        <h2
          style={{
            textAlign: 'left',
            fontFamily: 'Arial',
            fontSize: '70px',
            color: '#D946EF',
            textShadow: '0px 0px 5px #ffffff',
          }}
        >
          About me
        </h2>
      </div>

      <div className='grid justify-around items-center mt-20 lg:flex'>
        <div
          className='flex justify-center'
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          <img src={pc} alt='girl' className='w-80 lg:w-96' />
        </div>

        <div className='w-full max-w-md p-7 grid justify-items-center my-10 text-white font-Roboto'>
          <div>
            I'm Vanessa! <br /> <br />
            Full Stack Web Developer with experience in web development. I have
            a solid knowledge of technologies such as TypeScript, React, NextJs,
            and NodeJs. I have strong teamwork skills, my strong learning
            ability drives me to seek a team where I can contribute and continue
            growing professionally.
          </div>

          <div className='m-10 self-start w-full grid justify-items-start'>
            <div className='text-lg mb-6'>
              <div className='flex gap-3 mb-4'>
                <GrMail color='orange' size={30} />
                <span className='self-center font-mono text-xs'>
                  vanessa.riosm571@gmail.com
                </span>
              </div>

              <div className='flex gap-3'>
                <BsWhatsapp color='#40CF49' size={30} />
                <span className='self-center font-mono text-xs'>
                  +57 302 5061093
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

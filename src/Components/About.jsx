import React, {useEffect} from 'react'
import style from '../Styles/About.module.css'
import pic from '../../Assets/fotoo.png'
import hi from '../../Assets/chat2.png'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Typewriter from 'typewriter-effect'

function About() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='grid justify-around items-center mt-2 lg:flex'>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='font-bold text-zinc-50 mt-10 max-w-xl px-10 sm:p-0 order-2	lg:order-1'
      >
        <img src={hi} alt='foto' className='mt-3' />

        <div className='text-xl absolute top-1 left-5 translate-x-10 translate-y-10 px-10 sm:p-0'>
          Hi, I'm
        </div>

        <div
          className='text-5xl relative font-serif text-fuchsia-500'
          style={{marginTop: '-35px'}}
        >
          {' '}
          Vanessa Rios{' '}
        </div>

        <div className='text-xl my-8 text-white font-Sono '>
          <Typewriter
            options={{
              strings: [
                'Full Stack Developer',
                'Front end Developer',
                'Back end Developer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className='font-serif text-xl font-normal py-2'>
          I consider myself a curious person, I like to learn new things to
          improve my technical and professional skills, always focusing on
          responsibility and perseverance
        </div>

        <div className='flex my-20 items-center'>
          <button className={style.btn}>
            <span>
              <a
                className={style.btn}
                href='https://drive.google.com/file/d/1Rzc5c49ye_9PL3mZ01QxW3a7gpyS-Ri0/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                Download CV
              </a>
            </span>
          </button>
          <div className='flex justify-center text-4xl space-x-4 m-6'>
            <p>
              <a
                href='https://github.com/VanessaRiosm'
                target='_blank'
                rel='noreferrer'
              >
                <BsGithub
                  className='cursor-pointer hover:scale-110'
                  color={'white'}
                  size={'45px'}
                />
              </a>
            </p>

            <p>
              <a
                href='https://www.linkedin.com/in/vanessa-rios-munoz/'
                target='_blank'
                rel='noreferrer'
              >
                <BsLinkedin
                  className='cursor-pointer hover:scale-110'
                  color={'white'}
                  size={'45px'}
                />
              </a>
            </p>

            <p>
              <a
                href='https://twitter.com/varimu14'
                target='_blank'
                rel='noreferrer'
              >
                <BsTwitter
                  className='cursor-pointer hover:scale-110'
                  color={'white'}
                  size={'45px'}
                />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div
        className='flex justify-center order-1 lg:order-2'
        data-aos='fade-left'
        data-aos-duration='1000'
      >
        <img
          src={pic}
          alt='foto'
          className='rounded-full w-72 md:w-80 lg:w-96 border-4 border-dashed border-fuchsia-500'
        />
      </div>
    </div>
  )
}

export default About

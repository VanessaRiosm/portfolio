import React from 'react'
import style from "../Styles/Footer.module.css"
import {BsGithub, BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'


export const Footer = () => {
  return (

    <div className={style.foter}>
    <svg className="absolute" viewBox="0 -20 700 110" width="100%" height="200" preserveAspectRatio="none">
      <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#764BC4" />
      <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="rgb(7, 0, 8)" />
    </svg>


  <div className="relative flex justify-center mt-28 text-4xl space-x-5 m-6 text-white">

            <p >
                <a href='https://github.com/VanessaRiosm' target="_blank" rel='noreferrer'>
                  <BsGithub className="cursor-pointer hover:scale-110" color={"white"} size={"35px"}/>
                </a>
              </p>

              <p>
                <a href='https://www.linkedin.com/in/vanessa-rios-munoz/' target="_blank" rel='noreferrer'>
                  <BsLinkedin className="cursor-pointer hover:scale-110" color={"white"} size={"35px"} />
                </a>
              </p>

              <p>
                <a href='https://twitter.com/varimu14' target="_blank" rel='noreferrer'>
                  <BsTwitter className="cursor-pointer hover:scale-110" color={"white"} size={"35px"} />
                </a>
              </p>

              <p>
                <a href='https://www.instagram.com/vane_rios.14/' target="_blank" rel='noreferrer'>
                  <BsInstagram className="cursor-pointer hover:scale-110" color={"white"} size={"35px"} />
                </a>
              </p>

         
          </div>
    </div>
  )
}

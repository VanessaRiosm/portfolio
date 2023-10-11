import React, {useEffect} from 'react'
import rick from '../Assets/rick.PNG'
import countries from '../Assets/countriesApp.PNG'
import portfolio from '../Assets/capportfolio.png'
import shope from '../Assets/shope.PNG'
import talkap from '../Assets/CapTalk.PNG'
import AOS from 'aos'
import 'aos/dist/aos.css'

// modificar datos incorrectos
const project = [
  {
    name: 'Shope',
    image: shope,
    techs: [
      'Typescript',
      'React',
      'Vite',
      'Material UI',
      'Redux Toolkit',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Stripe',
    ],
    description:
      'Web page with user authentication, shopping cart, purchasing process, product search and administration panel to manage information. ',
    link: 'https://shope-five.vercel.app/',
  },
  {
    name: 'Portfolio',
    image: portfolio,
    techs: [
      'Javascript',
      'React',
      'Tailwind',
      'Formik',
      'EmailJs',
      'Framer Motion',
    ],
    description: 'My personal portfolio as a developer.',
    link: 'https://portfolio-67iu.vercel.app/',
  },
  {
    name: 'Talkap',
    image: talkap,
    techs: [
      'React',
      'Redux',
      'Node.js',
      'Sequelize',
      'Chakra UI',
      'PostgreSQL',
      'Socket io',
      'auth0',
    ],
    description:
      ' Web page of an instant messaging application, allows you to add friends, block chats, rate profiles, and filter by name.',
    link: 'https://client-deploy-wild-design.vercel.app/',
  },
  {
    name: 'Countries App',
    image: countries,
    techs: ['React', 'Redux', 'Node.js', 'Sequelize', 'Express', 'PostgreSQL'],
    description:
      'Web page to find information about the countries where you can filter, search and add information to them.',
    link: 'https://countries-app-two-delta.vercel.app/',
  },
  {
    name: 'Rick and Morty',
    image: rick,
    techs: ['Javascript', 'React', 'Redux'],
    description:
      'Web page to find information about the characters of Rick and Morty where you can filter, search and add to favorites.',
    link: 'https://rick-y-morty-rouge.vercel.app/',
  },
]

export const Projects = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div
      id='projects'
      className='grid gap-6 justify-items-center mt-28 pt-10 pb-10'
    >
      <h2
        data-aos='fade-down'
        data-aos-duration='1000'
        className='mb-10'
        style={{
          textAlign: 'left',
          fontFamily: 'Arial',
          fontSize: '70px',
          color: '#D946EF',
          textShadow: '0px 0px 5px #ffffff',
        }}
      >
        Projects
      </h2>

      <div className='gap-10 flex flex-wrap max-w-5xl justify-center'>
        {project.map((p) => {
          return (
            <div
              data-aos='fade-right'
              data-aos-duration='1000'
              key={p.name}
              className='max-w-xs rounded-lg shadow hover:scale-110 lg:max-w-sm'
              style={{backgroundColor: 'rgba(255, 253, 253, 0.218)'}}
            >
              <a href={p.link} target='_blank' rel='noreferrer'>
                <img
                  className='rounded-t-lg max-w-xs lg:max-w-sm'
                  src={p.image}
                  alt={p.name}
                />
              </a>

              <div className='p-5'>
                <a href={p.link} target='_blank' rel='noreferrer'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                    {p.name}
                  </h5>
                </a>
                <p className='mb-3 font-normal text-white'>{p.description}</p>
                <div className='flex gap-2 my-5 flex-wrap'>
                  {p.techs.map((t) => (
                    <button
                      key={t}
                      className='bg-great-blue-400 p-1 rounded-lg text-fuchsia-200 text-sm'
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <button
                  type='button'
                  className='text-white bg-gradient-to-r from-purple-400 to-fuchsia-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                >
                  <a href={p.link} target='_blank' rel='noreferrer'>
                    See more
                  </a>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

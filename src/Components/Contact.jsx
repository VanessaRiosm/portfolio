import React, {useEffect} from 'react'
import il from '../assets/segiL.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useFormik} from 'formik'
import {useRef} from 'react'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Contact = () => {
  const data = useRef()
  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_mkqcxoi',
        'template_bc7928i',
        data.current,
        'Kmu5taxx0FwDIdYRk'
      )
      .then(
        (result) => {
          successNotify()
        },
        (error) => {
          errorNotify()
        }
      )
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    onSubmit: (values, {resetForm}) => {
      sendEmail()
      resetForm()
    },

    validationSchema: Yup.object({
      name: Yup.string().required('The name field is required'),
      email: Yup.string()
        .required('The Email field is required')
        .email('Not a valid e-mail address'),
      message: Yup.string().required('The message field is required'),
    }),
  })

  const successNotify = () => {
    toast.success('The message was sent successfully', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      theme: 'light',
    })
  }

  const errorNotify = () => {
    toast.error('The message could not be sent, please try again', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      theme: 'light',
    })
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className=' p-7 mt-32 grid justify-around items-center lg:flex'>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        id='contact'
        className='grid justify-items-center mb-10'
      >
        <h2
          className='text-5xl sm:text-7xl'
          style={{
            textAlign: 'left',
            fontFamily: 'Arial',
            color: '#D946EF',
            textShadow: '0px 0px 5px #ffffff',
          }}
        >
          Contact me
        </h2>

        <img src={il} alt='email' className=' w-96' />
      </div>

      <div
        data-aos='fade-left'
        data-aos-duration='1000'
        className='w-full max-w-lg p-7 justify-center mb-10'
      >
        <form ref={data} onSubmit={formik.handleSubmit}>
          <div className='mb-6'>
            <label
              htmlFor='name'
              className='block mb-2 font-medium text-white text-lg'
            >
              {' '}
              Name{' '}
            </label>
            <input
              type='text'
              name='name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span className='text-xs font-bold text-red-500 flex justify-end'>
              {formik.touched.name && formik.errors.name}
            </span>
          </div>

          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 font-medium text-white text-lg'
            >
              Email
            </label>
            <input
              name='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='name@gmail.com'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span className='text-xs font-bold text-red-500 flex justify-end'>
              {formik.touched.email && formik.errors.email}
            </span>
          </div>

          <div className='mb-6'>
            <label
              htmlFor='message'
              className='block mb-2  font-medium text-white text-lg'
            >
              Message
            </label>
            <textarea
              type='text'
              name='message'
              className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500'
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span className='text-xs font-bold text-red-500 flex justify-end'>
              {formik.touched.message && formik.errors.message}
            </span>
          </div>

          <button
            type='submit'
            className='text-white bg-gradient-to-r from-purple-400 to-fuchsia-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          >
            {' '}
            Submit{' '}
          </button>
        </form>
      </div>
    </div>
  )
}

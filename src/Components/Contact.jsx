import React, { useEffect } from 'react'
import il from '../Assets/segiL.webp'
import AOS from 'aos'
import 'aos/dist/aos.css';


export const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
  
    <div className=" p-7 mt-32 grid justify-around items-center lg:flex">

    <div data-aos="fade-right" data-aos-duration="2000" id="contact" className="grid justify-items-center mb-10">


      <h2 className="text-5xl sm:text-7xl" style={{textAlign: "left", fontFamily: "Arial", color: "#D946EF", textShadow: "0px 0px 5px #ffffff"}}>Contact me</h2>

      <img src={il} alt="email" className=" w-96" />

    </div>

    <div data-aos="fade-left" data-aos-duration="2000" className="w-full max-w-lg p-7 justify-center mb-10">
     <form>
          <div class="mb-6">
          <label for="password" class="block mb-2 font-medium text-white text-lg"> Name </label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        
        <div class="mb-6">
          <label for="email" class="block mb-2  font-medium text-white text-lg">Email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required/>
        </div>

        
        <div class="mb-6">
          <label for="large-input" class="block mb-2  font-medium text-white text-lg">Message</label>
          <textarea type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
        
      <button class="text-white bg-gradient-to-r from-purple-400 to-fuchsia-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Submit </button>
      </form>
    </div>
      

    </div>
  

  )
}

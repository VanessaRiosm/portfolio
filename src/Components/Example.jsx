import { useFormik } from "formik"
import { useRef } from 'react';
import { motion } from "framer-motion";
import * as Yup from 'yup';
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({dark}) =>{

  const shadow = dark==="true" ? "0px 5px 25px rgba(0, 0, 0, 50)" : "0px 5px 25px rgba(0, 0, 0, 0.5)"
  const data = useRef();

  const sendEmail = ()=> {

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, 'template_wnrxi2g', data.current, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
        successNotify()
    }, (error) => {
        errorNotify()
    });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },

    onSubmit: (values, {resetForm})=>{
      sendEmail()
      resetForm()
    },

    validationSchema : Yup.object({
      name: Yup.string().required("Nombre requerido").max(),
      email: Yup.string().required("Email requerido").email("Email no valido"),
      message: Yup.string().required("Mensaje requerido")
    })
  })  

  const successNotify = () =>{
    toast.success('Mensaje Enviado Exitosamente', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      theme:"dark",
    })
  }

  const errorNotify = () =>{
    toast.error('No se ha podido enviar el mensaje. ¡Inténtalo nuevamente!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      theme:"dark",
    });
  }

  return(
    <div className="w-full max-w-lg p-7 justify-center mb-10">
      <form ref={data} onSubmit={formik.handleSubmit}>
        
        <label className="block mb-2 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Nombre</label>
        <input type="text" name="name" placeholder="Nombre" className="shadow border border-gray-300 rounded-lg bg-gray-100 w-full max-w-lg h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 dark:bg-transparent dark:text-white" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <span className="text-xs font-bold text-red-700 flex justify-end dark:text-red-400">{formik.touched.name && formik.errors.name}</span>

        <label className="block mb-2 mt-6 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Email</label>
        <input type="text" name="email" placeholder="Email" className="shadow border border-gray-300 rounded-lg bg-gray-100 w-full max-w-lg h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 dark:bg-transparent dark:text-white" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <span  className="text-xs font-bold text-red-700 flex justify-end dark:text-red-400">{formik.touched.email && formik.errors.email}</span>

        <label className="block mt-6 mb-2 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Mensaje</label>
        <textarea name="message" className="block p-2 py-2 px-3 w-full max-w-lg h-28 text-md text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:outline-blue-300 dark:bg-transparent dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 dark:focus:border-transparent" placeholder="Tu message..."value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} ></textarea>
        <span  className="text-xs font-bold text-red-700 flex justify-end dark:text-red-400">{formik.touched.message && formik.errors.message}</span>

        <motion.button 
          whileHover={{ scale:1.2}}
          whileTap={{translateY:50}}
          animate={{
            boxShadow: shadow
          }}
          transition={{ ease: "easeOut", duration: 4 }}
          type="submit" className="border rounded-md text-lg mt-3 py-2 px-6 bg-cyan-800 text-white">Enviar
        </motion.button>
      </form>
    </div>
  )
}

export default Form
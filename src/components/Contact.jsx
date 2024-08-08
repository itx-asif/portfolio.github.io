// src/components/Contact.js
import  { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Lottie from 'lottie-react';
  import animationData from '../assets/contact.json'


const Contact = () => {


  // Create refs for form inputs
  const nameRef = useRef();
  const emailRef = useRef();
  const massageref = useRef();
  const numberref = useRef();
  const subjectref = useRef();

  useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init('iy8IM_qp1_OvXe623'); // Replace with your EmailJS user ID
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = 'service_wkt96oe'; // Replace with your EmailJS service ID
    const templateId = '1'; // Replace with your EmailJS template ID

    const sendEmail = async () => {
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        subject: subjectref.current.value,
        message: massageref.current.value,
        number:numberref.current.value
      });
    };

    toast.promise(
      sendEmail,
      {
        pending: 'Sending your email...',
        success: 'Email successfully sent!',
        error: 'Failed to send email. Please try again later.'
      }
    );
  };

  return (<>
    <section className=" py-12 px-4 sm:px-6 lg:px-20">
                  <div className="max-w-7xl mx-auto">
                    <h1 className='text-center font-extrabold text-5xl '>Get In Touch</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-8 pt-10">
                      
                 <Lottie animationData={animationData}/>
                      
                      <div className="bg-[#333] p-6 rounded-lg shadow-lg my-auto w-40% text-white">
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className='md:flex gap-4 w-full'>
      <div className='w-full mb-4 md:mb-0'>
      <label htmlFor="name" className="block text-sm font-medium">Name</label>
      <input type="text" id="name" ref={nameRef} className="mt-1 block w-full border px-2 py-1 border-gray-600 rounded-md shadow-sm  focus-visible:outline-[#3dd0b7] focus-visible:outline-[2px] focus-visible:outline-double sm:text-sm bg-[#444] text-gray-400"  placeholder="Full Name" required></input>
    </div>
    <div className='w-full'>
      <label htmlFor="email" className="block text-sm font-medium">Email</label>
      <input type="email" id="email" ref={emailRef} name="email" className="mt-1 block w-full px-2 py-1 border border-gray-600 rounded-md shadow-sm focus-visible:outline-[#3dd0b7] focus-visible:outline-[2px] focus-visible:outline-double sm:text-sm bg-[#444] text-gray-400" placeholder="Username@gmail.com" required></input>
    </div>
    </div>
    <div>
      <label htmlFor="number" className="block text-sm font-medium">phone Number <span className='text-gray-300 text-[.65rem]'>optional</span></label>
      <input type="text" id="mobile_code" ref={numberref} className="mt-1 block w-full px-2 py-1 border border-gray-600 rounded-md shadow-sm focus-visible:outline-[#3dd0b7] focus-visible:outline-[2px] focus-visible:outline-double sm:text-sm bg-[#444] text-gray-400" placeholder="+923012345678" name="number"></input>    
  </div>
  <div>
      <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
      <input id="subject" ref={subjectref} name="subject" rows="4" className="mt-1 block px-2 py-1 w-full border border-gray-600 rounded-md shadow-sm  focus-visible:outline-[#3dd0b7] focus-visible:outline-[2px] focus-visible:outline-double sm:text-sm bg-[#444] resize-none text-gray-400" placeholder="subject of mail" required></input>
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium">Message</label>
      <textarea id="message" ref={massageref} name="message" rows="4" className="mt-1 block px-2 py-1 w-full border border-gray-600 rounded-md shadow-sm  focus-visible:outline-[#3dd0b7] focus-visible:outline-[2px] focus-visible:outline-double sm:text-sm bg-[#444] resize-none text-gray-400" placeholder="Massage" required></textarea>
    </div>
    <div>
      <button className="w-full text-black font-semibold bg-[#3dd0b7] hover:bg-[#3dd0b7]/80 py-2 px-4 rounded-md shadow-sm transition duration-300 ease-in-out transform hover:scale-105" type="submit">
        Send Email
      </button>
    </div>
    
  </form>
</div>
                    </div>
                  </div>
                <ToastContainer/>
              
                </section>

                <footer className="flex justify-around py-8 items-center">
                  <div>
                  © 2023 Your Company. All rights reserved.
                  </div>
                  <div className="flex gap-4 text-3xl items-center">
                  <i className="fa-brands fa-linkedin hover:text-[#3dd0b7]"></i>
                  <i className="fa-brands fa-square-github hover:text-[#3dd0b7]"></i>
                  <i className="fa-brands fa-square-instagram hover:text-[#3dd0b7]"></i>
                  <i className="fa-brands fa-discord hover:text-[#3dd0b7]"></i>
                  </div>
                </footer>
 </>
  );
};

export default Contact;

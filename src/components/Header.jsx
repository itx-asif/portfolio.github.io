import { useEffect } from 'react';
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/js.png'
import React from '../assets/react.png'

import Cpp from '../assets/c++.png'
import Laravel from '../assets/laravel.png'
import Wordpress from '../assets/wordpress.png'
import PHP from '../assets/php.png'
import Img from '../assets/img.png'
import Skills from '../assets/skill.json'
import Lottie from 'lottie-react';
const Header = () => {
  useEffect(() => {
    const toggleHeaderClass = () => {
      const header = document.getElementById('header');
      const logo = document.getElementById('logo');
      const hero = document.getElementById('Hero');

      if (window.innerWidth > 1024) {
        const isScrolled = window.scrollY > header.offsetHeight - 10;

        header.classList.toggle('sticky-header', isScrolled);
        header.classList.toggle('active-header', !isScrolled);
        header.classList.toggle('py-2', isScrolled);
        header.classList.toggle('py-4', !isScrolled);

        logo.style.fill = isScrolled ? 'black' : 'white';
        hero.style.marginTop = isScrolled ? `-${header.offsetHeight}px` : '0px';
      } else {
        header.classList.remove('sticky-header', 'active-header', 'py-2', 'py-4');
        hero.style.marginTop = '0px';
        header.classList.add('active-header', 'py-4');
        logo.style.fill = 'white'; // Adjust if needed for smaller screens
      }
    };

    window.addEventListener('scroll', toggleHeaderClass);
    window.addEventListener('resize', toggleHeaderClass);
    toggleHeaderClass();
    // Call initially

    return () => {
      window.removeEventListener('scroll', toggleHeaderClass);
    };
  }, []);

  useEffect(() => {
    const width = () => {
      const heading = document.getElementById('hero-h').offsetWidth;
      document.getElementById('hero-p').style.width = `${heading}px`;
    };

    width();
    window.addEventListener('resize', width);

    return () => {
      window.removeEventListener('resize', width);
    };
  }, []);

  useEffect(() => {
    const timelineItems = document.querySelectorAll(".item");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, { threshold: 1 });

    timelineItems.forEach(item => {
      observer.observe(item);
    });
  }, []);

  const myFunction = (x) => {
    const menu = document.getElementById('menu');
    const button = document.getElementById('button');
    x.classList.toggle("change");
    menu.classList.toggle("animate-menu");
    menu.classList.toggle("mob-menu");
    button.classList.toggle("none");
  };

  return (
    <>
      
      <header id="header" className="shadow w-full z-10 px-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 z-2">
          <svg id="logo" className="transition-all md:w-[50px] w-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M 50 11.03125 L 48.375 13.84375 L 44.65625 20.3125 L 44.125 21.25 L 44.65625 22.1875 L 70.40625 66.78125 L 46.75 66.78125 L 45.65625 66.78125 L 45.125 67.71875 L 41.40625 74.21875 L 39.78125 77 L 43 77 L 84.875 77.03125 L 88.09375 77 L 86.46875 74.1875 L 51.625 13.84375 L 50 11.03125 z M 43.09375 23 L 41.46875 25.8125 L 6.625 86.1875 L 5 88.96875 L 8.25 88.96875 L 15.71875 88.96875 L 16.8125 88.96875 L 17.34375 88.03125 L 43.09375 43.4375 L 54.9375 63.90625 L 55.4375 64.84375 L 56.53125 64.84375 L 64 64.84375 L 67.25 64.84375 L 65.625 62.0625 L 44.71875 25.8125 L 43.09375 23 z M 42.96875 47.125 L 41.375 49.9375 L 20.4375 86.15625 L 18.8125 88.96875 L 22.0625 88.96875 L 91.78125 88.96875 L 95 88.96875 L 93.375 86.15625 L 89.65625 79.6875 L 89.09375 78.75 L 88.03125 78.75 L 36.53125 78.75 L 48.34375 58.28125 L 48.875 57.34375 L 48.34375 56.40625 L 44.59375 49.9375 L 42.96875 47.125 z" />
          </svg>
          <h1 className="font-bold text-xl md:text-3xl">Asif</h1>
        </div>
        <div>
          <ul id="menu" className="lg:flex lg:static right-0 absolute font-semibold items-center text-xl">
            <li className="px-2 py-1 mx-2"><a href="#">Home</a></li>
            <li className="px-2 py-1 mx-2"><a href="#">About</a></li>
            <li className="px-2 py-1 mx-2"><a href="#">Skill</a></li>
            <li className="px-2 py-1 mx-2"><a href="#">Project</a></li>
           
          </ul>
        </div>
        <div className="flex gap-4 w-max">
          <a id="button" href="#" className="sm:text-md text-sm block rounded-lg w-fit text-nowrap bu px-4 py-2 transition-all font-semibold">Get In Touch</a>
          <div className="container lg:hidden block" onClick={(e) => myFunction(e.currentTarget)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </header>

      <div id="Hero" className="h-[642px] pt-20 z-2 w-100% md:px-12 px-8 flex justify-center flex-col">
        <div className="w-fit md:ml-[2vw]">
          <h1 className="md:text-7xl sm:text-6xl fadeinleft text-4xl w-fit font-semibold text-[#3dd0b7] md:leading-[80px]">Front-End</h1>
          <h1 id="hero-h" className="md:text-6xl fadeinleft sm:text-5xl text-3xl w-fit font-semibold text-white md:pl-[4em] pl-[3em] md:leading-[80px]">Developer</h1>
          <p id="hero-p" className="text-white max-w-[685px] text-right">Turning your vision into vibrant web experiences with expert design and clean, efficient code.</p>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center  rounded-lg lg:p-24 px-4 py-6 shadow-md">
        <div className="mb-6 w-fit lg:mb-0 md:mr-6">
          <img src={Img} alt="Profile Picture" />
        </div>
        <div className="flex-1 roboto">
          <h1 className="text-4xl font-extrabold mb-2">Asif Raza</h1>
          <p className="mb-4 text-lg italic">Frontend Developer & TailwindCSS Enthusiast</p>
          <p className="mb-4">Hello! I`m Asif, a passionate frontend developer with a knack for creating beautiful and functional web interfaces. With a strong background in HTML, CSS, and JavaScript, I specialize in using TailwindCSS to build responsive and accessible web applications.</p>
          <p className="mb-4">In my free time, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge through blogging and speaking at tech conferences. When I`m not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.</p>
        </div>
      </div>
      <div className='w-dvh border-b-2 border-gray-200 opacity-5'></div>
      <div className="lg:px-8 px-8 py-6 ">
      <h1 className="text-6xl font-bold mb-4  text-center pb-10">Tech Stack</h1>
        <div className='flex gap-12 text-justify mb-6'>
          <div id='skill-text' className='lg:px-20 lg:py-6 p-4 lg:w-3/4'>
          
          As a student , I am actively expanding my skills with technologies and frameworks such as HTML, CSS, JavaScript, and other programing languages. Over the past, I have developed a solid foundation in web development  and am committed to continually enhancing my expertise. I am eager to apply my growing knowledge to new projects and opportunities as I advance in my learning journey.          
          </div>
       
            
       <Lottie
       animationData={Skills} className=' lg:w-1/4 AN lg:block hidden border-2 border-[#3dd0b7]' />
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-6 gap-y-4">
          
        <div className="hover:bg-[#3dd0b7] md:px-4 px-2 py-2 shadow-xl flex gap-2 items-center transition-transform transform hover:scale-105  border border-gray-200">
        <img src={Html} alt="" className='w-[15%] md:w-[15%] '  />
  <h2 className="md:text-xl  font-semibold text-white">HTML</h2>

  </div>
<div className="hover:bg-[#3dd0b7] md:px-4 px-2 py-2 shadow-xl flex gap-2 items-center transition-transform transform hover:scale-105  border border-gray-200">
  
   <img src={Css} alt="" className='' width='15%' />
   <h2 className="md:text-xl  font-semibold text-white ">CSS</h2>
  </div>
  <div className="hover:bg-[#3dd0b7] md:px-4 px-2 py-2 shadow-xl flex gap-2 items-center transition-transform transform hover:scale-105  border border-gray-200">
  <img src={Js} alt="" className='' width='15%' />
  <h2 className="md:text-xl  font-semibold text-white">Javascript</h2>
  </div>
  <div className="hover:bg-[#3dd0b7] md:px-4 px-2 py-2 shadow-xl flex gap-2 items-center transition-transform transform hover:scale-105  border border-gray-200">
  <img src={React} alt="" className='' width='15%' />
  <h2 className="md:text-xl  font-semibold text-white">React</h2>
  </div>
  <div className="hover:bg-[#3dd0b7] md:px-4 px-2 py-2 shadow-xl flex gap-2 items-center transition-transform transform hover:scale-105  border border-gray-200">
  <img src={PHP} alt="" className='' width='15%' />
  <h2 className="md:text-xl  font-semibold text-white">PHP</h2>
  </div>
  <div className="hover:bg-[#3dd0b7] md:px-4 px-2 py-2 shadow-xl flex gap-2 items-center transition-transform transform hover:scale-105  border border-gray-200">
  <img src={Laravel} alt="" className='' width='15%' />
  <h2 className="md:text-xl  font-semibold text-white">Laravel</h2>
  </div>
  <div className="hover:bg-[#3dd0b7] md:px-4 px-2 py-2 shadow-xl flex gap-2 items-center transition-transform transform hover:scale-105  border border-gray-200">
  <img src={Cpp} alt="" className='' width='15%' />
  <h2 className="md:text-xl  font-semibold text-white">C++
  
  </h2>
  </div>
  <div className="hover:bg-[#3dd0b7] md:px-4 px-2 py-2 shadow-xl flex gap-2 items-center transition-transform transform hover:scale-105  border border-gray-200">
  <img src={Wordpress} alt="" className='' width='15%' />
  <h2 className="md:text-xl  font-semibold text-white">Wordpress</h2>


  </div>
  </div>
      </div>

    </>
  );
};

export default Header;

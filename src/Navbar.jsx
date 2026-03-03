import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    }else{ 
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode])


  return (
    <header className=" flex flex-wrap justify-between items-center h-auto md:h-[4em] w-full sticky top-0 left-0 right-0 z-10 rounded-b-2xl shadow-lg bg-gradient-to-r from-green-400 to-blue-500 px-3 dark:bg-green-200">
      <div className="flex items-center ml-5 space-x-2 font-mono text-sm md:text-lg text-slate-400 dark:text-slate-300 hover:text-sky-700">
        <img className="mt-2 h-7 w-7 md:h-9 md:w-9" src="https://cdn.dribbble.com/userupload/43346116/file/original-8f140c0ebaf9d7ffcb9f007b517b3a40.jpg?format=webp&resize=400x300&vertical=center"  alt="Logo" />
        <a href="#" className=" hover:text-gray-300" >  Nova-Web</a></div>
      <div className="font-mono text-sm md:text-lg cursor-pointer dark:text-slate-300 hover:text-sky-700"><NavLink to="/">Home</NavLink></div>
      <div className="font-mono text-sm md:text-lg cursor-pointer dark:text-slate-300 hover:text-sky-700"><NavLink to="/services">Services</NavLink></div>
      <div className="font-mono text-sm md:text-lg cursor-pointer dark:text-slate-300 hover:text-sky-700"><NavLink to="/about">About</NavLink></div>
      <div className="font-mono text-sm md:text-lg cursor-pointer dark:text-slate-300 hover:text-sky-700"><NavLink to="/contact">Contact</NavLink></div>
      <div className="font-mono text-sm md:text-lg cursor-pointer dark:text-slate-300 hover:text-sky-700">FAQ</div>
      <button className="px-2 py-1 md:px-4 md:py-2 text-green-900 bg-white rounded-md cursor-pointer hover:bg-green-800 hover:text-white">Get Started</button>
      <button className="p-2 rounded-full cursor-pointer bg-slate-200 dark:bg-slate-700 hover:bg-sky-700"
      onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? (<img src="src/IMAGES/light mode.png"
          alt="Toggle Theme"          className="w-6 h-6 rounded-full "
      
      />) : (<img src="/src/IMAGES/dark mode.png"
          alt="Toggle Theme"          className="w-6 h-6 rounded-full"
        />)}
        
        
      </button>
      
      
    </header>
    
    
  )
}
export default Navbar;
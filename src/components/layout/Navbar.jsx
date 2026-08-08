import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import { navLinks } from "../../data/navLinks";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes, } from "react-icons/fa";


const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [])

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        isScrolled
      ? "bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800"
      : "bg-slate-900/70"
      }
      `} >
      <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
        <div>
          <h1 className="text-2xl font-bold text-white transition-all duration-300 hover:scale-105">
              Nova<span className="text-cyan-400">Web</span>
        
          </h1>
          <p className="text-xs tracking-widest uppercase text-slate-400">Digital Agency</p>
        </div>
        
        


        <div className="items-center hidden gap-8 md:flex">
        {navLinks.map((link) => (
            <div key={link.id} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                `text-sm md:text-lg font-medium transition-colors duration-300 ${
                    isActive
          ? "text-cyan-400"
          : "text-slate-300 hover:text-cyan-400"
      }`
    }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-2
                        h-0.5
                        bg-cyan-400
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    ></span>
                  </>
                )}
              </NavLink>
                        </div>
          
        ))}

      </div>


      <button className="relative items-center hidden gap-2 px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 rounded-full bg-cyan-500 hover:bg-cyan-600 hover:-translate-y-1 hover:shadow-xl md:flex">Get Free Quote
        <FaArrowRight />
      </button>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-2xl text-white transition-transform duration-300 md:hidden hover-110"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

        </div>
        
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100 border-t border-slate-800" : "max-h-0 opacity-0"
          }`}>
            <div className="flex flex-col px-6 py-6 space-y-5">

              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `text-lg font-medium transition-colors duration-300 ${
                    isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {link.name}

                </NavLink>
              ))}
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 mt-4 font-semibold text-white transition-all duration-300 rounded-full bg-cyan-500 hover:bg-cyan-600"
              > Get Free Quote 
              <FaArrowRight />

              </button>

            </div>

          </div>
        
      
    </header>
    
    
  )
}
export default Navbar;
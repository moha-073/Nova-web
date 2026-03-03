import React from "react";
import {Routes, Route} from "react-router-dom";
import ReactDom from "react-dom/client";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import { Services } from "./Services.jsx";
import { About } from "./about.jsx";
import { Testimonials } from "./Testimonials.jsx";
import { Contact } from "./contact.jsx";
import { Footer } from "./footer.jsx";
import "./App.css"


const App = () => {
return (

  <>
    <Navbar />
    <Routes>
      <Route 
      path="/"
      element={
        <>
          <Home />
          <Services />
          <Testimonials />
          <About />
          <Contact />
          <Footer />
        </>
      }
      />
      <Route
        path="/services"
        element={
        <>
        <Services />
        <Testimonials />
        <Footer />
        </>
          
        
      }
      />
      <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
            <About />
            <Footer />
            </>
          }
        />
    </Routes>
    
  </>
)}

export default App;
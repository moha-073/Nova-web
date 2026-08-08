import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services";
import "./App.css";
import Footer from "./components/layout/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";



const App = () => {
return (

  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
  </>
)}

export default App;
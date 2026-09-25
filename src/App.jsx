import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services";
import "./App.css";
import Footer from "./components/layout/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";
import Projects from "./pages/Projects.jsx";



const App = () => {
return (

  <>
  <ScrollToTop />
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
  </>
)}

export default App;

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./App.css";
import AOS from"aos";
import "aos/dist/aos.css";

AOS.init({
  duration:800,
  once: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider> {/*Helps in SEO*/}
  </BrowserRouter>
);
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-cyan-600 via-sky-600 to-indigo-700">
      <div className="absolute rounded-full -left-24 top-10 h-72 w-72 bg-white/10 blur-3xl" />
      <div className="absolute rounded-full -right-24 bottom-10 h-72 w-72 bg-cyan-300/10 blur-3xl" />
      <div className="relative max-w-4xl px-6 mx-auto text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-cyan-100">
          Let's Work Together
        </p>
        
        <h2 className="mt-6 text-4xl font-extrabold text-white md:text-6xl">
          Have a Project in Mind?
        </h2>
        
        <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-cyan-100">
          Let's turn your ideas into a modern, professional website that helps your business grow online.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
          <Link 
            to="/contact"
            className="flex items-center gap-2 px-8 py-4 font-semibold transition duration-300 bg-white group rounded-xl text-slate-900 hover:-translate-y-1 hover:bg-slate-100"
          >
            Start Your Project 
            <ArrowRight
              size={20}
               className="transition-transform duration-300 group-hover:translate-x-1"
          />
          </Link>
          
          <Link
            to="/services"
            className="px-8 py-4 font-semibold text-white transition duration-300 border border-white rounded-xl hover:bg-white hover:text-slate-900"
          >
            View Services 
          
          </Link>
          
        </div>
        
      </div>

    </section>
  )
}
export default ContactCTA;